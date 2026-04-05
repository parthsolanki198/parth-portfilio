"use client";

import { useEffect, useState } from "react";

const phrases = [
  "service boundaries that survive the next hire — not just the next sprint",
  "backpressure and retries you can explain to finance, not only to infra",
  "schemas and migrations that don’t become a weekend rewrite",
  "auth flows that fail closed, with traces that tell the truth",
  "release trains where rollback is a button, not a panic ritual",
  "language upgrades where risk drops week by week, not all at once",
];

export function RotatingFocus() {
  const [i, setI] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const id = window.setInterval(() => {
      setShow(false);
      window.setTimeout(() => {
        setI((n) => (n + 1) % phrases.length);
        setShow(true);
      }, 420);
    }, 4400);
    return () => window.clearInterval(id);
  }, []);

  return (
    <p className="glass glass-sm mt-8 max-w-2xl rounded-2xl px-5 py-4 text-[15px] leading-relaxed text-stone-600 shadow-sm transition-shadow duration-500 ease-out dark:text-stone-400 sm:px-6 sm:py-5 sm:text-base">
      <span className="text-stone-500 dark:text-stone-500">I focus on </span>
      <span className="relative inline-block min-h-[3.25rem] align-top sm:min-h-[2.75rem]">
        <span
          className={`rotating-focus-phrase font-display block text-stone-900 transition-all duration-500 ease-out dark:text-stone-100 ${
            show ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
          }`}
        >
          {phrases[i]}
        </span>
      </span>
      <span className="text-amber-600 dark:text-amber-400">.</span>
    </p>
  );
}
