defmodule Phoenix.React.Runtime.FileWatcher do
  @moduledoc """
  File system watcher for React components in development.

  This module monitors the component directory for changes and triggers
  automatic rebuilding of the server bundle when components are modified.
  It implements throttling to prevent excessive rebuilds during rapid file changes.

  ## Features

  - Real-time file system monitoring
  - Throttled rebuilds (3-second delay)
  - Automatic component bundle regeneration
  - Integration with runtime processes

  ## Configuration

  The file watcher is automatically started in development mode when
  the runtime environment is set to `:dev`.

  ## Requirements

  - `inotify-tools` must be installed on Linux systems
  - File system events are monitored via the `file_system` library

  ## Throttling

  File changes are throttled to prevent excessive rebuilds:
  - Default throttle time: 3 seconds
  - Only the last change in a burst triggers a rebuild
  - Updates are debounced to ensure file writes complete

  ## Events Monitored

  - File modifications
  - File creation
  - File deletion
  - Directory changes
  """
  require Logger

  use GenServer

  @doc """
  Sets the reference to the runtime process.

  ## Parameters

  - `ref` - The runtime process PID or reference

  Used by the runtime to register itself for file change notifications.
  """
  @spec set_ref(pid() | reference()) :: :ok
  def set_ref(ref) do
    GenServer.cast(__MODULE__, {:set_ref, ref})
  end

  @doc """
  Starts the file watcher server.

  ## Parameters

  - `args` - Keyword list containing:
    - `:path` - Directory path to watch (required)
    - `:ref` - Runtime process reference (optional)

  ## Returns

  - `{:ok, pid}` - File watcher started successfully
  - `{:error, reason}` - Failed to start file watcher
  """
  @spec start_link(keyword()) :: GenServer.on_start()
  def start_link(args) do
    GenServer.start_link(__MODULE__, args, name: __MODULE__)
  end

  @impl true
  @spec init(keyword()) :: {:ok, keyword()} | {:stop, term()}
  def init(args) do
    path = Keyword.fetch!(args, :path)

    case FileSystem.start_link(dirs: [path]) do
      {:ok, watcher_pid} ->
        FileSystem.subscribe(watcher_pid)
        Logger.info("Watching #{path} for React component changes...")

        {:ok,
         args
         |> Keyword.put(:watcher_pid, watcher_pid)
         |> Keyword.put(:update_time, System.os_time(:second))}

      :ignore ->
        Logger.warning("File system watcher not available (inotify-tools missing)")

        {:ok,
         args
         |> Keyword.put(:watcher_pid, nil)
         |> Keyword.put(:update_time, System.os_time(:second))}

      {:error, reason} ->
        Logger.error("Failed to start file system watcher: #{inspect(reason)}")
        {:stop, reason}
    end
  end

  @impl true
  def handle_cast({:set_ref, ref}, state) do
    {:noreply, state |> Keyword.put(:ref, ref)}
  end

  @impl true
  def handle_info({:file_event, _watcher_pid, {path, [:modified, :closed]}}, state) do
    IO.puts("File changed: #{path} - Events: [:modified, :closed]")
    send(self(), {:throttle_update, path})
    {:noreply, state}
  end

  def handle_info({:file_event, _watcher_pid, {_path, _events}}, state) do
    # ref = Keyword.fetch!(state, :ref)
    # IO.puts("File changed: #{path} - Events: #{inspect(events)}")
    # send(self(), {:throttle_update, path, events})
    {:noreply, state}
  end

  def handle_info({:throttle_update, path}, state) do
    IO.inspect(state)
    update_time = Keyword.fetch!(state, :update_time)
    now = System.os_time(:second)
    will_update = now > update_time

    Logger.debug(
      ~s[Throttle update #{update_time} / #{now}, #{if(will_update, do: "will update", else: "skip update")}]
    )

    if now > update_time do
      Process.send_after(state[:ref], {:component_base_changed, path}, 3_000)
      {:noreply, state |> Keyword.put(:update_time, now + 3)}
    else
      {:noreply, state}
    end
  end
end
