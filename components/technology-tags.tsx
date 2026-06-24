type TechnologyTagsProps = {
  technologies: string[];
  limit?: number;
};

export function TechnologyTags({ technologies, limit }: TechnologyTagsProps) {
  const visibleTechnologies =
    typeof limit === "number" ? technologies.slice(0, limit) : technologies;

  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies">
      {visibleTechnologies.map((technology) => (
        <li
          key={technology}
          className="max-w-full break-words rounded-full border border-[var(--border-soft)] bg-[rgba(16,23,40,0.72)] px-2.5 py-1 font-mono-ui text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[var(--text-secondary)]"
        >
          {technology}
        </li>
      ))}
    </ul>
  );
}
