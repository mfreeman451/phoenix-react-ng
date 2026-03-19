# Phoenix.ReactServer

[![CI](https://github.com/mfreeman451/phoenix-react/actions/workflows/ci.yml/badge.svg)](https://github.com/mfreeman451/phoenix-react/actions/workflows/ci.yml)

Phoenix.ReactServer is a powerful library that enables server-side rendering of React components within Phoenix applications. It provides seamless integration between React and Phoenix, supporting multiple rendering methods and runtime environments.

## ✨ Features

- **🎨 Multiple Rendering Methods**: Support for `renderToStaticMarkup`, `renderToString`, and `renderToReadableStream`
- **⚡ Dual Runtime Support**: Choose between Bun and Deno runtimes for optimal performance
- **🔄 Client-Side Hydration**: Full support for React hydration with Phoenix LiveView
- **💾 Intelligent Caching**: Built-in caching system with configurable TTL
- **👀 File Watching**: Automatic component reloading in development
- **🔒 Type Safety**: Comprehensive type specifications and documentation
- **🚀 Production Ready**: Optimized for release deployments with bundled assets

## 📚 Documentation

See the [complete documentation](https://hexdocs.pm/phoenix_react_ng/) for detailed API reference and examples.

## 🚀 Installation

Add `phoenix_react_ng` to your dependencies in `mix.exs`:

```elixir
def deps do
  [
    {:phoenix_react_ng, "~> 0.8"}
  ]
end
```

## ⚙️ Configuration

Configure Phoenix.ReactServer in your application config:

```elixir
import Config

config :phoenix_react_ng, Phoenix.ReactServer,
  # React runtime (default: Phoenix.ReactServer.Runtime.Bun)
  runtime: Phoenix.ReactServer.Runtime.Bun,
  # React component base path
  component_base: Path.expand("../assets/component", __DIR__),
  # Render timeout in milliseconds (default: 5_000)
  render_timeout: 5_000,
  # Cache TTL in seconds (default: 60)
  cache_ttl: 60
```

### Supported Runtimes

- **Bun Runtime** (`Phoenix.ReactServer.Runtime.Bun`) - Fast JavaScript runtime with built-in bundler
- **Deno Runtime** (`Phoenix.ReactServer.Runtime.Deno`) - Secure JavaScript runtime with TypeScript support

### Deno Runtime Configuration

To use Deno instead of Bun, configure the runtime and its specific settings:

```elixir
config :phoenix_react_ng, Phoenix.ReactServer,
  runtime: Phoenix.ReactServer.Runtime.Deno,
  component_base: Path.expand("../assets/component", __DIR__),
  cache_ttl: 60

# Deno-specific configuration
config :phoenix_react_ng, Phoenix.ReactServer.Runtime.Deno,
  cmd: System.find_executable("deno"),
  server_js: Path.expand("../priv/react/server.js", __DIR__),
  port: 5125,
  env: :dev  # Use :prod for production
```

#### Deno Requirements
- **Deno 2.x** (recommended)
- Components must use `.jsx` file extension for proper JSX parsing
- Deno automatically downloads npm packages via `--node-modules-dir` flag

#### Environment Variable Switching

You can use environment variables to switch runtimes dynamically:

```elixir
runtime =
  case System.get_env("REACT_RUNTIME", "bun") do
    "bun" -> Phoenix.ReactServer.Runtime.Bun
    "deno" -> Phoenix.ReactServer.Runtime.Deno
    _ -> Phoenix.ReactServer.Runtime.Bun
  end

config :phoenix_react_ng, Phoenix.ReactServer, runtime: runtime
```

### Application Setup

Add the React render server to your application's Supervisor tree:

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

### Creating React Components

Create a Phoenix component module to wrap your React components:

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

Import your React components in the HTML helpers:

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

    # ... other imports
  end
end
```

## 🎯 Rendering Methods

### Static Markup Rendering

Use `render_to_static_markup` for SEO-friendly content that doesn't need client-side interaction:

```html
<div class="card">
  <div class="card-body">
    <div class="card-title">Hello There</div>
    <.react_markdown data={@data} />
  </div>
</div>
```

### String Rendering with Hydration

Use `render_to_string` when you need client-side hydration:

```html
<div class="card w-full">
  <div class="card-body">
    <h3 class="card-title">
      This <code class="text-primary">Table</code> is rendered with <code class="text-secondary">react-dom/server</code>
    </h3>
    <!-- Notice: Remove whitespace to avoid breaking hydration -->
    <!-- Add `phx-no-format` to prevent mix format from changing this -->
    <div
      id="system_usage_container"
      class="w-full h-full"
      phx-no-format
    ><.react_system_stats data={@data} /></div>
  </div>
</div>
```

#### Client-Side Hydration

```javascript
document.addEventListener('DOMContentLoaded', function() {
  const store = new Store();
  const domContainer = document.querySelector('#system_usage_container');
  
  if (domContainer) {
    let channel = socket.channel("system_usage:lobby", {});

    channel.join()
      .receive("ok", resp => console.log("Joined successfully", resp))
      .receive("error", resp => console.log("Unable to join", resp));

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

### Streaming Rendering

Use `render_to_readable_stream` for large components or LiveView integration:

```html
<div
  id="react-live-form"
  class="w-full h-full"
  phx-update="ignore"
  phx-hook="LiveFormHook"
><.react_live_form data={@form_data} /></div>
```

#### LiveView Integration

```javascript
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

## 🚀 Production Deployment

### Bundling Components

Bundle your React components with the server for production deployment:

#### Bun Runtime
```shell
mix phx.react.bun.bundle --component-base=assets/component --output=priv/react/server.js
```

#### Deno Runtime
```shell
mix phx.react.deno.bundle --component-base=assets/component --output=priv/react/server.js
```

### Production Configuration

Configure the runtime for production in `runtime.exs`:

```elixir
# For Bun runtime
config :phoenix_react_ng, Phoenix.ReactServer.Runtime.Bun,
  cmd: System.find_executable("bun"),
  server_js: Path.expand("../priv/react/server.js", __DIR__),
  port: 12666,
  env: :prod

# For Deno runtime
config :phoenix_react_ng, Phoenix.ReactServer.Runtime.Deno,
  cmd: System.find_executable("deno"),
  server_js: Path.expand("../priv/react/server.js", __DIR__),
  port: 12667,
  env: :prod
```

## 🌐 CDN Hydration

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
import { Component } from 'app';

hydrateRoot(
  document.getElementById('app-wrapper'),
  <App />
);
</script>
```

## 🎮 Demo

A complete demo application is available in the `./react_demo` directory, showcasing:
- All rendering methods
- LiveView integration
- Client-side hydration
- File watching in development
- Production bundling

## 🔧 Advanced Configuration

### Caching Strategy

Configure caching behavior for optimal performance:

```elixir
config :phoenix_react_ng, Phoenix.ReactServer,
  cache_ttl: 300,  # 5 minutes cache
  gc_time: 60_000  # Cleanup interval in milliseconds
```

### Security Settings

Configure security limits for component rendering:

```elixir
config :phoenix_react_ng, Phoenix.React.Config,
  security: %{
    max_component_name_length: 100,
    max_request_size: 1_048_576,  # 1MB
    request_timeout_ms: 30_000
  }
```

### File Watching

Configure development file watching:

```elixir
config :phoenix_react_ng, Phoenix.React.Config,
  file_watcher: %{
    throttle_ms: 3000,
    debounce_ms: 100
  }
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
