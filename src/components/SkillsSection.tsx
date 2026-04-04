const backend = `    "Java 8 / 11 / 17",
    "Spring Boot & Spring Security",
    "Hibernate (JPA) & REST",
    "Microservices & OOP",
    "DSA fundamentals",`;

const cloudData = `    "GCP · GKE · BigQuery",
    "AWS (familiar)",
    "Kafka & Pub/Sub",
    "PostgreSQL · MongoDB · Oracle",
    "Docker · Kubernetes · Terraform",`;

const delivery = `    "CI/CD (GitHub Actions)",
    "Maven builds",
    "AI-assisted dev (Copilot, Cursor, Vertex AI)",
    "Leadership & clear communication",`;

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-teal-700 dark:text-mint/80">
          Skills.java
        </p>
        <h2 className="mt-3 font-display text-2xl font-semibold text-stone-900 dark:text-white sm:text-3xl">
          How I ship backend software.
        </h2>
        <p className="mt-3 max-w-xl text-sm text-stone-600 dark:text-stone-500">
          Same story as the Stack section above, in code form — tweak arrays as your resume evolves.
        </p>

        <pre className="glass glass-sm mt-10 overflow-x-auto rounded-2xl p-6 text-left text-[11px] leading-relaxed sm:p-8 sm:text-[12px]">
          <code className="font-mono">
            <span className="text-amber-700 dark:text-amber-400">public final class</span>{" "}
            <span className="text-teal-700 dark:text-mint">JavaDeveloperSkills</span>
            <span className="text-stone-600 dark:text-stone-500"> {"{"}</span>
            {"\n"}
            <span className="text-stone-700 dark:text-stone-600">  backend: [</span>
            {"\n"}
            <span className="text-stone-600 dark:text-stone-400">{backend}</span>
            {"\n"}
            <span className="text-stone-700 dark:text-stone-600">  ],</span>
            {"\n"}
            <span className="text-stone-700 dark:text-stone-600">  cloudAndData: [</span>
            {"\n"}
            <span className="text-stone-600 dark:text-stone-400">{cloudData}</span>
            {"\n"}
            <span className="text-stone-700 dark:text-stone-600">  ],</span>
            {"\n"}
            <span className="text-stone-700 dark:text-stone-600">  delivery: [</span>
            {"\n"}
            <span className="text-stone-600 dark:text-stone-400">{delivery}</span>
            {"\n"}
            <span className="text-stone-700 dark:text-stone-600">  ],</span>
            {"\n"}
            <span className="text-stone-600 dark:text-stone-500">{"}"}</span>
            <span className="text-stone-500 italic dark:text-stone-600"> // immutable snapshot</span>
            {"\n"}
          </code>
        </pre>
      </div>
    </section>
  );
}
