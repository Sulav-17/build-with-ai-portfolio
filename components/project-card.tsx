import Link from "next/link";
import type { Project } from "@/types/project";
import { TechnologyTags } from "@/components/technology-tags";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full min-w-0 flex-col rounded border border-slate-200 bg-white p-6">
      <div className="mb-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-slate-600">
        <span>{project.status}</span>
        <span aria-hidden="true">/</span>
        <span>{project.category}</span>
      </div>

      <h2 className="text-xl font-semibold tracking-normal text-slate-950">
        {project.title}
      </h2>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-700">
        {project.shortDescription}
      </p>

      <div className="mt-5">
        <TechnologyTags technologies={project.technologies} limit={5} />
      </div>

      <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex w-fit text-sm font-semibold text-slate-950 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-950"
        >
          View case study
        </Link>
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            className="inline-flex w-fit text-sm font-semibold text-slate-950 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-950"
            target="_blank"
            rel="noreferrer"
            aria-label={`View source code for ${project.title} on GitHub`}
          >
            Source code
          </a>
        ) : null}
      </div>
    </article>
  );
}
