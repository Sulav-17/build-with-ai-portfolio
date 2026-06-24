import Link from "next/link";
import { SocialLinks } from "@/components/social-links";
import { profile } from "@/content/profile";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-[var(--border-soft)] bg-[rgba(7,10,18,0.84)]">
      <div className="page-shell grid gap-8 py-10 md:grid-cols-[1.2fr_0.8fr] md:items-start">
        <div>
          <p className="font-display text-2xl font-semibold text-[var(--text-primary)]">
            {profile.name}
          </p>
          <p className="mt-2 text-sm font-semibold text-[var(--accent-cyan)]">
            {profile.professionalHeadline}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--text-secondary)]">
            {profile.portfolioStatement}
          </p>
        </div>

        <div className="grid gap-5 sm:justify-items-end">
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-[var(--text-secondary)]">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="nav-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <SocialLinks profile={profile} />
        </div>
      </div>
      <div className="page-shell border-t border-[var(--border-soft)] py-5 text-xs text-[var(--text-muted)]">
        <p>© 2026 Sulav Baral. Built with Next.js and TypeScript.</p>
      </div>
    </footer>
  );
}
