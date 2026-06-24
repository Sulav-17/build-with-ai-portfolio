import Link from "next/link";
import { createPageMetadata } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Page Not Found | Sulav Baral",
  description:
    "The requested page could not be found in Sulav Baral's portfolio.",
  path: "/404",
});

export default function NotFound() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-600">
          404
        </p>
        <h1 className="text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-5 text-base leading-7 text-slate-700">
          The page you are looking for does not exist or may have moved.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-950"
          >
            Go home
          </Link>
          <Link
            href="/projects"
            className="rounded border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 hover:border-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-950"
          >
            View projects
          </Link>
        </div>
      </div>
    </section>
  );
}
