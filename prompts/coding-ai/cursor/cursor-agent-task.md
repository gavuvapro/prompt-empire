# Cursor Agent Task Spec

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

Write a Cursor task spec for implementing {{feature}}. Include files to inspect, acceptance criteria, constraints, test commands, edge cases, security notes, and a requirement to explain changes before editing.

## Example Output

Acceptance: npm run typecheck and npm run lint pass; search filters update without page reload.
