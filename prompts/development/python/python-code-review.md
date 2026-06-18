# Python Code Review

## Description
Reviews Python code for correctness, readability, typing, performance, and security.

## Best AI Models
- ChatGPT
- Claude
- DeepSeek
- GitHub Copilot

## Use Cases
- Review pull requests
- Improve scripts

## Prompt

Act as a senior Python reviewer. Review the code for correctness, edge cases, typing, tests, security, performance, and idiomatic style. Provide severity, explanation, and patch suggestions.

```python
{{python_code}}
```

## Example Output

High: SQL query is constructed with string interpolation. Use parameterized queries to prevent injection.
