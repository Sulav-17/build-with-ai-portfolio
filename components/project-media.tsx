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
      <h2 className="text-2xl font-semibold tracking-normal text-slate-950">
        Screenshots
      </h2>
      <div className="mt-4 grid gap-5">
        {screenshots.map((screenshot) => (
          <figure
            key={screenshot.src}
            className="overflow-hidden rounded border border-slate-200 bg-white"
          >
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              width={screenshot.width}
              height={screenshot.height}
              className="h-auto w-full"
            />
            {screenshot.caption ? (
              <figcaption className="border-t border-slate-200 px-4 py-3 text-sm leading-6 text-slate-600">
                {screenshot.caption}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>
    </section>
  );
}
