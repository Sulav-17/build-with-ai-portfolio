const stages = [
  {
    title: "Messy Inputs",
    labels: ["Documents", "Data", "Media"],
    accent: "cyan",
    icon: (
      <path d="M17 7h10l6 6v24H17V7Zm9 1v6h6M21 21h8M21 26h12M21 31h10" />
    ),
  },
  {
    title: "AI + Data + Automation",
    labels: ["Retrieval", "Analysis", "Workflows"],
    accent: "blue",
    icon: (
      <path d="M24 12v-3M24 39v-3M12 24H9M39 24h-3M15.5 15.5l-2-2M34.5 34.5l-2-2M32.5 15.5l2-2M13.5 34.5l2-2M18 24a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z" />
    ),
  },
  {
    title: "Useful Software",
    labels: ["APIs", "Insights", "Applications"],
    accent: "violet",
    icon: (
      <path d="M13 16h22v16H13V16Zm4 5h6M17 27h14M28 21h3M17 36h14" />
    ),
  },
];

export function HeroSystemVisual() {
  return (
    <div className="transformation-core" aria-label="Transformation Core visual">
      <svg
        className="transformation-core__connectors"
        viewBox="0 0 760 360"
        aria-hidden="true"
      >
        <path
          className="transformation-path transformation-path--one"
          d="M176 176 C274 128 324 128 382 176"
        />
        <path
          className="transformation-path transformation-path--two"
          d="M382 176 C444 224 500 224 594 176"
        />
        <path
          className="transformation-signal"
          d="M176 176 C300 110 458 252 594 176"
        />
      </svg>

      <div className="transformation-core__nodes">
        {stages.map((stage, index) => (
          <section
            key={stage.title}
            className={`transformation-node transformation-node--${stage.accent}`}
          >
            <p className="mono-label">0{index + 1}</p>
            <div className="transformation-node__icon" aria-hidden="true">
              <svg viewBox="0 0 48 48">
                {stage.icon}
              </svg>
            </div>
            <h3>{stage.title}</h3>
            <ul>
              {stage.labels.map((label) => (
                <li key={label}>{label}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
