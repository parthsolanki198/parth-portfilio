const pillars: {
  n: string;
  title: string;
  blurb: string;
  method: string;
}[] = [
  {
    n: "01",
    title: "Traceability over theater",
    blurb:
      "Metrics and runbooks tied to real services, owners, and failure modes — so postmortems write themselves.",
    method: "traceabilityOverTheater()",
  },
  {
    n: "02",
    title: "Ship small, roll back fast",
    blurb:
      "Releases sized so the team can reason about blast radius; rollback is a habit, not a fire drill.",
    method: "smallReleasesWithRollback()",
  },
  {
    n: "03",
    title: "Schema before scale",
    blurb:
      "Contracts and migrations planned before traffic proves you wrong — fewer surprise rewrites at midnight.",
    method: "schemasVersionedBeforeScale()",
  },
  {
    n: "04",
    title: "Incidents while memory is hot",
    blurb:
      "Notes and timelines captured when context is fresh, so the next on-call inherits the lesson.",
    method: "incidentsDocumentedWhileWarm()",
  },
  {
    n: "05",
    title: "Reviews that name risk",
    blurb:
      "PR feedback calls out auth, data, and edge cases — not just style nits and green CI.",
    method: "reviewsThatNameRisksExplicitly()",
  },
  {
    n: "06",
    title: "AI in the loop, you on the hook",
    blurb:
      "Copilot and friends for speed; humans own design, review, and what merges to main.",
    method: "aiAssistedButHumanAccountable()",
  },
];

function CodeBlock() {
  return (
    <code>
      <span className="block">
        <span className="text-amber-700 dark:text-amber-400">interface</span>{" "}
        <span className="text-teal-700 dark:text-mint">BackendCraft</span>{" "}
        <span className="text-stone-600 dark:text-stone-500">{"{"}</span>
      </span>
      <span className="block text-stone-500 italic dark:text-stone-500">
        {"  // How work leaves my hands — hiring managers scan cards above."}
      </span>
      {[
        "traceabilityOverTheater",
        "smallReleasesWithRollback",
        "schemasVersionedBeforeScale",
        "incidentsDocumentedWhileWarm",
        "reviewsThatNameRisksExplicitly",
        "aiAssistedButHumanAccountable",
      ].map((name) => (
        <span key={name} className="block">
          <span className="text-stone-600 dark:text-stone-600">{"  "}</span>
          <span className="text-teal-700 dark:text-mint/90">{name}</span>
          <span className="text-stone-600 dark:text-stone-400">();</span>
        </span>
      ))}
      <span className="block text-stone-600 dark:text-stone-500">{"}"}</span>
    </code>
  );
}

export function SkillsSection() {
  return (
    <section id="craft" className="section-reveal section-aura-amber scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber-800 dark:text-amber-400/90">
              Craft
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold tracking-tight text-stone-900 dark:text-white sm:text-3xl md:text-[2rem] md:leading-tight">
              The part most portfolios skip: how I actually ship.
            </h2>
          </div>
          <p className="max-w-xs font-mono text-[10px] uppercase leading-relaxed tracking-wider text-stone-500 dark:text-stone-600">
            Stack = tools · Impact = outcomes · Craft = habits
          </p>
        </div>

        <p className="content-lead mt-4 text-sm text-stone-600 dark:text-stone-500">
          Six defaults I bring on day one. They compound across teams — and they are what interviewers
          remember after the buzzwords fade.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {pillars.map((p) => (
            <article
              key={p.method}
              className="craft-pillar glass-card group relative overflow-hidden p-5 sm:p-6"
            >
              <div
                className="absolute bottom-0 left-0 top-0 w-1 bg-gradient-to-b from-amber-500/90 via-teal-500/70 to-violet-500/60 opacity-90 dark:from-amber-400/80 dark:via-mint/70 dark:to-violet-400/50"
                aria-hidden
              />
              <p className="font-mono text-[10px] font-medium tabular-nums text-amber-800 dark:text-amber-400/90">
                {p.n}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold text-stone-900 dark:text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-[1.65] text-stone-600 dark:text-stone-400">
                {p.blurb}
              </p>
              <p className="mt-4 break-words font-mono text-[10px] leading-snug tracking-wide text-teal-700/90 dark:text-mint/75">
                {p.method}
              </p>
            </article>
          ))}
        </div>

        <div className="craft-code-panel hire-brief-glow relative mt-14 overflow-hidden rounded-2xl border border-amber-500/20 bg-white/25 backdrop-blur-md dark:border-amber-400/15 dark:bg-white/[0.03] sm:rounded-3xl sm:mt-16">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-amber-500/10 blur-3xl dark:bg-amber-400/10"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-teal-500/10 blur-3xl dark:bg-mint/10"
            aria-hidden
          />

          <div className="relative flex items-center gap-2 border-b border-stone-200/60 px-4 py-3 dark:border-white/[0.08] sm:px-5">
            <div className="flex gap-1.5" aria-hidden>
              <span className="h-2.5 w-2.5 rounded-full bg-stone-300/80 dark:bg-stone-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-stone-300/80 dark:bg-stone-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-stone-300/80 dark:bg-stone-600" />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-stone-500 dark:text-stone-500">
              BackendCraft — source sketch
            </span>
          </div>

          <div className="relative flex overflow-x-auto">
            <div
              className="shrink-0 select-none border-r border-stone-200/70 bg-stone-100/80 px-3 py-5 text-right font-mono text-[10px] leading-[1.65] text-stone-400 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-stone-600 sm:px-4 sm:py-6 sm:text-[11px] sm:leading-[1.7]"
              aria-hidden
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                <div key={n}>{n}</div>
              ))}
            </div>
            <pre className="min-w-0 flex-1 p-5 font-mono text-[10px] leading-[1.65] text-stone-700 dark:text-stone-300 sm:p-6 sm:text-[11px] sm:leading-[1.7]">
              <CodeBlock />
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
