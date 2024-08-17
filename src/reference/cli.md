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

# CLI Reference

All of these commands are available locally. 🌌

For more information run:

`{{$frontmatter.cmd}} help`

## Initialization

`{{$frontmatter.cmd}} init`

Run this command to initialize the local environment. Needed before any other commands can work

#### Parameters

None

## Checking general status

`{{$frontmatter.cmd}} status`

Run this command to check the status of all {{$frontmatter.api_names}} and {{$frontmatter.functions_names}}

#### Parameters

None

## Pulling from remote

`{{$frontmatter.cmd}} pull`

Run this command to pull all {{$frontmatter.api_names}} and {{$frontmatter.functions_names}} from remote

#### Parameters

None

## Deploying all changes

`{{$frontmatter.cmd}} pull`

Run this command to deploy all {{$frontmatter.api_names}} and {{$frontmatter.functions_names}} changes

#### Parameters

None

<br />
<br />

# {{$frontmatter.api_names}}

## Creating {{$frontmatter.api_name}}

`{{$frontmatter.cmd}} {{$frontmatter.cmd_api}} add`

Run this command to initiate the wizard for adding an {{$frontmatter.api_name}}

#### Parameters

None

## Deploying {{$frontmatter.api_name}}

`{{$frontmatter.cmd}} {{$frontmatter.cmd_api}} push`

Run this command to push your local changes for {{$frontmatter.api_names}}

#### Parameters

None

## Checking {{$frontmatter.api_name}} status

`{{$frontmatter.cmd}} {{$frontmatter.cmd_api}} status`

Run this command to check the status of {{$frontmatter.api_names}} between local and remote

#### Parameters

None

## Running {{$frontmatter.api_name}}

`{{$frontmatter.cmd}} {{$frontmatter.cmd_api}} run <name>`

Run this command to run the {{$frontmatter.api_names}} with the given name

#### Parameters

`name`: Name of the {{$frontmatter.api_name}} to run

<br />
<br />

# {{$frontmatter.functions_names}}

## Creating {{$frontmatter.functions_name}}

`{{$frontmatter.cmd}} {{$frontmatter.cmd_fn}} add`

Run this command to initiate the wizard for adding an {{$frontmatter.functions_name}}

#### Parameters

None

## Deploying {{$frontmatter.functions_name}}

`{{$frontmatter.cmd}} {{$frontmatter.cmd_api}} push`

Run this command to push your local changes for {{$frontmatter.functions_name}}

#### Parameters

None

## Checking {{$frontmatter.functions_name}} status

`{{$frontmatter.cmd}} {{$frontmatter.cmd_api}} status`

Run this command to check the status of {{$frontmatter.functions_names}} between local and remote

#### Parameters

None

<br />
<br />

# Authentication

## Log in to {{$frontmatter.app_name}}

`{{$frontmatter.cmd}} login`

Run this command to log in on the CLI with an [ API Key ](https://reasonai.dev/settings/api-keys)

#### Parameters

None

## Log out of {{$frontmatter.app_name}}

`{{$frontmatter.cmd}} logout`

Run this command to sign out on the CLI

#### Parameters

None

## Check Auth status

`{{$frontmatter.cmd}} whoami`

Run this command to check login status

#### Parameters

None

## Reset

`{{$frontmatter.cmd}} reset`

Run this command to completly remove the local environment

#### Parameters

None
