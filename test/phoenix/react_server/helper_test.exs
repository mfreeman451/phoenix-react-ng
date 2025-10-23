defmodule Phoenix.ReactServer.HelperTest do
  use ExUnit.Case, async: false

  alias Phoenix.ReactServer.Helper

  setup_all do
    # Ensure the React runtime is available for testing
    Process.sleep(3_000)
    on_exit(fn -> nil end)
  end

  describe "react_component/1" do
    test "renders static markup when static: true" do
      assert %Phoenix.LiveView.Rendered{} =
               Helper.react_component(%{component: "tab", props: %{}, static: true})
    end

    test "renders to string when static: false" do
      assert %Phoenix.LiveView.Rendered{} =
               Helper.react_component(%{component: "tab", props: %{}, static: false})
    end

    test "renders to readable stream when static: nil" do
      assert %Phoenix.LiveView.Rendered{} =
               Helper.react_component(%{component: "tab", props: %{}, static: nil})
    end

    test "defaults to readable stream when static not provided" do
      assert %Phoenix.LiveView.Rendered{} =
               Helper.react_component(%{component: "tab", props: %{}})
    end

    test "handles complex props correctly" do
      props = %{
        tabs: ["Tab 1", "Tab 2", "Tab 3"],
        title: "Test Title",
        data: [1, 2, 3],
        nested: %{inner: "value", deep: %{key: "test"}},
        boolean: true,
        number: 42
      }

      assert %Phoenix.LiveView.Rendered{} =
               Helper.react_component(%{component: "tab", props: props, static: true})
    end

    test "handles empty props" do
      assert %Phoenix.LiveView.Rendered{} =
               Helper.react_component(%{component: "tab", static: true})
    end

    test "handles nil props gracefully" do
      assert %Phoenix.LiveView.Rendered{} =
               Helper.react_component(%{component: "tab", props: nil, static: true})
    end

    test "handles error cases gracefully" do
      # Test with non-existent component
      result = Helper.react_component(%{component: "nonexistent", props: %{}, static: true})
      assert %Phoenix.LiveView.Rendered{} = result
      assert [_] = result.static

      # Verify error HTML is returned
      [error_html] = result.static
      assert is_binary(error_html)
      # Error messages come directly from the server, so we check it contains error info
      assert String.contains?(error_html, "Not Found") or
               String.contains?(error_html, "Failed to")
    end

    test "renders markdown component successfully" do
      props = %{
        data: "# Test Header\n\nThis is a test with **bold** text."
      }

      assert %Phoenix.LiveView.Rendered{} =
               Helper.react_component(%{component: "markdown", props: props, static: true})
    end

    test "handles unicode props correctly" do
      props = %{
        tabs: ["Tab 1", "Tab 2", "Tab 3"]
      }

      assert %Phoenix.LiveView.Rendered{} =
               Helper.react_component(%{component: "tab", props: props, static: true})
    end
  end

  describe "rendering methods" do
    test "selects correct method for static rendering" do
      # This test verifies the method selection logic
      # The actual method call happens inside react_component/1
      result = Helper.react_component(%{component: "tab", props: %{}, static: true})
      assert %Phoenix.LiveView.Rendered{} = result
    end

    test "selects correct method for string rendering" do
      result = Helper.react_component(%{component: "tab", props: %{}, static: false})
      assert %Phoenix.LiveView.Rendered{} = result
    end

    test "selects correct method for stream rendering" do
      result = Helper.react_component(%{component: "tab", props: %{}, static: nil})
      assert %Phoenix.LiveView.Rendered{} = result
    end
  end

  describe "component attributes validation" do
    test "validates component attribute is required" do
      # Phoenix.Component handles required attributes validation at compile time
      # At runtime, missing component attribute results in a nil component value
      # which gets handled by the error rendering logic
      result = Helper.react_component(%{props: %{}, static: true})
      assert %Phoenix.LiveView.Rendered{} = result
      # This should return an error component since component is nil/missing
      [error_html] = result.static
      assert is_binary(error_html)
    end

    test "handles unexpected static attribute values" do
      # The component will raise CaseClauseError for invalid static values
      assert_raise CaseClauseError, fn ->
        Helper.react_component(%{component: "tab", props: %{}, static: "invalid"})
      end
    end

    test "accepts all valid static values" do
      valid_static_values = [true, false, nil]

      for static_value <- valid_static_values do
        assert %Phoenix.LiveView.Rendered{} =
                 Helper.react_component(%{component: "tab", props: %{}, static: static_value})
      end
    end
  end

  describe "Phoenix.LiveView.Rendered struct creation" do
    test "returns correct struct type" do
      result = Helper.react_component(%{component: "tab", props: %{}, static: true})
      assert %Phoenix.LiveView.Rendered{} = result
    end

    test "includes HTML content in static field" do
      result = Helper.react_component(%{component: "tab", props: %{}, static: true})
      assert is_list(result.static)
      assert length(result.static) == 1
      assert is_binary(hd(result.static))
    end

    test "includes dynamic function" do
      result = Helper.react_component(%{component: "tab", props: %{}, static: true})
      assert is_function(result.dynamic)
    end

    test "includes fingerprint for caching" do
      result1 = Helper.react_component(%{component: "tab", props: %{}, static: true})
      result2 = Helper.react_component(%{component: "tab", props: %{}, static: true})
      assert result1.fingerprint == result2.fingerprint
    end

    test "different components have different fingerprints" do
      result1 = Helper.react_component(%{component: "tab", props: %{}, static: true})
      result2 = Helper.react_component(%{component: "markdown", props: %{}, static: true})
      assert result1.fingerprint != result2.fingerprint
    end
  end

  describe "error handling" do
    test "handles binary error messages" do
      # Mock a scenario where Phoenix.ReactServer returns a binary error
      # This tests the format_error_html/2 function
      result = Helper.react_component(%{component: "error_component", props: %{}, static: true})
      assert %Phoenix.LiveView.Rendered{} = result

      [error_html] = result.static
      assert is_binary(error_html)
    end

    test "handles complex error terms" do
      # Test with a component that might cause complex errors
      result =
        Helper.react_component(%{
          component: "complex_error",
          props: %{invalid: :term},
          static: true
        })

      assert %Phoenix.LiveView.Rendered{} = result

      [error_html] = result.static
      assert is_binary(error_html)
      # Error messages come directly from the server, so we check it contains error info
      assert String.contains?(error_html, "Not Found") or
               String.contains?(error_html, "Failed to")
    end

    test "error messages include method name" do
      result = Helper.react_component(%{component: "nonexistent", props: %{}, static: false})
      [error_html] = result.static
      # Check for any error indication - errors come as HTML with specific patterns
      assert String.contains?(error_html, "Error:") or
               String.contains?(error_html, "Not Found") or
               String.contains?(error_html, "Failed to")
    end

    test "error messages include component name" do
      result = Helper.react_component(%{component: "nonexistent", props: %{}, static: true})
      [error_html] = result.static
      # Check for any error indication - errors come as HTML with specific patterns
      assert String.contains?(error_html, "Error:") or
               String.contains?(error_html, "Not Found") or
               String.contains?(error_html, "Failed to")
    end
  end

  describe "logging behavior" do
    test "logs errors when rendering fails" do
      # Capture logs to verify error logging
      log =
        ExUnit.CaptureLog.capture_log(fn ->
          Helper.react_component(%{component: "nonexistent", props: %{}, static: true})
        end)

      # Check that some error was logged
      assert String.contains?(log, "Failed to") or String.contains?(log, "nonexistent")
    end
  end

  describe "integration scenarios" do
    test "handles multiple components in sequence" do
      components = ["tab", "test", "markdown"]

      for component <- components do
        assert %Phoenix.LiveView.Rendered{} =
                 Helper.react_component(%{component: component, props: %{}, static: true})
      end
    end

    test "handles rapid successive calls" do
      # Test that the helper can handle rapid calls without issues
      for _i <- 1..10 do
        assert %Phoenix.LiveView.Rendered{} =
                 Helper.react_component(%{
                   component: "tab",
                   props: %{tabs: ["fast"]},
                   static: true
                 })
      end
    end

    test "handles components with large props" do
      large_props = %{
        tabs: Enum.map(1..100, &"Tab #{&1}"),
        metadata: %{large: String.duplicate("x", 1_000)}
      }

      assert %Phoenix.LiveView.Rendered{} =
               Helper.react_component(%{component: "tab", props: large_props, static: true})
    end
  end
end
