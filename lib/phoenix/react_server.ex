defmodule Phoenix.ReactServer do
  @moduledoc """

  Phoenix.ReactServer provides high-performance server-side rendering (SSR) for React components
  within Phoenix applications. It supports both Bun and Deno JavaScript runtimes with
  intelligent caching and hot reloading capabilities.

  **Features**

  - [x] Server-side rendering with multiple output formats:
    - Static markup generation (SEO-friendly)
    - String rendering with client hydration
    - Readable stream rendering (LiveView integration)
  - [x] Dual runtime support (Bun and Deno)
  - [x] Intelligent caching with TTL management
  - [x] Hot reloading in development mode
  - [x] LiveView integration with streaming support
  - [x] Client-side hydration capabilities
  - [x] Bundle size optimization (67% smaller than previous versions)

  See the [docs](https://hexdocs.pm/phoenix_react_server/) for more information.

  ## Install this package

  Add deps in `mix.exs`

  ```elixir
  {:phoenix_react_server, "~> 0.5"},
  ```

  ## Installation

  Add to your dependencies in `mix.exs`:

  ```elixir
  {:phoenix_react_server, "~> 0.5"},
  ```

  ## Configuration

  Configure the runtime, component paths, and caching options:

  ```elixir
  import Config

  config :phoenix_react_server, Phoenix.ReactServer,
    # Runtime: Bun (default) or Deno
    runtime: Phoenix.ReactServer.Runtime.Bun,
    # React component base path
    component_base: Path.expand("../assets/component", __DIR__),
    # Cache TTL in seconds (default: 60, set to 0 to disable)
    cache_ttl: 60
  ```

  ### Supported Runtimes

  - **Bun Runtime** (`Phoenix.ReactServer.Runtime.Bun`): Fast startup, excellent performance
  - **Deno Runtime** (`Phoenix.ReactServer.Runtime.Deno`): Secure runtime with npm package support

  ### Supervisor Configuration

  Add to your application's supervisor tree:

  ```elixir
  def start(_type, _args) do
    children = [
      ReactDemoWeb.Telemetry,
      {DNSCluster, query: Application.get_env(:react_demo, :dns_cluster_query) || :ignore},
      {Phoenix.PubSub, name: ReactDemo.PubSub},
      # React render service
      Phoenix.ReactServer,
      ReactDemoWeb.Endpoint
    ]

    opts = [strategy: :one_for_one, name: ReactDemo.Supervisor]
    Supervisor.start_link(children, opts)
  end
  ```

  ## Usage Examples

  ### Phoenix Component

  Create Phoenix components that render React components:

  ```elixir
  defmodule ReactDemoWeb.ReactComponents do
    use Phoenix.Component
    import Phoenix.ReactServer.Helper

    def react_markdown(assigns) do
      {static, props} = Map.pop(assigns, :static, true)

      react_component(%{
        component: "markdown",
        props: props,
        static: static
      })
    end
  end
  ```

  Import your React components in `lib/your_app_web.ex`:

  ```elixir
  defp html_helpers do
    quote do
      # Translation
      use Gettext, backend: ReactDemoWeb.Gettext
      # HTML escaping functionality
      import Phoenix.HTML
      # Core UI components
      import ReactDemoWeb.CoreComponents
      import ReactDemoWeb.ReactComponents
    end
  end
  ```

  ### Rendering Methods

  #### Static Markup (SEO-friendly)

  Use `static: true` for SEO-friendly content that doesn't need client-side interaction:

  ```html
  <div class="card">
    <div class="card-body">
      <div class="card-title">Hello There</div>
      <.react_markdown data={@data} static={true} />
    </div>
  </div>
  ```

  #### String Rendering with Hydration

  Use `static: false` (default) for components that need client-side interaction:

  ```html
  <div class="card w-full">
    <div class="card-body">
      <h3 class="card-title">
        This <code class="text-primary">Component</code> is rendered with server-side rendering
      </h3>
      <!-- Note: No whitespace between container and component for proper hydration -->
      <div class="w-full h-full" id="interactive-container"><.react_interactive_component data={@data} /></div>
    </div>
  </div>
  ```

  Then hydrate on the client:

  ```javascript
  import { hydrateRoot } from 'react-dom/client';

  document.addEventListener('DOMContentLoaded', function() {
    const store = new Store();
    const domContainer = document.querySelector('#interactive-container');

    if (domContainer) {
      let channel = socket.channel("system_usage:lobby", {});

      channel.join()
        .receive("ok", resp => { console.log("Joined successfully", resp) })
        .receive("error", resp => { console.log("Unable to join", resp) });

      function Usage(props) {
        const data = useSyncExternalStore(store.subscribe, store.getSnapshot, store.getServerSnapshot);
        return <SystemUsage data={data} />;
      }

      channel.on("joined", (data) => {
        store.reset(data.data);
        requestAnimationFrame(() => {
          hydrateRoot(domContainer, <Usage />);
        });
      });

      channel.on("stats", (data) => {
        store.unshift(data);
      });
    }
  });
  ```

  #### Streaming with LiveView

  Use streaming rendering for dynamic LiveView components:

  ```html
  <div
    id="react-live-form"
    class="w-full h-full"
    phx-update="ignore"
    phx-hook="LiveFormHook"
  ><.react_live_form data={@form_data} /></div>
  ```

  Create LiveView hooks for streaming components:

  ```javascript
  const hooks = {
    LiveFormHook: {
      mounted() {
        const formState = new FormState();

        formState.setData = (data) => {
          this.pushEvent("form:input", data);
        };

        function LiveViewForm(props) {
          const data = useSyncExternalStore(
            formState.subscribe,
            formState.getSnapshot,
            formState.getServerSnapshot
          );
          return <LiveForm data={data} setData={formState.setData} />;
        }

        this.pushEvent("form:init", {}, (data, ref) => {
          formState.reset(data);
          this.reactRoot = hydrateRoot(this.el, <LiveViewForm />);
        });

        this.handleEvent("form:update", (data) => {
          formState.assign(data);
        });
      },
    }
  }
  ```

  ## Production Deployment

  Bundle components and server code for production releases.

  ### Production Bundling

  **For Bun Runtime:**
  ```shell
  mix phx.react.bun.bundle --component-base=assets/component --output=priv/react/server.js
  ```

  **For Deno Runtime:**
  ```shell
  mix phx.react.deno.bundle --component-base=assets/component --output=priv/react/server.js
  ```

  ### Production Configuration

  Configure in `runtime.exs`:

  **Bun Runtime:**
  ```elixir
  config :phoenix_react_server, Phoenix.ReactServer.Runtime.Bun,
    cmd: System.find_executable("bun"),
    server_js: Path.expand("../priv/react/server.js", __DIR__),
    port: 12666,
    env: :prod
  ```

  **Deno Runtime:**
  ```elixir
  config :phoenix_react_server, Phoenix.ReactServer.Runtime.Deno,
    cmd: System.find_executable("deno"),
    server_js: Path.expand("../priv/react/server.js", __DIR__),
    port: 12667,
    env: :prod
  ```

  ## Client-Side Hydration with CDN

  Hydrate React components on the client side using CDN modules:

  ```html
  <script type="importmap">
    {
      "imports": {
        "react-dom": "https://esm.run/react-dom@19",
        "app": "https://my.web.site/app.js"
      }
    }
  </script>
  <script type="module">
    import { hydrateRoot } from 'react-dom/client';
    import { App } from 'app';

    hydrateRoot(
      document.getElementById('app-wrapper'),
      <App />
    );
  </script>
  ```

  ## React Component Structure

  React components should be placed in your configured `component_base` directory
  and export a default `Component` function:

  ```javascript
  // assets/component/my_component.js
  import React from 'react';

  export function Component({ title, children }) {
    return (
      <div className="my-component">
        <h1>{title}</h1>
        {children}
      </div>
    );
  }
  ```

  ## Performance Considerations

  - **Bundle Size**: Components are optimized with 67% size reduction
  - **Caching**: Intelligent caching with configurable TTL
  - **Hot Reloading**: Automatic in development mode
  - **Streaming**: Support for LiveView integration with streaming

  """

  use Supervisor

  @doc """
  Starts the Phoenix.ReactServer supervisor.

  ## Parameters

  - `init_arg` - Initialization arguments (typically `[]`)

  ## Returns

  - `{:ok, pid}` - Supervisor started successfully
  - `{:error, reason}` - Failed to start supervisor

  ## Example

      iex> Phoenix.ReactServer.start_link([])
      {:ok, #PID<0.123.0>}
  """
  @spec start_link(term()) :: GenServer.on_start()
  def start_link(init_arg) do
    Supervisor.start_link(__MODULE__, init_arg, name: __MODULE__)
  end

  @doc """
  Initializes the Phoenix.ReactServer supervisor with child processes.

  ## Children

  - `Phoenix.ReactServer.Cache` - ETS-based caching for rendered components
  - `Phoenix.ReactServer.Runtime` - Dynamic supervisor for JavaScript runtimes
  - `Phoenix.ReactServer.Server` - GenServer handling rendering requests

  ## Returns

  - `{:ok, children}` - Supervisor initialized successfully
  """
  @impl true
  @spec init(term()) :: {:ok, {:supervisor.sup_flags(), [:supervisor.child_spec()]}} | :ignore
  def init(_init_arg) do
    # Start HTTP client for runtime communication
    {:ok, _} = Application.ensure_all_started(:inets)

    case :httpc.start_service([{:profile, :default}]) do
      {:ok, _pid} ->
        :ok

      {:error, {:already_started, _pid}} ->
        :ok

      error ->
        require Logger
        Logger.error("Failed to start HTTP client: #{inspect(error)}")
        raise "Failed to start HTTP client: #{inspect(error)}"
    end

    children = [
      {Phoenix.ReactServer.Cache, []},
      {Phoenix.ReactServer.Runtime, []},
      {Phoenix.ReactServer.Server, []}
    ]

    Supervisor.init(children, strategy: :one_for_one)
  end

  @typedoc """
  React component file name without extension.

  The component file must export a `Component` function that accepts props
  and returns a React element.

  ## Example

      # For file "assets/component/chart.jsx"
      component = "chart"
  """
  @type component :: String.t()

  @typedoc """
  React component props.

  Must be a JSON-serializable map that can be passed to the React component.
  All keys and values must be serializable to JSON.

  ## Example

      props = %{
        "data" => [1, 2, 3],
        "title" => "My Chart",
        "options" => %{ "color" => "blue" }
      }
  """
  @type props :: map()

  @typedoc """
  Rendering method for React components.

  - `:render_to_static_markup` - Renders to static HTML (no React data attributes)
  - `:render_to_string` - Renders to HTML with React data attributes for hydration
  - `:render_to_readable_stream` - Renders to a readable stream for large components
  """
  @type render_method :: :render_to_static_markup | :render_to_string | :render_to_readable_stream

  @typedoc """
  Render result containing the HTML output.

  The HTML string contains the rendered React component and can be
  directly embedded in Phoenix templates.
  """
  @type render_result :: {:ok, String.t()} | {:error, term()}

  @typedoc """
  Configuration options for Phoenix.ReactServer.
  """
  @type config :: %{
          optional(:runtime) => module(),
          optional(:component_base) => Path.t(),
          optional(:render_timeout) => timeout(),
          optional(:cache_ttl) => non_neg_integer()
        }

  @doc """
  Render a React component to a readable stream.

  Uses `renderToReadableStream` from `react-dom/server` for optimal
  performance with large components or streaming scenarios.

  ## Parameters

  - `component` - The component name (file without extension)
  - `props` - JSON-serializable map of component props (default: `%{}`)

  ## Returns

  - `{:ok, html}` - Successfully rendered HTML string
  - `{:error, reason}` - Rendering failed with error reason

  ## Example

      iex> Phoenix.ReactServer.render_to_readable_stream("chart", %{"data" => [1, 2, 3]})
      {:ok, "<div>...</div>"}
  """
  @spec render_to_readable_stream(component(), props()) :: render_result()
  def render_to_readable_stream(component, props \\ %{}) do
    server = find_server_pid()
    timeout = Phoenix.ReactServer.Server.config()[:render_timeout]
    GenServer.call(server, {:render_to_readable_stream, component, props}, timeout)
  rescue
    error ->
      {:error, error}
  end

  @doc """
  Render a React component to an HTML string with hydration support.

  Uses `renderToString` from `react-dom/server` to generate HTML that
  includes React data attributes for client-side hydration.

  ## Parameters

  - `component` - The component name (file without extension)
  - `props` - JSON-serializable map of component props (default: `%{}`)

  ## Returns

  - `{:ok, html}` - Successfully rendered HTML string
  - `{:error, reason}` - Rendering failed with error reason

  ## Example

      iex> Phoenix.ReactServer.render_to_string("chart", %{"data" => [1, 2, 3]})
      {:ok, "<div data-reactroot=\"\">...</div>"}
  """
  @spec render_to_string(component(), props()) :: render_result()
  def render_to_string(component, props \\ %{}) do
    server = find_server_pid()
    timeout = Phoenix.ReactServer.Server.config()[:render_timeout]
    GenServer.call(server, {:render_to_string, component, props}, timeout)
  rescue
    error ->
      {:error, error}
  end

  @doc """
  Render a React component to static HTML markup.

  Uses `renderToStaticMarkup` from `react-dom/server` to generate
  static HTML without React data attributes. Ideal for SEO content
  that doesn't need client-side interactivity.

  ## Parameters

  - `component` - The component name (file without extension)
  - `props` - JSON-serializable map of component props

  ## Returns

  - `{:ok, html}` - Successfully rendered HTML string
  - `{:error, reason}` - Rendering failed with error reason

  ## Example

      iex> Phoenix.ReactServer.render_to_static_markup("markdown", %{"content" => "# Hello"})
      {:ok, "<h1>Hello</h1>"}
  """
  @spec render_to_static_markup(component(), props()) :: render_result()
  def render_to_static_markup(component, props) do
    server = find_server_pid()
    timeout = Phoenix.ReactServer.Server.config()[:render_timeout]
    GenServer.call(server, {:render_to_static_markup, component, props}, timeout)
  rescue
    error ->
      {:error, error}
  end

  @doc """
  Find the process ID of the React server.

  ## Returns

  - `pid()` - The server process ID
  - `nil` - Server not found

  Used internally by render functions to locate the server process.
  """
  @spec find_server_pid() :: pid() | nil
  def find_server_pid() do
    children = Supervisor.which_children(__MODULE__)

    Enum.find_value(children, fn {_, pid, _, [m | _]} ->
      if m == Phoenix.ReactServer.Server do
        pid
      else
        false
      end
    end)
  end

  @doc """
  Stop the React runtime process.

  Useful for development when you need to restart the runtime
  after configuration changes.

  ## Returns

  - `:ok` - Runtime stopped successfully
  - `{:error, reason}` - Failed to stop runtime
  """
  @spec stop_runtime() :: :ok | {:error, term()}
  def stop_runtime() do
    server = find_server_pid()
    GenServer.call(server, :stop_runtime)
  end
end
