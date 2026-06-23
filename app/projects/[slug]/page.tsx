import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TechnologyTags } from "@/components/technology-tags";
import { getProjectBySlug, projects } from "@/content/projects";

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

  return {
    title: `${project.title} | Portfolio`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectLinks = [
    { label: "GitHub source", href: project.githubUrl },
    { label: "Live demo", href: project.demoUrl },
    { label: "Recorded demo", href: project.videoUrl },
  ].filter((link): link is { label: string; href: string } =>
    Boolean(link.href),
  );

  return (
    <article className="mx-auto w-full max-w-4xl px-6 py-12 sm:py-16">
      <Link
        href="/projects"
        className="inline-flex text-sm font-semibold text-slate-950 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-950"
      >
        Back to projects
      </Link>

      <header className="mt-8 border-b border-slate-200 pb-8">
        <div className="mb-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-slate-600">
          <span>{project.status}</span>
          <span aria-hidden="true">/</span>
          <span>{project.category}</span>
        </div>
        <h1 className="text-3xl font-semibold tracking-normal text-slate-950 sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-5 text-base leading-7 text-slate-700 sm:text-lg">
          {project.shortDescription}
        </p>
        <div className="mt-6">
          <TechnologyTags technologies={project.technologies} />
        </div>
      </header>

      <div className="mt-10 space-y-10">
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

        <section>
          <h2 className="text-2xl font-semibold tracking-normal text-slate-950">
            Available Project Links
          </h2>
          {projectLinks.length > 0 ? (
            <ul className="mt-4 space-y-3">
              {projectLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-semibold text-slate-950 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-950"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-base leading-7 text-slate-700">
              No public project links are available yet.
            </p>
          )}
        </section>
      </div>
    </article>
  );
}

function TextSection({ title, body }: { title: string; body: string }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-normal text-slate-950">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-700">{body}</p>
    </section>
  );
}

function ListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-normal text-slate-950">
        {title}
      </h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-slate-700">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function OrderedSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-normal text-slate-950">
        {title}
      </h2>
      <ol className="mt-4 list-decimal space-y-2 pl-5 text-base leading-7 text-slate-700">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </section>
  );
}
