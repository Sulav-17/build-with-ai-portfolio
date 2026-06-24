import type { CSSProperties } from "react";
import type { ProjectAccent, ProjectVisualVariant } from "@/types/project";

const flowMap: Record<ProjectVisualVariant, string[]> = {
  "activity-flow": [
    "GitHub Activity",
    "Aggregation",
    "Developer Summary",
    "Markdown Export",
  ],
  "retrieval-flow": [
    "PDF",
    "Extraction",
    "Chunking",
    "Embeddings",
    "Retrieval",
    "Grounded Answer",
  ],
  "analysis-flow": [
    "CSV",
    "Validation",
    "Profiling",
    "Safe Analysis",
    "Chart",
    "Business Insight",
  ],
  "pipeline-flow": [
    "Media",
    "FastAPI",
    "PostgreSQL",
    "Redis Queue",
    "Worker",
    "Transcription",
    "Content Outputs",
  ],
};

type ProjectVisualProps = {
  variant: ProjectVisualVariant;
  accent: ProjectAccent;
  compact?: boolean;
};

export function ProjectVisual({
  variant,
  accent,
  compact = false,
}: ProjectVisualProps) {
  const flow = flowMap[variant];

  return (
    <div
      className={`project-visual project-visual--${accent} ${
        compact ? "project-visual--compact" : ""
      }`}
      aria-label={`Architecture flow: ${flow.join(" to ")}`}
    >
      <div className="project-visual__rail" aria-hidden="true" />
      <ol className="project-visual__nodes">
        {flow.map((item, index) => (
          <li
            key={item}
            className="project-visual__node"
            style={{ "--node-index": index } as CSSProperties}
          >
            <span className="project-visual__dot" aria-hidden="true" />
            <span>{item}</span>
            {index < flow.length - 1 ? (
              <span className="project-visual__arrow" aria-hidden="true">
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
