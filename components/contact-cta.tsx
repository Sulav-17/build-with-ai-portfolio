import Link from "next/link";
import { profile } from "@/content/profile";

export function ContactCta() {
  return (
    <section className="section-shell">
      <div className="premium-card overflow-hidden p-8 sm:p-10">
        <div className="relative z-10 max-w-3xl">
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">
            Have a role, project, or technical problem worth untangling?
          </h2>
          <p className="section-copy mt-5">
            I&apos;m interested in opportunities involving applied AI, backend
            systems, data engineering, automation, and software development.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="button-primary">
              Contact
            </Link>
            <a
              href={profile.githubUrl}
              className="button-secondary"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>
            <a
              href={profile.linkedInUrl}
              className="button-secondary"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
