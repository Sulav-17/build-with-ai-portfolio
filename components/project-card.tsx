import Link from "next/link";
import { ProjectVisual } from "@/components/project-visual";
import { TechnologyTags } from "@/components/technology-tags";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  emphasis?: "large" | "medium" | "wide";
};

export function ProjectCard({ project, emphasis = "medium" }: ProjectCardProps) {
  const isLarge = emphasis === "large";

  return (
    <article
      className={`premium-card group flex h-full min-w-0 flex-col gap-6 overflow-hidden p-5 transition duration-200 hover:-translate-y-1 hover:border-[rgba(34,211,238,0.42)] focus-within:-translate-y-1 focus-within:border-[rgba(34,211,238,0.42)] sm:p-6 ${
        isLarge ? "lg:grid lg:grid-cols-[1fr_0.92fr] lg:items-stretch" : ""
      }`}
    >
      <div className="flex min-w-0 flex-col">
        <div className="mb-4 flex flex-wrap gap-2 font-mono-ui text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[var(--text-muted)]">
          <span>{project.status}</span>
          <span aria-hidden="true">/</span>
          <span>{project.category}</span>
        </div>

        <h3 className="font-display text-2xl font-semibold leading-tight tracking-normal text-[var(--text-primary)]">
          {project.title}
        </h3>
        <p className="mt-4 flex-1 text-sm leading-6 text-[var(--text-secondary)]">
          {project.problem}
        </p>

        <div className="mt-5">
          <TechnologyTags technologies={project.technologies} limit={5} />
        </div>

        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
          <Link href={`/projects/${project.slug}`} className="text-link">
            View case study
          </Link>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              className="text-link"
              target="_blank"
              rel="noreferrer"
              aria-label={`View source code for ${project.title} on GitHub`}
            >
              GitHub
            </a>
          ) : null}
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              className="text-link"
              target="_blank"
              rel="noreferrer"
              aria-label={`View live demo for ${project.title}`}
            >
              Live demo
            </a>
          ) : null}
        </div>
      </div>

      <ProjectVisual
        variant={project.visualVariant}
        accent={project.accent}
        compact={!isLarge}
      />
    </article>
  );
}
