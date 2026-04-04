"use client";

import { useEffect, useState } from "react";

const phrases = [
  "Spring Boot services with clear bounded contexts",
  "Kafka & Pub/Sub pipelines that don’t surprise ops at 2am",
  "PostgreSQL plans that match how queries actually run",
  "security defaults — OAuth2, JWT, and logs you can audit",
  "CI/CD on GKE that teams trust for frequent releases",
  "migrations (e.g. Java 8 → 17) with measurable time saved",
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
      <span className="text-stone-500 dark:text-stone-500">I focus on </span>
      <span
        className={`font-display text-stone-900 transition-opacity duration-300 dark:text-stone-100 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        {phrases[i]}
      </span>
      <span className="text-amber-600 dark:text-amber-400">.</span>
    </p>
  );
}
