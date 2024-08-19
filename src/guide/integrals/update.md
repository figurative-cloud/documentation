---
app_name: 'Reason AI'
app_name_short: 'Reason'
func_names: 'Reason Functions'
func_name: 'Reason Function'
integral_names: 'Integrals'
integral_name: 'Integral'
---

# Updating an {{$frontmatter.integral_name}}

The {{$frontmatter.integral_name}} is where you create your API handlers.
A single {{$frontmatter.integral_name}} can handle multiple traditional API requests as defined by your prompt

> [!NOTE]
> You need to [setup your environment](../introduction/getting-started) before creating {{$frontmatter.integral_name}}

## How to Update an {{$frontmatter.integral_name}}

Updating an {{$frontmatter.integral_name}} involves modifying the configuration file and then running the push command

:::tabs key:pref
== CLI

First make sure you have the latest version by pulling remote version

```bash
reasonai api pull
```

Next open the config file of the API you want to edit in your editor
`./reason/integrals/yourAPI/yourAPI.json`

::: tip
You can also edit the {{$frontmatter.integral_name}} on the web console
:::

In this example, we want to change the model from open ai to anthropic, without changing anything else.
We will simply update _line 4_ from `gpt-4o-mini` to `claude-3-5-sonnet-20240620`

```json
{
  "name": "charactersAPI",
  "instruction": "When asked to get a list of characters, you call the getCharacters function. When given Futurama character name, you call the getcharacterbyname function.return results in JSON format",
  "model": "gpt-4o-mini",
  "responseFormat": "json_object",
  "tools": [
    {
      "name": "getCharacterByName",
      "type": "function"
    },
    {
      "name": "getCharacters",
      "type": "function"
    }
  ]
}
```

```js
{
  "name": "charactersAPI",
  "instruction": "When asked to get a list of characters, you call the getCharacters function. When given Futurama character name, you call the getcharacterbyname function.return results in JSON format",
  "model": "gpt-4o-mini", // [!code --]
  "model": "claude-3-5-sonnet-20240620", // [!code ++]
  "responseFormat": "json_object",
  "tools": [
    {
      "name": "getCharacterByName",
      "type": "function",
    },
    {
      "name": "getCharacters",
      "type": "function",
    },
  ],
}
```

After making the changes, save the file and proceed to deployment.

But first, we want to see all the changes we have locally.
To achieve this we run the `status command`:

```bash
reasonai api status
```

We should get something like:

```bash
# ...
> charactersAPI    Updated locally // [!code focus]
# ... other integrals
```

Now we are really ready to deploy:

```bash
reasonai api push
```

That's it. Your {{$frontmatter.integral_name}} is deployed and live

### Testing your API

```bash
curl https://reasonai.dev/api/v1/request \
  -X POST \
  -H "Authorization: Bearer <your api key here>" \
  -d '{
    "apiId": "<copy from ./reason/.meta.json>",
    "messages": [
      {
        "role": "user",
        "content": "what is the starsign of a person born in April 1992"
      }
    ]
  }'
```

You should receive results similar to:

```json
{
  "id": "<your-api-id>",
  "threadId": "thread_6zY61bNiZX08Yt15MVolgaue",
  "messages": {
    "id": "msg_54vENtcnHHojV8sBL7HkB7ol",
    "role": "assistant",
    "content": [
      {
        "type": "text",
        "text": "{\"sign\":\"Aries\"}"
      }
    ]
  }
}
```

:::

::: tip
To learn more on effective prompt generations, [click here](../resources/prompt-generation)
<br/>
To see the full API reference for creating an {{$frontmatter.integral_name}}, [click here](../../reference/api)
:::

## Next Steps

You've reached the end of the tutorial, you can also:

- [start from the begining](../introduction/getting-started)
- look at the [API Reference](../../reference/api)
- Or the [CLI Reference](../integrals/link) for more commands and configuration
  ``
