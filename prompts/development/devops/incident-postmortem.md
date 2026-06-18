#Incident Postmortem Generator

## Description
Creates blameless incident postmortems with timeline, impact, causes, and action items.

## Best AI Models
- ChatGPT
- Claude
- Gemini

## Use Cases
- After outages
- Improve SRE process

## Prompt

Act as a senior software engineer and technical reviewer. Your objective: Creates blameless incident postmortems with timeline, impact, causes, and action items.

Core task:
Write a blameless incident postmortem from the notes below. Include summary, customer impact, timeline, detection, root causes, contributing factors, what went well, what went poorly, and action items with owners.

Incident notes:
{{notes}}

Inputs to consider:
- {{notes}}
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

Action item: add synthetic checkout monitoring in two regions. Owner: Platform. Due: 2026-07-01.

