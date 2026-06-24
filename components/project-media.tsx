import Image from "next/image";
import type { ProjectScreenshot } from "@/types/project";

type ProjectMediaProps = {
  screenshots: ProjectScreenshot[];
};

export function ProjectMedia({ screenshots }: ProjectMediaProps) {
  if (screenshots.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className="font-display text-2xl font-semibold tracking-normal text-[var(--text-primary)]">
        Screenshots
      </h2>
      <div className="mt-4 grid gap-5">
        {screenshots.map((screenshot) => (
          <figure
            key={screenshot.src}
            className="premium-card overflow-hidden"
          >
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              width={screenshot.width}
              height={screenshot.height}
              className="h-auto w-full"
            />
            {screenshot.caption ? (
              <figcaption className="border-t border-[var(--border-soft)] px-4 py-3 text-sm leading-6 text-[var(--text-secondary)]">
                {screenshot.caption}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>
    </section>
  );
}
