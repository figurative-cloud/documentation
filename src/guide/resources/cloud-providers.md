---
api_name: 'Inference API'
api_names: 'Inference APIs'
functions_name: 'Reason Function'
functions_names: 'Reason Functions'
cmd: 'reasonai'
cmd_api: 'api'
cmd_fn: 'function'
app_name: 'Reason AI'
---

# Supported Providers

{{$frontmatter.app_name}} supports making requets to several third-party services through [{{$frontmatter.functions_names}}](../functions/create)

## Services

Currently, we support select services from the following Cloud providers in addition to general REST APIs.
We will continue to open access to more services from the providers later this year:

| Provider | Rest API | Serverless Functions | Postgres Database |
| -------- | -------- | -------------------- | ----------------- |
| AWS      | ✓        | ✓                    | Later this year   |
| GCP      | ✓        | Later this year      | Later this year   |
| Azure    | ✓        | Later this year      | Later this year   |
| Custom   | ✓        | ✗                    | Later this year   |

## Authentication Methods

Making calls to these third-party services may require Authentication depending on your setup.
{{$frontmatter.app_name}} supports the following Authentication methods at the moment.

| Provider | Bearer token | Access keys     | Oauth           |
| -------- | ------------ | --------------- | --------------- |
| AWS      | ✓            | Later this year | Later this year |
| GCP      | ✓            | Later this year | Later this year |
| Azure    | ✓            | Later this year | Later this year |
| Custom   | ✓            | ✗               | Later this year |

::: tip
See [{{$frontmatter.functions_names}}](../../reference/function) for information on how to use each of these
:::
