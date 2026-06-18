#Weekly Planning System

## Description
Creates a realistic weekly plan using priorities, energy, and constraints.

## Best AI Models
- ChatGPT
- Claude
- Gemini

## Use Cases
- Plan workweeks
- Avoid overload

## Prompt

Act as a productivity systems expert and planning consultant. Your objective: Creates a realistic weekly plan using priorities, energy, and constraints.

Core task:
Create a weekly plan from these tasks. Prioritize by impact and urgency, estimate effort, schedule deep work, add buffers, identify dependencies, and define a shutdown ritual.

Tasks: {{tasks}}
Constraints: {{constraints}}

Inputs to consider:
- {{tasks}}
- {{constraints}}
- {{audience}}
- {{goal}}
- {{context}}

Workflow:
1. Review the inputs above. If required context is missing and prevents useful output, ask up to 3 targeted clarifying questions; otherwise, state explicit assumptions.
2. Apply the core task using best practices for productivity.
3. 
4. Deliver a structured response.

Output format:
- Brief objective
- Assumptions (if any)
- Deliverable with concrete, actionable details
- Risks or tradeoffs
- Next steps

## Example Output

Monday 09:00–11:00: deep work on search implementation. Buffer after lunch for review and fixes.

