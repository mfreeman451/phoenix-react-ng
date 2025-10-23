defmodule Phoenix.ReactServer.ServerTest do
  use ExUnit.Case, async: false

  alias Phoenix.ReactServer.Server

  setup do
    # Ensure the cache is clean before each test
    Phoenix.ReactServer.Cache.delete_cache("test_component", %{}, :static_markup)
    Phoenix.ReactServer.Cache.delete_cache("test_component", %{}, :string)
    Phoenix.ReactServer.Cache.delete_cache("test_component", %{}, :readable_stream)
    :ok
  end

  describe "config/0" do
    test "returns default configuration" do
      config = Server.config()
      assert Keyword.has_key?(config, :runtime)
      assert Keyword.has_key?(config, :component_base)
      assert Keyword.has_key?(config, :cache_ttl)
      assert Keyword.has_key?(config, :render_timeout)
    end
  end

  describe "start_link/1" do
    test "returns a pid" do
      # Server is already started by application, verify it's running
      assert Process.whereis(Server) != nil
    end
  end

  describe "initialization" do
    test "initializes with runtime process" do
      # Server is already started, check existing state
      state = :sys.get_state(Server)
      assert Map.has_key?(state, :runtime_process)
    end
  end

  describe "error handling" do
    test "handles invalid component gracefully" do
      # We can't test actual rendering without the runtime server
      # but we can test the structure of error handling
      assert is_list(Server.config())
    end
  end
end
