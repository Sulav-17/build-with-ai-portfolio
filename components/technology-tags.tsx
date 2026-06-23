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
          className="rounded border border-slate-300 bg-white px-2.5 py-1 text-xs font-medium text-slate-700"
        >
          {technology}
        </li>
      ))}
    </ul>
  );
}
