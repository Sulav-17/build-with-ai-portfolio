import { TechnologyTags } from "@/components/technology-tags";

type CapabilityCardProps = {
  title: string;
  description: string;
  tools: string[];
};

export function CapabilityCard({
  title,
  description,
  tools,
}: CapabilityCardProps) {
  return (
    <article className="premium-card group flex h-full flex-col gap-5 p-6">
      <div>
        <p className="mono-label text-[var(--accent-cyan)]">Capability</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.01em] text-[var(--text-primary)]">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
          {description}
        </p>
      </div>
      <TechnologyTags technologies={tools} />
    </article>
  );
}
