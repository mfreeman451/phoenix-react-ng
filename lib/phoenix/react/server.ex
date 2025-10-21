defmodule Phoenix.React.Server do
  @moduledoc """
  The React Render Server

  Start React Render server by setting.

  ```
  config :phoenix_react_server, Phoenix.React,
    runtime: Phoenix.React.Runtime.Bun,
    component_base: Path.expand("../assets/component", __DIR__),
    cache_ttl: 10
  ```

  """
  require Logger

  alias Phoenix.React.Cache
  alias Phoenix.React.Runtime

  use GenServer

  @typedoc "Time in seconds"
  @type second() :: non_neg_integer()

  @typedoc "Time in milliseconds"
  @type millisecond() :: non_neg_integer()

  @typedoc "Server state containing runtime and configuration"
  @type server_state :: %{
          runtime: module(),
          component_base: Path.t(),
          render_timeout: millisecond(),
          runtime_process: pid()
        }

  @typedoc "Configuration options for the React server"
  @type server_config :: [
          {:cache_ttl, second()}
          | {:component_base, Path.t()}
          | {:render_timeout, millisecond()}
          | {:runtime, module()}
        ]

  @doc """
  Sets the runtime process PID.

  Used internally to update the runtime process reference.

  ## Parameters

  - `pid` - The runtime process PID
  """
  @spec set_runtime_process(pid()) :: :ok
  def set_runtime_process(pid) do
    GenServer.cast(__MODULE__, {:set_runtime_process, pid})
  end

  @doc """
  Returns the React Render Server configuration.

  Retrieves configuration from `Application.get_env(:phoenix_react_server, Phoenix.React)`
  and applies default values for missing options.

  ## Returns

  Keyword list containing:
  - `:runtime` - Runtime module (default: `Phoenix.React.Runtime.Bun`)
  - `:component_base` - Component directory path
  - `:cache_ttl` - Cache TTL in seconds (default: 600)
  - `:render_timeout` - Render timeout in milliseconds (default: 300_000)

  ## Example

      iex> Phoenix.React.Server.config()
      [runtime: Phoenix.React.Runtime.Bun, component_base: "/path/to/components", ...]
  """
  @spec config() :: server_config()
  def config() do
    config = Application.get_env(:phoenix_react_server, Phoenix.React, [])

    [
      runtime: config[:runtime] || Phoenix.React.Runtime.Bun,
      component_base: config[:component_base],
      cache_ttl: config[:cache_ttl] || 600,
      render_timeout: config[:render_timeout] || 300_000
    ]
  end

  @doc """
  Starts the React Render Server.

  ## Parameters

  - `init_arg` - Initial arguments (typically `[]`)

  ## Returns

  - `{:ok, pid}` - Server started successfully
  - `{:error, reason}` - Failed to start server
  """
  @spec start_link(term()) :: GenServer.on_start()
  def start_link(init_arg) do
    GenServer.start_link(__MODULE__, init_arg, name: __MODULE__)
  end

  @impl true
  @spec init(term()) :: {:ok, server_state()} | {:stop, term()}
  def init([]) do
    cfg = config()

    runtime = cfg[:runtime]
    component_base = cfg[:component_base]
    render_timeout = cfg[:render_timeout]
    args = [component_base: component_base, render_timeout: render_timeout]

    case Runtime.start_runtime(runtime, args) do
      {:ok, runtime_process} ->
        {:ok,
         %{
           runtime: runtime,
           component_base: component_base,
           render_timeout: render_timeout,
           runtime_process: runtime_process
         }}

      {:error, reason} ->
        {:stop, reason}
    end
  end

  @impl true
  def handle_cast({:set_runtime_process, pid}, state) do
    {:noreply, %{state | runtime_process: pid}}
  end

  @impl true
  def handle_call(:get_state, _from, state) do
    {:reply, state, state}
  end

  @impl true
  def handle_call(
        {:render_to_readable_stream, component, props},
        _from,
        %{runtime_process: runtime_process} = state
      ) do
    reply =
      case Cache.get(component, props, :render_to_readable_stream) do
        nil ->
          render_timeout = config()[:render_timeout]

          case GenServer.call(
                 runtime_process,
                 {:render_to_readable_stream, component, props},
                 render_timeout
               ) do
            {:ok, html} = reply ->
              Cache.put(component, props, :render_to_readable_stream, html)
              reply

            reply ->
              reply
          end

        html ->
          {:ok, html}
      end

    {:reply, reply, state}
  end

  def handle_call(
        {:render_to_string, component, props},
        _from,
        %{runtime_process: runtime_process} = state
      ) do
    reply =
      case Cache.get(component, props, :render_to_string) do
        nil ->
          render_timeout = config()[:render_timeout]

          case GenServer.call(
                 runtime_process,
                 {:render_to_string, component, props},
                 render_timeout
               ) do
            {:ok, html} = reply ->
              Cache.put(component, props, :render_to_string, html)
              reply

            reply ->
              reply
          end

        html ->
          {:ok, html}
      end

    {:reply, reply, state}
  end

  def handle_call(
        {:render_to_static_markup, component, props},
        _from,
        %{runtime_process: runtime_process} = state
      ) do
    reply =
      case Cache.get(component, props, :render_to_static_markup) do
        nil ->
          render_timeout = config()[:render_timeout]

          case GenServer.call(
                 runtime_process,
                 {:render_to_static_markup, component, props},
                 render_timeout
               ) do
            {:ok, html} = reply ->
              Cache.put(component, props, :render_to_static_markup, html)
              reply

            reply ->
              reply
          end

        html ->
          {:ok, html}
      end

    {:reply, reply, state}
  end

  def handle_call(:stop_runtime, _from, %{runtime_process: runtime_process} = state) do
    ok = GenServer.cast(runtime_process, :shutdown)
    {:reply, ok, state}
  end
end
