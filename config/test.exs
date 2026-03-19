import Config

config :phoenix_react_ng, Phoenix.ReactServer,
  runtime: Phoenix.ReactServer.Runtime.Bun,
  component_base: Path.expand("../test/fixtures", __DIR__),
  render_timeout: 10_000,
  cache_ttl: 60

config :phoenix_react_ng, Phoenix.ReactServer.Runtime.Bun, port: 12457
