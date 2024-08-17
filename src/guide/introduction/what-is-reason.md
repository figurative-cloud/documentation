# What is Reason AI

Reason AI is a web and CLI based tool designed to build fast and robust AI-based web APIs.
Basically, Reason AI takes your IaC configuration, your database, serverless functions and more, and puts them together to form a hub that can handle multiple kinds of user queries

> [!NOTE]
> Want to try it now? See the [Quickstart](../introduction/getting-started) section

## Use cases

> The use cases of Reason AI are only limited by your imagination. Here are a few that we are excited about:

- **Report generation:**

  Use Reason functions to feed your data into the API, tell it how you want the results and voila! You have a working reporting endpoint without writing any code

- **Chat applications:**

  Reason's API supports threaded responses and streaming that can be used to track conversations.
  This can be used to power your custom chatbot when combined with custom data training using files, web links or questions

- **Contact forms:**

  You can use Reason AI to submit contact forms, categorise the response, store it in the appropriate database and send out lead emails,
  all from a single API endpoint, while taking advantage of AI capabilities available to you

- **Request chaining:**

  Want to perform a long series of requests? Use a Reason API is the center stage, connect the various functions and write out the steps to complete the whole flow.
  Reason will call out each function, using its data to call the next and then return the results in text or JSON format

## Why use Reason API

Reason AI promises a single interface to interact with your data.
An interface that includes access to the best AI models, all cloud providers as well as your custom data while reducing development time

Reason AI seeks to deliver on the premise of an LLM OS, where tokens and context windows become the new compute and memory.
Join the AI cloud revolution and take advantage of built in features including:

- **_Automatic request logging_** using threads that keep track of user requests, and responses without extra code
- **_Generative error reporting and logging_** done on the fly just by connecting external storage function
- **_Built in alarms and notifications_** sent by Reason AI when specific issues are encountered
- **_Generative or prepared translations_** to customize responses sent to different customers
- **_Analytics tracking_** done by passing extra information to the API

## Built by developers, for developers

> Reason AI is built from the ground up to make for a seamless dev experience. There are several ways to interact with the platform.

- [Web console:](https://reasonai.dev): While logged in to the web console, you can create and manage APIs as well as functions
- [CLI Tool](../../reference/cli): Use the CLI tool for a local dev experience. Using IaC configuration, you can create, update and manage your APIs and functions completely out of the browser
- [REST APIs](../../reference/api): We are constantly expanding the capabilities of the REST APIs to allow similar access and customization of your environment

### A note on performance

Reason APIs are as fast as the underlying model powering the Genrative AI functionalities as well as the speed of the connection to your third party services. For highly performant scenarios, this tool may not be yet ideal

## Supported platforms

Reason AI is completely pluggable and supports all cloud providers, Rest APIs and more.
To make for standardized development, our IaC configuration format is platform agnostic, allowing you to simply fip the switch to move from one provider to the other.

We continuously update the officially supported services that can be connected to the APIs.
At the moment, we support the following AI model providers:

- Anthropic
- Open AI

Also, we aim to support multiple services from at least the following cloud providers:

- AWS
- GCP
- Azure
- Digital Ocean
