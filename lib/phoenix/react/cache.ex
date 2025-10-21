defmodule Phoenix.React.Cache do
  @moduledoc """
  Cache for React Component rendering

  Cache key is a tuple of component, props and static flag

  Remove expired cache every 60 seconds
  """
  use GenServer

  @ets_table_name :react_component_cache

  @default_ttl Application.compile_env(:phoenix_react_server, Phoenix.React, [])
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
      Application.get_env(:phoenix_react_server, Phoenix.React)
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

      iex> Phoenix.React.Cache.get("chart", %{"data" => [1,2,3]}, :render_to_string)
      "<div>...</div>"
  """
  @spec get(String.t(), map(), cache_method()) :: String.t() | nil
  def get(component, props, method) do
    lookup(component, props, method)
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

      iex> Phoenix.React.Cache.put("chart", %{"data" => [1,2,3]}, :render_to_string, "<div>...</div>", ttl: 300)
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

      iex> Phoenix.React.Cache.delete_cache("chart", %{"data" => [1,2,3]}, :render_to_string)
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

  defp ensure_started() do
    case :ets.whereis(@ets_table_name) do
      :undefined -> :ets.new(@ets_table_name, [:set, :public, :named_table])
      ref -> ref
    end
  end
end
