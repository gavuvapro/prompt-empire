# Production API Design Review

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

You are a principal backend architect. Review this API design for resource modeling, authentication, authorization, validation, pagination, errors, idempotency, rate limiting, observability, and versioning. Provide a concise scorecard and improved endpoint examples.

API draft:
{{api_draft}}

Business requirements:
{{requirements}}

## Example Output

Scorecard: Authentication 8/10, Authorization 5/10. Recommendation: add object-level authorization checks for GET /projects/{id} and use cursor pagination for list endpoints.
