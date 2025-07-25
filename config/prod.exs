import Config

config :phoenix_react_server, Phoenix.React,
  runtime: Phoenix.React.Runtime.Bun,
  component_base: Path.expand("../priv/react/component", __DIR__),
  render_timeout: 5_000,
  cache_ttl: 60 * 15
