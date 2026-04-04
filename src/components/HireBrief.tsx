import Link from "next/link";

const actions: { href: string; label: string; external?: boolean }[] = [
  { href: "/Parth_Solanki_Java_Developer_Resume.pdf", label: "Resume PDF", external: true },
  { href: "mailto:solankiparth.sp198@gmail.com", label: "Email" },
  { href: "https://www.linkedin.com/in/parthsolanki198", label: "LinkedIn", external: true },
];

export function HireBrief() {
  return (
    <section
      aria-label="Quick hiring summary"
      className="relative z-10 px-4 pb-6 pt-2 sm:px-6 sm:pb-10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="hire-brief-glow glass relative overflow-hidden rounded-2xl border border-amber-500/20 px-5 py-5 dark:border-amber-400/15 sm:px-8 sm:py-6">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl dark:bg-amber-400/10"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-16 -left-16 h-36 w-36 rounded-full bg-teal-500/10 blur-3xl dark:bg-mint/10"
            aria-hidden
          />

          <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-stone-500 dark:text-stone-500">
                Hiring snapshot
              </p>
              <p className="mt-2 max-w-xl font-display text-lg font-medium leading-snug text-stone-900 dark:text-white sm:text-xl">
                Production Java & Spring · cloud & messaging · metrics you can ask me about in an
                interview.
              </p>
              <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
                Vadodara, India · open to remote / hybrid backend roles
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {actions.map((a) => (
                <a
                  key={a.href}
                  href={a.href}
                  {...(a.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="glass glass-sm rounded-full px-4 py-2.5 text-center text-xs font-semibold text-stone-800 transition hover:border-teal-500/40 dark:text-stone-100 dark:hover:border-mint/40 sm:text-sm"
                >
                  {a.label}
                </a>
              ))}
              <Link
                href="#contact"
                className="rounded-full bg-gradient-to-r from-amber-600 to-amber-500 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-lg shadow-amber-900/25 transition hover:from-amber-500 hover:to-amber-400 dark:from-amber-500 dark:to-amber-400 dark:text-stone-950 dark:shadow-amber-950/30 sm:text-sm"
              >
                Book a conversation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
