import type { Profile } from "@/types/profile";

type SocialLinksProps = {
  profile: Profile;
};

export function SocialLinks({ profile }: SocialLinksProps) {
  const links = [
    { label: "GitHub profile", href: profile.githubUrl },
    { label: "LinkedIn profile", href: profile.linkedInUrl },
    { label: "Email", href: profile.email ? `mailto:${profile.email}` : null },
  ].filter((link): link is { label: string; href: string } =>
    Boolean(link.href),
  );

  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="font-semibold text-[var(--text-primary)] underline decoration-[rgba(34,211,238,0.35)] underline-offset-4 transition-colors duration-200 hover:text-[var(--accent-cyan)] hover:decoration-[var(--accent-cyan)]"
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
