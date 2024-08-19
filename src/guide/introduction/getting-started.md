---
app_name: 'Reason AI'
app_name_short: 'Reason'
integral_name: 'Integral'
integral_names: 'Integrals'
func_name: 'Function'
func_names: 'Functions'
---

# Getting Started

### Get an account

- Sign up for a [{{$frontmatter.app_name}} account](https://reasonai.dev) account

## Try it Online

You can use {{$frontmatter.app_name}} from the [web console](https://reasonai.dev) without any installation

## Installation

### Prerequisites

- Generate an API key under [Settings](https://reasonai.dev/settings/api-keys)
- Get a [Node.js](https://nodejs.org/en) version 18 or higher
- A terminal to run CLI commands
- An IDE to edit IaC configuration

{{$frontmatter.app_name}} is available as an npm package:
::: code-group

```bash [npm]
npm install reasonai
```

```bash [yarn]
yarn add reasonai
```

:::

### Setup

{{$frontmatter.app_name}} can be used on its own or as part of an existing project.
The setup will create a `./reason` directory where everything related to {{$frontmatter.app_name}} will be stored

::: code-group

```bash [npm]
npx reasonai init
```

```bash [yarn]
yarn reasonai init
```

:::

You will be taken through a few setup questions:

That's it!, you are all set up.

## Create Your First {{$frontmatter.integral_name}}

To create an {{$frontmatter.integral_name}}, simply pass in the required parameters and deploy your environment

:::tabs key:pref
== CLI

Run this command and follow the prompts

```fish
reasonai add api

# Follow the wizard and provide the following responses
> Enter API name: # getStarSignAPI
> Write the main instruction for the model:
#   Given a person's birth month and year, you return their star sign as a json object containing {sign:string}
> Select a generative model to use:
#   gpt-4o-mini
> Response format: # JSON
```

When done, a new API will be created under `./reason/integrals/getStarSignAPI` with JSON config similar to the following:

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

<!-- == Curl -->
<!---->
<!-- ```bash -->
<!-- curl https://reasonai.dev/api/v1/integrals -->
<!--     -X POST -->
<!--     -H "Authorization: Bearer xxxxxx" -->
<!--     - d '{ -->
<!--         "name": "usersAPI", -->
<!--         "description": "handles users crud actions", -->
<!--         "model":"gpt-4o-mini", -->
<!--         "instruction": "You are a user api..." -->
<!--         ... -->
<!--         }' -->
<!-- ``` -->
<!---->
<!-- == fetch -->
<!---->
<!-- ```js -->
<!-- await fetch('https://reasonai.dev/api/v1/integrals', { -->
<!--   method: 'POST', -->
<!--   headers: { -->
<!--     Authorization: 'Beater xxxxxx', -->
<!--   }, -->
<!--   body: JSON.stringigy({ -->
<!--     name: 'usersAPI', -->
<!--     description: 'handles users crud actions', -->
<!--     model: 'gpt-4o-mini', -->
<!--     instruction: 'You are a user api...', -->
<!--     // ... -->
<!--   }), -->
<!-- }) -->
<!-- ``` -->

:::

::: tip
To learn more on effective prompt generations, [click here](../resources/prompt-generation)
<br/>
To see the full reference for creating an {{$frontmatter.integral_name}}, [click here](../../reference/api)
:::

## Adding {{$frontmatter.func_name}}

:::tabs key:pref
== CLI
{{$frontmatter.integral_names}} can call external functions to perform specific requests. Ensure that your prompt includes instructions on when to call the {{$frontmatter.func_name}}
First create the function

```bash
reasonai function add
```

Follow the wizard to create the function. The results will be available under `./reason/functions/yourFunctionName`

```json
{
  "name": "getCharacterByName",
  "description": "Gets a Futurama character by name and returns an object representing the character",
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

Modify the function as necessary and deploy when ready

```bash
reasonai function push
```

Once your function is ready, you can add it to the {{$frontmatter.integral_name}} by modifying the config `./reason/integrals/yourAPIName/yourAPIName.json`

```js
{
  "name": "charactersAPI",
  "instruction": "When asked to get a list of characters, you call the getCharacters function When given Futurama character name, you call the getcharacterbyname function return results in JSON format",
  "model": "gpt-4o-mini",
  "responseFormat": "json_object",
  "tools": [    // [!code ++:10]
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

## File Structure

After running the setup, the generated file structure should look like this if you chose JSON:

```plaintext
./reason/
│
├── .meta.json
└── config.json

```

This is an empty {{$frontmatter.app_name_short}} project with no {{$frontmatter.func_names}} or {{$frontmatter.integral_names}} . To get started, add an {{$frontmatter.integral_name}}
::: code-group

```bash [npm]
npx reasonai api add
```

```bash [yarn]
yarn reasonai api add
```

:::

All your configuration goes into separate sub directories under the main reason directory.

E.g after adding a few {{$frontmatter.func_names}} and {{$frontmatter.integral_names}}, you should have something similar to this:

```plaintext
./reason
├── integrals/
│   └── weatherAPI/
│       └── weatherAPI.json
└── functions/
    ├── getWeather/
    |   └── getWeather.json
    └── getHumidity/
        └── getHumidity.json
```

## The Config File

The config file stores the {{$frontmatter.app_name}} configuration as well as your API key login credentials

```json
{
  "baseDir": "./reason",
  "metaDataFile": ".meta.json",
  "configFormat": "json",
  "auth": {
    "apiKey": "*******",
    "organizationId": "*********",
    "type": "apiKey",
    "id": "********",
    "createdAt": "2024-08-07T22:26:08.465Z",
    "expiresAt": null,
    "user": {
      "id": "**********",
      "email": "you@yourorg.com",
      "firstName": "Jenny",
      "lastName": "Server"
    },
    "loginDate": "2024-08-08T00:57:07.286Z"
  }
}
```

## What's Next?

Now that your environment is setup,

- Take a look at the [Concepts](../introduction/concepts) page to better understand how {{$frontmatter.app_name}} works
- You might also want to look at our [CLI Documentation](../../reference/cli) to learn how it works
- Or jump straight into our [APIs](../../reference/api) to connect your services
