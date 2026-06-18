#Production API Design Review

## Description
Reviews REST or GraphQL API designs for correctness, security, scalability, and developer experience.

## Best AI Models
- ChatGPT
- Claude
- DeepSeek
- GitHub Copilot

## Use Cases
- Validate endpoint design
- Improve API documentation

## Prompt

Act as a senior software engineer and technical reviewer. Your objective: Reviews REST or GraphQL API designs for correctness, security, scalability, and developer experience.

Core task:
You are a principal backend architect. Review this API design for resource modeling, authentication, authorization, validation, pagination, errors, idempotency, rate limiting, observability, and versioning. Provide a concise scorecard and improved endpoint examples.

API draft:
{{api_draft}}

Business requirements:
{{requirements}}

Inputs to consider:
- {{api_draft}}
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

Scorecard: Authentication 8/10, Authorization 5/10. Recommendation: add object-level authorization checks for GET /projects/{id} and use cursor pagination for list endpoints.

