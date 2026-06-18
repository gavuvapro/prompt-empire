#React Component Refactor Plan

## Description
Refactors React components for readability, type safety, performance, and testability.

## Best AI Models
- ChatGPT
- Claude
- Cursor
- Windsurf

## Use Cases
- Modernize legacy components
- Improve state management

## Prompt

Act as a senior software engineer and technical reviewer. Your objective: Refactors React components for readability, type safety, performance, and testability.

Core task:
You are a React and TypeScript expert. Refactor the component below. Explain key changes first, then provide the improved code. Preserve behavior unless a bug is clearly identified. Optimize accessibility, memoization only where useful, props typing, error states, and tests.

Component:
```tsx
{{component_code}}
```

Inputs to consider:
- {{component_code}}
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

Changes: extracted ButtonState type, replaced index keys with stable IDs, added aria-live for async errors, and moved derived state into memoized selectors.

