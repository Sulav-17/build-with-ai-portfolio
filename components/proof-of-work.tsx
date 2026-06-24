import { Reveal } from "@/components/reveal";

const principles = [
  {
    title: "Architecture",
    description:
      "Each case study explains how the system is structured and how data moves through it.",
  },
  {
    title: "Testing",
    description:
      "Projects include automated tests, evaluation checks, or integration validation where appropriate.",
  },
  {
    title: "Documentation",
    description:
      "Technical decisions, setup instructions, limitations, and maintenance details are documented.",
  },
  {
    title: "Honest Limitations",
    description:
      "Unavailable demos, screenshots, users, and business metrics are not fabricated.",
  },
];

export function ProofOfWork() {
  return (
    <section className="section-shell">
      <Reveal className="section-signal max-w-3xl">
        <p className="eyebrow">Proof of Work</p>
        <h2 className="section-title">Built to be inspected, not just viewed.</h2>
        <span className="signal-line" aria-hidden="true" />
      </Reveal>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {principles.map((principle, index) => (
          <Reveal key={principle.title} delay={index * 80}>
            <article className="premium-card h-full p-6">
              <p className="mono-label text-[var(--accent-blue)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-[var(--text-primary)]">
                {principle.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                {principle.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
