import Config

config :react_demo, ReactDemoWeb.Endpoint, server: true

if config_env() == :prod do
  host = System.get_env("PHX_HOST") || "phoenix-react.com"
  port = String.to_integer(System.get_env("PORT") || "4666")

  config :react_demo, :dns_cluster_query, System.get_env("DNS_CLUSTER_QUERY")

  config :react_demo, ReactDemoWeb.Endpoint,
    url: [host: host, port: 443, scheme: "https"],
    http: [
      ip: {0, 0, 0, 0, 0, 0, 0, 0},
      port: port
    ]
end

# Configure Phoenix.ReactServer server for OTP releases
# Use environment variable REACT_RUNTIME to switch between :bun and :deno
runtime =
  case System.get_env("REACT_RUNTIME", "bun") do
    "bun" -> Phoenix.ReactServer.Runtime.Bun
    "deno" -> Phoenix.ReactServer.Runtime.Deno
    _ -> Phoenix.ReactServer.Runtime.Bun
  end

config :phoenix_react_ng, Phoenix.ReactServer, runtime: runtime

# Bun configuration for releases
config :phoenix_react_ng, Phoenix.ReactServer.Runtime.Bun,
  cmd: System.find_executable("bun"),
  server_js: Path.expand("../priv/react/bun/server.js", __DIR__),
  port: 5124,
  env: :prod

# Deno configuration for releases
config :phoenix_react_ng, Phoenix.ReactServer.Runtime.Deno,
  cmd: System.find_executable("deno"),
  server_js: Path.expand("../priv/react/server.js", __DIR__),
  port: 5125,
  env: if(config_env() == :prod, do: :prod, else: :dev)
