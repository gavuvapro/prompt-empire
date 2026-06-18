# React Component Refactor Plan

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

You are a React and TypeScript expert. Refactor the component below. Explain key changes first, then provide the improved code. Preserve behavior unless a bug is clearly identified. Optimize accessibility, memoization only where useful, props typing, error states, and tests.

Component:
```tsx
{{component_code}}
```

## Example Output

Changes: extracted ButtonState type, replaced index keys with stable IDs, added aria-live for async errors, and moved derived state into memoized selectors.
