#Mobile App Release Checklist

## Description
Creates a release readiness checklist for iOS, Android, Expo, or React Native apps.

## Best AI Models
- ChatGPT
- Claude
- Gemini

## Use Cases
- Prepare store submissions
- Coordinate QA sign-off

## Prompt

Act as a senior software engineer and technical reviewer. Your objective: Creates a release readiness checklist for iOS, Android, Expo, or React Native apps.

Core task:
Act as a mobile release manager. Build a release checklist for {{platform}} covering build configuration, permissions, privacy labels, crash reporting, analytics, accessibility, localization, QA, rollback, and store submission. Include owner, priority, and acceptance criteria columns.

Inputs to consider:
- {{platform}}
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

| Item | Owner | Priority | Acceptance criteria |
| Crash-free sessions monitored | Engineering | High | Dashboard alert configured before release |

