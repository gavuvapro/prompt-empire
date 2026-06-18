# Security Policy

Prompt Empir follows secure-by-default design, least privilege, defense in depth, and OWASP Top 10 awareness.

## Supported versions

The `main` branch is actively supported.

## Reporting a vulnerability

Please do not open a public issue for security vulnerabilities.

Email: `security@example.com`

Include:

- Description of the vulnerability.
- Reproduction steps.
- Impact.
- Suggested fix, if available.

We aim to acknowledge reports within 72 hours.

## Security practices

- Markdown is rendered with sanitization.
- External user-generated scripts are not executed.
- Prompt content is static and reviewed through pull requests.
- Dependencies should be updated regularly.
- Secrets must never be committed.
- Contributions should avoid malicious prompt injection patterns intended to harm users.
