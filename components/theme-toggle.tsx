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
      <div className="flex h-9 w-9 items-center justify-center rounded-full opacity-0" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="group relative cursor-pointer flex h-9 w-9 items-center justify-center rounded-full text-slate-700 hover:text-slate-950 hover:bg-slate-900/5 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/10 transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/50 active:scale-95"
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
