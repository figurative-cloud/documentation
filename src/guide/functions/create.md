---
app_name: 'Reason AI'
app_name_short: 'Reason'
func_names: 'Reason Functions'
func_name: 'Reason Function'
integral_names: 'Integrals'
integral_name: 'Integral'
---

# Getting Started with {{$frontmatter.func_names}}

Use {{$frontmatter.func_names}} to inject external services and functionality into your {{$frontmatter.integral_names}}.
Unlike {{$frontmatter.integral_names}}, functions are meant to handle single, specific tasks only

> [!NOTE]
> You need to [setup your environment](../introduction/getting-started) before creating {{$frontmatter.func_names}}

## Creating Basic {{$frontmatter.func_names}}

To create an {{$frontmatter.func_name}}, pass in the required parameters to the CLI command and deploy.
Let's go into detail

:::tabs key:pref
== CLI

First make sure you have the latest version by pulling remote version

```bash
reasonai api pull
```

Next, run this command and follow the prompts

```fish
reasonai function add

# Follow the wizard and provide the following responses
> Enter function name: # getWeatherTemperatureByCity
> Description:
#   Write a detailed description of what the function does
#   e.g Given a city name, the function returns the temperature and unit of measure for that city
> Invocation type:
#   This is how the external function will be run. Select the appropriate one and fill in its parameters
#   If your preferred method is not listed, edit the function after it is created to add it
#   e.g Rest API
> Follow the next prompts which will depend on what you selected in the previous step
> Provide mode of authentication if any, for the external resource
```

When done, a new {{$frontmatter.func_name}} will be created under `./reason/functions/getWeatherTemperatureByCity`
with JSON config similar to the following:

```json
{
  "name": "getCharacterByName",
  "description": "Gets a character by name",
  "parameters": {
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      }
    }
  },
  "invocation": {
    "type": "rest_api",
    "rest_api": {
      "url": "https://sampleapis.com/futurama/api/characters?name.first={name}"
    }
  }
}
```

Great! Now let's run this command to deploy the {{$frontmatter.func_name}} so we can start using it:

```bash
reasonai function push
```

That's it. Your {{$frontmatter.func_names}} is deployed and live

:::

## Next Steps

Oh bummer, our function doesn't do anything unless it is linked to an {{$frontmatter.integral_names}}

- You've learned how to create a {{$frontmatter.func_names}}, next look at how to [link an existing function](../integrals/link) to your {{$frontmatter.integral_names}}
