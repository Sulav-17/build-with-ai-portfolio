"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandMark } from "@/components/brand-mark";
import { MobileNavigation } from "@/components/mobile-navigation";
import { profile } from "@/content/profile";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border-soft)] bg-[rgba(7,10,18,0.76)] backdrop-blur-xl">
      <div className="page-shell flex min-h-[72px] items-center justify-between gap-4 py-3 lg:min-h-20">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-3.5 text-[var(--text-primary)]"
        >
          <BrandMark className="size-10 shrink-0 sm:size-11 lg:size-12" />
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-[1rem] font-semibold sm:text-[1.05rem]">
              {profile.name}
            </span>
            <span className="hidden text-[0.78rem] text-[var(--text-muted)] xl:block">
              {profile.professionalHeadline}
            </span>
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-3">
          <nav className="hidden min-[900px]:block" aria-label="Main navigation">
            <ul className="flex items-center gap-x-7 whitespace-nowrap text-[0.94rem] font-semibold text-[var(--text-secondary)] xl:gap-x-8">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="nav-link"
                    data-active={
                      item.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.href)
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div
            className="hidden shrink-0 items-center gap-2 min-[430px]:flex"
            aria-label="Profile links"
          >
            <a
              href={profile.githubUrl}
              className="icon-link"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Sulav Baral's GitHub profile"
            >
              <GithubIcon />
            </a>
            <a
              href={profile.linkedInUrl}
              className="icon-link"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Sulav Baral's LinkedIn profile"
            >
              <LinkedInIcon />
            </a>
          </div>
          <div className="min-[900px]:hidden">
            <MobileNavigation items={navigationItems} pathname={pathname} />
          </div>
        </div>
      </div>
    </header>
  );
}

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-4"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.19-3.37-1.19-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6c.85 0 1.7.11 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-4"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.94 8.86H3.75V20h3.19V8.86ZM5.35 4a1.84 1.84 0 1 0 0 3.68A1.84 1.84 0 0 0 5.35 4Zm15 9.82c0-3-1.6-4.4-3.73-4.4a3.22 3.22 0 0 0-2.9 1.6h-.04V8.86h-3.05V20h3.18v-5.51c0-1.45.27-2.86 2.07-2.86 1.77 0 1.79 1.66 1.79 2.95V20h3.18v-6.18Z" />
    </svg>
  );
}
