import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { featuredProjects } from "@/content/projects";

export default function Home() {
  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-600">
            Portfolio
          </p>
          <h1 className="text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl">
            A focused portfolio foundation for technical work.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
            This site shell is ready for verified project summaries, case
            studies, and professional details supplied by the site owner.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16 sm:pb-24">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">
              Selected Projects
            </p>
            <h2 className="text-2xl font-semibold tracking-normal text-slate-950 sm:text-3xl">
              Completed Build With AI projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-sm font-semibold text-slate-950 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-950"
          >
            View all projects
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
