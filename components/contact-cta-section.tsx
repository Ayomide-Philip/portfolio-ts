"use client";

import { useState } from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  Mail01Icon,
  Copy01Icon,
  Tick01Icon,
} from "@hugeicons/core-free-icons";

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
          <Link
            href="/contact"
            className="group/btn h-11 px-7 rounded-full inline-flex items-center justify-center gap-2.5 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-95 cursor-pointer focus-visible:outline-2 focus-visible:outline-teal-500 w-full sm:w-auto
            bg-teal-600 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_4px_14px_rgba(15,118,110,0.25)] hover:bg-teal-700
            dark:bg-teal-400 dark:text-[#080B11] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_0_24px_-4px_rgba(45,212,191,0.35)] dark:hover:bg-teal-300"
          >
            <span>Send me a message</span>
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              size={15}
              className="transition-transform duration-200 group-hover/btn:translate-x-1"
            />
          </Link>

          {/* Social Channels */}
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="h-11 px-4 rounded-full inline-flex items-center justify-center gap-2 text-xs font-medium transition-all duration-200 hover:-translate-y-0.5 active:scale-95 cursor-pointer
              backdrop-blur-xl bg-white/65 text-slate-800 border border-slate-200/85 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_8px_rgba(15,23,42,0.04)] hover:bg-white/90 hover:border-slate-300
              dark:bg-white/6 dark:text-slate-100 dark:border-white/12 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.16)] dark:hover:bg-white/12 dark:hover:border-white/22 dark:hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.69 1.69 0 0 0 1.69-1.68 1.69 1.69 0 0 0-1.69-1.69 1.69 1.69 0 0 0-1.68 1.69c0 .93.76 1.68 1.68 1.68m1.39 9.94v-8.37H5.07v8.37h2.78z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
