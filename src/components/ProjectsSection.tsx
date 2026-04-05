const items = [
  {
    title: "Cloud messaging & E-Post",
    summary:
      "Customer messages and notifications needed to stay reliable when traffic spiked.",
    points: [
      "Spring Boot microservices on Google Cloud",
      "Pub/Sub so messages are stored and retried safely",
      "Automated flows for E-Post delivery",
    ],
    outcome: "~30% better reliability · ~40% fewer unsent / failed messages",
    tech: "Spring Boot · GCP · Pub/Sub",
  },
  {
    title: "APIs & database speed",
    summary: "Some APIs were slow; we wanted faster responses without rewriting everything.",
    points: [
      "Found slow code paths and removed extra work",
      "Tuned PostgreSQL queries and indexes",
      "Kept changes easy for the team to maintain",
    ],
    outcome: "~60% faster APIs (measured on the hot paths we fixed)",
    tech: "Java · Spring · PostgreSQL",
  },
  {
    title: "Deploying to production (GKE)",
    summary: "The team needed safe, repeatable releases to Kubernetes.",
    points: [
      "CI/CD with GitHub Actions",
      "Pipelines that deploy to GKE with checks in between",
      "Clear path to roll back if something breaks",
    ],
    outcome: "Aim for 99.9% uptime with a steady release rhythm",
    tech: "Kubernetes · GKE · GitHub Actions",
  },
  {
    title: "Backend services (Simform)",
    summary: "Internship work: many small services that had to be secure and consistent.",
    points: [
      "10+ Spring Boot services with REST and Hibernate",
      "Login/security with OAuth2 and JWT",
      "ActiveMQ for notifications · Docker for running services",
    ],
    outcome: "Stronger security habits · ~40% fewer vulnerability gaps after reviews",
    tech: "Spring Security · ActiveMQ · Docker",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="work"
      className="section-reveal section-aura-mint scroll-mt-24 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-stone-500 dark:text-stone-500">
          Impact
        </p>
        <h2 className="mt-3 max-w-xl font-display text-2xl font-semibold tracking-tight text-stone-900 dark:text-white sm:text-3xl md:text-4xl">
          What I improved
        </h2>
        <p className="content-lead mt-4 text-sm text-stone-600 dark:text-stone-400">
          Problem → moves → measurable delta. AV Devs and Simform only; the Stack section holds raw
          tool names.
        </p>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:gap-6">
          {items.map((item) => (
            <li key={item.title}>
              <article className="glass-card flex h-full flex-col rounded-2xl p-6 sm:p-7">
                <h3 className="font-display text-lg font-semibold text-stone-900 dark:text-white sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                  {item.summary}
                </p>

                <p className="mt-5 text-xs font-medium uppercase tracking-wide text-stone-500 dark:text-stone-500">
                  What I did
                </p>
                <ul className="mt-2 space-y-2 text-sm leading-snug text-stone-700 dark:text-stone-300">
                  {item.points.map((line) => (
                    <li key={line} className="flex gap-2.5">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600 dark:bg-mint"
                        aria-hidden
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-4 font-mono text-[10px] text-stone-500 dark:text-stone-500">
                  {item.tech}
                </p>

                <div className="mt-5 rounded-xl border border-teal-500/25 bg-teal-500/[0.06] px-4 py-3 dark:border-mint/25 dark:bg-mint/[0.06]">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-teal-800 dark:text-mint/90">
                    Result
                  </p>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-stone-800 dark:text-stone-200">
                    {item.outcome}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-sm text-stone-600 dark:text-stone-400 sm:text-left">
          Questions?{" "}
          <a
            href="#contact"
            className="font-medium text-teal-700 underline decoration-teal-500/40 underline-offset-2 transition hover:decoration-teal-600 dark:text-mint dark:decoration-mint/40"
          >
            Contact me
          </a>
          {" · "}
          <a
            href="https://www.linkedin.com/in/parthsolanki198"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-stone-700 underline decoration-stone-300 underline-offset-2 transition hover:text-stone-900 dark:text-stone-300 dark:decoration-white/20 dark:hover:text-white"
          >
            LinkedIn
          </a>
          {" · "}
          <a
            href="#experience"
            className="font-medium text-stone-700 underline decoration-stone-300 underline-offset-2 transition hover:text-stone-900 dark:text-stone-300 dark:decoration-white/20 dark:hover:text-white"
          >
            Jobs & dates
          </a>
        </p>
      </div>
    </section>
  );
}
