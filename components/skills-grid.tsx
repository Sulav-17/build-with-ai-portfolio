import type { SkillGroup } from "@/types/profile";

type SkillsGridProps = {
  skills: SkillGroup[];
};

export function SkillsGrid({ skills }: SkillsGridProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-normal text-slate-950 sm:text-3xl">
        Technologies I Have Used
      </h2>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {skills.map((group) => (
          <section
            key={group.category}
            className="rounded border border-slate-200 bg-white p-6"
          >
            <h3 className="text-lg font-semibold tracking-normal text-slate-950">
              {group.category}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="max-w-full break-words rounded border border-slate-300 bg-white px-2.5 py-1 text-sm font-medium text-slate-700"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
