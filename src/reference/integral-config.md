---
title: 'Integral Configuration'
app_name: 'Reason AI'
app_name_short: 'Reason'
func_names: 'Reason Functions'
func_name: 'Reason Function'
integral_names: 'Integrals'
integral_name: 'Integral'
---

# {{$frontmatter.integral_name}} Configuration

This section shows the {{$frontmatter.integral_name}} configuration object, the fields in it and what values they accept

## {{$frontmatter.integral_name}} Config

Reference object for configuring an {{$frontmatter.integral_name}}.
We support configurations in both YAML and JSON depending on what you chose when setting up your CLI

::: tip
The model you choose combined with instructions and linked {{$frontmatter.func_names}} directly contribute to your cost
Learn to write concie prompts [here](../guide//resources/prompt-generation)
:::

::: code-group

```js [json]
{
    // Required: true
    // Give a name to your API.
    // This name may be passed to generative model, so make it as
    // relevant and descriptive as possible. Avoid spaces
    "name": "string"

    // Required: true
    // This represents the system instruction that will be passed to the generative model.
    // Outline all the steps you need the model to perform here.
    // Be as detailed yet as concise as possible
    "instruction": "string"

    // Required: true
    // Choose a generative model to run your requests.
    // See the list of supported models for mode info
    "model": "enum"

    // Required: false
    // Use this to specify which format you want the results to be in.
    // This works especially well with OpenAI models.
    // Reason trys to interpolate json response if json_object is set
    // For OpenAI, ensure you repeat the word JSON in the instruction
    "responseFormat": "json_object|text"

    // Required: false
    // Use tools to add functions to the Reason API
    // Functions should be created before they can be linked here
    "tools": [
        {
        // Required: true
        // Name of the function as defined in Reason Functions
        "name": "string",
        // Required: true
        // The type of tool being attached.
        // Only supported value is 'function'
        "type": "function"
        }
    ]
}

```

```yaml [yaml]
# Required: true
# Give a name to your {{$frontmatter.integral_name}}.
# This name may be passed to generative model, so make it as
# relevant and descriptive as possible. Avoid spaces
name: 'string'

# Required: true
# This represents the system instruction that will be passed to the generative model.
# Outline all the steps you need the model to perform here.
# Be as detailed yet as concise as possible
instruction: 'string'

# Required: true
# Choose a generative model to run your requests.
# See the list of supported models for mode info
model: 'enum'

# Required: false
# Use this to specify which format you want the results to be in.
# This works especially well with OpenAI models.
# Reason trys to interpolate json response if json_object is set
# For OpenAI, ensure you repeat the word JSON in the instruction
responseFormat: 'json_object|text'

# Required: false
# Use tools to add functions to the Reason API
# Functions should be created before they can be linked here
tools:
  # Required: true
  # Name of the function as defined in Reason Functions
  - name: 'string'
    # Required: true
    # The type of tool being attached.
    # Only supported value is 'function'
    type: 'function'
```

:::
