---
app_name: 'Reason AI'
app_name_short: 'Reason'
func_names: 'Reason Functions'
func_name: 'Reason Function'
integral_names: 'Integrals'
integral_name: 'Integral'
---

# AI Models

{{$frontmatter.app_name}} uses generative models to process API requests. We will continue to improve support for the existing models before adding new ones

Currently we support select models from Anthropic and OpenAI due to the compatibility of their APIs.
The tables below show the specific models we support at the moment. The list may be updated at any time to add more models or deprecate others.

## OpenAI

OpenAI models can be seen [here](https://platform.openai.com/docs/models)

| Model           | Description                                                               |
| --------------- | ------------------------------------------------------------------------- |
| `gpt-4o`        | Most advanced; best for complex tasks and detailed content.               |
| `gpt-4o-mini`   | affordable and intelligent small model for fast, lightweight tasks        |
| `gpt-4-turbo`   | Faster, cost-effective GPT-4; ideal for dynamic, high-speed applications. |
| `gpt-4`         | Previous set of high-intelligence model                                   |
| `gpt-3.5-turbo` | Great for general tasks; balances cost and performance.                   |

## Anthropic

Anthropic models can be seen [here](https://docs.anthropic.com/en/docs/about-claude/models)

| Model                        | Description                                                 |
| ---------------------------- | ----------------------------------------------------------- |
| `claude-3.5-sonnet-20240620` | Most advanced; best for complex tasks and detailed content. |
| `clause-3-haiku-20240229`    | Fast and cost-effective                                     |
| `claude-3-sonnet-20240229`   | Balance of speend and intelligence                          |
| `claude-3-opus-20240229`     | Excels at writing and complex tasks                         |

::: info
See the respective pages for information on context windows and token costs
:::

::: tip
See [{{$frontmatter.integral_names}}](../integrals/create) for information on how to use each of these models
:::
