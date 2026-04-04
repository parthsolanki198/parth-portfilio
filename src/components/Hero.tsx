"use client";

import Link from "next/link";
import { SpotlightShell } from "@/components/SpotlightShell";
import { RotatingFocus } from "@/components/RotatingFocus";

export function Hero() {
  return (
    <SpotlightShell className="relative min-h-[100dvh] border-b border-stone-200/60 bg-white/25 px-4 pb-24 pt-28 backdrop-blur-[2px] dark:border-white/10 dark:bg-white/[0.02] sm:px-6 sm:pt-32">
      <section id="top" className="mx-auto flex max-w-6xl flex-col justify-center">
        <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-stone-600 dark:text-stone-500">
          <span className="glass glass-sm rounded-full px-3 py-1 text-stone-700 dark:text-stone-300">
            software{" "}
            <span className="text-teal-700 dark:text-mint/90">developer</span>
          </span>
          <span className="hidden sm:inline text-stone-400 dark:text-stone-600">/</span>
          <span className="hidden sm:inline">full-stack · TypeScript</span>
        </div>

        <h1 className="mt-10 font-display text-[clamp(3.2rem,14vw,8.5rem)] font-semibold leading-[0.88] tracking-tight">
          <span className="group relative inline-block cursor-default">
            <span className="outline-name block">PARTH</span>
          </span>
        </h1>

        <p className="mt-4 max-w-xl font-display text-xl italic text-stone-600 dark:text-stone-400 sm:text-2xl">
          ships production code — APIs, UIs, and the glue between them
          <span className="not-italic text-coral">.</span>
        </p>

        <RotatingFocus />

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full border border-teal-600/40 bg-teal-500/20 px-6 py-3 text-sm font-semibold text-stone-900 shadow-lg shadow-teal-900/10 backdrop-blur-xl transition hover:border-teal-600 hover:bg-teal-500/30 dark:border-mint/45 dark:bg-mint/25 dark:text-void dark:shadow-mint/20 dark:hover:border-mint/70 dark:hover:bg-mint/40"
          >
            Repos &amp; projects
            <span className="transition group-hover:translate-x-0.5" aria-hidden>
              →
            </span>
          </Link>
          <Link
            href="#contact"
            className="glass glass-sm rounded-full px-6 py-3 text-sm font-semibold text-stone-800 transition hover:border-teal-600/40 dark:text-stone-100 dark:hover:border-mint/35"
          >
            Hiring? Let&apos;s talk
          </Link>
        </div>

        <div className="pointer-events-none absolute bottom-10 left-1/2 hidden -translate-x-1/2 lg:block">
          <div className="animate-float flex flex-col items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-stone-500 dark:text-stone-600">
            <span>Descend</span>
            <span className="h-12 w-px bg-gradient-to-b from-teal-600/50 to-transparent dark:from-mint/40" />
          </div>
        </div>
      </section>
    </SpotlightShell>
  );
}
