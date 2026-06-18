# OpenAPI Spec Writer

## Description
Turns product requirements into a clean OpenAPI specification.

## Best AI Models
- ChatGPT
- Claude
- Gemini

## Use Cases
- Document APIs
- Generate SDKs

## Prompt

Create an OpenAPI 3.1 specification from these requirements. Include schemas, examples, errors, auth, pagination, idempotency keys where relevant, and concise endpoint descriptions.

Requirements:
{{requirements}}

## Example Output

paths:
  /v1/prompts:
    get:
      summary: List prompts
      parameters:
        - name: category
          in: query
