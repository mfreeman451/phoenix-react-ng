defmodule Phoenix.ReactServer.Runtime.Deno do
  @moduledoc """
  Deno runtime for Phoenix.ReactServer server.

  This runtime uses Deno as the JavaScript runtime for rendering React components.
  Deno provides secure defaults, TypeScript support, and excellent performance.

  ## Configuration

  Configure in `runtime.exs`:

  ```elixir
  import Config

  config :phoenix_react_server, Phoenix.ReactServer.Runtime.Deno,
    cd: File.cwd!(),
    cmd: System.find_executable("deno"),
    # In dev mode, the server_js will be watched and recompiled when changed
    # In prod mode, this needs to be precompiled with `mix phx.react.deno.bundle`
    server_js: Path.expand("deno/server.js", :code.priv_dir(:phoenix_react_server)),
    port: 5226,
    env: :dev,
    # Security: restrict write access to specific directories
    write_dirs: ["/tmp", "/var/tmp"]
  ```

  ## Configuration Options

  - `:cd` - Working directory for the Deno process (default: current directory)
  - `:cmd` - Path to Deno executable (default: system `deno` command)
  - `:server_js` - Path to the bundled server JavaScript file
  - `:port` - Port for the Deno HTTP server (default: 5226)
  - `:env` - Environment mode (`:dev` or `:prod`, default: `:dev`)
  - `:write_dirs` - List of directories Deno can write to (security feature)
  - `:parent_check_interval` - Interval to check parent process health (default: 5000ms)

  ## Security Features

  Deno runtime provides enhanced security:
  - Restricted file system access via `write_dirs`
  - Automatic parent process monitoring
  - Sandboxed execution environment

  ## Component Requirements

  Components for Deno runtime must:
  - Use `.jsx` file extension for proper JSX parsing
  - Export a `Component` function
  - Be compatible with Deno's module system

  ## Development Mode

  In development mode (`env: :dev`), the runtime will:
  - Start a file watcher for component changes
  - Automatically rebuild the server bundle when components change
  - Enable hot reloading for React components

  ## Production Mode

  In production mode (`env: :prod`), you must pre-bundle the components:

  ```bash
  mix phx.react.deno.bundle --component-base=assets/component --output=priv/react/server.js
  ```
  """
  require Logger

  use Phoenix.ReactServer.Runtime
  import Phoenix.ReactServer.Runtime.Common

  alias Mix.Tasks.Phx.React.Deno.Bundle, as: DenoBundle
  alias Phoenix.ReactServer.Config
  alias Phoenix.ReactServer.Runtime
  alias Phoenix.ReactServer.Runtime.FileWatcher
  alias Phoenix.ReactServer.Server
  alias Phoenix.ReactServer.Telemetry

  @doc """
  Starts the Deno runtime server.

  ## Parameters

  - `init_arg` - Initialization arguments (typically `[]`)

  ## Returns

  - `{:ok, pid}` - Runtime started successfully
  - `{:error, reason}` - Failed to start runtime
  """
  @spec start_link(term()) :: GenServer.on_start()
  def start_link(init_arg) do
    GenServer.start_link(__MODULE__, init_arg, name: __MODULE__)
  end

  @impl true
  @spec init(keyword()) ::
          {:ok, Phoenix.ReactServer.Runtime.t(), {:continue, :start_port}}
  def init(component_base: component_base, render_timeout: render_timeout) do
    {:ok,
     %Phoenix.ReactServer.Runtime{
       component_base: component_base,
       render_timeout: render_timeout,
       server_js: config()[:server_js],
       cd: config()[:cd]
     }, {:continue, :start_port}}
  end

  @impl true
  @spec handle_continue(:start_port, Phoenix.ReactServer.Runtime.t()) ::
          {:noreply, Phoenix.ReactServer.Runtime.t()}
  def handle_continue(
        :start_port,
        %Phoenix.ReactServer.Runtime{component_base: component_base} = state
      ) do
    if config()[:env] == :dev do
      start_file_watcher(component_base)
      FileWatcher.set_ref(self())
    end

    port = start(component_base: component_base)

    Logger.debug(
      "Deno.Server started on port: #{inspect(port)} and OS pid: #{get_port_os_pid(port)}"
    )

    Telemetry.record_runtime_startup("Deno", config()[:port])

    Server.set_runtime_process(self())

    {:noreply, %Runtime{state | runtime_port: port}}
  end

  @impl true
  def config do
    user_config = Application.get_env(:phoenix_react_server, Phoenix.ReactServer.Runtime.Deno, [])

    # Convert user config to map for new config system
    user_config_map =
      user_config
      |> Enum.into(%{})
      |> Map.put(:cd, Keyword.get(user_config, :cd, File.cwd!()))
      |> Map.put(:cmd, Keyword.get(user_config, :cmd, System.find_executable("deno")))
      |> Map.put(
        :server_js,
        Keyword.get(
          user_config,
          :server_js,
          Path.expand("deno/server.js", :code.priv_dir(:phoenix_react_server))
        )
      )

    case Config.runtime_config(:deno, user_config_map) do
      {:ok, config} -> Config.to_keyword_list(config)
      {:error, reason} -> raise ArgumentError, reason
    end
  end

  @impl true
  @spec start(Phoenix.ReactServer.Runtime.start_args()) :: port()
  def start(component_base: _component_base) do
    config = config()
    cmd = config[:cmd]
    server_js = config[:server_js]
    deno_port = Integer.to_string(config[:port])

    is_dev = config[:env] == :dev
    deno_env = if(is_dev, do: "development", else: "production")

    # In development, use the source file with deno run
    # In production, use the compiled binary directly
    {exec_cmd, args} =
      if is_dev do
        # Use source file in development
        source_js = Path.join(Path.dirname(server_js), "server_source.js")

        # Security: restrict write access to specific directories
        write_dirs = config[:write_dirs] || ["/tmp", "/var/tmp"]
        write_args = Enum.flat_map(write_dirs, &["--allow-write=#{&1}"])

        args =
          [
            "run",
            "--allow-net",
            "--allow-read",
            "--allow-env"
          ] ++
            write_args ++
            [
              "--watch",
              "--node-modules-dir"
            ]

        {cmd, args ++ [source_js]}
      else
        # In production, server_js is the compiled binary
        {server_js, []}
      end

    env =
      runtime_env("DENO_PORT", deno_port, "DENO_ENV", deno_env) ++
        [{~c"PARENT_CHECK_INTERVAL", ~c"#{config[:parent_check_interval] || 5000}"}]

    Port.open(
      {:spawn_executable, exec_cmd},
      port_options(exec_cmd, args, cd: config[:cd], env: env)
    )
  end

  @impl true
  def start_file_watcher(component_base) do
    Logger.debug("Building server.js bundle")

    config = config()
    source_js = Path.join(Path.dirname(config[:server_js]), "server_source.js")

    bundle_args = [
      "--component-base",
      component_base,
      "--output",
      source_js,
      "--cd",
      config[:cd]
    ]

    DenoBundle.run(bundle_args)

    Logger.debug("Starting file watcher")
    Runtime.start_file_watcher(ref: self(), path: component_base)
  end

  @impl true
  def handle_info({:component_base_changed, path}, state) do
    source_js = Path.join(Path.dirname(state.server_js), "server_source.js")

    bundle_args = [
      "--component-base",
      state.component_base,
      "--output",
      source_js,
      "--cd",
      state.cd
    ]

    handle_file_change(path, DenoBundle, bundle_args)
    {:noreply, state}
  end

  @impl true
  def handle_info({_ref, :ok}, state) do
    {:noreply, state}
  end

  @impl true
  def handle_info({_port, {:data, msg}}, state) do
    Logger.debug(msg)
    {:noreply, state}
  end

  @impl true
  def handle_info({port, {:exit_status, exit_status}}, state) do
    Logger.warning("Deno#{inspect(port)}: exit_status: #{exit_status}")
    Process.exit(self(), :normal)
    {:noreply, state}
  end

  @impl true
  def handle_info({:EXIT, _from, reason}, state) do
    Logger.debug("Deno.Server exiting")
    cleanup_runtime_process(state.runtime_port, reason)
    {:stop, reason, state}
  end

  @impl true
  def get_rendered_component(method, component, props, state)
      when method in [:render_to_readable_stream, :render_to_string, :render_to_static_markup] do
    server_port = config()[:port]
    timeout = state.render_timeout

    Telemetry.measure(
      "render_#{method}_#{component}",
      [:phoenix, :react, :render],
      fn ->
        result = make_http_request(server_port, Atom.to_string(method), component, props, timeout)

        # Record the result for telemetry
        case result do
          {:ok, _} -> Telemetry.record_render(component, method, 0, :ok)
          {:error, _} -> Telemetry.record_render(component, method, 0, :error)
        end

        result
      end
    )
  end

  @impl true
  @spec terminate(term(), Phoenix.ReactServer.Runtime.t()) ::
          :normal | :shutdown | {:shutdown, term()}
  def terminate(reason, state) do
    Logger.debug("Deno.Server terminating")
    Telemetry.record_runtime_shutdown("Deno", reason)
    cleanup_runtime_process(state.runtime_port, reason)
  end
end
