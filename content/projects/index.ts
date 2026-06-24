import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "build-log-ai",
    title: "Build Log AI",
    shortDescription:
      "Converts GitHub activity into structured developer progress summaries and Markdown exports.",
    status: "Completed",
    featured: true,
    category: "Developer Tools",
    technologies: ["Python", "Streamlit", "GitHub API", "Pandas", "pytest"],
    problem:
      "GitHub activity can be difficult to review as a concise record of developer progress.",
    intendedUser:
      "Developers who want readable progress summaries from recent GitHub activity.",
    solution:
      "A Streamlit application that fetches recent GitHub activity, aggregates commit information, and exports readable Markdown summaries.",
    features: [
      "Fetch recent GitHub activity",
      "Aggregate commit information",
      "Produce readable progress summaries",
      "Export Markdown",
      "Handle external API failures cleanly",
    ],
    architecture: [
      "Fetch recent activity from the GitHub API",
      "Aggregate commit information with Python and Pandas",
      "Generate structured progress summaries",
      "Export summaries as Markdown",
      "Surface failures without crashing the application",
    ],
    engineeringDecisions: [
      "Kept the workflow focused on GitHub activity and Markdown export",
      "Handled external API failures explicitly",
      "Used pytest to support implementation confidence",
    ],
    challenges: [
      "External AI quota was unavailable during development",
      "The application handled the failure without crashing",
    ],
    testing: ["Validated with pytest"],
    results: [
      "Completed a developer-tool workflow for GitHub activity summaries and Markdown export",
      "External AI quota failure was handled without crashing the application",
    ],
    limitations: [
      "No measured time savings are claimed",
      "No production users are claimed",
    ],
    futureImprovements: [
      "Add verified links or media when available",
      "Expand the summary workflow when future requirements are provided",
    ],
    githubUrl: "https://github.com/Sulav-17/build-log-ai",
    demoUrl: null,
    videoUrl: null,
    screenshots: [],
    completedDate: "June 2026",
  },
  {
    slug: "smart-document-qa-system",
    title: "Smart Document Q&A System",
    shortDescription:
      "Lets users ask questions over PDF documents and receive grounded answers with citations.",
    status: "Completed",
    featured: true,
    category: "RAG and AI Applications",
    technologies: [
      "Python",
      "Streamlit",
      "RAG",
      "embeddings",
      "ChromaDB",
      "PDF extraction",
      "Ollama",
      "pytest",
    ],
    problem:
      "PDF documents can be hard to query directly while preserving source grounding.",
    intendedUser:
      "Users who need to ask questions over PDF documents and review cited answers.",
    solution:
      "A RAG application that ingests PDFs, retrieves relevant chunks, and generates grounded answers with citations.",
    features: [
      "PDF ingestion",
      "Document chunking",
      "Semantic retrieval",
      "Source citations",
      "Hallucination-reduction measures",
      "Local-model support",
    ],
    architecture: [
      "PDF ingestion",
      "Text extraction",
      "Chunking",
      "Embeddings",
      "Vector storage",
      "Semantic retrieval",
      "Grounded answer generation",
      "Citations",
    ],
    engineeringDecisions: [
      "Used a RAG workflow to keep answers grounded in retrieved document content",
      "Included citations to connect answers back to source material",
      "Supported local-model usage with Ollama",
    ],
    challenges: [
      "Reducing hallucination risk while answering questions over documents",
      "Grounding answers through retrieval and citations",
    ],
    testing: ["Final suite passed with 46 tests"],
    results: [
      "Completed a document question-answering workflow with semantic retrieval and citations",
      "Final test suite passed with 46 tests",
    ],
    limitations: [
      "No production users are claimed",
      "No business impact is claimed",
    ],
    futureImprovements: [
      "Add verified links or media when available",
      "Extend document support when future requirements are provided",
    ],
    githubUrl: "https://github.com/Sulav-17/smart-doc-qa",
    demoUrl: null,
    videoUrl: null,
    screenshots: [],
    completedDate: "June 2026",
  },
  {
    slug: "ai-data-insight-assistant",
    title: "AI Data Insight Assistant",
    shortDescription:
      "Allows users to upload CSV data, ask questions, create charts, and receive understandable insights.",
    status: "Completed",
    featured: true,
    category: "Data and Applied AI",
    technologies: [
      "Python",
      "Pandas",
      "Streamlit",
      "Plotly",
      "pytest",
      "optional structured LLM integration",
    ],
    problem:
      "CSV data analysis can require users to move between validation, profiling, charting, and reporting steps.",
    intendedUser:
      "Users who need to explore CSV data through questions, charts, and understandable insights.",
    solution:
      "A Streamlit assistant that validates CSVs, profiles data, supports natural-language analysis, generates charts, and exports reports.",
    features: [
      "Safe CSV loading",
      "Profiling",
      "Suggested questions",
      "Natural-language analysis",
      "Plotly charts",
      "Deterministic business insights",
      "Report export",
      "Optional LLM integration with fallback",
    ],
    architecture: [
      "CSV validation",
      "Schema inspection",
      "Data profiling",
      "Question parsing",
      "Safe analysis planning",
      "Approved Pandas execution",
      "Chart generation",
      "Deterministic insights",
      "Markdown report export",
    ],
    engineeringDecisions: [
      "Used safe analysis planning before Pandas execution",
      "Kept deterministic insight generation available",
      "Included optional structured LLM integration with fallback behavior",
    ],
    challenges: [
      "Balancing natural-language analysis with controlled data execution",
      "Providing fallback behavior when optional LLM integration is unavailable",
    ],
    testing: ["Final suite passed with 79 tests"],
    results: [
      "Completed a CSV insight workflow with profiling, charts, insights, and report export",
      "Final test suite passed with 79 tests",
    ],
    limitations: [
      "No production users are claimed",
      "No measured business impact is claimed",
    ],
    futureImprovements: [
      "Add verified links or media when available",
      "Extend analysis workflows when future requirements are provided",
    ],
    githubUrl: "https://github.com/Sulav-17/ai-data-insight-assistant",
    demoUrl: null,
    videoUrl: null,
    screenshots: [],
    completedDate: "June 2026",
  },
  {
    slug: "ai-content-repurposing-pipeline",
    title: "AI Content Repurposing Pipeline",
    shortDescription:
      "Turns uploaded media or transcripts into structured content assets through an asynchronous workflow.",
    status: "Completed",
    featured: true,
    category: "Automation and Backend Systems",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "RQ",
      "Streamlit",
      "Docker",
      "Docker Compose",
      "FFmpeg",
      "whisper.cpp",
      "pytest",
    ],
    problem:
      "Media and transcript repurposing can require a coordinated workflow for processing, storage, and export.",
    intendedUser:
      "Users who need uploaded media or transcripts transformed into structured content assets.",
    solution:
      "An asynchronous pipeline using FastAPI, PostgreSQL, Redis, RQ, and Streamlit to process inputs, generate structured content, and save exportable results.",
    features: [
      "Media and transcript input",
      "Background processing",
      "Transcription",
      "Structured multi-format content generation",
      "Persistent storage",
      "Dockerized services",
      "End-to-end workflow",
    ],
    architecture: [
      "Media or transcript input",
      "FastAPI request",
      "PostgreSQL job storage",
      "Redis queue",
      "Background worker",
      "Transcription",
      "Structured content generation",
      "Saved results and export",
    ],
    engineeringDecisions: [
      "Used a background queue for asynchronous processing",
      "Stored job state in PostgreSQL",
      "Dockerized services for the workflow",
    ],
    challenges: [
      "Coordinating media input, background work, transcription, saved results, and export",
      "Verifying the core workflow and media path through targeted smoke tests",
    ],
    testing: [
      "Final suite passed with 196 tests",
      "Deterministic evaluation passed 8 of 8 cases",
      "Docker core and media smoke tests passed",
    ],
    results: [
      "Completed an asynchronous content repurposing workflow with persistent storage and export",
      "Final test suite passed with 196 tests",
      "Deterministic evaluation passed 8 of 8 cases",
      "Docker core and media smoke tests passed",
    ],
    limitations: [
      "No production users are claimed",
      "No measured time savings are claimed",
    ],
    futureImprovements: [
      "Add verified links or media when available",
      "Extend output formats when future requirements are provided",
    ],
    githubUrl:
      "https://github.com/Sulav-17/ai-content-repurposing-pipeline",
    demoUrl: null,
    videoUrl: null,
    screenshots: [],
    completedDate: "June 2026",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
