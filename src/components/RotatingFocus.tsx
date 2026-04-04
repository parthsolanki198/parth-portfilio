"use client";

import { useEffect, useState } from "react";

const phrases = [
  "readable diffs and honest commit messages",
  "APIs with predictable errors and versioning",
  "tests that fail for the right reason",
  "observability before the pager goes off",
  "refactors that shrink the mental model",
  "code reviews that teach, not gatekeep",
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
      }, 280);
    }, 3800);
    return () => window.clearInterval(id);
  }, []);

  return (
    <p className="glass glass-sm mt-8 max-w-2xl rounded-2xl px-5 py-4 text-[15px] leading-relaxed text-stone-600 dark:text-stone-400 sm:text-base">
      <span className="text-stone-500 dark:text-stone-500">As a developer, I care about </span>
      <span
        className={`font-display text-stone-900 transition-opacity duration-300 dark:text-stone-100 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        {phrases[i]}
      </span>
      <span className="text-teal-600 dark:text-mint">.</span>
    </p>
  );
}
