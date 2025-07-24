defmodule Phoenix.React.Runtime.Bun do
  @moduledoc """
  Phoenix.React.Runtime.Bun

  Config in `runtime.exs`

  ```
  import Config

  config :phoenix_react_server, Phoenix.React.Runtime.Bun,
    cd: File.cwd!(),
    cmd: "/path/to/bun",
    # In dev mode, the server_js will be watched and recompiled when changed
    # In prod mode, this need to be precompiled with `mix phx.react.bun.bundle`
    server_js: Path.expand("bun/server.js", :code.priv_dir(:phoenix_react_server)),
    port: 5225,
    env: :dev
  ```
  """
  require Logger

  use Phoenix.React.Runtime

  def start_link(init_arg) do
    GenServer.start_link(__MODULE__, init_arg, name: __MODULE__)
  end

  @impl true
  def init(component_base: component_base, render_timeout: render_timeout) do
    {:ok,
     %Runtime{
       component_base: component_base,
       render_timeout: render_timeout,
       server_js: config()[:server_js],
       cd: config()[:cd]
     }, {:continue, :start_port}}
  end

  @impl true
  @spec handle_continue(:start_port, Phoenix.React.Runtime.t()) ::
          {:noreply, Phoenix.React.Runtime.t()}
  def handle_continue(:start_port, %Runtime{component_base: component_base} = state) do
    if config()[:env] == :dev do
      start_file_watcher(component_base)
      Phoenix.React.Runtime.FileWatcher.set_ref(self())
    end

    port = start(component_base: component_base)

    Logger.debug(
      "Bun.Server started on port: #{inspect(port)} and OS pid: #{get_port_os_pid(port)}"
    )

    Phoenix.React.Server.set_runtime_process(self())

    {:noreply, %Runtime{state | port: port}}
  end

  @impl true
  def config() do
    cfg = Application.get_env(:phoenix_react_server, Phoenix.React.Runtime.Bun, [])
    cmd = cfg[:cmd] || System.find_executable("bun")

    server_js =
      cfg[:server_js] || Path.expand("bun/server.js", :code.priv_dir(:phoenix_react_server))

    [
      {:cd, cfg[:cd] || File.cwd!()},
      {:cmd, cmd},
      {:server_js, server_js},
      {:port, cfg[:port] || 5225},
      {:env, cfg[:env] || :dev}
    ]
  end

  @impl true
  def start(component_base: component_base) do
    cd = config()[:cd]
    cmd = config()[:cmd]
    bun_port = Integer.to_string(config()[:port])
    args = ["--port", bun_port, config()[:server_js]]

    is_dev = config()[:env] == :dev

    bun_env = if(is_dev, do: "development", else: "production")

    args =
      if config()[:env] == :dev do
        ["--watch" | args]
      else
        args
      end

    env = [
      {~c"PORT", ~c"#{bun_port}"},
      {~c"BUN_PORT", ~c"#{bun_port}"},
      {~c"BUN_ENV", ~c"#{bun_env}"},
      {~c"COMPONENT_BASE", ~c"#{component_base}"}
    ]

    Port.open(
      {:spawn_executable, cmd},
      [
        {:args, args},
        {:cd, cd},
        {:env, env},
        :stream,
        :binary,
        :exit_status,
        # :hide,
        :use_stdio,
        :stderr_to_stdout
      ]
    )
  end

  @impl true
  def start_file_watcher(component_base) do
    Logger.debug("Building server.js bundle")

    Mix.Tasks.Phx.React.Bun.Bundle.run([
      "--component-base",
      component_base,
      "--output",
      config()[:server_js],
      "--cd",
      config()[:cd]
    ])

    Logger.debug("Starting file watcher")
    Runtime.start_file_watcher(ref: self(), path: component_base)
  end

  @impl true
  def handle_info({:component_base_changed, path}, state) do
    Task.async(fn ->
      Logger.debug("component_base changed: #{path}, rebuilding...")

      Mix.Tasks.Phx.React.Bun.Bundle.run([
        "--component-base",
        state.component_base,
        "--output",
        state.server_js,
        "--cd",
        state.cd
      ])

      Logger.debug("component_base rebuilt #{path}")
    end)
    |> Task.await()

    {:noreply, state}
  end

  def handle_info({_ref, :ok}, state) do
    {:noreply, state}
  end

  def handle_info({_port, {:data, msg}}, state) do
    Logger.debug(msg)
    {:noreply, state}
  end

  def handle_info({port, {:exit_status, exit_status}}, state) do
    Logger.warning("Bun#{inspect(port)}: exit_status: #{exit_status}")
    Process.exit(self(), :normal)
    {:noreply, state}
  end

  # handle the trapped exit call
  def handle_info({:EXIT, _from, reason}, state) do
    Logger.debug("Bun.Server exiting")
    cleanup(reason, state)
    {:stop, reason, state}
  end

  @impl true
  def terminate(reason, state) do
    Logger.debug("Bun.Server terminating")
    cleanup(reason, state)
  end

  defp cleanup(reason, %Runtime{port: port} = _state) do
    case port |> Port.info(:os_pid) do
      {:os_pid, pid} ->
        {_, code} = System.cmd("kill", ["-9", "#{pid}"])
        code

      _ ->
        0
    end

    case reason do
      :normal -> :normal
      :shutdown -> :shutdown
      term -> {:shutdown, term}
    end
  end

  defp get_port_os_pid(port) do
    case port |> Port.info(:os_pid) do
      {:os_pid, pid} -> pid
      _ -> nil
    end
  end

  @impl true
  def handle_cast(:shutdown, %Runtime{port: port} = state) do
    case port |> Port.info(:os_pid) do
      {:os_pid, pid} ->
        {_, code} = System.cmd("kill", ["-9", "#{pid}"])
        code

      _ ->
        0
    end

    {:noreply, state}
  end

  @impl true
  def render_to_readable_stream(component, props, _from, state) do
    server_port = config()[:port]

    reply = get_rendered_component(server_port, component, props, :readable_stream)

    {:reply, reply, state}
  end

  @impl true
  def render_to_string(component, props, _from, state) do
    server_port = config()[:port]

    reply = get_rendered_component(server_port, component, props, :string)

    {:reply, reply, state}
  end

  @impl true
  def render_to_static_markup(component, props, _from, state) do
    server_port = config()[:port]

    reply = get_rendered_component(server_port, component, props, :static_markup)

    {:reply, reply, state}
  end

  defp get_rendered_component(server_port, component, props, type)
       when type in [:static_markup, :string, :readable_stream] do
    type_str =
      if type == :string do
        "component"
      else
        "#{type}"
      end

    url = ~c"http://localhost:#{server_port}/#{type_str}/#{component}"
    headers = [{~c"Content-Type", ~c"application/json"}]
    body = Jason.encode!(props)

    case :httpc.request(:post, {~c"#{url}", headers, ~c"application/json", ~c"#{body}"}, [], []) do
      {:ok, {{_version, status_code, _status_text}, _headers, body}}
      when status_code in 200..299 ->
        {:ok, to_string(body)}

      {:ok, {{_version, status_code, _status_text}, _headers, _body}} ->
        {:error, "HTTP #{status_code}"}

      {:error, reason} ->
        {:error, reason}
    end
  end
end
