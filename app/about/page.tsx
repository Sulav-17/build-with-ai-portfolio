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
    <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
      <section className="max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-600">
          About
        </p>
        <h1 className="text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">
          AI Engineer and Software Developer.
        </h1>
        <div className="mt-6 space-y-5 text-base leading-7 text-slate-700">
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
            thoughtfully designed, and genuinely useful not just impressive on a
            screen.
          </p>
        </div>
      </section>

      <div className="mt-14">
        <SkillsGrid skills={profile.skills} />
      </div>
    </div>
  );
}
