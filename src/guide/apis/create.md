---
feature: 'Inference API'
appname: 'Reason AI'
appname_short: 'Reason'
---

# Getting Started with {{$frontmatter.feature}}

The {{$frontmatter.feature}} is where you create your API handlers. A single {{$frontmatter.feature}} can handle multiple traditional API requests as defined by your prompt

> [!NOTE]
> You need to [setup your environment](../introduction/getting-started) before creating {{$frontmatter.feature}}

## Creating Basic {{$frontmatter.feature}}

To create an {{$frontmatter.feature}}, simply pass in the required parameters to the CLI command and deploy. Let's go into detail

:::tabs key:pref
== CLI

Run this command and follow the prompts

```fish
reasonai api add

# Follow the wizard and provide the following responses
> Enter API name: # getStarSignAPI
> Write the main instruction for the model:
#   Write your prompt/instruction here. You can edit later
#   e.g Given a person's birth month and year, you return their star sign as a json object containing {sign:string}
> Select a generative model to use:
#   e.g claude-3.5-sonnet
> Response format: # JSON
```

When done, a new API will be created under `./reason/apis/getStarSignAPI` with JSON config similar to the following:

```json
{
  "name": "getStarSignAPI",
  "instruction": "Given a person's birth month and year, you return their star sign as a json object containing {sign:string}",
  "model": "gpt-4o-mini",
  "responseFormat": "json_object"
}
```

Great! Now let's run this command to deploy the API so we can start using it:

```bash
reasonai api push
```

That's it. Your {{$frontmatter.feature}} is deployed and live

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
To see the full API reference for creating an {{$frontmatter.feature}}, [click here](../../reference/api)
:::

## Next Steps

You've learned how to create an {{$frontmatter.feature}}, next:

- look at how to [create an external function](../functions/create)
- Or [link an existing function](../apis/link) to your {{$frontmatter.feature}}
