---
feature: 'Reason Functions'
feature_single: 'Reason Function'
appname: 'Reason AI'
appname_short: 'Reason'
api_name: 'Inference APIs'
api_name_short: 'Inference API'
---

# Linking {{$frontmatter.feature}} to {{$frontmatter.api_name}}

Use {{$frontmatter.feature}} to inject external services and functionality into your {{$frontmatter.api_name}}.
Unlike {{$frontmatter.api_name}}, functions are meant to handle single, specific tasks only

> [!NOTE]
> You need to [setup your environment](../introduction/getting-started) before creating {{$frontmatter.feature}}

## Linking a {{$frontmatter.feature_single}}

::: tip
While creating {{$frontmatter.api_name}}, you can select {{$frontmatter.feature}} to automatilly attach them.
:::

:::tabs key:pref
== CLI

First make sure you have the latest version by pulling remote version

```bash
reasonai api pull
```

Next open the config file of the API you want to link the function to in your editor
`./reason/apis/yourAPI/yourAPI.json`

Assuming this as our current {{$frontmatter.api_name_short}}, let's add the getWeatherTempByCity function

```json
{
  "name": "WeatherAPI",
  "instruction": "Given a city name, call the getWeatherTempByCity funtion and return the results in JSON",
  "model": "gpt-4o-mini",
  "responseFormat": "json_object"
}
```

Our resulting {{$frontmatter.api_name_short}} will be:

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

Great! Now let's run this command to deploy the {{$frontmatter.api_name_short}} so we can start using it with the function:

```bash
reasonai function push
```

That's it. Your {{$frontmatter.feature}} is deployed and live

:::

## Next Steps

You've just linked a {{$frontmatter.feature_single}} to a {{$frontmatter.api_name_short}}

- next look at how to [test your {{$frontmatter.api_name_short}}](./run)
