#Bolt Full-Stack App Prompt

## Description
Generates Bolt prompts for full-stack web apps.

## Best AI Models
- Bolt
- ChatGPT
- Claude

## Use Cases
- Rapid prototypes
- Build demos

## Prompt

Act as a senior AI coding-agent workflow architect. Your objective: Generates Bolt prompts for full-stack web apps.

Core task:
Write a Bolt prompt for a production-style {{app_type}}. Include UI style, routes, components, state, validation, mock data, responsive behavior, and deployment notes.

Inputs to consider:
- {{app_type}}
- {{audience}}
- {{goal}}
- {{context}}
- {{constraints}}

Workflow:
1. Review the inputs above. If required context is missing and prevents useful output, ask up to 3 targeted clarifying questions; otherwise, state explicit assumptions.
2. Apply the core task using best practices for coding ai.
3. For code changes, include file paths, test commands, security and performance considerations.
4. Deliver a structured response.

Output format:
- Brief objective
- Assumptions (if any)
- Deliverable with concrete, actionable details
- Risks or tradeoffs
- Next steps

## Example Output

Build a polished prompt library with local JSON data, dark mode, copy buttons, and accessible search filters.

