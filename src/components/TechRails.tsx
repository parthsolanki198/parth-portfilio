const laneA = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Redis",
  "Prisma",
  "REST & GraphQL",
];
const laneB = [
  "Docker",
  "GitHub Actions",
  "Vitest",
  "Playwright",
  "OpenAPI",
  "Linux",
  "AWS / Vercel",
  "Terraform",
];

export function TechRails() {
  const a = [...laneA, ...laneA];
  const b = [...laneB, ...laneB];

  return (
    <section id="toolkit" className="scroll-mt-24 px-4 sm:px-6">
      <div className="glass mx-auto max-w-6xl overflow-hidden rounded-2xl shadow-2xl shadow-stone-300/40 dark:shadow-black/50">
        <div className="border-b border-stone-200/70 px-5 pb-4 pt-8 dark:border-white/[0.08] sm:px-8 sm:pt-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-teal-700 dark:text-mint/80">
            Toolkit
          </p>
          <h2 className="mt-2 font-display text-lg font-semibold text-stone-900 dark:text-white sm:text-xl">
            Languages, frameworks, and infra I use to ship software.
          </h2>
        </div>
        <div className="glass-rail border-t border-stone-200/50 dark:border-white/[0.06]">
          <div className="overflow-hidden py-3">
            <div className="animate-marquee-l flex w-max gap-10 whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em] text-stone-600 dark:text-stone-400 sm:gap-14 sm:text-[13px]">
              {a.map((t, i) => (
                <span key={`a-${i}`} className="shrink-0">
                  <span className="text-teal-600/70 dark:text-mint/50">/</span>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="overflow-hidden border-t border-stone-200/50 py-3 dark:border-white/[0.06]">
            <div className="animate-marquee-r flex w-max gap-10 whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em] text-stone-600 dark:text-stone-400 sm:gap-14 sm:text-[13px]">
              {b.map((t, i) => (
                <span key={`b-${i}`} className="shrink-0">
                  <span className="text-rose-500/60 dark:text-coral/50">/</span>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
