import Link from "next/link";

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
              Put me on your shortlist — I&apos;ll bring receipts.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-stone-600 dark:text-stone-500">
              Based in <strong className="font-medium text-stone-800 dark:text-stone-300">Vadodara, Gujarat</strong>
              . Happy to walk through architecture, incidents I&apos;ve owned, and how I measure impact.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:solankiparth.sp198@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal-600 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-900/20 transition hover:from-teal-500 hover:to-teal-400 dark:from-mint dark:to-teal-400 dark:text-stone-950 dark:shadow-teal-950/25"
              >
                Email Parth
              </a>
              <Link
                href="/Parth_Solanki_Java_Developer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-sm inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-stone-800 transition hover:border-amber-500/40 dark:text-stone-100 dark:hover:border-amber-400/35"
              >
                Open resume PDF
              </Link>
            </div>
          </div>
          <div className="p-8 font-mono text-sm sm:p-10">
            <div className="glass glass-sm rounded-xl p-5">
              <p className="text-xs uppercase tracking-wider text-stone-500 dark:text-stone-500">
                Direct
              </p>
              <a
                href="mailto:solankiparth.sp198@gmail.com"
                className="mt-2 block text-base font-medium text-stone-900 underline decoration-teal-500/35 underline-offset-4 transition hover:decoration-teal-600 dark:text-stone-100 dark:decoration-mint/40 dark:hover:decoration-mint"
              >
                solankiparth.sp198@gmail.com
              </a>
              <p className="mt-4 text-xs text-stone-500 dark:text-stone-600">
                <a
                  href="tel:+919327049319"
                  className="underline decoration-stone-300 underline-offset-2 hover:text-teal-700 dark:decoration-white/15 dark:hover:text-mint"
                >
                  +91 93270 49319
                </a>
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/parthsolanki198"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-stone-700 underline decoration-stone-300 underline-offset-4 hover:text-stone-900 dark:text-stone-400 dark:decoration-white/10 dark:hover:text-stone-200"
              >
                LinkedIn profile
              </a>
              <span className="text-stone-400 dark:text-stone-700">·</span>
              <Link
                href="#work"
                className="text-xs font-medium text-stone-700 underline decoration-stone-300 underline-offset-4 hover:text-stone-900 dark:text-stone-400 dark:decoration-white/10 dark:hover:text-stone-200"
              >
                Impact section
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
