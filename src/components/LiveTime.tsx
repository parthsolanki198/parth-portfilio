"use client";

import { useEffect, useState } from "react";

export function LiveTime() {
  const [label, setLabel] = useState("");

  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
      });
    setLabel(fmt());
    const id = window.setInterval(() => setLabel(fmt()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  return <span className="tabular-nums">{label}</span>;
}
