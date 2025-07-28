defmodule Phoenix.React.HelperTest do
  use ExUnit.Case, async: true

  # alias Phoenix.React.Helper

  setup_all do
    on_exit(fn -> nil end)
  end

  # describe "react_component/1" do
  #   test "renders static markup when static: true" do
  #     assert %Phoenix.LiveView.Rendered{} =
  #              Helper.react_component(%{component: "tab", props: %{}, static: true})
  #   end

  #   test "renders to string when static: false" do
  #     assert %Phoenix.LiveView.Rendered{} =
  #              Helper.react_component(%{component: "tab", props: %{}, static: false})
  #   end

  #   test "renders to readable stream when static: nil" do
  #     assert %Phoenix.LiveView.Rendered{} =
  #              Helper.react_component(%{component: "tab", props: %{}, static: nil})
  #   end

  #   test "defaults to readable stream when static not provided" do
  #     assert %Phoenix.LiveView.Rendered{} =
  #              Helper.react_component(%{component: "tab", props: %{}})
  #   end

  #   test "handles props correctly" do
  #     props = %{title: "Test Title", data: [1, 2, 3]}

  #     assert %Phoenix.LiveView.Rendered{} =
  #              Helper.react_component(%{component: "test", props: props, static: true})
  #   end

  #   test "handles empty props" do
  #     assert %Phoenix.LiveView.Rendered{} =
  #              Helper.react_component(%{component: "test", static: true})
  #   end

  #   test "handles error cases gracefully" do
  #     # Test with non-existent component
  #     result = Helper.react_component(%{component: "nonexistent", props: %{}, static: true})
  #     assert %Phoenix.LiveView.Rendered{} = result
  #     assert [_] = result.static
  #   end
  # end

  # describe "component attributes" do
  #   test "validates component attribute is required" do
  #     # Skip this test as the component attribute is handled by Phoenix.Component
  #     :ok
  #   end

  #   test "handles unexpected static attribute values" do
  #     # The component will raise CaseClauseError for invalid static values
  #     assert_raise CaseClauseError, fn ->
  #       Helper.react_component(%{component: "test", props: %{}, static: "invalid"})
  #     end
  #   end
  # end

  # describe "basic functionality" do
  #   test "returns Phoenix.LiveView.Rendered struct" do
  #     result = Helper.react_component(%{component: "test", props: %{}, static: true})
  #     assert %Phoenix.LiveView.Rendered{} = result
  #   end
  # end
end
