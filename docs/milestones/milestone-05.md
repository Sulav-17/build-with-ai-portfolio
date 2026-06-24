# Milestone 05 — Repository Finalization, CI, and Deployment Readiness

## Goal

Finalize the portfolio repository for launch by adding:

* professional repository documentation
* continuous integration
* production environment guidance
* portfolio maintenance instructions
* deployment and launch checklist
* final repository rebranding

Codex must prepare the project but must not deploy it.

## Required Files

Create:

* `.env.example`
* `.github/workflows/ci.yml`
* `docs/maintenance.md`
* `docs/launch-checklist.md`

Modify:

* `README.md`
* `package.json`
* `AGENTS.md` only where required to update the current project identity

Do not modify application pages unless validation reveals a genuine launch-blocking defect.

## Repository Identity

This repository represents Sulav Baral’s main professional portfolio.

Use:

* Project name: `Sulav Baral Portfolio`
* Package name: `sulav-baral-portfolio`
* Professional title: `AI Engineer & Software Developer`

Remove current “Build With AI” branding from:

* `README.md`
* the current project heading and description in `AGENTS.md`
* the package name in `package.json`

Historical milestone documents do not need to be rewritten.

Do not alter dependency versions.

## Package Scripts

Preserve existing scripts.

Add:

```json
"check": "npm run lint && npm run typecheck && npm run build"
```

Do not add packages.

## Environment Template

Create `.env.example` containing:

```text
# Local development fallback
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Include a comment explaining that production must use the final deployed HTTPS URL.

Do not include secrets.

## Continuous Integration

Create `.github/workflows/ci.yml`.

Requirements:

* workflow name: `CI`
* run on pushes to `main`
* run on pull requests targeting `main`
* use `ubuntu-latest`
* use `actions/checkout@v4`
* use `actions/setup-node@v4`
* Node version: `24`
* enable npm dependency caching
* run `npm ci`
* run `npm run lint`
* run `npm run typecheck`
* run `npm run build`
* use read-only repository-content permissions
* prevent redundant concurrent runs for the same branch where practical

Do not deploy from this workflow.

Vercel will handle deployment separately through its Git integration.

## README

Replace the starter README with a professional repository README.

Required structure:

### Header

* `Sulav Baral Portfolio`
* `AI Engineer & Software Developer`
* concise description of the portfolio

Do not call the portfolio “Build With AI.”

### Overview

Explain that the website presents practical work across:

* applied AI
* data engineering
* automation
* backend development
* machine learning
* software engineering

Mention that case studies document:

* the problem
* the intended user
* the solution
* architecture
* engineering decisions
* testing
* limitations
* future improvements

### Featured Projects

Include:

1. Build Log AI
2. Smart Document Q&A System
3. AI Data Insight Assistant
4. AI Content Repurposing Pipeline

For each project include:

* one-sentence description
* key technologies
* verified GitHub repository link

Do not invent deployment links, users, results, or metrics.

### Technology Stack

Include the portfolio stack:

* Next.js App Router
* TypeScript
* Tailwind CSS
* structured local TypeScript content
* Vercel-ready deployment

### Local Development

Document:

```bash
git clone <repository-url>
cd sulav-baral-portfolio
npm install
npm run dev
```

Explain that the local application runs at:

```text
http://localhost:3000
```

Do not assume the GitHub repository has already been renamed. Use a clear placeholder for the final repository URL where necessary.

### Environment Variables

Document:

```text
NEXT_PUBLIC_SITE_URL
```

Explain:

* local fallback is `http://localhost:3000`
* production should use the final HTTPS portfolio URL
* no secret environment variables are currently required

### Validation Commands

Document:

```bash
npm run lint
npm run typecheck
npm run build
npm run check
```

### Project Structure

Briefly explain:

* `app/`
* `components/`
* `content/`
* `types/`
* `lib/`
* `public/images/`
* `docs/`

### Updating Portfolio Projects

Explain that project content is maintained in:

```text
content/projects/index.ts
```

Mention that real screenshots can be added to `public/images/` and referenced through typed screenshot data.

### Deployment

Explain that the intended host is Vercel through the connected GitHub repository.

Do not display a fake live URL.

### Integrity

State that the portfolio avoids fabricated:

* business impact
* users
* performance metrics
* demos
* screenshots
* credentials

## Maintenance Documentation

Create `docs/maintenance.md`.

Document the exact process for:

### Adding a Project

1. Add a typed project entry to `content/projects/index.ts`.
2. Use a unique lowercase slug.
3. Include only verified project facts.
4. Add a real GitHub URL when available.
5. Leave unavailable demo and video URLs as `null`.
6. Run the complete validation suite.

### Adding Screenshots

1. Store optimized files under:

```text
public/images/projects/<project-slug>/
```

2. Add typed screenshot objects containing:

   * source
   * meaningful alt text
   * optional caption
   * width
   * height

3. Never add decorative placeholder screenshots.

### Updating Profile Content

Explain that shared profile content lives in:

```text
content/profile.ts
```

Employment or education claims must not be added without verification.

### Quality Checks

Require:

```bash
npm run check
```

Also require manual review of:

* desktop
* tablet
* mobile
* keyboard navigation
* external links
* missing routes

## Launch Checklist

Create `docs/launch-checklist.md` with checkboxes.

Include:

### Code

* lint passes
* type checking passes
* production build passes
* CI passes on GitHub
* working tree is clean
* latest changes are pushed

### Content

* name and professional title are correct
* no public “Build With AI” branding remains
* About description is approved
* all four project facts are accurate
* no unsupported degree, employment, user, metric, or business-impact claim exists
* unavailable links remain hidden

### Routes

Verify:

* `/`
* `/projects`
* all four case-study routes
* `/about`
* `/contact`
* invalid route
* `/sitemap.xml`
* `/robots.txt`
* `/opengraph-image`
* `/twitter-image`
* `/icon.svg`

### Accessibility and Responsive Design

* skip link works
* keyboard focus is visible
* navigation works without a mouse
* headings are logical
* no horizontal overflow at 375 pixels
* tablet layout works
* desktop layout works
* source links are descriptive

### GitHub Rebranding

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
Personal portfolio of Sulav Baral — AI Engineer and Software Developer building practical AI, data, automation, and backend systems.
```

Do not perform the repository rename automatically.

### Vercel Deployment

Document:

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

### Post-Deployment

* test every navigation link on the live domain
* test every project source-code link
* test mobile layout on a real phone
* verify the favicon
* verify social-link previews
* update the GitHub repository website field
* add the live URL to the README after deployment
* confirm the deployment remains available in a private browser window

## Excluded

* Vercel account creation
* actual deployment
* custom-domain purchase
* analytics
* contact form
* resume
* LinkedIn
* email
* project screenshots
* live demos
* recorded videos
* new packages
* application redesign

## Validation

Run:

* `npm run lint`
* `npm run typecheck`
* `npm run build`
* `npm run check`

Inspect the CI workflow for valid YAML.

## Acceptance Criteria

* repository uses Sulav Baral’s personal branding
* package name is `sulav-baral-portfolio`
* README is complete and truthful
* `.env.example` contains no secret
* CI validates every push and pull request to `main`
* maintenance instructions are practical
* launch checklist includes GitHub and Vercel steps
* no historical milestone file is unnecessarily rewritten
* no application feature is added
* no package is added
* all validation commands pass
* no deployment is attempted
* no commit or push is performed
