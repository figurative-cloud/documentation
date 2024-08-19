---
integral_name: 'Integral'
---

# Concepts

Reason AI uses Generative AI models, connected to third-party services to handle API requests.
There are 3 parts to a functioning API setup, only one of which is required

### Reason {{$frontmatter.integral_name}}

Reason API is the central system that handles incoming requests, performs external calls and aggregates results to be returned to the caller.
It is the heart of the process. As a part of its functions, the API uses your generative AI model of choice to run your prompts.

- Receive and prepare request: The {{$frontmatter.integral_name}} receives incoming requests and sanitizes them for use. it performs other internal functions rate limiting and more.
- Run underlying model: The {{$frontmatter.integral_name}} calls the AI model to handle request and listens for responses
- Handle side effects: Everytime the model needs external information, the {{$frontmatter.integral_name}} uses your IaC config to perform that activity and then return the results to the model
- Response coalation: Once the model is done, the {{$frontmatter.integral_name}} performs other functions like logging and reporting before returning the results to the caller

## Reason Function

Similar to Cloud functions, a Reason function is an AI enabled function that is called with data from a generative model.
The {{$frontmatter.integral_name}} calls this task runner which decides on how to run the function specified in your IaC config.

Here are the steps taken by the Function caller

- Input validation
- Function method determination
- Function calling
- Results preparation

## Data Vectors

You can upload your custom data to the vector store. This information can be used to train any model you choose when creating your API.
Different data formats are supported including:

- Plain text
- Questions and Answers
- Url fetching
- File uploads

You can add or remove Data Vectors independent of the APIs and functions, making it easy to hotswap information without taking the API offline

## What's Next?

Now that you are familiar with the fundamentals:

- Lets walk through some [tutorials](../integrals/create) to get you started
