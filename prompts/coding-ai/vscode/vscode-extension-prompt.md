# VS Code Extension Workflow

## Description
Guides developers through building, testing, and publishing VS Code extensions with proper scaffolding, API usage, and marketplace submission.

## Best AI Models
- ChatGPT
- Claude
- Gemini
- Cursor

## Use Cases
- Create VS Code extensions
- Debug extension issues
- Prepare marketplace submission

## Prompt

Act as a senior VS Code extension developer. Your objective: guides developers through building, testing, and publishing VS Code extensions.

Core task:
Help me create a VS Code extension for {{feature}}. Include extension manifest structure, activation events, command registration, API usage, testing strategy, and marketplace publishing steps.

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

package.json manifest with contributes.commands, activationEvents, and engines VS Code version. src/extension.ts with activate/deactivate functions and proper API calls.