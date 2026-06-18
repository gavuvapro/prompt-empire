# IntelliJ Plugin Development Guide

## Description
Creates IntelliJ plugin functionality with proper PSI manipulation, extension points, and testing for JetBrains IDEs.

## Best AI Models
- ChatGPT
- Claude
- Gemini
- Cursor

## Use Cases
- Build IntelliJ plugins
- Implement PSI inspections
- Configure plugin.xml

## Prompt

Act as a senior IntelliJ plugin developer. Your objective: creates IntelliJ plugin functionality.

Core task:
Write an IntelliJ plugin for {{feature}}. Include plugin.xml structure, extension points, PSI element manipulation, action groups, testing with LightPlatformTestCase, and plugin repository deployment.

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

plugin.xml with <extensions> registration, MyAction extends AnAction with actionPerformed, and Gradle IntelliJ plugin setup for local testing.