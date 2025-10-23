import Config

config :phoenix_react_server, Phoenix.ReactServer,
  runtime: Phoenix.ReactServer.Runtime.Bun,
  component_base: Path.expand("../assets/component", __DIR__),
  render_timeout: 5_000,
  cache_ttl: 60
