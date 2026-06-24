import type { SkillGroup } from "@/types/profile";

type SkillsGridProps = {
  skills: SkillGroup[];
};

export function SkillsGrid({ skills }: SkillsGridProps) {
  return (
    <section>
      <h2 className="font-display text-3xl font-semibold tracking-normal text-[var(--text-primary)] sm:text-4xl">
        Technologies I Have Used
      </h2>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {skills.map((group) => (
          <section
            key={group.category}
            className="premium-card p-6"
          >
            <h3 className="text-lg font-semibold tracking-normal text-[var(--text-primary)]">
              {group.category}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="max-w-full break-words rounded-full border border-[var(--border-soft)] bg-[rgba(16,23,40,0.7)] px-3 py-1.5 text-sm font-medium text-[var(--text-secondary)]"
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
