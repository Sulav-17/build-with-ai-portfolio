# Portfolio Maintenance

## Adding a Project

1. Add a typed project entry to `content/projects/index.ts`.
2. Use a unique lowercase slug.
3. Include only verified project facts.
4. Add a real GitHub URL when available.
5. Leave unavailable demo and video URLs as `null`.
6. Run the complete validation suite.

## Adding Screenshots

1. Store optimized files under:

```text
public/images/projects/<project-slug>/
```

2. Add typed screenshot objects containing:

- source
- meaningful alt text
- optional caption
- width
- height

3. Never add decorative placeholder screenshots.

## Updating Profile Content

Shared profile content lives in:

```text
content/profile.ts
```

Employment or education claims must not be added without verification.

## Quality Checks

Run:

```bash
npm run check
```

Manually review:

- desktop
- tablet
- mobile
- keyboard navigation
- external links
- missing routes
