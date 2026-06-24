import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/projects";
import { createPageMetadata } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Projects | Sulav Baral",
  description:
    "Completed project case studies covering applied AI, data, automation, and backend systems.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-600">
          Projects
        </p>
        <h1 className="text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">
          Completed technical projects
        </h1>
        <p className="mt-5 text-base leading-7 text-slate-700">
          Four completed projects are published as concise case studies using a
          shared typed content source.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
