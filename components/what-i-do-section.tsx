import { HugeiconsIcon } from "@hugeicons/react";
import {
  Layers01Icon,
  Database01Icon,
  GitBranchIcon,
} from "@hugeicons/core-free-icons";

export function WhatIDoSection() {
  return (
    <section
      id="services"
      className="relative mx-auto w-full max-w-6xl px-3.5 sm:px-6 py-10 sm:py-18 border-t border-slate-200/70 dark:border-white/8 scroll-mt-24"
    >
      <div className="mx-auto max-w-2xl text-center space-y-3.5">
        <h2 className="text-3xl capitalize sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 text-pretty">
          What I build
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal text-pretty">
          Practical web development focused on performance, usability, and
          maintainability. Every layer is engineered with deliberate care and
          clean architecture.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
        {/* Card 1: Frontend */}
        <div
          className="relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 transition-all duration-300 ease-out overflow-hidden
          backdrop-blur-2xl backdrop-saturate-150
          bg-white/55 border border-white/80 shadow-[0_8px_32px_0_rgba(15,23,42,0.05),inset_0_1px_1px_0_rgba(255,255,255,0.9)]
          hover:-translate-y-1 hover:border-slate-300/90 hover:shadow-[0_12px_40px_0_rgba(15,23,42,0.08)]
          dark:bg-slate-900/35 dark:border-white/9 dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.08)]
          dark:hover:-translate-y-1 dark:hover:border-white/20 dark:hover:bg-slate-900/45"
        >
          <div className="min-w-0 flex flex-col h-full justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-700 dark:bg-teal-400/10 dark:text-teal-400">
                  <HugeiconsIcon
                    icon={Layers01Icon}
                    size={24}
                    strokeWidth={2}
                  />
                </div>
              </div>

              <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                Frontend engineering
              </h3>
              <p className="mt-2.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed text-pretty">
                Building responsive, accessible interfaces with React, Next.js,
                and Tailwind CSS. Fast load times, smooth interactions, and
                layouts that look sharp on any screen.
              </p>
            </div>
          </div>
        </div>

        <div
          className="relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 transition-all duration-300 ease-out overflow-hidden
          backdrop-blur-2xl backdrop-saturate-150
          bg-white/55 border border-white/80 shadow-[0_8px_32px_0_rgba(15,23,42,0.05),inset_0_1px_1px_0_rgba(255,255,255,0.9)]
          hover:-translate-y-1 hover:border-slate-300/90 hover:shadow-[0_12px_40px_0_rgba(15,23,42,0.08)]
          dark:bg-slate-900/35 dark:border-white/9 dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.08)]
          dark:hover:-translate-y-1 dark:hover:border-white/20 dark:hover:bg-slate-900/45"
        >
          <div className="min-w-0 flex flex-col h-full justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400">
                  <HugeiconsIcon
                    icon={Database01Icon}
                    size={24}
                    strokeWidth={2}
                  />
                </div>
              </div>

              <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                Backend and APIs
              </h3>
              <p className="mt-2.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed text-pretty">
                Creating reliable backend services and REST APIs with Node.js,
                Next.js route handlers, and MongoDB. Structured data modeling,
                secure auth, and clear error handling.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Workflows */}
        <div
          className="relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 transition-all duration-300 ease-out overflow-hidden
          backdrop-blur-2xl backdrop-saturate-150
          bg-white/55 border border-white/80 shadow-[0_8px_32px_0_rgba(15,23,42,0.05),inset_0_1px_1px_0_rgba(255,255,255,0.9)]
          hover:-translate-y-1 hover:border-slate-300/90 hover:shadow-[0_12px_40px_0_rgba(15,23,42,0.08)]
          dark:bg-slate-900/35 dark:border-white/9 dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.08)]
          dark:hover:-translate-y-1 dark:hover:border-white/20 dark:hover:bg-slate-900/45"
        >
          <div className="min-w-0 flex flex-col h-full justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
                  <HugeiconsIcon
                    icon={GitBranchIcon}
                    size={24}
                    strokeWidth={2}
                  />
                </div>
              </div>

              <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                Clean workflows
              </h3>
              <p className="mt-2.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed text-pretty">
                Version control with Git, modular component design, and
                end-to-end type safety with TypeScript to keep codebases
                readable, resilient, and easy to scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
