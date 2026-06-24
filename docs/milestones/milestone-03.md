# Milestone 03 — Professional Profile, Skills, Resume, and Contact

## Goal

Complete the portfolio’s main professional content:

* Home-page introduction
* About page
* Technical skills
* Resume page
* Contact page
* Professional navigation and footer links

## Required Files

Create:

* `types/profile.ts`
* `content/profile.ts`
* `components/skills-grid.tsx`
* `components/social-links.tsx`
* `app/resume/page.tsx`
* `app/contact/page.tsx`

Modify:

* `app/page.tsx`
* `app/about/page.tsx`
* `components/site-header.tsx`
* `components/site-footer.tsx`
* `app/globals.css` only where necessary

## Shared Profile Data

Create one typed profile source containing:

* name
* professional headline
* short introduction
* current focus
* Build With AI statement
* skills grouped by category
* experience
* education
* certifications
* GitHub URL
* LinkedIn URL
* email
* resume PDF URL

Use:

* Name: Sulav Baral
* GitHub: `https://github.com/Sulav-17`
* LinkedIn: `null`
* Email: `null`
* Resume PDF: `null`

Do not render unavailable links.

## Professional Positioning

Use this positioning:

> Emerging applied AI, data, automation, and backend developer building practical systems through the Build With AI roadmap.

Do not use:

* expert
* senior engineer
* industry-leading
* production-scale
* proven business impact

## Home Page

Create a polished hero section.

Required content:

### Eyebrow

`AI • Data • Automation • Backend`

### Main heading

`Building practical AI and data systems, one project at a time.`

### Introduction

Explain that Sulav builds real systems involving applied AI, data workflows, automation, and backend engineering while documenting technical decisions, challenges, testing, and lessons learned.

### Primary actions

* `View projects` → `/projects`
* `GitHub` → GitHub profile

Keep the existing Selected Projects section.

Add a concise current-focus section covering:

* applied AI systems
* backend and automation workflows
* data and machine-learning engineering
* reliable, tested software

## About Page

Explain:

* background in data analytics, operations, and technical problem-solving
* transition toward applied AI, backend development, data engineering, and automation
* Build With AI as a structured learning and portfolio system
* emphasis on real projects, testing, documentation, honest limitations, and continuous improvement

Keep it concise and professional.

Do not write a long personal biography.

## Skills

Title the section:

`Technologies I Have Used`

Do not label the list as expert-level skills.

Groups:

### AI and LLM Applications

* RAG
* embeddings
* vector databases
* LLM integrations
* prompt engineering
* structured outputs

### Backend and Automation

* FastAPI
* APIs
* PostgreSQL
* Redis
* background workers
* Docker
* Docker Compose

### Data and Machine Learning

* Python
* SQL
* Pandas
* scikit-learn
* Plotly
* Power BI
* machine-learning fundamentals

### Application and Engineering Tools

* Next.js
* TypeScript
* Streamlit
* Git
* GitHub
* pytest
* testing and evaluation

## Resume Page

Include a readable web resume.

### Summary

Describe Sulav as transitioning from analytics and operational roles into applied AI, data, automation, and backend development through practical projects and graduate computer-science study.

### Experience

#### Motion Canada

* Role: Customer Service Representative / Junior Data Analyst
* Dates: October 2022 – May 2024
* Work:

  * Excel, Power Query, PivotTables, SQL, and Power BI
  * KPI and operational reporting
  * Microsoft Dynamics 365 inventory workflows
  * order intake, invoicing, and dispatch support

#### Canadian Armed Forces — Primary Reserve

* Role: Infantry Soldier, Private
* Dates: September 2021 – Present
* Work:

  * team-based training
  * operational discipline
  * reliability and performance under structured procedures

Do not exaggerate leadership responsibility.

#### Amazon Fulfillment

* Role: Line Leader
* Dates: June 2017 – April 2021
* Work:

  * workflow coordination
  * scheduling support
  * inventory and order tracking
  * operational issue resolution

### Education

* Master of Science in Computer Science, Data Science specialization — University of Colorado Boulder — In progress
* Diploma in Data Analytics — Toronto School of Management — 2024
* Bachelor of Business Studies — Tribhuvan University

### Certifications

* Google Data Analytics Professional Certificate
* PCEP — Certified Entry-Level Python Programmer

Do not display a resume download button while `resumeUrl` is `null`.

## Contact Page

Include:

* concise professional contact invitation
* GitHub link
* LinkedIn only when supplied
* email only when supplied
* no contact form
* no fake links
* no placeholder URLs displayed publicly

## Navigation

Navigation order:

* Home
* Projects
* About
* Resume
* Contact

Navigation must remain usable without client-side JavaScript.

## Footer

Use the shared profile data.

Show:

* Sulav Baral
* concise Build With AI description
* GitHub
* LinkedIn only when available
* email only when available

## Metadata

Add truthful page metadata for:

* Home
* About
* Resume
* Contact

## Design

* professional and restrained
* strong typographic hierarchy
* readable line lengths
* responsive spacing
* no animations
* no skill bars
* no rating percentages
* no decorative AI graphics
* no unnecessary packages

## Accessibility

* one page-level heading per route
* logical heading hierarchy
* visible keyboard focus
* semantic lists for skills and experience
* descriptive external-link text
* no horizontal overflow

## Excluded

* final resume PDF
* LinkedIn and email links
* contact form
* screenshots
* architecture graphics
* dark-mode toggle
* deployment
* analytics
* new packages

## Validation

Run:

* `npm run lint`
* `npm run typecheck`
* `npm run build`

Manually verify:

* `/`
* `/about`
* `/resume`
* `/contact`
* header navigation
* footer links
* mobile layout

## Acceptance Criteria

* professional content uses one shared typed profile source
* Home, About, Resume, and Contact pages are complete
* skills are grouped honestly
* employment and education match this specification
* unavailable links are not rendered
* responsive navigation works
* lint, type checking, and build pass
* no package is added
* no unsupported claim is introduced
* no commit or push is performed

## Scope Correction — Resume Removed

The portfolio must not include a Resume page or Resume navigation item.

Remove:

* `/resume`
* `app/resume/page.tsx`
* Resume from the header navigation
* Resume links or download buttons
* Resume-specific metadata
* Detailed employment, education, and certification data added only for the Resume page
* Unused resume-related fields from the profile type and shared profile content

The final navigation must be:

* Home
* Projects
* About
* Contact

Do not replace the Resume page with another page.
