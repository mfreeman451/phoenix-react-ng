# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Phoenix.React** is a Phoenix framework package that enables server-side rendering of React components within Phoenix HTML templates. It provides a rendering server that can render React components to static markup, strings, or readable streams, with support for client-side hydration.

## Architecture

The system consists of three main layers:

1. **Elixir Layer**: Phoenix integration components
2. **Runtime Layer**: JavaScript runtime servers (Bun or Deno)
3. **Client Layer**: JavaScript hydration and LiveView integration

### Core Components

- `Phoenix.React` - Main supervisor and public API
- `Phoenix.React.Server` - GenServer that manages rendering requests and caching
- `Phoenix.React.Runtime` - Dynamic supervisor for runtime processes
- `Phoenix.React.Runtime.Bun` - Bun-based runtime implementation with hot reloading
- `Phoenix.React.Runtime.Deno` - Deno-based runtime implementation with enhanced security
- `Phoenix.React.Cache` - ETS-based caching layer with TTL support
- `Phoenix.React.Helper` - Phoenix.Component integration with multiple rendering modes
- `Phoenix.React.Config` - Centralized configuration management
- `Phoenix.React.Telemetry` - Telemetry and performance monitoring with structured logging
- `Phoenix.React.Runtime.FileWatcher` - File watching for development hot reload

### Rendering Flow

1. Phoenix component calls `react_component/1` with component name and props
2. Request flows through `Phoenix.React.Helper` which determines render method
3. Request goes to `Phoenix.React.Server` which handles caching and runtime management
4. Cache layer checked first (if enabled with TTL > 0)
5. Runtime process (Bun or Deno) renders the React component via HTTP API
6. Result cached (if enabled) and returned as HTML string/stream
7. Client-side hydration occurs if needed

### Dual Runtime Support

**Bun Runtime** (`Phoenix.React.Runtime.Bun`)
- Fast JavaScript runtime with built-in bundler
- Development mode with hot reloading and file watching
- Components use `.js` file extension with JSX syntax
- Default runtime, optimized for development speed

**Deno Runtime** (`Phoenix.React.Runtime.Deno`)
- Secure runtime with enhanced security features
- Components must use `.jsx` file extension for proper JSX parsing
- Enhanced monitoring and metrics collection
- Parent process monitoring with health checks

## Key Commands

### Development
```bash
# Start Phoenix server with React rendering
mix phx.server

# Install dependencies
mix deps.get
npm install

# Run tests (note: requires 3s delay for server startup)
mix test

# Bundle React components for production
mix phx.react.bun.bundle --component-base=assets/component --output=priv/react/server.js

# Bundle with Deno runtime
mix phx.react.deno.bundle --component-base=assets/component --output=priv/react/server.js

# Clean dependencies and build artifacts
mix clean
mix deps.clean --all
```

### Demo Project (react_demo/)
```bash
# Setup demo (run from project root)
cd react_demo && mix setup

# Start demo server
cd react_demo && mix phx.server

# Build demo assets
cd react_demo && mix assets.build

# Install demo dependencies
cd react_demo && mix deps.get && npm install
```

### Testing
```bash
# Run all tests
mix test

# Run specific test file
mix test test/phoenix/react_test.exs

# Run single test
mix test test/phoenix/react_test.exs:14

# Run tests with coverage
mix test --cover

# Run tests for specific runtime
BUN_ENV=test mix test
REACT_RUNTIME=deno mix test
```

## Configuration

### Basic Setup
```elixir
# In config/config.exs
config :phoenix_react_server, Phoenix.React,
  runtime: Phoenix.React.Runtime.Bun,
  component_base: Path.expand("../assets/component", __DIR__),
  render_timeout: 5_000,
  cache_ttl: 600

# In application supervision tree
children = [
  Phoenix.React,
  # ... other children
]
```

### Runtime Selection
```elixir
# Environment-based runtime switching
runtime =
  case System.get_env("REACT_RUNTIME", "bun") do
    "bun" -> Phoenix.React.Runtime.Bun
    "deno" -> Phoenix.React.Runtime.Deno
    _ -> Phoenix.React.Runtime.Bun
  end

config :phoenix_react_server, Phoenix.React, runtime: runtime
```

### Production Configuration
```elixir
# In runtime.exs for Bun runtime
config :phoenix_react_server, Phoenix.React.Runtime.Bun,
  cmd: System.find_executable("bun"),
  server_js: Path.expand("../priv/react/server.js", __DIR__),
  port: 12666,
  env: :prod

# In runtime.exs for Deno runtime
config :phoenix_react_server, Phoenix.React.Runtime.Deno,
  cmd: System.find_executable("deno"),
  server_js: Path.expand("../priv/react/server.js", __DIR__),
  port: 12667,
  env: :prod
```

### Security Configuration
```elixir
config :phoenix_react_server, Phoenix.React.Config,
  security: %{
    max_component_name_length: 100,
    max_request_size: 1_048_576,  # 1MB
    request_timeout_ms: 30_000
  }
```

## Component Structure

React components must be placed in the configured `component_base` directory and export a `Component` function:

### Bun Runtime (.js files)
```javascript
// assets/component/my_component.js
export function Component(props) {
  return <div>{props.title}</div>;
}
```

### Deno Runtime (.jsx files)
```javascript
// assets/component/my_component.jsx
export function Component(props) {
  return <div>{props.title}</div>;
}
```

**Component Requirements:**
- Must export a `Component` function accepting props
- Props must be JSON-serializable
- File extensions: `.js` for Bun, `.jsx` for Deno
- Components can import npm packages (runtime downloads them automatically)

## Usage Patterns

### Static Markup (No Hydration)
```elixir
# In Phoenix component
def react_my_component(assigns) do
  react_component(%{
    component: "my_component",
    props: assigns,
    static: true
  })
end
```

### String Rendering (With Hydration)
```elixir
# Server-side
<div id="my-component-container">
  <.react_my_component data={@data} />
</div>

# Client-side
import { hydrateRoot } from 'react-dom/client';
const container = document.getElementById('my-component-container');
hydrateRoot(container, <MyComponent data={window.data} />);
```

### Readable Stream (LiveView Integration)
```elixir
# In LiveView template
<div
  id="react-live-form"
  phx-update="ignore"
  phx-hook="LiveFormHook"
><.react_live_form data={@form_data} /></div>
```

## Environment Variables

- `COMPONENT_BASE` - Path to React components directory
- `REACT_RUNTIME` - Runtime selection ("bun" or "deno")
- `BUN_ENV` - Development/production mode
- `PORT` - Runtime server port (default: 5225 for Bun, 5125 for Deno)
- `BUN_PORT` - Alternative Bun port setting
- `DENO_PORT` - Alternative Deno port setting

## Cache Behavior

- Cache TTL defaults to 600 seconds (10 minutes)
- Cache key is based on component name, props, and render method
- Cache can be disabled by setting `cache_ttl: 0`
- ETS-based in-memory caching with automatic garbage collection
- Cache invalidation occurs on component file changes in development
- Cache hits/misses are automatically tracked via telemetry events

## Telemetry and Monitoring

Phoenix.React includes comprehensive telemetry support via `Phoenix.React.Telemetry` for monitoring performance and tracking events.

### Telemetry Events

The following telemetry events are emitted automatically:

**Render Events** - `[:phoenix, :react, :render]`
- Measurements: `%{duration: duration_ms}`
- Metadata: `%{component: component, method: method, result: result, timestamp: timestamp}`
- Logged as: `[Phoenix.React] ✓ Rendered 'chart' in 45ms (method: render_to_string, result: ok)`

**Cache Events**
- `[:phoenix, :react, :cache, :hit]` - Fired on cache hits
- `[:phoenix, :react, :cache, :miss]` - Fired on cache misses
- Metadata: `%{component: component, method: method, timestamp: timestamp}`

**Runtime Events**
- `[:phoenix, :react, :runtime_startup]` - Fired when runtime starts
- `[:phoenix, :react, :runtime_shutdown]` - Fired when runtime stops
- Metadata: `%{runtime: runtime_name, port: port, timestamp: timestamp}`

**Build Events** - `[:phoenix, :react, :build]`
- Measurements: `%{duration: duration_ms}`
- Metadata: `%{runtime: runtime_name, result: result, timestamp: timestamp}`

**File Change Events** - `[:phoenix, :react, :file_change]`
- Metadata: `%{path: path, action: action, timestamp: timestamp}`

### Attaching Telemetry Handlers

Attach handlers in your application's telemetry module:

```elixir
defmodule MyApp.Telemetry do
  def attach_handlers do
    :telemetry.attach_many(
      "phoenix-react-telemetry",
      [
        [:phoenix, :react, :render],
        [:phoenix, :react, :cache, :hit],
        [:phoenix, :react, :cache, :miss],
        [:phoenix, :react, :runtime_startup],
        [:phoenix, :react, :build]
      ],
      &handle_event/4,
      %{}
    )
  end

  def handle_event([:phoenix, :react, :render], %{duration: duration}, metadata, _config) do
    # Send to your metrics system (Prometheus, StatsD, etc.)
    MyMetrics.histogram("phoenix_react.render.duration", duration,
      tags: ["component:#{metadata.component}", "method:#{metadata.method}"]
    )
  end

  def handle_event([:phoenix, :react, :cache, :hit], _measurements, metadata, _config) do
    MyMetrics.increment("phoenix_react.cache.hits",
      tags: ["component:#{metadata.component}"]
    )
  end

  # ... other handlers
end
```

### Structured Logging

All telemetry events are automatically logged with structured formatting:

- **Render Duration**: `[Phoenix.React] ✓ Rendered 'my_component' in 45ms (method: render_to_string, result: ok)`
- **Runtime Startup**: `[Phoenix.React] Runtime Bun started on port 5225`
- **Cache Events**: `[Phoenix.React] Cache hit for 'my_component' (method: render_to_string)`
- **Build Events**: `[Phoenix.React] ✓ Build completed for Bun in 1234ms (result: ok)`

### Health Checks

Use telemetry for runtime health monitoring:

```elixir
case Phoenix.React.Telemetry.health_check("Bun", 5225) do
  {:ok, metadata} ->
    # Runtime is healthy
    Logger.info("Runtime healthy: #{metadata.response_time_ms}ms")

  {:error, reason} ->
    # Runtime is unhealthy
    Logger.error("Runtime unhealthy: #{inspect(reason)}")
end
```

### Custom Measurements

Wrap operations with telemetry measurements:

```elixir
Phoenix.React.Telemetry.measure("custom_operation", [:my_app, :custom], fn ->
  # Your operation here
  do_expensive_work()
end)
```

## File Structure

```
lib/phoenix/react/                  # Core Elixir modules
  runtime/                         # Runtime implementations
    bun.ex                        # Bun runtime server
    deno.ex                       # Deno runtime server
    file_watcher.ex               # Development file watching
    common.ex                     # Shared runtime behavior
priv/bun/server.js                 # Bun server implementation
priv/deno/server.js                # Deno server implementation
react_demo/                         # Demo Phoenix application
  assets/component/                # React components (.js/.jsx)
  assets/js/                       # Client-side JavaScript
  lib/react_demo_web/              # Phoenix web modules
test/                              # Test suite
```

## Development Patterns

### Creating Phoenix Component Wrappers
```elixir
defmodule MyAppWeb.ReactComponents do
  use Phoenix.Component
  import Phoenix.React.Helper

  def react_my_component(assigns) do
    {static, props} = Map.pop(assigns, :static, false)

    react_component(%{
      component: "my_component",
      props: props,
      static: static
    })
  end
end
```

### Error Handling
- Failed component rendering falls back to error HTML
- Runtime failures are logged and cached as errors
- Timeout protection prevents hanging requests
- Cache automatically clears on component file changes

## Important Notes

- Tests require a 3-second delay for server startup (`Process.sleep(3_000)`)
- React components must export a `Component` function
- File extensions: `.js` for Bun runtime, `.jsx` for Deno runtime
- File watching enabled in development with 3-second throttle
- Requires `inotify-tools` on Linux for file watching
- Both runtimes support hot module replacement in development
- Runtime servers run on separate ports to avoid conflicts