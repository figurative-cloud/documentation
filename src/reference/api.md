---
app_name: 'Reason AI'
app_name_short: 'Reason'
func_names: 'Reason Functions'
func_name: 'Reason Function'
integral_names: 'Integrals'
integral_name: 'Integral'
---

# API Reference

One endpoint to run them all 💯

## Run {{$frontmatter.integral_name}}

`POST /api/v1/inference/request`

Runs an {{$frontmatter.integral_name}} passing it input and expecting an output

### Input Parameters

| Parameter   | Type              | Description                                                                                                                                                            | Required | Default   |
| ----------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------- |
| `apiId`     | string            | The id of the {{$frontmatter.integral_name}} being used                                                                                                                | Yes      |           |
| `messages`  | `Message`[]       | An array of messages to send to the api                                                                                                                                | Yes      |           |
| `threadId`  | string, undefined | When passed, the message will be run on the provided thread. if no threadId is provided, each request will create a new thread and return its id                       | No       | undefined |
| `replyWith` | thread, message   | Specifies how much data to return in reply. if no `replyWith` is provided, it defaults to message. Setting it to thread returns the entire conversation on the thread. | No       | message   |

`Message`:

| Parameter | Type           | Description                                                                                                             | Required | Default |
| --------- | -------------- | ----------------------------------------------------------------------------------------------------------------------- | -------- | ------- |
| `role`    | user, assitant | The role of the assumed sender of the message. Generally, this will be set to `user` for requests you initiate          | Yes      |         |
| `content` | string         | The text content to send to the API. this can be JSON or in the form of a prompt. it Should contain function parameters | Yes      |         |

### Example Request

```json
{
  "apiId": "api_ksodf&s382js",
  "messages": [{ "role": "user", "content": "get the weather in Berlin" }],
  "replyWith": "message"
}
```

### Output Parameters

| Parameter  | Type      | Description                                   |
| ---------- | --------- | --------------------------------------------- |
| `id`       | string    | The {{$frontmatter.integral_name}} id         |
| `threadId` | string    | Id of the thread on whicht he request was run |
| `messages` | `Message` | Object of the message returned                |

`Message`:

| Parameter | Type              | Description                                                                                         |
| --------- | ----------------- | --------------------------------------------------------------------------------------------------- |
| `id`      | string, undefined | Id of the message                                                                                   |
| `role`    | user, assitant    | The role of the assumed sender of the message. Will be `assistant` if replyWith is set to `message` |
| `content` | `Content`[]       | List of contents returned by the call                                                               |

`Content`:

| Parameter | Type   | Description                                                                         |
| --------- | ------ | ----------------------------------------------------------------------------------- |
| `type`    | text   | The type of the content. Expected to be text in this version                        |
| `text`    | string | The actual message returned. Will be JSON string if `responseFormat` is set to JSON |

### Example Response

```json
{
  "id": "dsIW3JaX_J_LwwQ2pURlT",
  "threadId": "thread_6zY61bNiZX08Yt15MVolgaue",
  "messages": {
    "id": "msg_54vENtcnHHojV8sBL7HkB7ol",
    "role": "assistant",
    "content": [
      {
        "type": "text",
        "text": "{\"value\":23,\"unit\":\"celcius\"}"
      }
    ]
  }
}
```
