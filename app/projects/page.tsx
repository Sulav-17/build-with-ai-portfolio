import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
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
    <section className="section-shell">
      <SectionHeading
        eyebrow="Projects"
        title="Completed technical projects"
        description="Four completed projects are published as concise case studies using a shared typed content source and verified repository links."
        level="h1"
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
