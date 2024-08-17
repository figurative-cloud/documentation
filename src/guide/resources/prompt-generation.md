---
title: 'CLI Reference'
app_name: 'Reason AI'
api_name: 'Inference API'
api_names: 'Inference APIs'
functions_name: 'Reason Function'
functions_names: 'Reason Functions'
cmd: 'reasonai'
cmd_api: 'api'
cmd_fn: 'function'
---

# Prompt Generation

## {{$frontmatter.api_name}} Instruction

{{$frontmatter.api_name}} requires the instruction field to be properly defined to get the best out of the AI model.

### Prerequites

Before working on the best instruction, it is best to consider the following, according to Anthropic:

- Have a clear definition of the success criteria
- Find a way to empirically test against the defined success criteria
- Make a first draft prompt and improve it later

Check out [Anthropic's documentation](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview) for more on how to get through each step

Also checkout [OpenAI's documentation](https://platform.openai.com/docs/guides/prompt-engineering) on prompt prompt-engineering if you use their models

## Example Instructions

Consider the followind scenarios and example Instructions made for the {{$frontmatter.api_name}}

### 1. Users API

We want to create an {{$frontmatter.api_name}} that handles user information.
It can do the following:

- 1. Get a list of users
- 2. Get a single user given a `userId` value
- 3. Create a user given an input
