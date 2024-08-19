---
app_name: 'Reason AI'
app_name_short: 'Reason'
func_names: 'Reason Functions'
func_name: 'Reason Function'
integral_names: 'Integrals'
integral_name: 'Integral'
---

# Running an {{$frontmatter.feature_single}}

The {{$frontmatter.integral_name}} is where you create your API handlers.
A single {{$frontmatter.integral_name}} can handle multiple traditional API requests as defined by your prompt

> [!NOTE]
> You need to [setup your environment](../introduction/getting-started) before creating {{$frontmatter.integral_name}}

## How to Run {{$frontmatter.integral_name}}

You can run your {{$frontmatter.integral_name}} by calling the REST API endpoint or by testing locally using the CLI tool

## Testing locally

:::tabs key:pref
== CLI

First make sure you have the latest version by pulling remote version

```bash
reasonai api pull
```

Next run the test command and follow the prompts to test locally

```bash
reasonai api run <yourAPIName>
```

The command will ask you for a full message to send to the API.
Your message should include values for any function variables if any

::: tip
You can also test the {{$frontmatter.integral_name}} on the web console
:::

Given the example API below, we could formulate a message as follows:

```json
{
  "name": "charactersAPI",
  "instruction": "Given an employee id, you call a function to get the employee data"
  "model": "gpt-4o-mini",
  "responseFormat": "json_object",
  "tools": [
    {
      "name": "getEmployeeDataById",
      "type": "function"
    }
  ]
}
```

Message:
`get data for employee with id 123`

With OpenAI models, you can specify the format of the response in the instruction or even the request message
With Anthropic however, it is best to let a function return the desired response if you are not getting the correct JSON.

{{$frontmatter.app_name_short}} {{$frontmatter.integral_name}} attempts to extract json from the response if you have set the responseFormat to JSON on the API

That's it. Your {{$frontmatter.integral_name}} is deployed and live

::: tip
To learn more on effective prompt generations, [click here](../resources/prompt-generation)
:::

## Running Live

The live API is available by calling the {{$frontmatter.app_name}} endpoint:

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
To see the full API reference for running your {{$frontmatter.integral_name}}, [click here](../../reference/api)
:::

## Next Steps

You've learned how to run an {{$frontmatter.integral_name}}

- next look at how to [generate prompts for {{$frontmatter.integral_name}}](../resources/prompt-generation)
- Or [Generate descriptions and inputs](../../reference/function) to your {{$frontmatter.app_name_short}} Functions
