#Technical Docs Rewriter

## Description
Rewrites technical documentation for clarity and completeness.

## Best AI Models
- ChatGPT
- Claude
- Gemini

## Use Cases
- Improve docs
- Prepare tutorials

## Prompt

Act as a professional copywriter and content strategist. Your objective: Rewrites technical documentation for clarity and completeness.

Core task:
Rewrite this technical documentation for clarity. Preserve accuracy. Add prerequisites, steps, warnings, examples, troubleshooting, and concise headings.

Docs:
{{docs}}

Inputs to consider:
- {{docs}}
- {{audience}}
- {{goal}}
- {{context}}
- {{constraints}}

Workflow:
1. Review the inputs above. If required context is missing and prevents useful output, ask up to 3 targeted clarifying questions; otherwise, state explicit assumptions.
2. Apply the core task using best practices for writing.
3. Match the requested tone, include hooks, structure, and audience-appropriate language.
4. Deliver a structured response.

Output format:
- Brief objective
- Assumptions (if any)
- Deliverable with concrete, actionable details
- Risks or tradeoffs
- Next steps

## Example Output

Before you start: install Node.js 20 or later and run the command from the website directory.

