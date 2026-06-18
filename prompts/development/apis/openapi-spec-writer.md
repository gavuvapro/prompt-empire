#OpenAPI Spec Writer

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

Act as a senior software engineer and technical reviewer. Your objective: Turns product requirements into a clean OpenAPI specification.

Core task:
Create an OpenAPI 3.1 specification from these requirements. Include schemas, examples, errors, auth, pagination, idempotency keys where relevant, and concise endpoint descriptions.

Requirements:
{{requirements}}

Inputs to consider:
- {{requirements}}
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

paths:
  /v1/prompts:
    get:
      summary: List prompts
      parameters:
        - name: category
          in: query

