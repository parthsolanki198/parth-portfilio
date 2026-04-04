"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { href: "#signal", label: "Profile" },
  { href: "#toolkit", label: "Toolkit" },
  { href: "#work", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="glass-nav fixed inset-x-0 top-0 z-[60]">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-[4rem] sm:px-6">
        <Link
          href="#top"
          className="group flex items-center gap-2 font-mono text-sm text-stone-800 dark:text-stone-200"
        >
          <span className="text-teal-600 transition group-hover:text-teal-500 dark:text-mint dark:group-hover:text-mint-glow" aria-hidden>
            ◆
          </span>
          <span>parth</span>
          <span className="text-stone-400 dark:text-stone-600">/</span>
          <span className="text-stone-500 dark:text-stone-500">io</span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-stone-600 dark:text-stone-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-500/35 opacity-60 dark:bg-mint/40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-600 dark:bg-mint" />
            </span>
            open to software engineering roles
          </span>
          <nav className="flex items-center gap-7">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="nav-link">
                {l.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="glass glass-sm flex h-10 w-10 items-center justify-center rounded-xl"
            aria-expanded={open}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 bg-stone-800 transition dark:bg-stone-200 ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-stone-800 transition dark:bg-stone-200 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-stone-800 transition dark:bg-stone-200 ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="glass glass-sm border-t border-stone-200/60 px-4 py-4 dark:border-white/10 lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg py-3 text-stone-800 dark:text-stone-200"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
