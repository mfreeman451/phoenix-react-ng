# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Phoenix.React** is a Phoenix framework package that enables server-side rendering of React components within Phoenix HTML templates. It provides a rendering server that can render React components to static markup, strings, or readable streams, with support for client-side hydration.

## Architecture

The system consists of three main layers:

1. **Elixir Layer**: Phoenix integration components
2. **Runtime Layer**: Bun-based React rendering server
3. **Client Layer**: JavaScript hydration and LiveView integration

### Core Components

- `Phoenix.React` - Main supervisor and public API
- `Phoenix.React.Server` - GenServer that manages rendering requests
- `Phoenix.React.Runtime` - Dynamic supervisor for runtime processes
- `Phoenix.React.Runtime.Bun` - Bun-based runtime implementation
- `Phoenix.React.Cache` - Caching layer for rendered components
- `Phoenix.React.Helper` - Convenience functions for Phoenix templates

### Rendering Flow

1. Phoenix component calls `react_component/1` with component name and props
2. Request goes through cache layer (if enabled)
3. Runtime server (Bun) renders the React component
4. Result is returned as HTML string/stream
5. Client-side hydration occurs if needed

## Key Commands

### Development
```bash
# Start Phoenix server with React rendering
mix phx.server

# Run tests (note: requires 3s delay for server startup)
mix test

# Bundle React components for production
mix phx.react.bun.bundle --component-base=assets/component --output=priv/react/server.js

# Install dependencies
mix deps.get
npm install
```

### Demo Project (react_demo/)
```bash
# Setup demo
mix setup

# Start demo server
cd react_demo && mix phx.server

# Build demo assets
cd react_demo && mix assets.build
```

### Testing
```bash
# Run all tests
mix test

# Run specific test file
mix test test/phoenix/react_test.exs

# Run single test
mix test test/phoenix/react_test.exs:14
```

## Configuration

### Basic Setup
```elixir
# In config/config.exs
config :phoenix_react_server, Phoenix.React,
  runtime: Phoenix.React.Runtime.Bun,
  component_base: Path.expand("../assets/component", __DIR__),
  cache_ttl: 60

# In application supervision tree
children = [
  Phoenix.React,
  # ... other children
]
```

### Production Configuration
```elixir
# In runtime.exs
config :phoenix_react_server, Phoenix.React.Runtime.Bun,
  cmd: System.find_executable("bun"),
  server_js: Path.expand("../priv/react/server.js", __DIR__),
  port: 12666,
  env: :prod
```

## Component Structure

React components must be placed in the configured `component_base` directory and export a `Component` function:

```javascript
// assets/component/my_component.js
export function Component(props) {
  return <div>{props.title}</div>;
}
```

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
- `BUN_ENV` - Development/production mode
- `PORT` - Bun server port (default: 5225)
- `BUN_PORT` - Alternative port setting

## Cache Behavior

- Cache TTL defaults to 600 seconds (10 minutes)
- Cache key is based on component name and props
- Cache can be disabled by setting `cache_ttl: 0`

## File Structure

```
lib/phoenix/react/         # Core Elixir modules
priv/bun/server.js         # Bun server implementation
react_demo/                # Demo Phoenix application
  assets/component/        # React components
  assets/js/               # Client-side JavaScript
  lib/react_demo_web/      # Phoenix web modules
```

## Important Notes

- Tests require a 3-second delay for server startup (`Process.sleep(3_000)`)
- React components must export a `Component` function
- Component files use `.js` extension with JSX syntax
- Server-side rendering uses Bun runtime (Node.js alternative)
- File watching is enabled in development mode with 3s throttle