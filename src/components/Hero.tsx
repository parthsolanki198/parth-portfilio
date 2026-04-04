"use client";

import Link from "next/link";
import { SpotlightShell } from "@/components/SpotlightShell";
import { RotatingFocus } from "@/components/RotatingFocus";

const previewLines = [
  { ok: true, text: "2.5+ yrs Java (8 → 17) in production" },
  { ok: true, text: "Spring Boot microservices · GCP · GKE · Kafka / Pub/Sub" },
  { ok: true, text: "PostgreSQL tuning · measurable API & reliability wins" },
  { ok: true, text: "Employee of the Month ×2 (AV Devs) — ownership cited" },
];

export function Hero() {
  return (
    <SpotlightShell className="relative min-h-[100dvh] border-b border-stone-200/60 bg-white/25 px-4 pb-20 pt-28 backdrop-blur-[2px] dark:border-white/10 dark:bg-white/[0.02] sm:px-6 sm:pb-24 sm:pt-32">
      <section id="top" className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-stone-600 dark:text-stone-500">
          <span className="glass glass-sm rounded-full px-3 py-1 text-stone-700 dark:text-stone-300">
            <span className="text-amber-700 dark:text-amber-400/90">Java</span> backend engineer
          </span>
          <span className="hidden sm:inline text-stone-400 dark:text-stone-600">/</span>
          <span className="hidden sm:inline">Vadodara · open to strong teams</span>
        </div>

        <div className="mt-10 grid items-start gap-12 lg:grid-cols-[1fr_minmax(280px,340px)] lg:gap-14">
          <div>
            <p className="font-mono text-sm text-stone-600 dark:text-stone-400 sm:text-base">
              Parth Solanki
            </p>

            <h1 className="mt-1 font-display text-[clamp(3rem,12vw,7.5rem)] font-semibold leading-[0.86] tracking-tight">
              <span className="group relative block cursor-default">
                <span className="outline-name block">PARTH</span>
              </span>
              <span className="text-gradient-surname block">SOLANKI</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-700 dark:text-stone-300 sm:text-lg">
              I build backend systems that stay boring in production: clear services, observable
              messaging, and numbers you can trace back to the work — not slide deck guesses.
            </p>

            <RotatingFocus />

            <div className="mt-10 flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full border border-amber-600/45 bg-amber-500/15 px-6 py-3 text-sm font-semibold text-stone-900 shadow-lg shadow-amber-900/10 backdrop-blur-xl transition hover:border-amber-600 hover:bg-amber-500/25 dark:border-amber-400/35 dark:bg-amber-500/10 dark:text-stone-100 dark:shadow-amber-950/20 dark:hover:border-amber-400/60 dark:hover:bg-amber-500/20"
              >
                See impact &amp; metrics
                <span className="transition group-hover:translate-x-0.5" aria-hidden>
                  →
                </span>
              </Link>
              <Link
                href="/Parth_Solanki_Java_Developer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-sm rounded-full px-6 py-3 text-sm font-semibold text-stone-800 transition hover:border-amber-500/40 dark:text-stone-100 dark:hover:border-amber-400/35"
              >
                Download resume
              </Link>
              <Link
                href="#contact"
                className="glass glass-sm rounded-full px-6 py-3 text-sm font-semibold text-stone-800 transition hover:border-teal-600/40 dark:text-stone-100 dark:hover:border-mint/35"
              >
                Contact
              </Link>
            </div>
          </div>

          <aside
            className="glass-card relative mt-10 overflow-hidden p-6 font-mono text-[11px] leading-relaxed text-stone-600 shadow-none dark:text-stone-400 sm:p-7 lg:mt-0"
            aria-label="Recruiter quick scan"
          >
            <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-gradient-to-bl from-amber-500/10 to-transparent dark:from-amber-400/10" />
            <p className="text-stone-500 dark:text-stone-500">
              <span className="text-teal-700 dark:text-mint">recruiter</span>
              <span className="text-stone-400">.</span>
              <span className="text-amber-700 dark:text-amber-400">preview</span>
              <span className="text-stone-500">() {"{"}</span>
            </p>
            <ul className="mt-4 space-y-2.5 border-l border-stone-200/80 pl-4 dark:border-white/10">
              {previewLines.map((line) => (
                <li key={line.text} className="flex gap-2">
                  <span className="shrink-0 text-teal-600 dark:text-mint" aria-hidden>
                    ✓
                  </span>
                  <span>{line.text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-stone-500 dark:text-stone-500">
              <span className="text-mint dark:text-mint">return</span>{" "}
              <span className="text-amber-800 dark:text-amber-300">Candidate</span>
              <span className="text-stone-400">.</span>
              <span className="text-stone-700 dark:text-stone-300">shortlist()</span>;
            </p>
            <p className="text-stone-500 dark:text-stone-500">{"}"}</p>
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
