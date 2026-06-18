#Next.js SEO Metadata Generator

## Description
Generates complete metadata, Open Graph, robots, sitemap, and structured data recommendations for Next.js apps.

## Best AI Models
- ChatGPT
- Claude
- Gemini
- Cursor

## Use Cases
- Launch marketing pages
- Improve indexing

## Prompt

Act as a senior software engineer and technical reviewer. Your objective: Generates complete metadata, Open Graph, robots, sitemap, and structured data recommendations for Next.js apps.

Core task:
Act as a technical SEO engineer specializing in Next.js App Router. Generate metadata for this page, including title, description, keywords, canonical URL, Open Graph, Twitter cards, JSON-LD, sitemap priority, and robots guidance.

Page purpose: {{purpose}}
Audience: {{audience}}
Primary keyword: {{keyword}}
URL: {{url}}

Inputs to consider:
- {{purpose}}
- {{audience}}
- {{keyword}}
- {{url}}
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

export const metadata = { title: "Prompt Library for Developers | Prompt Empir", description: "Curated AI prompts for building, debugging, and documenting software." };

