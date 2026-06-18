# Node.js Service Hardening

## Description
Hardens Node.js services using secure defaults, validation, observability, and dependency hygiene.

## Best AI Models
- ChatGPT
- Claude
- DeepSeek

## Use Cases
- Prepare production launch
- Reduce security risk

## Prompt

You are a Node.js security engineer. Review this service and propose hardening steps for input validation, auth, rate limiting, headers, logging, secrets, dependencies, error handling, and deployment.

Service details:
{{service_details}}

Code snippets:
{{code}}

## Example Output

Add helmet with a strict content security policy, validate request bodies with Zod, and configure pino redaction for authorization headers.
