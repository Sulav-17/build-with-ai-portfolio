import { projects } from "@/content/projects";
import { Reveal } from "@/components/reveal";

const stageCopy: Record<string, string> = {
  "build-log-ai":
    "Developer activity, APIs, structured summaries, and export workflows.",
  "smart-document-qa-system":
    "Retrieval, embeddings, vector storage, and grounded generation.",
  "ai-data-insight-assistant":
    "Safe analysis, visualisation, deterministic insights, and reporting.",
  "ai-content-repurposing-pipeline":
    "Asynchronous processing, queues, workers, databases, and containers.",
};

export function EngineeringJourney() {
  return (
    <section className="section-shell">
      <Reveal className="section-signal max-w-3xl">
        <p className="eyebrow">Engineering Progression</p>
        <h2 className="section-title">How the work evolved</h2>
        <span className="signal-line" aria-hidden="true" />
      </Reveal>

      <div className="journey mt-12">
        <div className="journey__line" aria-hidden="true" />
        <ol className="grid gap-6 lg:grid-cols-4">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 90}>
              <li className={`journey__stage journey__stage--${project.accent}`}>
                <p className="mono-label">0{index + 1}</p>
                <h3 className="mt-3 text-xl font-semibold text-[var(--text-primary)]">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                  {stageCopy[project.slug]}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
