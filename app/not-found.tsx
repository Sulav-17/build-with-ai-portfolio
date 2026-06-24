import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { createPageMetadata } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Page Not Found | Sulav Baral",
  description:
    "The requested page could not be found in Sulav Baral's portfolio.",
  path: "/404",
});

export default function NotFound() {
  return (
    <section className="section-shell">
      <Reveal>
        <div className="premium-card max-w-3xl p-8 sm:p-10">
          <p className="eyebrow">404</p>
          <h1 className="font-display mt-4 text-4xl font-bold tracking-normal text-[var(--text-primary)] sm:text-5xl">
            Page not found
          </h1>
          <p className="section-copy mt-5">
            The page you are looking for does not exist or may have moved.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/" className="button-primary">
              Go home
            </Link>
            <Link href="/projects" className="button-secondary">
              View projects
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
