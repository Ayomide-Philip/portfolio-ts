"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/50 bg-white/40 dark:border-white/[0.06] dark:bg-white/[0.04] opacity-50" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="group relative flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-xl transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/50 active:scale-95
        bg-white/65 border border-slate-200/80 text-slate-700 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_8px_rgba(15,23,42,0.04)] hover:bg-white/90 hover:border-slate-300 hover:text-slate-950 hover:-translate-y-0.5
        dark:bg-white/[0.06] dark:border-white/[0.12] dark:text-slate-300 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.16)] dark:hover:bg-white/[0.12] dark:hover:border-teal-400/40 dark:hover:text-teal-300 dark:hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_0_16px_rgba(45,212,191,0.2)] dark:hover:-translate-y-0.5"
    >
      {/* Sun Icon (displayed in dark mode) */}
      <svg
        className={`h-4 w-4 transition-all duration-300 ${
          isDark
            ? "scale-100 rotate-0 opacity-100"
            : "scale-0 -rotate-90 opacity-0 absolute pointer-events-none"
        }`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>

      {/* Moon Icon (displayed in light mode) */}
      <svg
        className={`h-4 w-4 transition-all duration-300 ${
          !isDark
            ? "scale-100 rotate-0 opacity-100 text-slate-800"
            : "scale-0 rotate-90 opacity-0 absolute pointer-events-none"
        }`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    </button>
  );
}
