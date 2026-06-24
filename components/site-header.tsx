import Link from "next/link";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/"
          className="text-base font-semibold tracking-normal text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-950"
        >
          Sulav Baral
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-slate-700">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-none hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-950"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
