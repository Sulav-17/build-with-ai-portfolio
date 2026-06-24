import { Reveal } from "@/components/reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  level?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
  level = "h2",
}: SectionHeadingProps) {
  const Heading = level;

  return (
    <Reveal className={`section-signal max-w-3xl ${className}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <Heading className="section-title">{title}</Heading>
      {description ? <p className="section-copy mt-4">{description}</p> : null}
      <span className="signal-line" aria-hidden="true" />
    </Reveal>
  );
}
