# Milestone 04 — Production Polish, Media Support, SEO, and Accessibility

## Goal

Prepare the portfolio for deployment by adding:

* verified project source links
* reusable screenshot/media support
* complete metadata
* Open Graph and Twitter preview images
* sitemap and robots configuration
* favicon
* custom 404 page
* accessibility improvements
* final responsive polish

## Required Files

Create:

* `lib/site-config.ts`
* `components/project-media.tsx`
* `app/not-found.tsx`
* `app/sitemap.ts`
* `app/robots.ts`
* `app/opengraph-image.tsx`
* `app/twitter-image.tsx`
* `app/icon.svg`

Modify only as required:

* `app/layout.tsx`
* `app/globals.css`
* `types/project.ts`
* `content/projects/index.ts`
* `components/project-card.tsx`
* `app/projects/[slug]/page.tsx`
* page metadata files or page components

## Site Configuration

Create one shared configuration containing:

* site name: `Sulav Baral — Build With AI`
* short name: `Build With AI`
* default title: `Sulav Baral — Applied AI, Data, and Automation Portfolio`
* description: `A technical portfolio documenting practical AI, data, automation, and backend systems built through the Build With AI roadmap.`
* GitHub profile: `https://github.com/Sulav-17`
* site URL from `NEXT_PUBLIC_SITE_URL`
* local fallback: `http://localhost:3000`

Do not hardcode the site URL repeatedly.

## Verified GitHub Repository Links

Update the four projects:

* Build Log AI
  `https://github.com/Sulav-17/build-log-ai`

* Smart Document Q&A System
  `https://github.com/Sulav-17/smart-doc-qa`

* AI Data Insight Assistant
  `https://github.com/Sulav-17/ai-data-insight-assistant`

* AI Content Repurposing Pipeline
  `https://github.com/Sulav-17/ai-content-repurposing-pipeline`

Do not add demo or video links.

## Project Links

Case studies must distinguish:

* `View source code`
* `Recorded demo`
* `Live demo`

Only render links that have real non-null URLs.

External links must:

* clearly describe their destination
* use safe new-tab attributes when opening a new tab
* have visible keyboard focus

Project cards may show:

* `View case study`
* `Source code`

## Media Model

Change screenshots into typed objects containing:

* `src`
* `alt`
* `caption`
* `width`
* `height`

Create `ProjectMedia`.

It must:

* use `next/image`
* render only when screenshots exist
* support one or multiple screenshots
* show optional captions
* use meaningful alt text
* remain responsive
* avoid layout shift using dimensions
* render nothing when the screenshot array is empty

Do not add placeholder graphics publicly.

All four projects may keep empty screenshot arrays until real screenshots are supplied.

## Metadata

Add truthful metadata for:

* Home
* Projects
* About
* Contact
* every project case study
* custom 404 page where supported

Metadata should include:

* title
* description
* canonical URL
* Open Graph title and description
* Twitter title and description

Project metadata must come from the shared project data.

## Social Preview Images

Create generated Open Graph and Twitter images using Next.js `ImageResponse`.

Design:

* dark neutral background
* `Sulav Baral`
* `Build With AI`
* `AI • Data • Automation • Backend`
* restrained accent
* no photograph
* no unsupported claims
* no external image dependency

## Sitemap

Include:

* `/`
* `/projects`
* `/about`
* `/contact`
* all four project case-study routes

Generate project routes from the shared project data.

## Robots

Allow normal indexing and reference the sitemap.

Do not block project pages.

## Favicon

Create a simple SVG favicon using:

* initials `SB`
* restrained dark and light contrast
* no gradient
* no external font or image

## Custom 404 Page

Include:

* clear `Page not found` heading
* short explanation
* link to Home
* link to Projects

Keep the shared site shell.

## Accessibility

Add a skip link:

`Skip to main content`

Requirements:

* skip link becomes visible on keyboard focus
* main content has a stable target ID
* one `<h1>` per page
* logical heading hierarchy
* visible focus indicators
* descriptive link labels
* no empty interactive elements
* no colour-only meaning
* no horizontal overflow
* screenshots require meaningful alt text
* decorative elements must not be announced

Do not add unnecessary ARIA attributes.

## Responsive Polish

Review:

* header wrapping
* project-card grid
* case-study content width
* long technology names
* external links
* skills grid
* footer
* 375-pixel viewport
* tablet width
* desktop width

Fix obvious overflow or cramped spacing without redesigning the visual system.

## Excluded

* real screenshots
* recorded videos
* live demos
* LinkedIn
* email address
* contact form
* dark-mode toggle
* analytics
* deployment
* new packages
* major visual redesign

## Validation

Run:

* `npm run lint`
* `npm run typecheck`
* `npm run build`

Verify the build includes:

* sitemap
* robots
* Open Graph image
* Twitter image
* all static project routes

## Manual Review

Check:

* `/`
* `/projects`
* all four case studies
* `/about`
* `/contact`
* invalid route
* keyboard skip link
* keyboard focus states
* mobile width
* source-code links

## Acceptance Criteria

* all four verified GitHub links work
* unavailable demo links remain hidden
* screenshot support uses typed local data
* empty screenshot arrays create no visible placeholder
* metadata uses shared site and project data
* sitemap contains every public route
* robots references the sitemap
* social images build successfully
* favicon loads
* custom 404 page works
* skip link works
* responsive layouts have no obvious overflow
* lint, type checking, and build pass
* no packages are added
* no unsupported claims are introduced
* no commit or push is performed


## Scope Correction — Personal Portfolio Rebranding

This website is Sulav Baral’s main professional portfolio.

Do not publicly brand the website as “Build With AI.”

### Public Brand

Use:

* Site name: `Sulav Baral`
* Professional title: `AI Engineer & Software Developer`
* Supporting focus: `Applied AI • Data Engineering • Automation • Backend Development`

### Site Configuration

Update the shared site configuration:

* site name: `Sulav Baral`
* short name: `Sulav Baral`
* default title: `Sulav Baral — AI Engineer & Software Developer`
* description: `The personal portfolio of Sulav Baral, an AI Engineer and Software Developer building practical systems across applied AI, data engineering,` machine learning,  `automation, and backend development.`

Keep the existing GitHub profile and site URL configuration.

### Homepage

Replace the main headline with:

`AI Engineer and Software Developer turning messy problems into practical systems.`

Use this supporting introduction:

`I build end-to-end applications across applied AI, data engineering, automation, backend development, and machine learning—with a focus on making complex workflows useful, reliable, and easier to understand.`

Remove public wording that presents the portfolio as the “Build With AI” brand or roadmap.

The projects may still be described as part of Sulav’s technical growth, but not as a separate public brand.

### About Page

Use this About description:

I’m Sulav Baral, an AI Engineer and Software Developer who enjoys turning messy problems into useful systems.

My background started in data analytics and operations, where I kept seeing the same pattern: too much time spent on repetitive work, disconnected tools, and information that existed but was not actually helping anyone. That pulled me from simply analyzing problems into building the software that solves them.

Today, I work across applied AI, data engineering, backend development, automation, and machine learning. I build end-to-end projects using Python, SQL, FastAPI, PostgreSQL, Docker, RAG, and modern web technologies.

Having a Master’s degree in Computer Science with a focus on Data Science and AI, it has helped me connect the theory behind intelligent systems with the practical reality of building them.

My goal is simple: build systems that are practical, reliable, thoughtfully designed, and genuinely useful not just impressive on a screen.

### Footer

Remove public “Build With AI” branding.

Use a concise description such as:

`AI Engineer and Software Developer building practical AI, data, automation, and backend systems.`

### Social Preview Images

Replace “Build With AI” with:

* `Sulav Baral`
* `AI Engineer & Software Developer`
* `Applied AI • Data • Automation • Backend`

### Metadata Review

Search all public-facing application code for:

* `Build With AI`
* `Build With AI roadmap`

Remove or replace these references where they appear in:

* headings
* descriptions
* metadata
* footer content
* social preview images
* visible profile content
* page copy

Internal milestone documentation and repository history do not need to be rewritten.

### Validation

Run:

* `npm run lint`
* `npm run typecheck`
* `npm run build`

Confirm:

* no public page is branded as “Build With AI”
* the homepage uses the new headline
* the About page uses the approved description
* metadata and social images use the personal brand
* no unsupported education claim is introduced
* no package is added
* no commit or push is performed
