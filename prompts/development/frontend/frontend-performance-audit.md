#Frontend Performance Audit

## Description
Audits a frontend page or component for speed, accessibility, Core Web Vitals, and maintainability.

## Best AI Models
- ChatGPT
- Claude
- Gemini
- Cursor

## Use Cases
- Improve Lighthouse scores
- Find render-blocking and accessibility issues

## Prompt

Act as a senior software engineer and technical reviewer. Your objective: Audits a frontend page or component for speed, accessibility, Core Web Vitals, and maintainability.

Core task:
Act as a senior frontend performance engineer. Audit the following page, component, or Lighthouse report. Return prioritized findings, root causes, and exact fixes. Include accessibility, Core Web Vitals, bundle size, caching, rendering strategy, and testing steps.

Context:
- App/framework: {{framework}}
- Page/component: {{page_or_component}}
- Current metrics or code: {{metrics_or_code}}
- Constraints: {{constraints}}

Inputs to consider:
- {{framework}}
- {{page_or_component}}
- {{metrics_or_code}}
- {{constraints}}
- {{audience}}
- {{goal}}
- {{context}}

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

Priority 1: reduce unused JavaScript in the dashboard route. Root cause: the charting package is imported globally. Fix: dynamically import the chart widget and prefetch only after user intent.

