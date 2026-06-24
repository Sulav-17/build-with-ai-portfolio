import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { profile } from "@/content/profile";
import { featuredProjects } from "@/content/projects";
import { createPageMetadata, siteConfig } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: siteConfig.defaultTitle,
  description:
    "The personal portfolio of Sulav Baral, an AI Engineer and Software Developer building practical systems across applied AI, data engineering, automation, backend development, and machine learning.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-600">
            Applied AI • Data Engineering • Automation • Backend Development
          </p>
          <h1 className="text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl">
            AI Engineer and Software Developer turning messy problems into
            practical systems.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
            {profile.shortIntroduction}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-950"
            >
              View projects
            </Link>
            <a
              href={siteConfig.githubProfile}
              className="rounded border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 hover:border-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-950"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="border-y border-slate-200 py-10">
          <h2 className="text-2xl font-semibold tracking-normal text-slate-950 sm:text-3xl">
            Current focus
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {profile.currentFocus.map((focus) => (
              <li
                key={focus}
                className="rounded border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
              >
                {focus}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16 sm:pb-24">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600">
              Selected Projects
            </p>
            <h2 className="text-2xl font-semibold tracking-normal text-slate-950 sm:text-3xl">
              Completed technical projects
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
