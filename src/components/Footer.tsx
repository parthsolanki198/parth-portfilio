import { LiveTime } from "@/components/LiveTime";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-stone-200/80 bg-white/30 py-14 backdrop-blur-md dark:border-white/[0.08] dark:bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-display text-lg italic text-stone-600 sm:text-xl dark:text-stone-500">
          “Good software is boring in production — interesting only in the repo history.”
        </p>
        <div className="mt-10 flex flex-col gap-6 border-t border-stone-200/70 pt-8 dark:border-white/[0.06] sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-sm text-stone-600 dark:text-stone-500">
            <span className="text-stone-800 dark:text-stone-300">parth</span>
            <span className="text-stone-400 dark:text-stone-700"> · </span>© {new Date().getFullYear()}
            <span className="mx-3 text-stone-400 dark:text-stone-700">|</span>
            local <LiveTime />
          </p>
          <p className="font-mono text-xs text-stone-500 dark:text-stone-600">
            Software developer portfolio · Next.js · TypeScript · Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
