# Frontend Performance Audit

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

Act as a senior frontend performance engineer. Audit the following page, component, or Lighthouse report. Return prioritized findings, root causes, and exact fixes. Include accessibility, Core Web Vitals, bundle size, caching, rendering strategy, and testing steps.

Context:
- App/framework: {{framework}}
- Page/component: {{page_or_component}}
- Current metrics or code: {{metrics_or_code}}
- Constraints: {{constraints}}

## Example Output

Priority 1: reduce unused JavaScript in the dashboard route. Root cause: the charting package is imported globally. Fix: dynamically import the chart widget and prefetch only after user intent.
