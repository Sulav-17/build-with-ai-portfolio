# Sulav Baral Portfolio

AI Engineer & Software Developer

A professional portfolio presenting practical software work across applied AI, data engineering, automation, backend development, machine learning, and software engineering.

## Overview

This website presents practical project work across:

- applied AI
- data engineering
- automation
- backend development
- machine learning
- software engineering

Case studies document the problem, intended user, solution, architecture, engineering decisions, testing, limitations, and future improvements.

## Featured Projects

### Build Log AI

Converts GitHub activity into structured developer progress summaries and Markdown exports.

Key technologies: Python, Streamlit, GitHub API, Pandas, pytest

Repository: [Sulav-17/build-log-ai](https://github.com/Sulav-17/build-log-ai)

### Smart Document Q&A System

Lets users ask questions over PDF documents and receive grounded answers with citations.

Key technologies: Python, Streamlit, RAG, embeddings, ChromaDB, PDF extraction, Ollama, pytest

Repository: [Sulav-17/smart-doc-qa](https://github.com/Sulav-17/smart-doc-qa)

### AI Data Insight Assistant

Allows users to upload CSV data, ask questions, create charts, and receive understandable insights.

Key technologies: Python, Pandas, Streamlit, Plotly, pytest, optional structured LLM integration

Repository: [Sulav-17/ai-data-insight-assistant](https://github.com/Sulav-17/ai-data-insight-assistant)

### AI Content Repurposing Pipeline

Turns uploaded media or transcripts into structured content assets through an asynchronous workflow.

Key technologies: Python, FastAPI, PostgreSQL, Redis, RQ, Streamlit, Docker, Docker Compose, FFmpeg, whisper.cpp, pytest

Repository: [Sulav-17/ai-content-repurposing-pipeline](https://github.com/Sulav-17/ai-content-repurposing-pipeline)

## Technology Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- structured local TypeScript content
- Vercel-ready deployment

## Local Development

```bash
git clone <repository-url>
cd sulav-baral-portfolio
npm install
npm run dev
```

The local application runs at:

```text
http://localhost:3000
```

Use the final repository URL when cloning after the GitHub repository is renamed.

## Environment Variables

```text
NEXT_PUBLIC_SITE_URL
```

The local fallback is `http://localhost:3000`. Production should use the final HTTPS portfolio URL. No secret environment variables are currently required.

## Validation Commands

```bash
npm run lint
npm run typecheck
npm run build
npm run check
```

## Project Structure

- `app/`: Next.js App Router routes, metadata routes, and generated social images
- `components/`: reusable UI components
- `content/`: local typed content for projects and profile data
- `types/`: shared TypeScript types
- `lib/`: shared site configuration and helpers
- `public/images/`: image assets, including future project screenshots
- `docs/`: maintenance, launch, and milestone documentation

## Updating Portfolio Projects

Project content is maintained in:

```text
content/projects/index.ts
```

Real screenshots can be added to `public/images/` and referenced through typed screenshot data in each project entry.

## Deployment

The intended host is Vercel through the connected GitHub repository.

No live production URL is listed until deployment is complete.

## Integrity

This portfolio avoids fabricated:

- business impact
- users
- performance metrics
- demos
- screenshots
- credentials
