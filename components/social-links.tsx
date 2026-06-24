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
    <ul className="flex flex-wrap gap-x-5 gap-y-2">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="font-semibold text-slate-950 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-950"
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
