# Contributing to Prompt Empir

Thank you for helping improve Prompt Empir.

## How to contribute

1. **Fork the repository.**
2. **Create a branch.**
   ```bash
   git checkout -b add/my-useful-prompt
   ```
3. **Add prompts** in the appropriate `prompts/<category>/<subcategory>/` folder.
4. **Follow the prompt format** exactly.
5. **Regenerate the website index.**
   ```bash
   cd website
   npm install
   npm run generate:index
   ```
6. **Run checks.**
   ```bash
   npm run lint
   npm run typecheck
   npm run build
   ```
7. **Submit a pull request** with a clear description.

## Prompt quality bar

A good prompt should:

- Have a specific professional use case.
- Define role, context, constraints, and output format.
- Be reusable with placeholders like `{{context}}`.
- Avoid unsafe, deceptive, or harmful instructions.
- Include a realistic example output.
- List best AI models/platforms.

## File naming

Use lowercase kebab-case:

```txt
prompts/development/security/owasp-threat-model.md
```

## Conventional commits

Use Conventional Commits:

- `feat(prompts): add SaaS pricing prompt`
- `fix(website): improve model filter accessibility`
- `docs: update contribution guide`

## Pull request checklist

- [ ] Prompt follows required Markdown format.
- [ ] Content is original or properly licensed.
- [ ] Prompt is safe and professional.
- [ ] Website index was regenerated.
- [ ] I agree to license my contribution under MIT.
