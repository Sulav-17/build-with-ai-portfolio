# AGENTS.md

## Project

Sulav Baral Portfolio

A professional Next.js portfolio for Sulav Baral, AI Engineer & Software Developer, presenting verified AI, data, automation, backend, and software-engineering projects.

## Authority

Samira defines:

* project architecture
* milestone scope
* component structure
* design direction
* content structure
* accessibility requirements
* validation requirements

Codex is the implementation assistant.

Codex must not redesign milestones, invent features, expand scope, or substitute its own architecture unless the active milestone explicitly allows it.

## Required Workflow

1. Read `AGENTS.md`.
2. Read the active file in `docs/milestones/`.
3. Inspect the repository.
4. Implement only the active milestone.
5. Do not implement future milestones.
6. Do not modify unrelated files.
7. Run all required validation.
8. Report every changed file.
9. Do not commit or push unless explicitly instructed.

## Engineering Rules

* Use Next.js App Router.
* Use TypeScript with readable, explicit types.
* Preserve strict TypeScript checking.
* Prefer server components unless browser interactivity is required.
* Use reusable components only where genuine reuse exists.
* Avoid unnecessary abstractions.
* Keep project content separate from presentation.
* Do not repeat project data across components.
* Do not add packages unless required by the active milestone.
* Do not add a backend, database, CMS, authentication, analytics, payments, or external APIs unless approved.

## Content Integrity

* Do not fabricate personal, employment, education, credential, project, user, result, or performance information.
* Use placeholders when verified information is unavailable:

  * `[ADD GITHUB URL]`
  * `[ADD DEMO URL]`
  * `[ADD VIDEO URL]`
  * `[ADD SCREENSHOT]`
  * `[ADD MEASURED RESULT]`
* Do not describe unfinished projects as completed.
* Clearly distinguish between:

  * GitHub source
  * case study
  * recorded demo
  * live demo

## Design Rules

* Prioritize recruiter clarity and proof of technical ability.
* Use a professional, minimal, technical visual style.
* Maintain consistent typography, spacing, and layout.
* Avoid excessive gradients, animations, fake terminals, skill bars, robot graphics, and decorative clutter.
* Preserve responsive behaviour at mobile, tablet, and desktop widths.

## Accessibility Rules

* Use semantic HTML.
* Maintain logical heading order.
* Preserve keyboard accessibility.
* Include visible focus states.
* Maintain accessible contrast.
* Do not rely on colour alone to communicate meaning.
* Prevent horizontal overflow.
* Use accurate alt text for meaningful images.

## Validation

Unless the active milestone says otherwise, run:

* `npm run lint`
* `npm run typecheck`
* `npm run build`

After implementation, report:

1. Created files
2. Modified files
3. Deleted files
4. Packages added
5. Validation results
6. Deviations from the milestone
7. Remaining limitations
8. Manual checks required
9. Confirmation that no unsupported information was fabricated
10. Confirmation that no commit or push was performed
