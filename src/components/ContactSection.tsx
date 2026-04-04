export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 px-4 pb-28 pt-8 sm:px-6 sm:pb-32">
      <div className="glass mx-auto max-w-6xl overflow-hidden rounded-3xl shadow-2xl shadow-stone-300/45 dark:shadow-black/60">
        <div className="grid gap-0 lg:grid-cols-2">
          <div className="border-b border-stone-200/80 p-8 sm:p-10 lg:border-b-0 lg:border-r lg:border-stone-200/80 dark:border-white/10 dark:lg:border-white/10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-teal-700 dark:text-mint/80">
              Contact
            </p>
            <h2 className="mt-4 font-display text-2xl font-semibold text-stone-900 dark:text-white sm:text-3xl">
              Hiring engineers? Here&apos;s the line in.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-stone-600 dark:text-stone-500">
              Send role, stack, and team size — or a take-home scope if you use one. I reply faster when
              job posts match the actual interview loop.
            </p>
          </div>
          <div className="p-8 font-mono text-sm sm:p-10">
            <div className="glass glass-sm rounded-xl p-5">
              <p className="text-stone-600 dark:text-stone-500">
                <span className="text-teal-700 dark:text-mint">parth</span>
                <span className="text-stone-500 dark:text-stone-600">@</span>
                <span className="text-stone-600 dark:text-stone-400">dev</span>
                <span className="text-stone-500 dark:text-stone-600">:</span>
                <span className="text-rose-600 dark:text-coral">~</span>
                <span className="text-stone-500 dark:text-stone-600">$</span>{" "}
                <span className="text-stone-800 dark:text-stone-300">
                  ./contact.sh --role=software-engineer
                </span>
              </p>
              <p className="mt-4 text-xs text-stone-500 dark:text-stone-600">
                # Replace with your email or Cal.com link below.
              </p>
              <a
                href="mailto:hello@example.com"
                className="glass glass-sm mt-4 inline-flex rounded-lg border-teal-600/35 px-4 py-2 text-xs font-medium text-teal-800 transition hover:border-teal-600 dark:border-mint/30 dark:text-mint-glow dark:hover:border-mint/50"
              >
                hello@example.com
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-stone-600 underline decoration-stone-300 underline-offset-4 hover:text-stone-900 dark:text-stone-500 dark:decoration-white/10 dark:hover:text-stone-300"
              >
                GitHub
              </a>
              <span className="text-stone-400 dark:text-stone-700">·</span>
              <a
                href="#"
                className="text-xs text-stone-600 underline decoration-stone-300 underline-offset-4 hover:text-stone-900 dark:text-stone-500 dark:decoration-white/10 dark:hover:text-stone-300"
              >
                LinkedIn
              </a>
              <span className="text-stone-400 dark:text-stone-700">·</span>
              <a
                href="#"
                className="text-xs text-stone-600 underline decoration-stone-300 underline-offset-4 hover:text-stone-900 dark:text-stone-500 dark:decoration-white/10 dark:hover:text-stone-300"
              >
                Resume (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
