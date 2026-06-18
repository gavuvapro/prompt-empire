# IDE Prompt Library Integration

## Description
Creates IDE extensions or snippets to integrate a local prompt library for quick insertion and browsing within development environments.

## Best AI Models
- ChatGPT
- Claude
- Gemini
- Cursor

## Use Cases
- Integrate prompt library into VS Code
- Create IDE snippets for common prompts
- Build prompt search extensions

## Prompt

Act as a senior IDE extension architect. Your objective: creates IDE integration for prompt libraries.

Core task:
Create an IDE extension that allows users to browse and insert prompts from {{prompt_library_path}} into their editor. Include file watching for updates, fuzzy search interface, snippet insertion, and keyboard shortcut configuration.

Inputs to consider:
- {{prompt_library_path}}
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

Extension loads prompts from ./prompts/**/*.md, provides Ctrl+P quick search panel, inserts selected prompt at cursor with {{placeholder}} preserved.