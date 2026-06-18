# OWASP Threat Model

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

Act as an application security lead. Threat model this system using STRIDE and OWASP Top 10. Identify assets, trust boundaries, threats, abuse cases, mitigations, residual risk, and test cases.

System description:
{{system_description}}

Architecture diagram or notes:
{{architecture}}

## Example Output

Threat: Broken access control on prompt ownership. Mitigation: enforce server-side organization membership checks on every write operation.
