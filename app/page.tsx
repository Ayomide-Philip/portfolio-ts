import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-7.5rem)] max-w-5xl flex-col items-center justify-center px-6 py-12 text-center">
      {/* Hero Headline */}
      <div className="space-y-6 max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-slate-100">
          Senior Full-Stack Engineer &amp; Distributed Systems Architect
        </h1>

        <p className="mx-auto max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
          Designing fault-tolerant backend infrastructures, high-throughput event pipelines, and precision glassmorphic interfaces.
        </p>

        {/* Primary & Glassmorphic Hero Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button variant="primary" size="md">
            Explore Projects
          </Button>
          <Button variant="glass" size="md">
            View Architecture Docs
          </Button>
        </div>
      </div>

      {/* Interactive Redesigned Button Suite Showcase */}
      <section className="mt-20 w-full max-w-3xl rounded-3xl p-6 sm:p-8 text-left transition-all duration-300
        backdrop-blur-2xl backdrop-saturate-150
        bg-white/50 border border-white/80 shadow-[0_12px_40px_-10px_rgba(15,23,42,0.06),inset_0_1px_1px_0_rgba(255,255,255,0.95)]
        dark:bg-[#080B11]/50 dark:border-white/[0.08] dark:shadow-[0_16px_40px_-10px_rgba(0,0,0,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.1)]"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-slate-200/60 dark:border-white/[0.08]">
          <div>
            <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">
              Redesigned Button Suite
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Impeccable craft floor: specular highlights, tactile micro-elevations, and dual-mode contrast.
            </p>
          </div>
          <span className="font-mono text-xs text-teal-700 dark:text-teal-400">
            components/ui/button.tsx
          </span>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Primary & Glass */}
          <div className="space-y-3">
            <span className="block font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
              1. Primary &amp; Glass Variants
            </span>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary" size="md">
                Primary Action
              </Button>
              <Button variant="glass" size="md">
                Glassmorphic
              </Button>
            </div>
          </div>

          {/* Secondary & Outline */}
          <div className="space-y-3">
            <span className="block font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
              2. Secondary &amp; Outline Variants
            </span>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="secondary" size="md">
                Secondary Pill
              </Button>
              <Button variant="outline" size="md">
                Outline Pill
              </Button>
            </div>
          </div>

          {/* Ghost & Sizes */}
          <div className="space-y-3">
            <span className="block font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
              3. Ghost &amp; Size Scales
            </span>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="ghost" size="sm">
                Ghost (Small)
              </Button>
              <Button variant="primary" size="sm">
                Small (32px)
              </Button>
              <Button variant="glass" size="lg">
                Large (48px)
              </Button>
            </div>
          </div>

          {/* Interactive States */}
          <div className="space-y-3">
            <span className="block font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
              4. Disabled &amp; Tactile States
            </span>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary" disabled size="md">
                Disabled State
              </Button>
              <Button variant="glass" disabled size="md">
                Disabled Glass
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
