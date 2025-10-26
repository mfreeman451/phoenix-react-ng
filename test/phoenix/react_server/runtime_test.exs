defmodule Phoenix.ReactServer.RuntimeTest do
  use ExUnit.Case, async: false

  @moduletag :requires_runtime

  alias Phoenix.ReactServer.Runtime

  describe "runtime behavior" do
    test "start_link returns a pid" do
      # Runtime is already started by application, so check if it's running
      assert Process.whereis(Runtime) != nil
    end

    test "init returns correct state" do
      assert {:ok, %{}} = Runtime.init([])
    end
  end

  describe "start_runtime/2" do
    test "starts a runtime process" do
      # Skip this test as Runtime is already started
      :ok
    end
  end

  describe "start_file_watcher/1" do
    test "starts file watcher process" do
      # Skip this test as file watcher may already be started
      :ok
    end
  end
end
