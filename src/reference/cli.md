---
title: 'CLI Reference'
app_name: 'Reason AI'
app_name_short: 'Reason'
func_names: 'Reason Functions'
func_name: 'Reason Function'
integral_names: 'Integrals'
integral_name: 'Integral'
cmd: 'reasonai'
cmd_integrals: 'integrals'
cmd_fn: 'functions'
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

Run this command to check the status of all {{$frontmatter.integral_names}} and {{$frontmatter.func_names}}

#### Parameters

None

## Pulling from remote

`{{$frontmatter.cmd}} pull`

Run this command to pull all {{$frontmatter.integral_names}} and {{$frontmatter.func_names}} from remote

#### Parameters

None

## Deploying all changes

`{{$frontmatter.cmd}} pull`

Run this command to deploy all {{$frontmatter.integral_names}} and {{$frontmatter.func_names}} changes

#### Parameters

None

<br />
<br />

# {{$frontmatter.integral_names}}

## Creating {{$frontmatter.integral_name}}

`{{$frontmatter.cmd}} {{$frontmatter.cmd_integrals}} add`

Run this command to initiate the wizard for adding an {{$frontmatter.integral_name}}

#### Parameters

None

## Deploying {{$frontmatter.integral_name}}

`{{$frontmatter.cmd}} {{$frontmatter.cmd_integrals}} push`

Run this command to push your local changes for {{$frontmatter.integral_names}}

#### Parameters

None

## Checking {{$frontmatter.integral_name}} status

`{{$frontmatter.cmd}} {{$frontmatter.cmd_integrals}} status`

Run this command to check the status of {{$frontmatter.integral_names}} between local and remote

#### Parameters

None

## Running {{$frontmatter.integral_name}}

`{{$frontmatter.cmd}} {{$frontmatter.cmd_integrals}} run <name>`

Run this command to run the {{$frontmatter.integral_names}} with the given name

#### Parameters

`name`: Name of the {{$frontmatter.integral_name}} to run

<br />
<br />

# {{$frontmatter.func_names}}

## Creating {{$frontmatter.func_name}}

`{{$frontmatter.cmd}} {{$frontmatter.cmd_fn}} add`

Run this command to initiate the wizard for adding an {{$frontmatter.func_name}}

#### Parameters

None

## Deploying {{$frontmatter.func_name}}

`{{$frontmatter.cmd}} {{$frontmatter.cmd_integrals}} push`

Run this command to push your local changes for {{$frontmatter.func_name}}

#### Parameters

None

## Checking {{$frontmatter.func_name}} status

`{{$frontmatter.cmd}} {{$frontmatter.cmd_integrals}} status`

Run this command to check the status of {{$frontmatter.func_names}} between local and remote

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
