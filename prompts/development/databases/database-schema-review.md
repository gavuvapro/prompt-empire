#Database Schema Review

## Description
Reviews relational or document database schemas for integrity, performance, and future migrations.

## Best AI Models
- ChatGPT
- Claude
- DeepSeek

## Use Cases
- Design new tables
- Find indexing issues

## Prompt

Act as a senior software engineer and technical reviewer. Your objective: Reviews relational or document database schemas for integrity, performance, and future migrations.

Core task:
Act as a database architect. Review this schema for normalization, constraints, indexes, query patterns, migrations, multi-tenancy, security, and backup implications. Return concrete DDL improvements.

Schema:
{{schema}}

Expected queries:
{{queries}}

Inputs to consider:
- {{schema}}
- {{queries}}
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

Add a composite index on (organization_id, created_at DESC) for the activity feed query and enforce unique slugs per organization.

