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
    body: "Backend engineer with 2.5+ years in Java (8 / 11 / 17), Spring Boot, and microservices. Strong on event-driven design with Kafka and GCP, and on using AI-assisted tooling responsibly to speed delivery. Multi-time Employee of the Month for ownership and impact.",
    foot: "— from resume",
  },
  {
    span: "sm:col-span-6",
    title: "Focus areas",
    body: "REST APIs, Spring Security, Hibernate (JPA), PostgreSQL tuning, Pub/Sub & Kafka, GKE deployments, Terraform & CI/CD.",
    tags: ["Java 17", "Spring", "Kafka", "GCP"],
  },
  {
    span: "sm:col-span-6",
    title: "Education",
    body: "B.E. Computer Engineering — Gujarat Technological University, Rajkot (2019–2023). Relevant: DSA, databases, cloud, software engineering.",
    mono: "CGPA · 8.04 / 10.0",
  },
  {
    span: "sm:col-span-6",
    title: "Certifications & wins",
    body: "Google Cloud Skill Boost (Vertex AI prompt design, Gemini apps). HackerRank: Java Basic/Intermediate, SQL Advanced. Led Java 8 → 17 migration; designed messaging at 100k+ events/day scale.",
    tags: ["GCP", "Vertex AI", "HackerRank"],
  },
  {
    span: "sm:col-span-6",
    title: "Location",
    body: "Based in Vadodara, Gujarat, India. Open to remote or hybrid backend roles.",
    mono: "Vadodara · IST",
  },
];

export function BentoSignal() {
  return (
    <section id="signal" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-teal-700 dark:text-mint/80">
          Profile
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-2xl font-semibold text-stone-900 dark:text-white sm:text-3xl">
          What teams verify before the first interview.
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-stone-600 dark:text-stone-400">
          A concise snapshot — same story as my resume, optimized for a 60-second skim.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-12 sm:gap-4">
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
