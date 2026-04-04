const languages = `    "TypeScript / JavaScript",
    "SQL (Postgres)",
    "HTML / CSS / Tailwind",`;

const systems = `    "Node.js & HTTP APIs",
    "React & Next.js",
    "caching & queues",
    "auth (sessions, JWT, OAuth flows)",`;

const practices = `    "unit & integration tests",
    "CI/CD & preview deploys",
    "structured logging & metrics",
    "code review & technical writing",`;

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-teal-700 dark:text-mint/80">
          Developer skills
        </p>
        <h2 className="mt-3 font-display text-2xl font-semibold text-stone-900 dark:text-white sm:text-3xl">
          What I bring as a software developer.
        </h2>
        <p className="mt-3 max-w-xl text-sm text-stone-600 dark:text-stone-500">
          Typed like source so you can edit it like code — swap strings for your real strengths.
        </p>

        <pre className="glass glass-sm mt-10 overflow-x-auto rounded-2xl p-6 text-left text-[11px] leading-relaxed sm:p-8 sm:text-[12px]">
          <code className="font-mono">
            <span className="text-rose-600 dark:text-coral">export const</span>{" "}
            <span className="text-teal-700 dark:text-mint">developerProfile</span>
            <span className="text-stone-600 dark:text-stone-500"> = {"{"}</span>
            {"\n"}
            <span className="text-stone-700 dark:text-stone-600">  languages: [</span>
            {"\n"}
            <span className="text-stone-600 dark:text-stone-400">{languages}</span>
            {"\n"}
            <span className="text-stone-700 dark:text-stone-600">  ],</span>
            {"\n"}
            <span className="text-stone-700 dark:text-stone-600">  systems: [</span>
            {"\n"}
            <span className="text-stone-600 dark:text-stone-400">{systems}</span>
            {"\n"}
            <span className="text-stone-700 dark:text-stone-600">  ],</span>
            {"\n"}
            <span className="text-stone-700 dark:text-stone-600">  practices: [</span>
            {"\n"}
            <span className="text-stone-600 dark:text-stone-400">{practices}</span>
            {"\n"}
            <span className="text-stone-700 dark:text-stone-600">  ],</span>
            {"\n"}
            <span className="text-stone-600 dark:text-stone-500">{"}"} </span>
            <span className="text-rose-600 dark:text-coral">as const</span>
            <span className="text-stone-600 dark:text-stone-500">;</span>
            {"\n\n"}
            <span className="text-stone-500 italic dark:text-stone-600">
              // Add: Python, Go, k8s, etc. — keep it truthful.
            </span>
          </code>
        </pre>
      </div>
    </section>
  );
}
