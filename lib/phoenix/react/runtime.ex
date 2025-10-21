defmodule Phoenix.React.Runtime do
  @moduledoc """
  Phoenix.React.Runtime

  Manage the runtime of the React Render Server

  If in dev mode, it will start a file watcher to watch the component directory.
  Reload the server when the component file changed with a throttle time at `3s`.

  @behaviour Phoenix.React.Runtime

  """

  use DynamicSupervisor

  def start_link(init_arg) do
    DynamicSupervisor.start_link(__MODULE__, init_arg, name: __MODULE__)
  end

  def init(_init_arg) do
    DynamicSupervisor.init(strategy: :one_for_one)
  end

  def start_runtime(runtime, args) do
    spec = {runtime, args}
    DynamicSupervisor.start_child(__MODULE__, spec)
  end

  def start_file_watcher(args) do
    spec = {Phoenix.React.Runtime.FileWatcher, args}
    DynamicSupervisor.start_child(__MODULE__, spec)
  end

  defstruct [:component_base, :runtime_port, :server_js, :cd, render_timeout: 300_000]

  @typedoc "Runtime state structure"
  @type t :: %__MODULE__{
          render_timeout: timeout(),
          component_base: Path.t(),
          server_js: Path.t(),
          cd: Path.t(),
          runtime_port: port()
        }

  @typedoc "File system path"
  @type path :: Path.t()

  @typedoc "Rendering method"
  @type method :: :render_to_readable_stream | :render_to_string | :render_to_static_markup

  @typedoc "Component name"
  @type component :: String.t()

  @typedoc "Rendered HTML output"
  @type html :: String.t()

  @typedoc "Runtime start arguments"
  @type start_args :: [
          {:component_base, path()}
          | {:render_timeout, timeout()}
        ]

  @typedoc "Runtime configuration"
  @type runtime_config :: keyword()

  @typedoc "Render response"
  @type render_response :: {:reply, {:ok, html()}, t()} | {:reply, {:error, term()}, t()}

  @doc """
  Starts the runtime with given arguments.
  """
  @callback start(start_args()) :: {:ok, pid()} | {:error, term()}

  @doc """
  Starts a file watcher for the component directory.
  """
  @callback start_file_watcher(path()) :: {:ok, pid()} | {:error, term()}

  @doc """
  Returns runtime configuration.
  """
  @callback config() :: runtime_config()

  @doc """
  Renders a component using the specified method.
  """
  @callback get_rendered_component(method(), component(), map(), t()) :: render_response()

  defmacro __using__(_) do
    quote do
      @behaviour Phoenix.React.Runtime
      alias Phoenix.React.Runtime

      use GenServer

      @impl true
      def handle_call({method, component, props}, _from, state)
          when method in [:render_to_readable_stream, :render_to_string, :render_to_static_markup] do
        reply = apply(__MODULE__, :get_rendered_component, [method, component, props, state])
        {:reply, reply, state}
      end
    end
  end
end
