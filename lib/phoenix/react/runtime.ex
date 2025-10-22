defmodule Phoenix.React.Runtime do
  @moduledoc """
  Dynamic supervisor for JavaScript runtime processes and file watching.

  This module manages the lifecycle of JavaScript runtime processes (Bun/Deno)
  and coordinates file watching for hot reloading in development mode.

  ## Features

  - **Runtime Management**: Supervises JavaScript runtime processes
  - **Hot Reloading**: Automatic component rebuilding in development
  - **File Watching**: Monitors component directory changes with throttling
  - **Graceful Restart**: Handles runtime failures and restarts
  - **Development Mode**: Enhanced developer experience with live reloading

  ## Runtime Lifecycle

  ### Development Mode
  1. Starts file watcher for component directory
  2. Monitors file changes with 3-second throttle
  3. Triggers automatic runtime restart on component changes
  4. Provides hot reloading for seamless development

  ### Production Mode
  1. Starts optimized runtime processes
  2. No file watching (minimal overhead)
  3. Uses pre-bundled components for performance

  ## Supported Runtimes

  - **Bun** (`Phoenix.React.Runtime.Bun`): Fast JavaScript runtime
  - **Deno** (`Phoenix.React.Runtime.Deno`): Secure runtime with npm support

  ## Configuration

  Runtime behavior is controlled via application configuration:

  ```elixir
  config :phoenix_react_server, Phoenix.React.Runtime.Bun,
    env: :dev,  # :dev or :prod
    port: 5225,
    component_base: "/path/to/components"
  ```

  ## Performance Considerations

  - Development mode incurs file watching overhead
  - Throttling prevents excessive rebuilds during rapid changes
  - Runtime processes are isolated for stability
  - Automatic restart ensures reliability

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
