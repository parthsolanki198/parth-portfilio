const featured = [
  { name: "Java 17", hint: "8 · 11 · 17", tone: "amber" as const },
  { name: "Spring Boot", hint: "Security · Data", tone: "teal" as const },
  { name: "Kafka", hint: "Events at scale", tone: "violet" as const },
  { name: "GCP", hint: "GKE · Pub/Sub", tone: "sky" as const },
];

const categories: {
  title: string;
  blurb: string;
  tone: "amber" | "teal" | "violet" | "orange";
  items: string[];
}[] = [
  {
    title: "JVM & build",
    blurb: "Language, packaging, and quality gates.",
    tone: "amber",
    items: [
      "Java 17",
      "Maven",
      "JUnit",
      "OOP",
      "DSA",
      "REST",
      "Microservices",
    ],
  },
  {
    title: "Spring stack",
    blurb: "Services, security, and persistence.",
    tone: "teal",
    items: [
      "Spring Boot",
      "Spring Security",
      "Hibernate JPA",
      "OAuth2 / JWT",
      "AOP logging",
    ],
  },
  {
    title: "Data & messaging",
    blurb: "Stores, streams, and async pipes.",
    tone: "violet",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Oracle",
      "BigQuery",
      "Kafka",
      "Pub/Sub",
      "ActiveMQ",
    ],
  },
  {
    title: "Cloud & delivery",
    blurb: "Runtime, infra-as-code, and pipelines.",
    tone: "orange",
    items: [
      "GCP",
      "GKE",
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "CI/CD",
    ],
  },
];

const toneRing: Record<(typeof categories)[number]["tone"], string> = {
  amber:
    "from-amber-500/90 via-amber-400/40 to-transparent dark:from-amber-400/80 dark:via-amber-500/30",
  teal: "from-teal-500/90 via-teal-400/40 to-transparent dark:from-mint/80 dark:via-mint/25",
  violet:
    "from-violet-500/90 via-violet-400/40 to-transparent dark:from-violet-400/70 dark:via-violet-500/25",
  orange:
    "from-orange-500/90 via-orange-400/40 to-transparent dark:from-orange-400/70 dark:via-orange-500/25",
};

const toneFeatured: Record<(typeof featured)[number]["tone"], string> = {
  amber: "border-amber-500/35 bg-amber-500/[0.08] dark:border-amber-400/25 dark:bg-amber-500/10",
  teal: "border-teal-500/35 bg-teal-500/[0.08] dark:border-mint/25 dark:bg-mint/10",
  violet: "border-violet-500/35 bg-violet-500/[0.08] dark:border-violet-400/25 dark:bg-violet-500/10",
  sky: "border-sky-500/35 bg-sky-500/[0.08] dark:border-sky-400/25 dark:bg-sky-500/10",
};

export function TechRails() {
  return (
    <section id="toolkit" className="section-reveal scroll-mt-24 px-4 sm:px-6">
      <div className="relative mx-auto max-w-6xl">
        <div
          className="pointer-events-none absolute -top-8 left-1/2 hidden h-48 w-[min(90%,48rem)] -translate-x-1/2 translate-y-2 scale-[0.96] rounded-3xl border border-stone-200/40 bg-white/20 opacity-60 dark:border-white/[0.06] dark:bg-white/[0.03] sm:block"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -top-4 left-1/2 hidden h-48 w-[min(92%,50rem)] -translate-x-1/2 translate-y-1 scale-[0.98] rounded-3xl border border-stone-200/30 bg-white/15 opacity-80 dark:border-white/[0.05] dark:bg-white/[0.04] sm:block"
          aria-hidden
        />

        <div className="glass relative overflow-hidden rounded-3xl shadow-2xl shadow-stone-300/35 dark:shadow-black/50">
          <div
            className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 70% 50% at 50% -20%, rgba(245, 158, 11, 0.12), transparent), radial-gradient(ellipse 50% 40% at 100% 50%, rgba(20, 184, 166, 0.08), transparent)",
            }}
            aria-hidden
          />

          <div className="relative border-b border-stone-200/70 px-5 pb-8 pt-10 dark:border-white/[0.08] sm:px-8 sm:pt-12">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-amber-800 dark:text-amber-400/90">
                  Stack
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-stone-900 dark:text-white sm:text-3xl">
                  The toolkit behind production backends.
                </h2>
                <p className="mt-3 max-w-xl text-pretty text-sm leading-[1.75] tracking-[-0.01em] text-stone-600 dark:text-stone-500">
                  Four layers I actually file tickets under — so names here line up with how I
                  debug and design, not a keyword dump.
                </p>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-stone-400 dark:text-stone-600">
                resume-aligned
              </p>
            </div>

            <ul className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {featured.map((f) => (
                <li key={f.name}>
                  <div
                    className={`flex h-full flex-col rounded-2xl border px-4 py-4 backdrop-blur-sm transition hover:-translate-y-0.5 ${toneFeatured[f.tone]}`}
                  >
                    <span className="font-mono text-[10px] uppercase tracking-wider text-stone-500 dark:text-stone-500">
                      {f.hint}
                    </span>
                    <span className="mt-2 font-display text-lg font-semibold text-stone-900 dark:text-white">
                      {f.name}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative grid gap-3 p-4 sm:grid-cols-2 sm:p-6 lg:grid-cols-4 lg:gap-4">
            {categories.map((c) => (
              <article
                key={c.title}
                className="relative flex flex-col overflow-hidden rounded-2xl border border-stone-200/60 bg-white/35 dark:border-white/[0.08] dark:bg-white/[0.04]"
              >
                <div
                  className={`h-1 w-full bg-gradient-to-r ${toneRing[c.tone]}`}
                  aria-hidden
                />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-700 dark:text-stone-300">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-stone-500 dark:text-stone-500">
                    {c.blurb}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {c.items.map((item) => (
                      <li key={item}>
                        <span className="inline-flex rounded-lg border border-stone-200/80 bg-white/60 px-2.5 py-1 font-mono text-[11px] text-stone-700 shadow-sm transition hover:-translate-y-px hover:border-teal-500/35 hover:shadow-md dark:border-white/[0.1] dark:bg-white/[0.06] dark:text-stone-200 dark:hover:border-mint/35">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
