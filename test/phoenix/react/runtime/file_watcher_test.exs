defmodule Phoenix.React.Runtime.FileWatcherTest do
  use ExUnit.Case, async: false

  alias Phoenix.React.Runtime.FileWatcher

  setup do
    # Create a temporary directory for testing
    tmp_dir = Path.join(System.tmp_dir!(), "phoenix_react_test_#{System.unique_integer()}")
    File.mkdir_p!(tmp_dir)
    on_exit(fn -> File.rm_rf(tmp_dir) end)
    {:ok, tmp_dir: tmp_dir}
  end

  describe "file watcher behavior" do
    test "start_link returns a pid", %{tmp_dir: tmp_dir} do
      # FileWatcher may already be started by the application
      case FileWatcher.start_link(path: tmp_dir) do
        {:ok, _pid} -> :ok
        {:error, {:already_started, _pid}} -> :ok
      end
    end

    test "initializes correctly", %{tmp_dir: tmp_dir} do
      case FileWatcher.start_link(path: tmp_dir) do
        {:ok, _pid} -> :ok
        {:error, {:already_started, _pid}} -> :ok
      end
    end

    test "set_ref updates reference", %{tmp_dir: tmp_dir} do
      case FileWatcher.start_link(path: tmp_dir) do
        {:ok, _pid} -> :ok
        {:error, {:already_started, _pid}} -> :ok
      end

      assert :ok = FileWatcher.set_ref(self())
    end
  end

  describe "file watching functionality" do
    # Skip actual file watching tests in CI
    @tag :skip
    test "handles file modification events", %{tmp_dir: tmp_dir} do
      {:ok, _pid} = FileWatcher.start_link(path: tmp_dir)
      FileWatcher.set_ref(self())

      # Create a test file
      test_file = Path.join(tmp_dir, "test.js")
      File.write!(test_file, "test content")

      # Simulate modification
      File.write!(test_file, "modified content")

      # Allow time for processing (may need adjustment)
      Process.sleep(100)
    end
  end
end
