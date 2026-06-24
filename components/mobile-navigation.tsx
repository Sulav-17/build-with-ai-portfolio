"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { profile } from "@/content/profile";

type NavigationItem = {
  href: string;
  label: string;
};

type MobileNavigationProps = {
  items: NavigationItem[];
  pathname: string;
};

export function MobileNavigation({ items, pathname }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className="mobile-nav">
      <button
        type="button"
        className="mobile-nav__button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((current) => !current)}
      >
        Menu
      </button>

      <div id={menuId} className="mobile-nav__panel" hidden={!isOpen}>
        <nav aria-label="Mobile navigation">
          <ul className="grid gap-2">
            {items.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="mobile-nav__link"
                    data-active={isActive}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="mobile-nav__profile-links" aria-label="Profile links">
          <a href={profile.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedInUrl} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
