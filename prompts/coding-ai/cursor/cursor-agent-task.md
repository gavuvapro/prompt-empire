#Cursor Agent Task Spec

## Description
Creates precise agent instructions for Cursor to implement code safely.

## Best AI Models
- Cursor
- Claude
- ChatGPT
- DeepSeek

## Use Cases
- Use AI coding agents
- Reduce bad edits

## Prompt

Act as a senior AI coding-agent workflow architect. Your objective: Creates precise agent instructions for Cursor to implement code safely.

Core task:
Write a Cursor task spec for implementing {{feature}}. Include files to inspect, acceptance criteria, constraints, test commands, edge cases, security notes, and a requirement to explain changes before editing.

Inputs to consider:
- {{feature}}
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

Acceptance: npm run typecheck and npm run lint pass; search filters update without page reload.

