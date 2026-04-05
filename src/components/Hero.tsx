"use client";

import Link from "next/link";
import { SpotlightShell } from "@/components/SpotlightShell";
import { RotatingFocus } from "@/components/RotatingFocus";

const interviewAngles = [
  "Trace a production incident from alert → root cause → guardrail.",
  "Compare two ways you’d wire a new feature: REST vs events — tradeoffs included.",
  "Walk through a query plan change that moved a hot path from painful to boring.",
];

export function Hero() {
  return (
    <SpotlightShell className="relative min-h-[100dvh] border-b border-stone-200/60 bg-white/25 px-4 pb-20 pt-28 backdrop-blur-[2px] dark:border-white/10 dark:bg-white/[0.02] sm:px-6 sm:pb-24 sm:pt-32">
      <section
        id="top"
        className="section-aura-mint mx-auto max-w-6xl scroll-mt-24"
      >
        <div className="flex animate-fade-up flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-stone-600 dark:text-stone-500">
          <span className="glass glass-sm rounded-full px-3 py-1 text-stone-700 dark:text-stone-300">
            <span className="text-amber-700 dark:text-amber-400/90">Java</span> backend engineer
          </span>
          <span className="hidden sm:inline text-stone-400 dark:text-stone-600">/</span>
          <span className="hidden sm:inline">Vadodara · open to strong teams</span>
        </div>

        <div className="mt-10 grid items-start gap-12 lg:grid-cols-[1fr_minmax(280px,340px)] lg:gap-14">
          <div>
            <p className="animate-fade-up font-mono text-sm text-stone-600 delay-100 dark:text-stone-400 sm:text-base">
              Parth Solanki
            </p>

            <h1 className="animate-fade-up mt-1 font-display text-[clamp(3rem,12vw,7.5rem)] font-semibold leading-[0.86] tracking-tight delay-150">
              <span className="group relative block cursor-default">
                <span className="outline-name block">PARTH</span>
              </span>
              <span className="text-gradient-surname block">SOLANKI</span>
            </h1>

            <p className="animate-fade-up mt-6 max-w-xl text-pretty text-base leading-[1.75] tracking-[-0.01em] text-stone-700 delay-200 dark:text-stone-300 sm:max-w-2xl sm:text-lg">
              Calm production backends: contracts that age well, pipelines you can replay, and proof
              in metrics — not theater in a deck.
            </p>

            <div className="animate-fade-up delay-300">
              <RotatingFocus />
            </div>

            <div className="animate-fade-up mt-10 flex flex-wrap gap-3 delay-[380ms] sm:gap-4">
              <Link
                href="#work"
                className="btn-press group inline-flex items-center gap-2 rounded-full border border-amber-600/45 bg-amber-500/15 px-6 py-3 text-sm font-semibold text-stone-900 shadow-lg shadow-amber-900/10 backdrop-blur-xl hover:border-amber-600 hover:bg-amber-500/25 dark:border-amber-400/35 dark:bg-amber-500/10 dark:text-stone-100 dark:shadow-amber-950/20 dark:hover:border-amber-400/60 dark:hover:bg-amber-500/20"
              >
                See impact &amp; metrics
                <span className="transition group-hover:translate-x-0.5" aria-hidden>
                  →
                </span>
              </Link>
              <Link
                href="#contact"
                className="btn-press inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-600 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-900/20 hover:from-teal-500 hover:to-teal-400 dark:from-mint dark:to-teal-400 dark:text-stone-950 dark:shadow-teal-950/25"
              >
                Email &amp; resume
                <span className="text-white/90 dark:text-stone-900/80" aria-hidden>
                  ↓
                </span>
              </Link>
            </div>
            <p className="mt-3 max-w-md text-xs leading-relaxed text-stone-500 dark:text-stone-600">
              Address and PDF live in one place — the contact block at the bottom. Nothing else on this
              site repeats them.
            </p>
          </div>

          <aside
            className="glass-card hero-aside-grid relative mt-10 overflow-hidden border-stone-200/70 p-6 font-mono text-[11px] leading-relaxed text-stone-600 shadow-none animate-fade-up delay-100 dark:border-white/[0.12] dark:text-stone-400 sm:p-7 lg:mt-0 lg:delay-200"
            aria-label="Suggested first-round prompts"
          >
            <div
              className="hero-aside-shine pointer-events-none absolute inset-0 opacity-80 dark:opacity-70"
              aria-hidden
            />
            <div className="relative">
              <p className="text-[10px] uppercase tracking-[0.22em] text-stone-500 dark:text-stone-500">
                <span className="text-teal-700 dark:text-mint">Round one</span>
                <span className="text-stone-400"> · </span>
                <span className="text-amber-800 dark:text-amber-300">depth checks</span>
              </p>
              <p className="mt-3 font-display text-base font-medium leading-snug text-stone-900 dark:text-stone-100">
                Ask me these — you&apos;ll hear how I actually work.
              </p>
              <ul className="mt-5 space-y-3 border-l border-amber-500/35 pl-4 dark:border-amber-400/25">
                {interviewAngles.map((q, idx) => (
                  <li key={q}>
                    <span className="mr-2 font-mono text-[10px] text-stone-400 dark:text-stone-600">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[12px] leading-relaxed text-stone-700 dark:text-stone-300 sm:text-[13px]">
                      {q}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[10px] leading-relaxed text-stone-500 dark:text-stone-600">
                Credentials, stack, and wins live below — this card is only conversation fuel.
              </p>
            </div>
          </aside>
        </div>

        <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block">
          <div className="animate-float flex flex-col items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-stone-500 dark:text-stone-600">
            <span>Scroll</span>
            <span className="h-12 w-px bg-gradient-to-b from-amber-500/50 to-transparent dark:from-amber-400/40" />
          </div>
        </div>
      </section>
    </SpotlightShell>
  );
}
