const projects = [
  {
    name: "Ops Console",
    kind: "Full-stack",
    desc: "Internal React dashboard on Node: job queues, retries, RBAC, and searchable audit logs. Cut mean time to debug incidents.",
    hue: "from-mint/20 to-transparent",
    href: "#",
  },
  {
    name: "Habit Loop",
    kind: "Mobile · RN",
    desc: "React Native app with local SQLite, sync layer, and push. Offline-first data model and migration-safe schema.",
    hue: "from-coral/20 to-transparent",
    href: "#",
  },
  {
    name: "Batch Renamer",
    kind: "Desktop",
    desc: "Tauri + Rust core for filesystem ops; React UI. Regex presets, dry-run, full undo stack — safe by default.",
    hue: "from-teal-400/15 to-transparent",
    href: "#",
  },
  {
    name: "Docs Sync",
    kind: "DevEx · CI",
    desc: "GitHub Action pipeline parses TypeScript exports → MDX. Fails PRs when public docs drift from implementation.",
    hue: "from-violet-400/15 to-transparent",
    href: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="work" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-rose-600 dark:text-coral/90">
          Software
        </p>
        <h2 className="mt-3 font-display text-2xl font-semibold text-stone-900 dark:text-white sm:text-3xl">
          Projects — architecture, tradeoffs, outcomes.
        </h2>
        <p className="mt-3 max-w-xl text-sm text-stone-600 dark:text-stone-500">
          Replace with your repos: link READMEs, ADRs, or demo URLs. Hiring managers look for how you
          reason, not just screenshots.
        </p>
      </div>

      <div className="relative mt-12">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-stone-100 via-stone-100/70 to-transparent dark:from-[#050505] dark:via-[#050505]/70 sm:w-20"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-stone-100 via-stone-100/70 to-transparent dark:from-[#050505] dark:via-[#050505]/70 sm:w-20"
          aria-hidden
        />

        <ul className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 pt-2 sm:gap-6 sm:px-6 md:px-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]">
          {projects.map((p) => (
            <li
              key={p.name}
              className="w-[min(100vw-3rem,22rem)] shrink-0 snap-center sm:w-[26rem]"
            >
              <a
                href={p.href}
                className="glass-card flex h-full flex-col p-6 sm:p-7"
              >
                <div
                  className={`glass glass-sm mb-5 aspect-[5/3] w-full rounded-xl bg-gradient-to-br ${p.hue} ring-1 ring-inset ring-stone-300/60 dark:ring-white/15`}
                />
                <span className="font-mono text-[10px] uppercase tracking-widest text-stone-500 dark:text-stone-500">
                  {p.kind}
                </span>
                <h3 className="mt-2 font-display text-xl text-stone-900 dark:text-white">{p.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600 dark:text-stone-500">
                  {p.desc}
                </p>
                <span className="mt-5 font-mono text-xs text-teal-700 dark:text-mint/80">README / demo →</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="mx-auto mt-4 max-w-6xl px-4 text-center font-mono text-xs text-stone-600 sm:px-6 sm:text-left">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-stone-500 underline decoration-stone-300 underline-offset-4 transition hover:text-teal-700 hover:decoration-teal-600/50 dark:text-stone-400 dark:decoration-white/10 dark:hover:text-mint dark:hover:decoration-mint/40"
        >
          github.com/yourusername
        </a>
        <span className="mx-2 text-stone-400 dark:text-stone-700">·</span>
        commits, issues, green CI — the real CV
      </p>
    </section>
  );
}
