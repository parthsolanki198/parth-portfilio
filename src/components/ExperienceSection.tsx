const roles = [
  {
    company: "AV Devs Solutions",
    title: "Java Developer",
    period: "Aug 2023 — Present",
    location: "Gujarat, India",
    highlights: [
      "Employee of the Month (Feb & Apr 2024) for backend scalability and automation.",
      "Microservices on Spring Boot + GCP; ~30% better message reliability with Cloud Pub/Sub.",
      "~60% faster APIs via refactoring and PostgreSQL query tuning.",
      "Automated E-Post notification flows; ~40% fewer unsent communication issues.",
      "CI/CD on GKE with GitHub Actions; target ~99.9% availability.",
    ],
  },
  {
    company: "Simform Solutions",
    title: "Software Engineer Intern",
    period: "Feb 2023 — Jul 2023",
    location: "Gujarat, India",
    highlights: [
      "10+ high-availability Spring Boot services with REST APIs and Hibernate.",
      "Spring Security (OAuth2 / JWT) and AOP logging; fewer security gaps.",
      "Real-time notifications with ActiveMQ; Dockerized deployments.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-amber-700 dark:text-amber-400/90">
          Experience
        </p>
        <h2 className="mt-3 font-display text-2xl font-semibold text-stone-900 dark:text-white sm:text-3xl">
          Where I&apos;ve built backend systems.
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-stone-600 dark:text-stone-500">
          Summarized from my resume — numbers reflect outcomes I was part of driving.
        </p>

        <ol className="relative mt-12 space-y-6 before:absolute before:left-3 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-amber-500/50 before:via-teal-500/40 before:to-transparent dark:before:from-amber-400/40 dark:before:via-mint/30 sm:before:left-[0.8125rem]">
          {roles.map((r) => (
            <li key={r.company} className="relative pl-10 sm:pl-12">
              <span
                className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-amber-500/40 bg-white/80 shadow-sm dark:border-amber-400/30 dark:bg-white/5 sm:top-2 sm:h-7 sm:w-7"
                aria-hidden
              >
                <span className="h-2 w-2 rounded-full bg-gradient-to-br from-amber-500 to-teal-600 dark:from-amber-400 dark:to-mint" />
              </span>
              <article className="glass-card p-6 sm:p-7">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-stone-900 dark:text-white">
                      {r.title}
                    </h3>
                    <p className="font-mono text-sm text-amber-800 dark:text-amber-300/90">{r.company}</p>
                  </div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-stone-500 dark:text-stone-500">
                    {r.period}
                    <span className="mx-2 text-stone-400 dark:text-stone-600">·</span>
                    {r.location}
                  </p>
                </div>
                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                  {r.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-600 dark:bg-mint" aria-hidden />
                      {h}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
