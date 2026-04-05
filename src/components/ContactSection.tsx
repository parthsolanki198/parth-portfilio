import Link from "next/link";

const RESUME_PATH = "/Parth_Solanki_Java_Developer_Resume.pdf";
const EMAIL = "solankiparth.sp198@gmail.com";
const MAILTO = `mailto:${EMAIL}`;

export function ContactSection() {
  return (
    <section
      id="contact"
      className="section-reveal scroll-mt-24 px-4 pb-28 pt-8 sm:px-6 sm:pb-32"
    >
      <div className="glass mx-auto max-w-6xl overflow-hidden rounded-3xl shadow-2xl shadow-stone-300/45 dark:shadow-black/60">
        <div className="border-b border-stone-200/70 px-6 py-4 dark:border-white/[0.08] sm:px-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-teal-700 dark:text-mint/80">
            Single source
          </p>
          <p className="mt-1 text-sm text-stone-600 dark:text-stone-500">
            The only block on this portfolio with my email link and resume download.
          </p>
        </div>

        <div className="grid gap-0 lg:grid-cols-2">
          <div className="border-b border-stone-200/80 p-8 sm:p-10 lg:border-b-0 lg:border-r lg:border-stone-200/80 dark:border-white/10 dark:lg:border-white/10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-teal-700 dark:text-mint/80">
              Contact
            </p>
            <h2 className="mt-4 font-display text-2xl font-semibold text-stone-900 dark:text-white sm:text-3xl">
              Send the role — I&apos;ll reply with how I&apos;d attack week one.
            </h2>
            <p className="content-lead mt-4 text-sm text-stone-600 dark:text-stone-500">
              Share team size, stack constraints, and what &quot;good&quot; looks like in ninety days. I&apos;ll
              answer with concrete past examples — not generic backend poetry.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={MAILTO}
                className="btn-press inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal-600 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-900/20 hover:from-teal-500 hover:to-teal-400 dark:from-mint dark:to-teal-400 dark:text-stone-950 dark:shadow-teal-950/25"
              >
                Email Parth
              </a>
              <Link
                href={RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press glass glass-sm inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-stone-800 hover:border-amber-500/40 dark:text-stone-100 dark:hover:border-amber-400/35"
              >
                Download resume PDF
              </Link>
            </div>
            <p className="mt-4 font-mono text-xs text-stone-500 dark:text-stone-600">
              <span className="text-stone-400 dark:text-stone-700">Address · </span>
              {EMAIL}
            </p>
          </div>
          <div className="p-8 font-mono text-sm sm:p-10">
            <div className="glass glass-sm rounded-xl p-5">
              <p className="text-xs uppercase tracking-wider text-stone-500 dark:text-stone-500">
                Elsewhere
              </p>
              <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                Phone and LinkedIn only — use the buttons on the left for hiring outreach and the PDF.
              </p>
              <p className="mt-4 text-xs text-stone-500 dark:text-stone-600">
                <a
                  href="tel:+919327049319"
                  className="font-medium text-stone-800 underline decoration-teal-500/35 underline-offset-2 transition hover:text-teal-700 dark:text-stone-200 dark:decoration-mint/40 dark:hover:text-mint"
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
