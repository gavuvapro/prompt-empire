#Node.js Service Hardening

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

Act as a senior software engineer and technical reviewer. Your objective: Hardens Node.js services using secure defaults, validation, observability, and dependency hygiene.

Core task:
You are a Node.js security engineer. Review this service and propose hardening steps for input validation, auth, rate limiting, headers, logging, secrets, dependencies, error handling, and deployment.

Service details:
{{service_details}}

Code snippets:
{{code}}

Inputs to consider:
- {{service_details}}
- {{code}}
- {{audience}}
- {{goal}}
- {{context}}
- {{constraints}}

Workflow:
1. Review the inputs above. If required context is missing and prevents useful output, ask up to 3 targeted clarifying questions; otherwise, state explicit assumptions.
2. Apply the core task using best practices for development.
3. For code changes, include file paths, test commands, security and performance considerations.
4. Deliver a structured response.

Output format:
- Brief objective
- Assumptions (if any)
- Deliverable with concrete, actionable details
- Risks or tradeoffs
- Next steps

## Example Output

Add helmet with a strict content security policy, validate request bodies with Zod, and configure pino redaction for authorization headers.

