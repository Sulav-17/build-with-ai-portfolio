# Milestone 02 — Project System and Four Case Studies

## Goal

Build the reusable project-content system and publish the four completed Build With AI projects across:

* Home featured-project section
* Projects index
* Dynamic project case-study pages

## Required Files

Create:

* `types/project.ts`
* `content/projects/index.ts`
* `components/project-card.tsx`
* `components/technology-tags.tsx`
* `app/projects/[slug]/page.tsx`

Modify:

* `app/page.tsx`
* `app/projects/page.tsx`
* `app/globals.css` only where required

## Project Type

Create a readable `Project` type containing:

* `slug`
* `title`
* `shortDescription`
* `status`
* `featured`
* `category`
* `technologies`
* `problem`
* `intendedUser`
* `solution`
* `features`
* `architecture`
* `engineeringDecisions`
* `challenges`
* `testing`
* `results`
* `limitations`
* `futureImprovements`
* `githubUrl`
* `demoUrl`
* `videoUrl`
* `screenshots`
* `completedDate`

Optional links and media may use `null`. Do not render fake or placeholder links as clickable links.

## Required Projects

### Build Log AI

* Status: Completed
* Category: Developer Tools
* Completed: June 2026
* Purpose: Convert GitHub activity into structured developer progress summaries and Markdown exports.
* Technologies: Python, Streamlit, GitHub API, Pandas, pytest
* Features:

  * fetch recent GitHub activity
  * aggregate commit information
  * produce readable progress summaries
  * export Markdown
  * handle external API failures cleanly
* Challenge: external AI quota was unavailable during development
* Resolution: the application handled the failure without crashing
* Do not claim measured time savings or users

### Smart Document Q&A System

* Status: Completed
* Category: RAG and AI Applications
* Completed: June 2026
* Purpose: Let users ask questions over PDF documents and receive grounded answers with citations.
* Technologies: Python, Streamlit, RAG, embeddings, ChromaDB, PDF extraction, Ollama, pytest
* Architecture:

  * PDF ingestion
  * text extraction
  * chunking
  * embeddings
  * vector storage
  * semantic retrieval
  * grounded answer generation
  * citations
* Features:

  * PDF ingestion
  * document chunking
  * semantic retrieval
  * source citations
  * hallucination-reduction measures
  * local-model support
* Testing: final suite passed with 46 tests
* Do not claim production users or business impact

### AI Data Insight Assistant

* Status: Completed
* Category: Data and Applied AI
* Completed: June 2026
* Purpose: Allow users to upload CSV data, ask questions, create charts, and receive understandable insights.
* Technologies: Python, Pandas, Streamlit, Plotly, pytest, optional structured LLM integration
* Architecture:

  * CSV validation
  * schema inspection
  * data profiling
  * question parsing
  * safe analysis planning
  * approved Pandas execution
  * chart generation
  * deterministic insights
  * Markdown report export
* Features:

  * safe CSV loading
  * profiling
  * suggested questions
  * natural-language analysis
  * Plotly charts
  * deterministic business insights
  * report export
  * optional LLM integration with fallback
* Testing: final suite passed with 79 tests
* Do not claim production users or measured business impact

### AI Content Repurposing Pipeline

* Status: Completed
* Category: Automation and Backend Systems
* Completed: June 2026
* Purpose: Turn uploaded media or transcripts into structured content assets through an asynchronous workflow.
* Technologies: Python, FastAPI, PostgreSQL, Redis, RQ, Streamlit, Docker, Docker Compose, FFmpeg, whisper.cpp, pytest
* Architecture:

  * media or transcript input
  * FastAPI request
  * PostgreSQL job storage
  * Redis queue
  * background worker
  * transcription
  * structured content generation
  * saved results and export
* Features:

  * media and transcript input
  * background processing
  * transcription
  * structured multi-format content generation
  * persistent storage
  * Dockerized services
  * end-to-end workflow
* Testing:

  * final suite passed with 196 tests
  * deterministic evaluation passed 8 of 8 cases
  * Docker core and media smoke tests passed
* Do not claim production users or measured time savings

## Project Card Design

Each card must show:

* status
* category
* title
* short description
* up to five technology tags
* `View case study` link

Cards must:

* use equal-height layouts where practical
* remain readable on mobile
* have a visible keyboard-focus state
* avoid excessive visual effects
* not contain fake GitHub or demo links

## Home Page

Add a `Selected Projects` section containing all four featured projects.

Include a clear link to `/projects`.

Do not redesign the full Home page yet.

## Projects Page

Show all four projects in a responsive grid.

Do not add filters or search.

## Dynamic Case-Study Page

Route:

```text
/projects/[slug]
```

Use:

* `generateStaticParams`
* `generateMetadata`
* `notFound()` for invalid slugs

Required order:

1. Back link
2. Status and category
3. Project title
4. Short description
5. Technology tags
6. Problem
7. Intended user
8. Solution
9. Key features
10. Architecture flow
11. Engineering decisions
12. Challenges and solutions
13. Testing and evaluation
14. Results
15. Limitations
16. Future improvements
17. Available project links

Architecture should initially be a clear ordered flow, not a complex diagram.

## Content Rules

* Use only the verified facts in this milestone.
* Keep wording professional and concise.
* Do not invent users, metrics, results, employment claims, or business impact.
* Missing URLs and media must use `null`.
* Do not display raw placeholder text publicly.
* The shared project data must be the only source used by cards and case-study pages.

## Excluded

* screenshots
* architecture graphics
* videos
* live demos
* filters
* animations
* client-side state
* external APIs
* new packages
* About, Resume, and Contact content

## Validation

Run:

* `npm run lint`
* `npm run typecheck`
* `npm run build`

Manually verify:

* `/`
* `/projects`
* all four project case-study routes
* invalid project slug returns 404
* mobile card layout
* mobile case-study layout

## Acceptance Criteria

* four projects exist in one typed data source
* cards and case studies use the same data
* all case-study routes build successfully
* no unsupported claims appear
* no fake links are clickable
* layout works on mobile and desktop
* lint, type checking, and build pass
* no packages are added
* no commit or push is performed
