import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectMedia } from "@/components/project-media";
import { ProjectVisual } from "@/components/project-visual";
import { Reveal } from "@/components/reveal";
import { TechnologyTags } from "@/components/technology-tags";
import { getProjectBySlug, projects } from "@/content/projects";
import { createPageMetadata } from "@/lib/site-config";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return createPageMetadata({
    title: `${project.title} | Sulav Baral`,
    description: project.shortDescription,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectLinks = [
    { label: "View source code", href: project.githubUrl },
    { label: "Recorded demo", href: project.videoUrl },
    { label: "Live demo", href: project.demoUrl },
  ].filter((link): link is { label: string; href: string } =>
    Boolean(link.href),
  );

  return (
    <article className="section-shell max-w-5xl">
      <Reveal>
        <Link href="/projects" className="text-link">
          Back to projects
        </Link>

        <header className="mt-8 grid gap-8 border-b border-[var(--border-soft)] pb-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <div className="mb-4 flex flex-wrap gap-2 font-mono-ui text-xs font-bold uppercase tracking-[0.12em] text-[var(--text-muted)]">
              <span>{project.status}</span>
              <span aria-hidden="true">/</span>
              <span>{project.category}</span>
            </div>
            <h1 className="font-display text-[clamp(2.6rem,6vw,4.8rem)] font-bold leading-[0.98] tracking-normal text-[var(--text-primary)]">
              {project.title}
            </h1>
            <p className="section-copy mt-5">{project.shortDescription}</p>
            <div className="mt-6">
              <TechnologyTags technologies={project.technologies} />
            </div>
          </div>

          <ProjectVisual
            variant={project.visualVariant}
            accent={project.accent}
          />
        </header>
      </Reveal>

      <div className="mt-12 grid gap-6">
        <TextSection title="Problem" body={project.problem} />
        <TextSection title="Intended User" body={project.intendedUser} />
        <TextSection title="Solution" body={project.solution} />
        <ListSection title="Key Features" items={project.features} />
        <OrderedSection title="Architecture Flow" items={project.architecture} />
        <ListSection
          title="Engineering Decisions"
          items={project.engineeringDecisions}
        />
        <ListSection
          title="Challenges and Solutions"
          items={project.challenges}
        />
        <ListSection title="Testing and Evaluation" items={project.testing} />
        <ListSection title="Results" items={project.results} />
        <ListSection title="Limitations" items={project.limitations} />
        <ListSection
          title="Future Improvements"
          items={project.futureImprovements}
        />
        <ProjectMedia screenshots={project.screenshots} />

        <Reveal>
          <section className="premium-card p-6">
            <h2 className="font-display text-2xl font-semibold tracking-normal text-[var(--text-primary)]">
              Available Project Links
            </h2>
            {projectLinks.length > 0 ? (
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
                {projectLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-link"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${link.label} for ${project.title}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
                No public project links are available yet.
              </p>
            )}
          </section>
        </Reveal>
      </div>
    </article>
  );
}

function TextSection({ title, body }: { title: string; body: string }) {
  return (
    <Reveal>
      <section className="premium-card p-6">
        <h2 className="font-display text-2xl font-semibold tracking-normal text-[var(--text-primary)]">
          {title}
        </h2>
        <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
          {body}
        </p>
      </section>
    </Reveal>
  );
}

function ListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <Reveal>
      <section className="premium-card p-6">
        <h2 className="font-display text-2xl font-semibold tracking-normal text-[var(--text-primary)]">
          {title}
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-[var(--text-secondary)]">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </Reveal>
  );
}

function OrderedSection({ title, items }: { title: string; items: string[] }) {
  return (
    <Reveal>
      <section className="premium-card p-6">
        <h2 className="font-display text-2xl font-semibold tracking-normal text-[var(--text-primary)]">
          {title}
        </h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-base leading-7 text-[var(--text-secondary)]">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>
    </Reveal>
  );
}
