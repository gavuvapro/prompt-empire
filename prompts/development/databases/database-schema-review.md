# Database Schema Review

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

Act as a database architect. Review this schema for normalization, constraints, indexes, query patterns, migrations, multi-tenancy, security, and backup implications. Return concrete DDL improvements.

Schema:
{{schema}}

Expected queries:
{{queries}}

## Example Output

Add a composite index on (organization_id, created_at DESC) for the activity feed query and enforce unique slugs per organization.
