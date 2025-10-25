defmodule Phoenix.ReactServer.Cache do
  @moduledoc """
  High-performance ETS-based caching for React component rendering.

  This module provides intelligent caching for rendered React components
  with configurable TTL and automatic cleanup of expired entries.

  ## Features

  - **ETS-based Storage**: In-memory caching with O(1) access time
  - **Configurable TTL**: Time-to-live per cache entry (default: 3600 seconds)
  - **Automatic Cleanup**: Garbage collection runs every 60 seconds
  - **Smart Cache Keys**: Based on component name, props, and static flag
  - **Memory Efficient**: Automatic cleanup prevents memory leaks

  ## Cache Key Structure

  Cache keys are tuples: `{component, props, static_flag}`

  - `component` - The React component name
  - `props` - Serialized component props
  - `static_flag` - Whether rendering is static (affects caching strategy)

  ## Configuration

  ```elixir
  config :phoenix_react_server, Phoenix.ReactServer,
    cache_ttl: 3600  # Cache TTL in seconds (default: 1 hour)
  ```

  Set `cache_ttl: 0` to disable caching entirely.

  ## Performance

  - Cache hit: O(1) lookup time
  - Cache miss: Triggers component rendering and stores result
  - Memory usage: Proportional to number of cached components
  - Cleanup cost: O(n) where n is number of expired entries

  """
  use GenServer

  alias Telemetry

  @ets_table_name :react_component_cache

  @default_ttl Application.compile_env(:phoenix_react_server, Phoenix.ReactServer, [])
               |> Keyword.get(:cache_ttl, 3600)

  def start_link(_) do
    GenServer.start_link(__MODULE__, nil, name: __MODULE__)
  end

  @impl true
  @spec init(term()) :: {:ok, map()}
  def init(_) do
    state = %{}
    ensure_started()
    schedule_work()
    {:ok, state}
  end

  @impl true
  def handle_info(:gc, state) do
    ts = :os.system_time(:seconds)

    match_spec = [
      {{:"$1", :_, :"$2"}, [{:<, :"$2", ts}], [:"$1"]}
    ]

    :ets.select(@ets_table_name, match_spec)
    |> Enum.each(fn key -> :ets.delete(@ets_table_name, key) end)

    schedule_work()
    {:noreply, state}
  end

  defp schedule_work do
    # Every 60 seconds by default
    gc_time =
      Application.get_env(:phoenix_react_server, Phoenix.ReactServer)
      |> Keyword.get(:gc_time, 60_000)

    Process.send_after(self(), :gc, gc_time)
  end

  @typedoc "Cache key type for component rendering"
  @type cache_key :: {String.t(), map(), atom()}

  @typedoc "Cache record stored in ETS"
  @type cache_record :: {cache_key(), String.t(), integer()}

  @typedoc "Cache method type"
  @type cache_method :: :render_to_static_markup | :render_to_string | :render_to_readable_stream

  @typedoc "TTL in seconds"
  @type ttl :: non_neg_integer()

  @doc """
  Retrieves a cached rendering result.

  ## Parameters

  - `component` - Component name
  - `props` - Component props
  - `method` - Rendering method

  ## Returns

  - `binary()` - Cached HTML if found and not expired
  - `nil` - No cached result found or expired

  ## Example

      iex> Phoenix.ReactServer.Cache.get("chart", %{"data" => [1,2,3]}, :render_to_string)
      "<div>...</div>"
  """
  @spec get(String.t(), map(), cache_method()) :: String.t() | nil
  def get(component, props, method) do
    case lookup(component, props, method) do
      nil ->
        Telemetry.record_cache_miss(component, method)
        nil

      result ->
        Telemetry.record_cache_hit(component, method)
        result
    end
  end

  @doc """
  Stores a rendering result in cache.

  ## Parameters

  - `component` - Component name
  - `props` - Component props  
  - `method` - Rendering method
  - `result` - HTML result to cache
  - `opts` - Options including `:ttl` (default: configured cache TTL)

  ## Returns

  - `true` - Successfully cached

  ## Example

      iex> Phoenix.ReactServer.Cache.put("chart", %{"data" => [1,2,3]}, :render_to_string, "<div>...</div>", ttl: 300)
      true
  """
  @spec put(String.t(), map(), cache_method(), String.t(), keyword()) :: true
  def put(component, props, method, result, opt \\ []) do
    ttl = Keyword.get(opt, :ttl, @default_ttl)
    expiration = :os.system_time(:seconds) + ttl
    record = {[component, props, method], result, expiration}
    :ets.insert(@ets_table_name, record)
  end

  @doc """
  Removes a cached rendering result.

  ## Parameters

  - `component` - Component name
  - `props` - Component props
  - `method` - Rendering method

  ## Returns

  - `true` - Entry removed (or didn't exist)

  ## Example

      iex> Phoenix.ReactServer.Cache.delete_cache("chart", %{"data" => [1,2,3]}, :render_to_string)
      true
  """
  @spec delete_cache(String.t(), map(), cache_method()) :: true
  def delete_cache(component, props, method) do
    :ets.delete(@ets_table_name, [component, props, method])
  end

  @spec lookup(String.t(), map(), cache_method()) :: String.t() | nil
  defp lookup(component, props, method) do
    case :ets.lookup(@ets_table_name, [component, props, method]) do
      [result | _] -> check_freshness(result)
      [] -> nil
    end
  end

  @spec check_freshness(cache_record()) :: String.t() | nil
  defp check_freshness({[component, props, method], result, expiration}) do
    if expiration > :os.system_time(:seconds) do
      result
    else
      delete_cache(component, props, method)
      nil
    end
  end

  defp ensure_started do
    case :ets.whereis(@ets_table_name) do
      :undefined -> :ets.new(@ets_table_name, [:set, :public, :named_table])
      ref -> ref
    end
  end
end
