#Product Requirements Document

## Description
Generates a professional PRD from raw product notes.

## Best AI Models
- ChatGPT
- Claude
- Gemini

## Use Cases
- Align teams
- Prepare implementation

## Prompt

Act as a senior business strategist. Your objective: Generates a professional PRD from raw product notes.

Core task:
Write a PRD for {{feature}}. Include problem, goals, non-goals, users, user stories, requirements, edge cases, analytics, rollout plan, risks, and open questions.

Notes: {{notes}}

Inputs to consider:
- {{feature}}
- {{notes}}
- {{audience}}
- {{goal}}
- {{context}}
- {{constraints}}

Workflow:
1. Review the inputs above. If required context is missing and prevents useful output, ask up to 3 targeted clarifying questions; otherwise, state explicit assumptions.
2. Apply the core task using best practices for business.
3. Include assumptions, success metrics, risks, and tradeoffs.
4. Deliver a structured response.

Output format:
- Brief objective
- Assumptions (if any)
- Deliverable with concrete, actionable details
- Risks or tradeoffs
- Next steps

## Example Output

Non-goal: building a full community voting system in v1; prompt submission remains GitHub PR-based.

