import { SocialLinks } from "@/components/social-links";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/content/profile";
import { createPageMetadata } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Contact | Sulav Baral",
  description:
    "Professional contact information for Sulav Baral's applied AI, data, automation, and backend portfolio.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <SectionHeading
        eyebrow="Contact"
        title="Connect about practical AI, data, automation, and backend work."
        description="For professional context, project review, or collaboration discussions, use the verified profile links below."
        level="h1"
      />

      <Reveal delay={100}>
        <div className="premium-card p-6 sm:p-8">
          <p className="mono-label text-[var(--accent-cyan)]">
            Verified profile links
          </p>
          <div className="mt-6">
            <SocialLinks profile={profile} />
          </div>
          <p className="mt-6 text-sm leading-6 text-[var(--text-muted)]">
            No contact form, email address, or availability status is displayed
            until verified information is supplied.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
