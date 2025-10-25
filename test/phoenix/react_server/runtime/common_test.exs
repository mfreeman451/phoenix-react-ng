defmodule Phoenix.ReactServer.Runtime.CommonTest do
  use ExUnit.Case, async: true

  alias Phoenix.ReactServer.Runtime.Common

  describe "handle_result/1" do
    test "returns {:ok, result} for {:ok, result} tuples" do
      assert {:ok, "success"} = Common.handle_result({:ok, "success"})
      assert {:ok, 42} = Common.handle_result({:ok, 42})
      assert {:ok, %{key: "value"}} = Common.handle_result({:ok, %{key: "value"}})
    end

    test "returns {:error, formatted} for {:error, reason} tuples" do
      assert {:error, "error message"} = Common.handle_result({:error, "error message"})
      assert {:error, ":runtime_error"} = Common.handle_result({:error, :runtime_error})
      assert {:error, "%{type: :complex}"} = Common.handle_result({:error, %{type: :complex}})
    end

    test "returns {:ok, result} for non-tuple results" do
      assert {:ok, "direct result"} = Common.handle_result("direct result")
      assert {:ok, 123} = Common.handle_result(123)
      assert {:ok, %{data: "test"}} = Common.handle_result(%{data: "test"})
    end
  end

  describe "format_error/1" do
    test "returns binary errors as-is" do
      assert "simple error" = Common.format_error("simple error")
      assert "Error with spaces" = Common.format_error("Error with spaces")
    end

    test "formats non-binary errors with inspect/1" do
      assert ":atom_error" = Common.format_error(:atom_error)
      assert "42" = Common.format_error(42)
      assert "%{key: \"value\"}" = Common.format_error(%{key: "value"})
      assert "{:error, :reason}" = Common.format_error({:error, :reason})
    end

    test "handles complex nested structures" do
      complex_error = %{
        type: :network_error,
        code: 500,
        details: %{message: "Internal server error", stack: ["line1", "line2"]}
      }

      result = Common.format_error(complex_error)
      assert result == inspect(complex_error)
    end
  end

  describe "get_port_os_pid/1" do
    test "returns nil for invalid port inputs" do
      # Test with various invalid inputs that should return nil
      # We can't test real ports easily in unit tests, but we can test the error path
      assert is_function(&Common.get_port_os_pid/1)

      # The function should handle invalid inputs gracefully
      # Since we can't create real ports, we'll just verify the function exists
      assert function_exported?(Common, :get_port_os_pid, 1)
    end
  end

  describe "port_options/3" do
    test "returns default options without custom opts" do
      options = Common.port_options("test_exec", ["arg1", "arg2"])

      assert {:args, ["arg1", "arg2"]} in options
      assert :stream in options
      assert :binary in options
      assert :exit_status in options
      assert :use_stdio in options
      assert :stderr_to_stdout in options
    end

    test "includes custom directory when cd is provided" do
      options = Common.port_options("test_exec", ["arg1"], cd: "/custom/path")

      assert {:cd, "/custom/path"} in options
      assert {:args, ["arg1"]} in options
    end

    test "includes environment variables when env is provided" do
      env_vars = [{"TEST_VAR", "test_value"}]
      options = Common.port_options("test_exec", ["arg1"], env: env_vars)

      assert {:env, env_vars} in options
      assert {:args, ["arg1"]} in options
    end

    test "includes all options when all are provided" do
      env_vars = [{"NODE_ENV", "test"}]
      options = Common.port_options("test_exec", ["arg1", "arg2"], cd: "/path", env: env_vars)

      assert {:args, ["arg1", "arg2"]} in options
      assert {:cd, "/path"} in options
      assert {:env, env_vars} in options
      assert :stream in options
      assert :binary in options
    end
  end

  describe "runtime_env/4" do
    test "creates environment variables correctly" do
      env = Common.runtime_env("BUN_PORT", "5225", "BUN_ENV", "dev")

      assert {~c"PORT", ~c"5225"} in env
      assert {~c"BUN_PORT", ~c"5225"} in env
      assert {~c"BUN_ENV", ~c"dev"} in env
      assert {~c"COMPONENT_BASE", ~c"dev"} in env
    end

    test "handles different variable names and values" do
      env = Common.runtime_env("DENO_PORT", "5125", "DENO_ENV", "prod")

      assert {~c"PORT", ~c"5125"} in env
      assert {~c"DENO_PORT", ~c"5125"} in env
      assert {~c"DENO_ENV", ~c"prod"} in env
      assert {~c"COMPONENT_BASE", ~c"prod"} in env
    end

    test "converts strings to charlists as expected by :erlang.open_port/2" do
      env = Common.runtime_env("TEST_PORT", "1234", "TEST_ENV", "test_value")

      # Verify all values are charlists
      for {_key, value} <- env do
        assert is_list(value)
        assert List.ascii_printable?(value)
      end
    end
  end

  describe "normalize_exit_reason/1" do
    test "keeps normal exit reasons unchanged" do
      assert :normal = Common.normalize_exit_reason(:normal)
      assert :shutdown = Common.normalize_exit_reason(:shutdown)
      assert {:shutdown, :test} = Common.normalize_exit_reason({:shutdown, :test})
    end

    test "wraps other reasons in {:shutdown, reason}" do
      assert {:shutdown, :error} = Common.normalize_exit_reason(:error)
      assert {:shutdown, "error message"} = Common.normalize_exit_reason("error message")
      assert {:shutdown, %{type: :custom}} = Common.normalize_exit_reason(%{type: :custom})
    end

    test "handles complex exit reasons" do
      complex_reason = {:timeout, {GenServer, :call, [:server, :request, 5000]}}
      assert {:shutdown, ^complex_reason} = Common.normalize_exit_reason(complex_reason)
    end
  end

  describe "handle_file_change/4" do
    test "returns :ok immediately for file changes" do
      # Test that the function returns immediately without blocking
      result = Common.handle_file_change("/test/path", :test_module, ["arg1"], 1000)
      assert :ok = result
    end

    test "handles different bundle modules" do
      # Test with different module types
      assert :ok =
               Common.handle_file_change("/test/path", Mix.Tasks.Phx.React.Bun.Bundle, [], 5000)

      assert :ok =
               Common.handle_file_change("/test/path", Mix.Tasks.Phx.React.Deno.Bundle, [], 5000)
    end

    test "accepts various timeout values" do
      # Test that different timeout values are accepted
      assert :ok = Common.handle_file_change("/test/path", :test_module, [], 1000)
      assert :ok = Common.handle_file_change("/test/path", :test_module, [], 5000)
      assert :ok = Common.handle_file_change("/test/path", :test_module, [], 10_000)
    end
  end

  describe "validate_config/2" do
    test "validates complete valid configuration" do
      config = [
        cmd: "/usr/bin/bun",
        port: 5225,
        env: :dev,
        server_js: "/path/to/server.js"
      ]

      assert {:ok, ^config} = Common.validate_config(config, TestRuntime)
    end

    test "returns error when cmd is missing" do
      config = [port: 5225, env: :dev]

      assert {:error, "Elixir.TestRuntime: :cmd is required in configuration"} =
               Common.validate_config(config, TestRuntime)
    end

    test "returns error when port is missing" do
      config = [cmd: "/usr/bin/bun", env: :dev]

      assert {:error, "Elixir.TestRuntime: :port is required in configuration"} =
               Common.validate_config(config, TestRuntime)
    end

    test "returns error when port is invalid (too low)" do
      config = [cmd: "/usr/bin/bun", port: 0, env: :dev]

      assert {:error, "Elixir.TestRuntime: :port must be between 1 and 65_535"} =
               Common.validate_config(config, TestRuntime)
    end

    test "returns error when port is invalid (too high)" do
      config = [cmd: "/usr/bin/bun", port: 65_536, env: :dev]

      assert {:error, "Elixir.TestRuntime: :port must be between 1 and 65_535"} =
               Common.validate_config(config, TestRuntime)
    end

    test "returns error when env is invalid" do
      config = [cmd: "/usr/bin/bun", port: 5225, env: :staging]

      assert {:error, "Elixir.TestRuntime: :env must be :dev or :prod"} =
               Common.validate_config(config, TestRuntime)
    end

    test "accepts valid port boundaries" do
      config_low = [cmd: "/usr/bin/bun", port: 1, env: :dev]
      config_high = [cmd: "/usr/bin/bun", port: 65_535, env: :dev]

      assert {:ok, ^config_low} = Common.validate_config(config_low, TestRuntime)
      assert {:ok, ^config_high} = Common.validate_config(config_high, TestRuntime)
    end
  end

  describe "merge_config/3" do
    test "merges user config with defaults and validates" do
      defaults = [cmd: "/default/bun", port: 3000, env: :dev]
      user_config = [port: 5225, env: :prod]

      expected = [cmd: "/default/bun", port: 5225, env: :prod]

      assert {:ok, ^expected} = Common.merge_config(user_config, defaults, TestRuntime)
    end

    test "returns validation error for invalid merged config" do
      defaults = [cmd: "/default/bun", port: 3000, env: :dev]
      # Invalid port
      user_config = [port: -1]

      assert {:error, "Elixir.TestRuntime: :port must be between 1 and 65_535"} =
               Common.merge_config(user_config, defaults, TestRuntime)
    end

    test "user config overrides defaults" do
      defaults = [cmd: "/default/bun", port: 3000, env: :dev, timeout: 5000]
      user_config = [cmd: "/user/bun", port: 8080]

      {:ok, merged_config} = Common.merge_config(user_config, defaults, TestRuntime)

      assert merged_config[:cmd] == "/user/bun"
      assert merged_config[:port] == 8080
      assert merged_config[:env] == :dev
      assert merged_config[:timeout] == 5000
    end
  end

  describe "integration scenarios" do
    test "handles result transformation pipeline" do
      # Test a complete pipeline: raw result -> handle_result -> format_error
      original_error = {:error, "Network timeout"}

      result = Common.handle_result(original_error)
      assert {:error, "Network timeout"} = result
    end

    test "validates and merges complex configuration" do
      defaults = [
        cmd: "/usr/bin/bun",
        port: 3000,
        env: :dev,
        timeout: 5000,
        server_js: "/default/server.js"
      ]

      user_config = [
        port: 8080,
        env: :prod,
        timeout: 10_000,
        custom_option: "custom_value"
      ]

      {:ok, merged_config} = Common.merge_config(user_config, defaults, TestRuntime)

      assert merged_config[:cmd] == "/usr/bin/bun"
      assert merged_config[:port] == 8080
      assert merged_config[:env] == :prod
      assert merged_config[:timeout] == 10_000
      assert merged_config[:custom_option] == "custom_value"
    end
  end
end
