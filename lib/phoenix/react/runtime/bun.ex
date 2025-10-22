defmodule Phoenix.React.Runtime.Bun do
  @moduledoc """
  Bun runtime for Phoenix.React server.

  This runtime uses Bun as the JavaScript runtime for rendering React components.
  Bun provides fast startup times and excellent performance for server-side rendering.

  ## Configuration

  Configure in `runtime.exs`:

  ```elixir
  import Config

  config :phoenix_react_server, Phoenix.React.Runtime.Bun,
    cd: File.cwd!(),
    cmd: System.find_executable("bun"),
    # In dev mode, the server_js will be watched and recompiled when changed
    # In prod mode, this needs to be precompiled with `mix phx.react.bun.bundle`
    server_js: Path.expand("bun/server.js", :code.priv_dir(:phoenix_react_server)),
    port: 5225,
    env: :dev
  ```

  ## Configuration Options

  - `:cd` - Working directory for the Bun process (default: current directory)
  - `:cmd` - Path to Bun executable (default: system `bun` command)
  - `:server_js` - Path to the bundled server JavaScript file
  - `:port` - Port for the Bun HTTP server (default: 5225)
  - `:env` - Environment mode (`:dev` or `:prod`, default: `:dev`)

  ## Development Mode

  In development mode (`env: :dev`), the runtime will:
  - Start a file watcher for component changes
  - Automatically rebuild the server bundle when components change
  - Enable hot reloading for React components

  ## Production Mode

  In production mode (`env: :prod`), you must pre-bundle the components:

  ```bash
  mix phx.react.bun.bundle --component-base=assets/component --output=priv/react/server.js
  ```
  """
  require Logger

  use Phoenix.React.Runtime
  import Phoenix.React.Runtime.Common

  @doc """
  Starts the Bun runtime server.

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
          {:ok, Phoenix.React.Runtime.t(), {:continue, :start_port}} | {:stop, term()}
  def init(component_base: component_base, render_timeout: render_timeout) do
    {:ok,
     %Phoenix.React.Runtime{
       component_base: component_base,
       render_timeout: render_timeout,
       server_js: config()[:server_js],
       cd: config()[:cd]
     }, {:continue, :start_port}}
  end

  @impl true
  @spec handle_continue(:start_port, Phoenix.React.Runtime.t()) ::
          {:noreply, Phoenix.React.Runtime.t()}
          | {:stop, reason :: term(), Phoenix.React.Runtime.t()}
  def handle_continue(:start_port, %Phoenix.React.Runtime{component_base: component_base} = state) do
    if config()[:env] == :dev do
      start_file_watcher(component_base)
      Phoenix.React.Runtime.FileWatcher.set_ref(self())
    end

    case start(component_base: component_base) do
      port when is_port(port) ->
        Logger.debug(
          "Bun.Server started on port: #{inspect(port)} and OS pid: #{get_port_os_pid(port)}"
        )

        Phoenix.React.Server.set_runtime_process(self())

        {:noreply, %Phoenix.React.Runtime{state | runtime_port: port}}

      {:error, reason} ->
        Logger.error("Failed to start Bun server: #{inspect(reason)}")
        {:stop, reason, state}
    end
  end

  @impl true
  @spec config() :: keyword()
  def config() do
    user_config = Application.get_env(:phoenix_react_server, Phoenix.React.Runtime.Bun, [])

    # Convert user config to map for new config system
    user_config_map =
      user_config
      |> Enum.into(%{})
      |> Map.put(:cd, Keyword.get(user_config, :cd, File.cwd!()))
      |> Map.put(:cmd, Keyword.get(user_config, :cmd, System.find_executable("bun")))
      |> Map.put(
        :server_js,
        Keyword.get(
          user_config,
          :server_js,
          Path.expand("bun/server.js", :code.priv_dir(:phoenix_react_server))
        )
      )

    case Phoenix.React.Config.runtime_config(:bun, user_config_map) do
      {:ok, config} -> Phoenix.React.Config.to_keyword_list(config)
      {:error, reason} -> raise ArgumentError, reason
    end
  end

  @impl true
  @spec start(Phoenix.React.Runtime.start_args()) :: port() | {:error, term()}
  def start(component_base: _component_base) do
    config = config()
    cmd = config[:cmd]
    bun_port = Integer.to_string(config[:port])
    server_js = config[:server_js]

    args = ["--port", bun_port, server_js]

    args =
      if config[:env] == :dev do
        ["--watch" | args]
      else
        args
      end

    bun_env = if(config[:env] == :dev, do: "development", else: "production")
    env = runtime_env("BUN_PORT", bun_port, "BUN_ENV", bun_env)

    Port.open({:spawn_executable, cmd}, port_options(cmd, args, cd: config[:cd], env: env))
  end

  @impl true
  @spec start_file_watcher(Path.t()) :: {:ok, pid()} | {:error, term()}
  def start_file_watcher(component_base) do
    Logger.debug("Building server.js bundle")

    config = config()

    # Use development mode for development builds, production for production builds
    dev_flag = if config[:env] == :dev, do: "--development", else: ""

    bundle_args = [
      "--component-base",
      component_base,
      "--output",
      config[:server_js],
      "--cd",
      config[:cd]
    ]

    # Add development flag if in development mode
    bundle_args =
      if dev_flag != "" do
        bundle_args ++ [dev_flag]
      else
        bundle_args
      end

    Mix.Tasks.Phx.React.Bun.Bundle.run(bundle_args)

    Logger.debug("Starting file watcher")
    Runtime.start_file_watcher(ref: self(), path: component_base)
  end

  @impl true
  def handle_info({:component_base_changed, path}, state) do
    bundle_args = [
      "--component-base",
      state.component_base,
      "--output",
      state.server_js,
      "--cd",
      state.cd
    ]

    handle_file_change(path, Mix.Tasks.Phx.React.Bun.Bundle, bundle_args)
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
    Logger.warning("Bun#{inspect(port)}: exit_status: #{exit_status}")
    Process.exit(self(), :normal)
    {:noreply, state}
  end

  @impl true
  def handle_info({:EXIT, _from, reason}, state) do
    Logger.debug("Bun.Server exiting")
    cleanup_runtime_process(state.runtime_port, reason)
    {:stop, reason, state}
  end

  @impl true
  def handle_cast(:shutdown, state) do
    {:stop, :normal, state}
  end

  @impl true
  @spec get_rendered_component(
          Phoenix.React.Runtime.method(),
          String.t(),
          map(),
          Phoenix.React.Runtime.t()
        ) :: Phoenix.React.Runtime.render_response()
  def get_rendered_component(method, component, props, state)
      when method in [:render_to_readable_stream, :render_to_string, :render_to_static_markup] do
    server_port = config()[:port]
    timeout = state.render_timeout

    make_http_request(server_port, Atom.to_string(method), component, props, timeout)
  end

  @impl true
  @spec terminate(term(), Phoenix.React.Runtime.t()) :: :ok
  def terminate(reason, state) do
    Logger.debug("Bun.Server terminating")
    cleanup_runtime_process(state.runtime_port, reason)
  end
end
