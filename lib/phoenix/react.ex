defmodule Phoenix.React do
  @moduledoc """

  Run a `react` render server to render react component in `Phoenix` html.

  **Features**

  - [x] Render to static markup
  - [x] Render to string
  - [x] Render to readable stream
  - [x] Hydrate at client side
  - [x] Connect to Live View render

  See the [docs](https://hexdocs.pm/phoenix_react_server/) for more information.

  ## Install this package

  Add deps in `mix.exs`

  ```elixir
  {:phoenix_react_server, "~> 0.5"},
  ```

  ## Configuration

  Set config, runtime, react components, etc.

  ```elixir
  import Config

  config :phoenix_react_server, Phoenix.React,
    # react runtime, default to `bun`
    runtime: Phoenix.React.Runtime.Bun,
    # react component base path
    component_base: Path.expand("../assets/component", __DIR__),
    # cache ttl, default to 60 seconds
    cache_ttl: 60
  ```

   Supported `runtime`

   - [x] `Phoenix.React.Runtime.Bun`
   - [x] `Phoenix.React.Runtime.Deno`

  Add Render Server in your application Supervisor tree.

  ```elixir
    def start(_type, _args) do
      children = [
        ReactDemoWeb.Telemetry,
        {DNSCluster, query: Application.get_env(:react_demo, :dns_cluster_query) || :ignore},
        {Phoenix.PubSub, name: ReactDemo.PubSub},
        # React render service
        Phoenix.React,
        ReactDemoWeb.Endpoint
      ]

      opts = [strategy: :one_for_one, name: ReactDemo.Supervisor]
      Supervisor.start_link(children, opts)
    end
  ```

  Write Phoenix Component use `react_component`

  ```elixir
  defmodule ReactDemoWeb.ReactComponents do
    use Phoenix.Component

    import Phoenix.React.Helper

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

  Import in html helpers in `react_demo_web.ex`

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

        ...
      end
    end
  ```

  ### `render_to_static_markup`

  Then you can use react server rendered component in Phoenix Component

  ```html
  <div class="card">
    <div clas="card-body">
      <div class="card-title">Hello There</div>
      <.react_markdown
        data={@data}
      >
    </div>
  </div>
  ```

  ### `render_to_string`

  ```html
  <div class="card w-full">
    <div class="card-body">
      <h3 class="card-title">
        This <code class="text-primary">Table</code> is rendered with <code class="text-secondary">react-dom/server</code>
      </h3>
      <!-- Notice: Remove white space in the react render node or it will break hydrate -->
      <div class="w-full h-full" id="system_usage_container"><.react_system_stats
        data={@data}
      /></div>
    </div>
  </div>
  ```

  * Then hydrate on the client.

  ```js

  document.addEventListener('DOMContentLoaded', function() {
    const store = new Store();
    const domContainer = document.querySelector('#system_usage_container');
    if (domContainer) {
      let channel = socket.channel("system_usage:lobby", {});

      channel.join()
        .receive("ok", resp => { console.log("Joined successfully", resp) })
        .receive("error", resp => { console.log("Unable to join", resp) });


      function Usage(props) {
        const data = useSyncExternalStore(store.subscribe, store.getSnapshot, store.getServerSnapshot);

        return <SystemUsage data={data} />;
      }

      let root;

      channel.on("joined", (data) => {
        // console.log("Reset stats: ", data)
        store.reset(data.data)

        requestAnimationFrame(() => {
          hydrateRoot(domContainer, <Usage />);
        });
      });

      channel.on("stats", (data) => {
        // console.log("Stats: ", data)
        store.unshift(data)
      });

    }
  });

  ```

  ### `render_to_readable_stream`

  ```html
  <div
    id="react-live-form"
    class="w-full h-full"
    phx-update="ignore"
    phx-hook="LiveFormHook"
  ><.react_live_form
    data={@form_data}
  /></div>
  ```

  * Work with `LiveView`

  ```js

  const hooks = {
    LiveFormHook: {
      mounted() {
        const formState = new FormState();

        formState.setData = (data) => {
          this.pushEvent("form:input", data);
        };

        function LiveViewForm(props) {
          const data = useSyncExternalStore(formState.subscribe, formState.getSnapshot, formState.getServerSnapshot);
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

   ## Run in release mode

   Bundle components with server.js to one file.

   ### For Bun runtime

   ```shell
   mix phx.react.bun.bundle --component-base=assets/component --output=priv/react/server.js
   ```

   Config `runtime` to `Phoenix.React.Runtime.Bun` in `runtime.exs`

   ```elixir

   config :phoenix_react_server, Phoenix.React.Runtime.Bun,
     cmd: System.find_executable("bun"),
     server_js: Path.expand("../priv/react/server.js", __DIR__),
     port: 12666,
     env: :prod
   ```

   ### For Deno runtime

   ```shell
   mix phx.react.deno.bundle --component-base=assets/component --output=priv/react/server.js
   ```

   Config `runtime` to `Phoenix.React.Runtime.Deno` in `runtime.exs`

   ```elixir

   config :phoenix_react_server, Phoenix.React.Runtime.Deno,
     cmd: System.find_executable("deno"),
     server_js: Path.expand("../priv/react/server.js", __DIR__),
     port: 12667,
     env: :prod
   ```

  ## Hydrate at client side with CDN

  Hydrate react component at client side when CDN.

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
  import { Component } from 'app';

  hydrateRoot(
    document.getElementById('app-wrapper'),
    <App />
  );
  </script>
  ```

  """
  use Supervisor

  def start_link(init_arg) do
    Supervisor.start_link(__MODULE__, init_arg, name: __MODULE__)
  end

  @impl true
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
      {Phoenix.React.Cache, []},
      {Phoenix.React.Runtime, []},
      {Phoenix.React.Server, []}
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
  Configuration options for Phoenix.React.
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

      iex> Phoenix.React.render_to_readable_stream("chart", %{"data" => [1, 2, 3]})
      {:ok, "<div>...</div>"}
  """
  @spec render_to_readable_stream(component(), props()) :: render_result()
  def render_to_readable_stream(component, props \\ %{}) do
    server = find_server_pid()
    timeout = Phoenix.React.Server.config()[:render_timeout]
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

      iex> Phoenix.React.render_to_string("chart", %{"data" => [1, 2, 3]})
      {:ok, "<div data-reactroot=\"\">...</div>"}
  """
  @spec render_to_string(component(), props()) :: render_result()
  def render_to_string(component, props \\ %{}) do
    server = find_server_pid()
    timeout = Phoenix.React.Server.config()[:render_timeout]
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

      iex> Phoenix.React.render_to_static_markup("markdown", %{"content" => "# Hello"})
      {:ok, "<h1>Hello</h1>"}
  """
  @spec render_to_static_markup(component(), props()) :: render_result()
  def render_to_static_markup(component, props) do
    server = find_server_pid()
    timeout = Phoenix.React.Server.config()[:render_timeout]
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
      if m == Phoenix.React.Server do
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
