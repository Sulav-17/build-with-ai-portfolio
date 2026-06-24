import Link from "next/link";
import { ProjectVisual } from "@/components/project-visual";
import { projects } from "@/content/projects";

const evidence = [
  "196 automated tests",
  "8/8 deterministic evaluation cases",
  "Docker core and media smoke-tested",
];

export function FeaturedProjectPreview() {
  const project = projects.find(
    (item) => item.slug === "ai-content-repurposing-pipeline",
  );

  if (!project) {
    return null;
  }

  return (
    <section className="page-shell -mt-2 pb-10 lg:-mt-8 lg:pb-12">
      <article className="featured-preview premium-card grid gap-7 overflow-hidden p-5 sm:p-6 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:p-8">
        <div className="relative z-10">
          <p className="eyebrow">Featured System</p>
          <h2 className="font-display mt-4 text-3xl font-bold leading-tight tracking-normal text-[var(--text-primary)] sm:text-4xl">
            {project.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--text-secondary)]">
            {project.shortDescription}
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {evidence.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-[var(--border-soft)] bg-[rgba(7,10,18,0.42)] px-4 py-3 font-mono-ui text-xs font-bold uppercase tracking-[0.08em] text-[var(--text-secondary)]"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href={`/projects/${project.slug}`} className="button-primary">
              View case study
            </Link>
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                className="button-secondary"
                target="_blank"
                rel="noreferrer"
              >
                GitHub source
              </a>
            ) : null}
          </div>
        </div>

        <div className="relative z-10">
          <ProjectVisual
            variant={project.visualVariant}
            accent={project.accent}
          />
        </div>
      </article>
    </section>
  );
}
