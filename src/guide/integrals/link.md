---
app_name: 'Reason AI'
app_name_short: 'Reason'
func_names: 'Reason Functions'
func_name: 'Reason Function'
integral_names: 'Integrals'
integral_name: 'Integral'
---

# Linking {{$frontmatter.func_names}} to {{$frontmatter.integral_names}}

Use {{$frontmatter.func_names}} to inject external services and functionality into your {{$frontmatter.integral_names}}.
Unlike {{$frontmatter.integral_names}}, functions are meant to handle single, specific tasks only

> [!NOTE]
> You need to [setup your environment](../introduction/getting-started) before creating {{$frontmatter.func_names}}

## Linking a {{$frontmatter.func_name}}

::: tip
While creating {{$frontmatter.integral_names}}, you can select {{$frontmatter.func_names}} to automatilly attach them.
:::

:::tabs key:pref
== CLI

First make sure you have the latest version by pulling remote version

```bash
reasonai api pull
```

Next open the config file of the API you want to link the function to in your editor
`./reason/integrals/yourAPI/yourAPI.json`

Assuming this as our current {{$frontmatter.integral_name}}, let's add the getWeatherTempByCity function

```json
{
  "name": "WeatherAPI",
  "instruction": "Given a city name, call the getWeatherTempByCity funtion and return the results in JSON",
  "model": "gpt-4o-mini",
  "responseFormat": "json_object"
}
```

Our resulting {{$frontmatter.integral_name}} will be:

```js
{
  "name": "WeatherAPI",
  "instruction": "Given a city name, call the getWeatherTempByCity funtion and return the results in JSON",
  "model": "gpt-4o-mini",
  "responseFormat": "json_object",
  "tools": [ // [!code ++:6]
    {
      "name": "getWeatherTempByCity",
      "type": "function"
    }
  ]
}
```

Great! Now let's run this command to deploy the {{$frontmatter.integral_name}} so we can start using it with the function:

```bash
reasonai function push
```

That's it. Your {{$frontmatter.func_names}} is deployed and live

:::

## Next Steps

You've just linked a {{$frontmatter.func_name}} to a {{$frontmatter.integral_name}}

- next look at how to [test your {{$frontmatter.integral_name}}](./run)
