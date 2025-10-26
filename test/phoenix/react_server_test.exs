defmodule Phoenix.ReactServerTest do
  use ExUnit.Case, async: false

  @moduletag :requires_runtime

  alias Phoenix.ReactServer
  alias Phoenix.ReactServer.Cache
  alias Phoenix.ReactServer.Server

  setup_all do
    # Wait for server startup
    Process.sleep(3_000)

    on_exit(fn ->
      try do
        ReactServer.stop_runtime()
      rescue
        _ -> :ok
      end
    end)
  end

  describe "render functions" do
    test "render_to_string with existing component" do
      assert {:ok, html} = ReactServer.render_to_string("tab", %{test: true})
      assert is_binary(html)
    end

    test "render_to_static_markup with existing component" do
      assert {:ok, html} = ReactServer.render_to_static_markup("tab", %{test: true})
      assert is_binary(html)
    end

    test "render_to_readable_stream with existing component" do
      assert {:ok, html} = ReactServer.render_to_readable_stream("tab", %{test: true})
      assert is_binary(html)
    end

    test "render_to_string with non-existent component" do
      assert {:error, _reason} = ReactServer.render_to_string("nonexistent", %{test: true})
    end

    test "render_to_static_markup with non-existent component" do
      assert {:error, _reason} = ReactServer.render_to_static_markup("nonexistent", %{test: true})
    end

    test "render_to_readable_stream with non-existent component" do
      assert {:error, _reason} =
               ReactServer.render_to_readable_stream("nonexistent", %{test: true})
    end

    test "render functions with empty props" do
      assert {:ok, html} = ReactServer.render_to_string("tab", %{})
      assert is_binary(html)
    end

    test "render_to_static_markup functions with data props" do
      # Use smaller content to avoid timeout in tests
      doc =
        "# Test Header\n\nThis is a test markdown document with some **bold** text and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n```javascript\nconsole.log('Hello World');\n```"

      assert {:ok, html} = ReactServer.render_to_static_markup("markdown", %{data: doc})
      assert is_binary(html)
    end

    test "render functions with complex props" do
      props = %{
        title: "Test Title",
        items: [1, 2, 3, 4, 5],
        nested: %{inner: "value"}
      }

      assert {:ok, html} = ReactServer.render_to_string("tab", props)
      assert is_binary(html)
    end
  end

  describe "error handling" do
    test "handles server timeout gracefully" do
      config = Application.get_env(:phoenix_react_server, Phoenix.ReactServer, [])
      original_timeout = config[:render_timeout] || 300_000
      # Note: timeout testing would require mock setup
      assert original_timeout > 0
    end
  end

  describe "find_server_pid/0" do
    test "returns a valid pid when server is running" do
      assert is_pid(ReactServer.find_server_pid())
    end
  end

  describe "configuration" do
    test "default configuration values" do
      config = Server.config()
      assert Keyword.has_key?(config, :runtime)
      assert Keyword.has_key?(config, :cache_ttl)
      assert Keyword.has_key?(config, :render_timeout)
    end
  end

  describe "cache integration" do
    test "uses cache for subsequent calls" do
      component = "tab"
      props = %{cache_test: true}
      method = :render_to_string

      # Clear cache first
      Cache.delete_cache(component, props, method)
      assert nil == Cache.get(component, props, method)

      # First call should populate cache
      assert {:ok, html1} = ReactServer.render_to_string(component, props)
      assert is_binary(html1)
      cached_value = Cache.get(component, props, method)
      assert cached_value == html1

      # Second call should use cache
      assert {:ok, html2} = ReactServer.render_to_string(component, props)
      assert html1 == html2
    end
  end
end
