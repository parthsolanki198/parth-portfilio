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
    span: "sm:col-span-12",
    title: "Professional summary",
    body: "2.5+ years shipping JVM services in production: feature work, hardening, and the glue between product asks and operable systems. Comfortable owning slices across API design, persistence, messaging, and deploy paths — with recognition for consistent delivery (Employee of the Month ×2 at AV Devs).",
    foot: "Matches the PDF in Contact — download it there only.",
  },
  {
    span: "sm:col-span-6",
    title: "Where I lean in",
    body: "End-to-end backend ownership: shaping contracts, guarding data access, making async paths observable, and keeping releases small enough to reason about.",
    tags: ["Ownership", "APIs", "Events", "Ops-minded"],
  },
  {
    span: "sm:col-span-6",
    title: "Education",
    body: "B.E. Computer Engineering — Gujarat Technological University, Rajkot (2019–2023). Coursework grounded systems thinking: DSA, databases, cloud, and software engineering practice.",
    mono: "CGPA · 8.04 / 10.0",
  },
  {
    span: "sm:col-span-6",
    title: "Proof points",
    body: "Google Cloud Skill Boost (Vertex AI prompt design, Gemini apps). HackerRank: Java Basic/Intermediate, SQL Advanced. Led Java 8 → 17 migration; shaped messaging paths at six-figure daily event volume.",
    tags: ["GCP", "Vertex AI", "HackerRank"],
  },
  {
    span: "sm:col-span-6",
    title: "Collaboration",
    body: "Prefer written decisions, small diffs, and demos that show latency + error budgets — not just green CI. AI tools in the loop for speed, with review standards that keep main trustworthy.",
    mono: "Async · doc-first",
  },
];

export function BentoSignal() {
  return (
    <section
      id="signal"
      className="section-reveal section-aura-violet scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-teal-700 dark:text-mint/80">
          Profile
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-2xl font-semibold text-stone-900 dark:text-white sm:text-3xl">
          The credential lattice — facts, not adjectives.
        </h2>
        <p className="content-lead mt-3 text-sm text-stone-600 dark:text-stone-400">
          Each tile answers a different hiring question so nothing below has to repeat the same
          paragraph.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-12 sm:gap-5">
          {cells.map((c) => (
            <article
              key={c.title}
              className={`glass-card p-6 sm:p-7 ${c.span} ${
                c.title === "Professional summary"
                  ? "ring-1 ring-amber-500/25 dark:ring-amber-400/20"
                  : ""
              }`}
            >
              <h3 className="font-mono text-xs uppercase tracking-wider text-stone-500 dark:text-stone-500">
                {c.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.7] text-stone-600 dark:text-stone-400 sm:text-[15px]">
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
