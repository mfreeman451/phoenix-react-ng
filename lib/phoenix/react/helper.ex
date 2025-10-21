defmodule Phoenix.React.Helper do
  @moduledoc """
  A helper to render react component by `react-dom/server` in `Phoenix.Component`.

  Usage:

  ```elixir
  # in html_helpers in AppWeb.ex
  import Phoenix.React.Helper
  ```

  """
  require Logger

  use Phoenix.Component

  @doc """
  Renders a React component within a Phoenix template.

  This helper provides a seamless way to integrate React components
  into your Phoenix templates with automatic error handling and
  caching support.

  ## Attributes

  - `component` (required) - React component name (file without extension)
  - `props` (optional) - JSON-serializable map of component props (default: `%{}`)
  - `static` (optional) - Rendering mode:
    - `true` - Static markup (no hydration)
    - `false` - String rendering with hydration support  
    - `nil` - Readable stream rendering (default)

  ## Examples

  ### Basic Usage

      <.react_component 
        component="chart" 
        props={%{data: @chart_data}} 
      />

  ### Static Rendering for SEO

      <.react_component 
        component="markdown" 
        props={%{content: @post.content}}
        static={true}
      />

  ### Interactive Component with Hydration

      <.react_component 
        component="dashboard" 
        props={%{user: @current_user}}
        static={false}
      />

  ## Component File Structure

  Component files should be located in the configured `component_base` directory
  and export a `Component` function:

  ```javascript
  // assets/component/chart.jsx
  import Chart from 'awesome-chart';

  export const Component = ({data, options = {}}) => {
    return <Chart data={data} {...options} />;
  };
  ```

  ## Error Handling

  If rendering fails, the helper will log the error and render an error
  message in place of the component. In development, detailed error
  information is shown for debugging.
  """
  attr(:component, :string,
    required: true,
    doc: "React component name (file without extension)"
  )

  attr(:props, :map,
    default: %{},
    doc: "JSON-serializable map of component props"
  )

  attr(:static, :atom,
    default: nil,
    values: [true, false, nil],
    doc: """
    Rendering mode:
    - `true` - Static markup (no hydration)
    - `false` - String rendering with hydration
    - `nil` - Readable stream rendering
    """
  )

  @spec react_component(map()) :: Phoenix.LiveView.Rendered.t()
  def react_component(assigns) do
    component = assigns[:component]
    props = assigns[:props]
    static = assigns[:static]

    method =
      case static do
        true -> :render_to_static_markup
        false -> :render_to_string
        nil -> :render_to_readable_stream
      end

    case apply(Phoenix.React, method, [component, props]) do
      {:ok, html} ->
        create_rendered_component(html, component)

      {:error, error} ->
        Logger.error(
          "Failed to #{method} react component #{component} with #{inspect(props)}, error: #{inspect(error)}"
        )

        error_html = format_error_html(error, method)
        create_rendered_component(error_html, component)
    end
  end

  # Create a Phoenix.LiveView.Rendered struct for the component
  @spec create_rendered_component(String.t(), String.t()) :: Phoenix.LiveView.Rendered.t()
  defp create_rendered_component(html, component) do
    %Phoenix.LiveView.Rendered{
      static: [html],
      dynamic: fn _assigns -> [] end,
      fingerprint: :erlang.phash2(component),
      root: nil,
      caller: :not_available
    }
  end

  # Format error message for display
  @spec format_error_html(term(), atom()) :: String.t()
  defp format_error_html(error, method) do
    if is_binary(error) do
      error
    else
      "Failed to #{method} react component: #{inspect(error)}"
    end
  end
end
