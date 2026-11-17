"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Mail01Icon, Copy01Icon, Tick01Icon } from "@hugeicons/core-free-icons";
import { SiGithub, SiInstagram } from "react-icons/si";

export function ContactCtaSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText("ayomidephilip.dev@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section
      id="contact"
      className="relative mx-auto w-full max-w-4xl px-4 sm:px-6 py-20 sm:py-28 border-t border-slate-200/70 dark:border-white/8 scroll-mt-24"
    >
      <div className="flex flex-col items-center text-center space-y-6">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-100 text-pretty">
          Let&apos;s work together.
        </h2>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed text-pretty font-normal">
          Have an open engineering role, an ambitious project to build, or just
          want to chat software architecture? My inbox is always open.
        </p>

        <div className="pt-2 w-full max-w-md">
          <div className="flex items-center justify-between p-1.5 pl-4 rounded-full border border-slate-200/85 bg-white/70 dark:border-white/12 dark:bg-white/6 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_16px_rgba(15,23,42,0.04)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.14)]">
            <a
              href="mailto:ayomidephilip.dev@gmail.com"
              className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors truncate min-w-0"
              title="Click to email"
            >
              <HugeiconsIcon
                icon={Mail01Icon}
                size={16}
                className="text-teal-700 dark:text-teal-400 shrink-0"
              />
              <span className="truncate">ayomidephilip.dev@gmail.com</span>
            </a>

            <button
              onClick={handleCopyEmail}
              type="button"
              className={`h-9 px-3.5 rounded-full font-mono text-xs font-medium transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 shrink-0 select-none ${
                copied
                  ? "bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 font-semibold"
                  : "backdrop-blur-md bg-white/80 text-slate-700 border border-slate-200/85 hover:bg-white hover:text-slate-900 dark:bg-white/10 dark:text-slate-200 dark:border-white/12 dark:hover:bg-white/15 dark:hover:text-white"
              }`}
            >
              <HugeiconsIcon
                icon={copied ? Tick01Icon : Copy01Icon}
                size={14}
                className={
                  copied
                    ? "text-emerald-500"
                    : "text-slate-500 dark:text-slate-400"
                }
              />
              <span>{copied ? "Copied" : "Copy"}</span>
            </button>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-center">
            <a
              href="https://github.com/Ayomide-Philip"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="h-11 px-4 rounded-full inline-flex items-center justify-center gap-2 text-xs font-medium transition-all duration-200 hover:-translate-y-0.5 active:scale-95 cursor-pointer
              backdrop-blur-xl bg-white/65 text-slate-800 border border-slate-200/85 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_8px_rgba(15,23,42,0.04)] hover:bg-white/90 hover:border-slate-300
              dark:bg-white/6 dark:text-slate-100 dark:border-white/12 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.16)] dark:hover:bg-white/12 dark:hover:border-white/22 dark:hover:text-white"
            >
              <SiGithub size={15} className="text-slate-900 dark:text-white" />
              <span>GitHub</span>
            </a>

            <a
              href="https://instagram.com/ayomide.philip.1379"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="h-11 px-4 rounded-full inline-flex items-center justify-center gap-2 text-xs font-medium transition-all duration-200 hover:-translate-y-0.5 active:scale-95 cursor-pointer
              backdrop-blur-xl bg-white/65 text-slate-800 border border-slate-200/85 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_8px_rgba(15,23,42,0.04)] hover:bg-white/90 hover:border-slate-300
              dark:bg-white/6 dark:text-slate-100 dark:border-white/12 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.16)] dark:hover:bg-white/12 dark:hover:border-white/22 dark:hover:text-white"
            >
              <SiInstagram
                size={15}
                className="text-slate-900 dark:text-white"
              />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
