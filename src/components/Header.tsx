"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { href: "#signal", label: "Profile" },
  { href: "#experience", label: "Experience" },
  { href: "#toolkit", label: "Stack" },
  { href: "#work", label: "Impact" },
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
          className="group flex items-center gap-3 font-mono text-sm text-stone-800 dark:text-stone-200"
        >
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-amber-500/35 bg-gradient-to-br from-amber-500/15 to-teal-500/10 font-display text-xs font-semibold tracking-tight text-stone-900 dark:border-amber-400/25 dark:from-amber-400/10 dark:to-mint/10 dark:text-stone-100"
            aria-hidden
          >
            PS
          </span>
          <span className="leading-tight">
            <span className="block font-medium">Parth Solanki</span>
            <span className="text-[10px] uppercase tracking-[0.14em] text-stone-500 dark:text-stone-500">
              Java backend
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          <span className="flex max-w-[200px] items-center gap-2 font-mono text-[10px] uppercase leading-tight tracking-wider text-stone-600 dark:text-stone-500 xl:max-w-none">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500/35 opacity-60 dark:bg-amber-400/30" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-600 dark:bg-amber-400" />
            </span>
            <span className="hidden xl:inline">Open to hire — backend / Java</span>
            <span className="xl:hidden">Open to hire</span>
          </span>
          <nav className="flex items-center gap-5 xl:gap-6">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="nav-link whitespace-nowrap">
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
