import Link from "next/link";
import { CapabilityCard } from "@/components/capability-card";
import { EngineeringJourney } from "@/components/engineering-journey";
import { FeaturedProjectPreview } from "@/components/featured-project-preview";
import { HeroBackground } from "@/components/hero-background";
import { HeroSystemVisual } from "@/components/hero-system-visual";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/content/profile";
import { featuredProjects } from "@/content/projects";
import { createPageMetadata, siteConfig } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: siteConfig.defaultTitle,
  description:
    "The personal portfolio of Sulav Baral, an AI Engineer and Software Developer building practical systems across applied AI, data engineering, automation, backend development, and machine learning.",
  path: "/",
});

const capabilities = [
  {
    title: "Applied AI Systems",
    description:
      "Grounded AI applications, RAG workflows, embeddings, retrieval, and structured outputs.",
    tools: ["RAG", "embeddings", "vector databases", "LLM integrations"],
  },
  {
    title: "Backend and Automation",
    description:
      "APIs, PostgreSQL, Redis queues, background workers, and containerized services.",
    tools: ["FastAPI", "PostgreSQL", "Redis", "Docker", "background workers"],
  },
  {
    title: "Data Engineering",
    description:
      "Reliable ingestion, transformation, analysis, visualization, and reporting workflows.",
    tools: ["Python", "SQL", "Pandas", "Plotly", "Power BI"],
  },
  {
    title: "Engineering Quality",
    description:
      "Testing, evaluation, documentation, clear architecture, and honest limitations.",
    tools: ["pytest", "evaluation", "Git", "GitHub", "Docker Compose"],
  },
];

const projectOrder = [
  "ai-content-repurposing-pipeline",
  "smart-document-qa-system",
  "ai-data-insight-assistant",
  "build-log-ai",
];

const selectedProjects = projectOrder
  .map((slug) => featuredProjects.find((project) => project.slug === slug))
  .filter((project): project is (typeof featuredProjects)[number] =>
    Boolean(project),
  );

export default function Home() {
  return (
    <>
      <section className="hero-section relative overflow-hidden">
        <HeroBackground />
        <div className="page-shell hero-grid relative z-10 py-14 lg:py-16">
          <Reveal>
            <div className="max-w-[62rem]">
              <p className="eyebrow">AI ENGINEER &middot; SOFTWARE DEVELOPER</p>
              <h1 className="hero-heading font-display mt-5 font-bold text-[var(--text-primary)]">
                <span className="xl:block">I build intelligent systems</span>{" "}
                <span className="xl:block">that turn messy workflows</span>{" "}
                <span className="xl:block">into useful software.</span>
              </h1>
              <p className="hero-copy mt-7">{profile.shortIntroduction}</p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/projects" className="button-primary">
                  Explore My Work
                </Link>
                <a
                  href={profile.githubUrl}
                  className="button-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  View GitHub
                </a>
                <a
                  href={profile.linkedInUrl}
                  className="button-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <p className="hero-proof-line mt-6">
                4 documented case studies &middot; tested systems &middot; transparent
                engineering decisions
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="justify-self-center lg:justify-self-end">
            <div className="hero-atlas-frame">
              <HeroSystemVisual />
            </div>
          </Reveal>
        </div>

      </section>

      <FeaturedProjectPreview />

      <section className="section-shell pt-10">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Selected Projects"
            title="Systems with real architecture behind them."
            description="Four completed case studies show how inputs move through AI, data, backend, automation, and reporting workflows."
          />
          <Link href="/projects" className="text-link">
            View all projects
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-6">
          {selectedProjects.map((project) => {
            const emphasis =
              project.slug === "ai-content-repurposing-pipeline"
                ? "large"
                : project.slug === "build-log-ai"
                  ? "wide"
                  : "medium";
            const className =
              emphasis === "large"
                ? "lg:col-span-6"
                : emphasis === "wide"
                  ? "lg:col-span-6"
                  : "lg:col-span-3";

            return (
              <Reveal key={project.slug} className={className}>
                <ProjectCard project={project} emphasis={emphasis} />
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-panel">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Engineering Capabilities"
            title="Useful systems need more than one layer of engineering."
            description="The work spans applied AI, backend services, data workflows, automation, and quality practices without presenting skills as ratings."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {capabilities.map((capability, index) => (
              <Reveal key={capability.title} delay={index * 80}>
                <CapabilityCard {...capability} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <EngineeringJourney />

    </>
  );
}
