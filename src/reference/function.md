---
title: 'Function Configuration'
api_name: 'Inference API'
api_names: 'Inference APIs'
functions_name: 'Reason Function'
functions_names: 'Reason Functions'
cmd: 'reasonai'
cmd_api: 'api'
cmd_fn: 'function'
app_name: 'Reason AI'
---

# {{$frontmatter.functions_name}} Configuration

This section shows the {{$frontmatter.functions_name}} configuration object, the fields in it and what values they accept

## function

Reference object for configuring an {{$frontmatter.functions_name}}.
We support configurations in both YAML and JSON depending on what you chose when setting up your CLI.
However, it is recommended to use JSON for {{$frontmatter.functions_names}} since they use JSON schema for the parameters field

::: tip
The model you choose combined with instructions and linked {{$frontmatter.functions_names}} directly contribute to your cost
Learn to write concie prompts [here](../guide/resources/prompt-generation)
:::

::: code-group

```js [json]
{
    // Required: true
    // Give a name to your Function.
    // This name will be passed to generative model, so make it as
    // relevant and descriptive as possible. Cannot contain spaces
    "name": "string"


    // Required: true
    // Give a meaninful descrition to the function,
    // Will be passed to the model
    "descrition": "string"

    // Required: true
    // Invocation is used to provide information on
    // the external service that will be called
    // See invocation definition below for more
    "invocation": Record<string, ...>

    // Required: false
    // Use the parameters object to pass input parameters
    // to the function and to the model
    // See below for examples
    "paramters": JSON Schema
}

```

:::

## function.invocation

The invocation field specifies how the function will be called/ invoked

::: code-group

```js [json]
{
    // Required: true
    // Represents the type of service the function is going to call
    "type": "rest_api|serverless_function"

    // Required: if type === "rest_api"
    // Use this to provide infor about APIs if your function tye is rest_api
    // When a string is passed, it should be a valid URL
    // When the URL object is passed, it should be resolvable to a valid URL
    "rest_api": "string" | {
        // the URL of the API to be called
        url: "string"
        // supports pramters from the RequestInfo object including
        // headers, body, method...
        ...RequestInfo
        }

    // Required: if type === "serverless_function"
    // Identifier of ther serverless_function to call
    // For AWS, use the lambda functions's ARN
    "serverless_function_id": "string"


    // Required: if type === "serverless_function"
    // Specify which provider is providing the service
    "provider": "aws|gcp|azure"
}

```

:::

## function.invocation.rest_api

if you pass an object to the rest_api field on invocation, it should match the following:

::: code-group

```js [json]
{
    // Required: true
    // Valid URL of the api endpoint
    // Supports variables e.g https://reasonai.dev/api/weather?city={cityName}
    // where cityName is an input to the function
    "url": "string"

    // Optional HTTP request method
    "method" :"GET|POST|..."

    // Optional request headers
    "headers": Record<string, string>

    // Optional request body
    // if it is object, it should be json serializable
    // You should also set content type to application/json in headers
    "body": string | Record<string, any>
}

```

:::

## function.parameters

the parameters field should be a valid JSON Schema.
Visit [JSON-Schema.org](https://json-schema.org/learn/getting-started-step-by-step#introduction-to-json-schema) to learn more.

::: info
The root object passed to parameters must be of type `object`
:::

Below are some examples:

::: tabs

== simple

```json
{
  "parameters": {
    "type": "object",
    "properties": {
      "cityName": {
        "type": "string",
        "description": "The name of the city who's temperature we are getting, given as a simple string"
      }
    },
    "required": ["cityName"]
  }
}
```

== array

```json
{
  "parameters": {
    "type": "object",
    "properties": {
      "title": {
        "type": "string"
      },
      "tags": {
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    },
    "required": ["title", "tags"]
  }
}
```

== nested

```json
{
  "parameters": {
    "type": "object",
    "properties": {
      "title": {
        "type": "string"
      },
      "author": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "age": {
            "type": "integer"
          }
        },
        "required": ["name", "age"]
      }
    },
    "required": ["title", "author"]
  }
}
```

:::
