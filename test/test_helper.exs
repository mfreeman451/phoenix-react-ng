# Configure ExUnit to skip tests based on available runtimes
# Check for Bun runtime
bun_available = System.find_executable("bun") != nil

# Check for Deno runtime
deno_available = System.find_executable("deno") != nil

# Build exclude list based on available runtimes
exclude =
  cond do
    not bun_available and not deno_available ->
      IO.puts("⚠️  No runtimes found - excluding all integration and runtime tests")
      IO.puts("⚠️  Bun not found - excluding Bun runtime tests")
      IO.puts("⚠️  Deno not found - excluding Deno runtime tests")
      [:requires_bun, :requires_deno, :skip_if_no_deno, :integration, :requires_runtime]

    not bun_available ->
      IO.puts("⚠️  Bun not found - excluding Bun runtime tests")
      [:requires_bun]

    not deno_available ->
      IO.puts("⚠️  Deno not found - excluding Deno runtime tests")
      [:skip_if_no_deno, :requires_deno]

    true ->
      []
  end

# Store runtime availability in application env for tests to check
Application.put_env(
  :phoenix_react_server,
  :test_runtime_available,
  bun_available or deno_available
)

Application.put_env(:phoenix_react_server, :test_bun_available, bun_available)
Application.put_env(:phoenix_react_server, :test_deno_available, deno_available)

# Dynamic port allocation to prevent conflicts
defmodule TestPortAllocator do
  @moduledoc false

  def get_test_port do
    # Find an available port in the range 12000-12999
    case find_available_port(12_000, 12_999) do
      {:ok, port} -> port
      {:error, _reason} -> raise "Could not find available test port"
    end
  end

  defp find_available_port(start_port, end_port) do
    port_range = start_port..end_port

    Enum.find_value(port_range, fn port ->
      case :gen_tcp.listen(port, [:binary, active: false, reuseaddr: true]) do
        {:ok, socket} ->
          :gen_tcp.close(socket)
          {:ok, port}

        {:error, :eaddrinuse} ->
          false

        {:error, _reason} ->
          false
      end
    end) || {:error, :no_available_ports}
  end
end

# Get dynamic port for tests
test_port = TestPortAllocator.get_test_port()

# Configure application environment directly for tests
Application.put_env(:phoenix_react_server, Phoenix.ReactServer,
  runtime: Phoenix.ReactServer.Runtime.Bun,
  component_base: Path.expand("../test/fixtures", __DIR__),
  render_timeout: 10_000,
  cache_ttl: 60
)

Application.put_env(:phoenix_react_server, Phoenix.ReactServer.Runtime.Bun, port: test_port)

ExUnit.start(exclude: exclude)

# Only start ReactServer if a runtime is available
if bun_available or deno_available do
  Phoenix.ReactServer.start_link([])
else
  IO.puts("ℹ️  Skipping ReactServer startup - no runtimes available")
  IO.puts("ℹ️  Only unit tests will run")
end

ExUnit.after_suite(fn _results ->
  try do
    IO.puts("Stopping runtime ...")

    # Stop the main runtime
    Phoenix.ReactServer.stop_runtime()

    # Additional cleanup for any remaining processes
    try do
      # Stop FileWatcher if it's still running
      case Process.whereis(Phoenix.ReactServer.Runtime.FileWatcher) do
        pid when is_pid(pid) ->
          IO.puts("Stopping FileWatcher process...")
          GenServer.stop(pid, :normal, 5000)

        _ ->
          :ok
      end

      # Stop Server if it's still running
      case Process.whereis(Phoenix.ReactServer.Server) do
        pid when is_pid(pid) ->
          IO.puts("Stopping Server process...")
          GenServer.stop(pid, :normal, 5000)

        _ ->
          :ok
      end

      # Stop Runtime supervisor if it's still running
      case Process.whereis(Phoenix.ReactServer.Runtime) do
        pid when is_pid(pid) ->
          IO.puts("Stopping Runtime process...")
          GenServer.stop(pid, :normal, 5000)

        _ ->
          :ok
      end

      # Clean up any orphaned Bun processes
      try do
        case System.cmd("pgrep", ["-f", "bun.*server.js"]) do
          {result, 0} ->
            pids = String.split(String.trim(result), "\n", trim: true)

            for pid <- pids do
              case Integer.parse(pid) do
                {pid_num, ""} ->
                  IO.puts("Cleaning up orphaned Bun process: #{pid_num}")
                  System.cmd("kill", ["-TERM", "#{pid_num}"])
                  Process.sleep(50)

                  # Force kill if still running
                  case System.cmd("kill", ["-0", "#{pid_num}"]) do
                    {_, 0} ->
                      System.cmd("kill", ["-9", "#{pid_num}"])
                      IO.puts("Force killed orphaned Bun process: #{pid_num}")

                    _ ->
                      :ok
                  end

                _ ->
                  :ok
              end
            end

          {_result, _} ->
            # No processes found or pgrep failed
            :ok
        end
      rescue
        _ -> :ok
      catch
        _ -> :ok
      end
    rescue
      _ -> :ok
    catch
      _ -> :ok
    end

    :ok
  rescue
    _ -> :ok
  catch
    _ -> :ok
  end
end)
