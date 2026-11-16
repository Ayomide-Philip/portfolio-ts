"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Sun01Icon, Moon02Icon } from "@hugeicons/core-free-icons";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/50 bg-white/40 dark:border-white/6 dark:bg-white/4 opacity-50" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="group relative cursor-pointer flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-xl transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/50 active:scale-95
        bg-white/65 border border-slate-200/80 text-slate-700 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_8px_rgba(15,23,42,0.04)] hover:bg-white/90 hover:border-slate-300 hover:text-slate-950 hover:-translate-y-0.5
        dark:bg-white/6 dark:border-white/12 dark:text-slate-300 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.16)] dark:hover:bg-white/12 dark:hover:border-teal-400/40 dark:hover:text-teal-300 dark:hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_0_16px_rgba(45,212,191,0.2)] dark:hover:-translate-y-0.5"
    >
      <span
        className={`transition-all duration-300 ${
          isDark
            ? "scale-100 rotate-0 opacity-100"
            : "scale-0 -rotate-90 opacity-0 absolute pointer-events-none"
        }`}
      >
        <HugeiconsIcon icon={Sun01Icon} size={16} strokeWidth={2} />
      </span>

      <span
        className={`transition-all duration-300 ${
          !isDark
            ? "scale-100 rotate-0 opacity-100 text-slate-800"
            : "scale-0 rotate-90 opacity-0 absolute pointer-events-none"
        }`}
      >
        <HugeiconsIcon icon={Moon02Icon} size={16} strokeWidth={2} />
      </span>
    </button>
  );
}
