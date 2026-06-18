#Typography System Designer

## Description
Designs a typography scale and usage rules for digital products.

## Best AI Models
- ChatGPT
- Claude
- Gemini

## Use Cases
- Create design systems
- Improve readability

## Prompt

Act as a senior product designer and UX expert. Your objective: Designs a typography scale and usage rules for digital products.

Core task:
Design a responsive typography system for {{product}}. Include font pairing rationale, scale, line heights, weights, usage rules, accessibility considerations, and CSS variables.

Inputs to consider:
- {{product}}
- {{audience}}
- {{goal}}
- {{context}}
- {{constraints}}

Workflow:
1. Review the inputs above. If required context is missing and prevents useful output, ask up to 3 targeted clarifying questions; otherwise, state explicit assumptions.
2. Apply the core task using best practices for design.
3. Consider accessibility, visual hierarchy, brand consistency, and user context.
4. Deliver a structured response.

Output format:
- Brief objective
- Assumptions (if any)
- Deliverable with concrete, actionable details
- Risks or tradeoffs
- Next steps

## Example Output

--font-size-h1: clamp(2.25rem, 5vw, 4.5rem); line-height: 1.05; font-weight: 700;

