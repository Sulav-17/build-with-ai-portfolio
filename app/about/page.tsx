import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SkillsGrid } from "@/components/skills-grid";
import { profile } from "@/content/profile";
import { createPageMetadata } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "About | Sulav Baral",
  description:
    "About Sulav Baral's transition into applied AI, backend development, data engineering, and automation.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="section-shell">
      <section className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <SectionHeading
          eyebrow="About"
        title="AI Engineer and Software Developer."
        description="Practical systems, clear architecture, and useful automation across AI, data, backend, and machine-learning work."
        level="h1"
      />

        <Reveal delay={100}>
          <div className="premium-card space-y-5 p-6 text-base leading-8 text-[var(--text-secondary)] sm:p-8">
            <p>
              I&apos;m Sulav Baral, an AI Engineer and Software Developer who enjoys
              turning messy problems into useful systems.
            </p>
            <p>
              My background started in data analytics and operations, where I
              kept seeing the same pattern: too much time spent on repetitive
              work, disconnected tools, and information that existed but was not
              actually helping anyone. That pulled me from simply analyzing
              problems into building the software that solves them.
            </p>
            <p>
              Today, I work across applied AI, data engineering, backend
              development, automation, and machine learning. I build end-to-end
              projects using Python, SQL, FastAPI, PostgreSQL, Docker, RAG, and
              modern web technologies.
            </p>
            <p>
              Having a Master&apos;s degree in Computer Science with a focus on Data
              Science and AI, it has helped me connect the theory behind
              intelligent systems with the practical reality of building them.
            </p>
            <p>
              My goal is simple: build systems that are practical, reliable,
              thoughtfully designed, and genuinely useful not just impressive on
              a screen.
            </p>
          </div>
        </Reveal>
      </section>

      <div className="mt-16">
        <Reveal>
          <SkillsGrid skills={profile.skills} />
        </Reveal>
      </div>
    </div>
  );
}
