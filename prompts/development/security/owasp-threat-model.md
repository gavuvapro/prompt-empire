#OWASP Threat Model

## Description
Builds a practical threat model using OWASP guidance and secure-by-default principles.

## Best AI Models
- ChatGPT
- Claude
- Gemini

## Use Cases
- Review new features
- Prepare security design docs

## Prompt

Act as a senior software engineer and technical reviewer. Your objective: Builds a practical threat model using OWASP guidance and secure-by-default principles.

Core task:
Act as an application security lead. Threat model this system using STRIDE and OWASP Top 10. Identify assets, trust boundaries, threats, abuse cases, mitigations, residual risk, and test cases.

System description:
{{system_description}}

Architecture diagram or notes:
{{architecture}}

Inputs to consider:
- {{system_description}}
- {{architecture}}
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

Threat: Broken access control on prompt ownership. Mitigation: enforce server-side organization membership checks on every write operation.

