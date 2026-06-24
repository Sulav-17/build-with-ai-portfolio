# Launch Checklist

## Code

- [ ] lint passes
- [ ] type checking passes
- [ ] production build passes
- [ ] CI passes on GitHub
- [ ] working tree is clean
- [ ] latest changes are pushed

## Content

- [ ] name and professional title are correct
- [ ] no public "Build With AI" branding remains
- [ ] About description is approved
- [ ] all four project facts are accurate
- [ ] no unsupported degree, employment, user, metric, or business-impact claim exists
- [ ] unavailable links remain hidden

## Routes

- [ ] `/`
- [ ] `/projects`
- [ ] all four case-study routes
- [ ] `/about`
- [ ] `/contact`
- [ ] invalid route
- [ ] `/sitemap.xml`
- [ ] `/robots.txt`
- [ ] `/opengraph-image`
- [ ] `/twitter-image`
- [ ] `/icon.svg`

## Accessibility and Responsive Design

- [ ] skip link works
- [ ] keyboard focus is visible
- [ ] navigation works without a mouse
- [ ] headings are logical
- [ ] no horizontal overflow at 375 pixels
- [ ] tablet layout works
- [ ] desktop layout works
- [ ] source links are descriptive

## GitHub Rebranding

Recommend renaming the public repository from:

```text
build-with-ai-portfolio
```

to:

```text
sulav-baral-portfolio
```

After renaming, update the local remote with:

```bash
git remote set-url origin https://github.com/Sulav-17/sulav-baral-portfolio.git
git remote -v
```

Also update the GitHub repository description to:

```text
Personal portfolio of Sulav Baral - AI Engineer and Software Developer building practical AI, data, automation, and backend systems.
```

Do not perform the repository rename automatically.

## Vercel Deployment

1. Sign in to Vercel using GitHub.
2. Select `New Project`.
3. Import the portfolio repository.
4. Confirm the detected framework is Next.js.
5. Keep the repository root as the project root.
6. Deploy the initial production build.
7. Copy the final assigned HTTPS production URL.
8. Add the Vercel environment variable:

```text
NEXT_PUBLIC_SITE_URL=<final-production-url>
```

9. Apply it to Production.
10. Redeploy after adding the variable.
11. Confirm the canonical URL, sitemap, robots file, and social images use the production domain.
12. Add a custom domain later only when desired.

## Post-Deployment

- [ ] test every navigation link on the live domain
- [ ] test every project source-code link
- [ ] test mobile layout on a real phone
- [ ] verify the favicon
- [ ] verify social-link previews
- [ ] update the GitHub repository website field
- [ ] add the live URL to the README after deployment
- [ ] confirm the deployment remains available in a private browser window
