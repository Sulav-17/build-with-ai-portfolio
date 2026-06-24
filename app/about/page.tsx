import type { Metadata } from "next";
import { SkillsGrid } from "@/components/skills-grid";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "About | Sulav Baral",
  description:
    "About Sulav Baral's transition into applied AI, backend development, data engineering, and automation.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
      <section className="max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-600">
          About
        </p>
        <h1 className="text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">
          Practical AI, data, automation, and backend development.
        </h1>
        <div className="mt-6 space-y-5 text-base leading-7 text-slate-700">
          <p>
            Sulav Baral has a background in data analytics, operations, and
            technical problem-solving.
          </p>
          <p>
            He is transitioning toward applied AI, backend development, data
            engineering, and automation through practical project work and
            graduate computer-science study.
          </p>
          <p>{profile.buildWithAIStatement}</p>
          <p>
            The portfolio emphasizes real projects, testing, documentation,
            honest limitations, and continuous improvement.
          </p>
        </div>
      </section>

      <div className="mt-14">
        <SkillsGrid skills={profile.skills} />
      </div>
    </div>
  );
}
