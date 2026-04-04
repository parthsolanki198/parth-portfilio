type Cell = {
  span: string;
  title: string;
  body: string;
  foot?: string;
  mono?: string;
  tags?: string[];
};

const cells: Cell[] = [
  {
    span: "sm:col-span-8 sm:row-span-2",
    title: "How I engineer",
    body: "I write software for maintainability: clear boundaries, typed boundaries where it pays off, and instrumentation so production tells you what broke — not users guessing.",
    foot: "— how I think about the craft",
  },
  {
    span: "sm:col-span-4",
    title: "Code & community",
    body: "OSS patches, internal dev tools, and PRs that shrink onboarding time for the next developer.",
    tags: ["PRs", "RFCs", "CLI"],
  },
  {
    span: "sm:col-span-4",
    title: "Stack focus",
    body: "Strongest in modern TypeScript ecosystems, Node runtimes, relational data, and shipping through CI/CD — happy to go deeper on request.",
    tags: ["TS", "React", "SQL"],
  },
  {
    span: "sm:col-span-6",
    title: "Location",
    body: "Remote-friendly. Replace with your city or timezone for recruiters.",
    mono: "TZ · UTC+00:00 (edit me)",
  },
  {
    span: "sm:col-span-6",
    title: "Currently",
    body: "Template: building X at Y, or job-seeking and sharpening Z. Recruiters skim this line first.",
    mono: "→ edit BentoSignal.tsx",
  },
];

export function BentoSignal() {
  return (
    <section id="signal" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-teal-700 dark:text-mint/80">
          Engineering
        </p>
        <h2 className="mt-3 font-display text-2xl font-semibold text-stone-900 dark:text-white sm:text-3xl">
          How I build software — in practice, not buzzwords.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-12 sm:grid-rows-[auto_auto] sm:gap-4">
          {cells.map((c) => (
            <article
              key={c.title}
              className={`glass-card p-6 sm:p-7 ${c.span}`}
            >
              <h3 className="font-mono text-xs uppercase tracking-wider text-stone-500 dark:text-stone-500">
                {c.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-stone-400 sm:text-[15px]">
                {c.body}
              </p>
              {c.foot ? (
                <p className="mt-4 font-display text-sm italic text-stone-500 dark:text-stone-500">
                  {c.foot}
                </p>
              ) : null}
              {c.mono ? (
                <p className="mt-4 font-mono text-xs text-teal-700 dark:text-mint/70">{c.mono}</p>
              ) : null}
              {c.tags ? (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <li
                      key={t}
                      className="glass glass-sm rounded-md px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-stone-600 dark:text-stone-400"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
