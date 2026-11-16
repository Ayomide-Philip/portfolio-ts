"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  // Sync theme with document element for instant preview
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-200">
      {/* Top Test Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-lg font-bold tracking-tight">
              portfolio<span className="text-accent">.</span>ts
            </span>
            <span className="rounded-full border border-border bg-surface px-2.5 py-0.5 font-mono text-xs text-muted">
              Palette Test
            </span>
          </div>

          {/* Interactive Live Theme Switcher */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground transition-all hover:border-border-hover hover:text-accent"
          >
            <span>{isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="mx-auto max-w-5xl px-6 py-12 space-y-16">
        {/* Hero Specimen */}
        <section className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-mono text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Calibrated Slate & Luminous Teal
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Testing the palette in{" "}
            <span className="text-accent">Next.js</span> &{" "}
            <span className="text-highlight">Tailwind</span>.
          </h1>

          <p className="text-base text-muted leading-relaxed sm:text-lg">
            This page tests how your tokens (<code className="font-mono text-sm text-foreground">--background</code>,{" "}
            <code className="font-mono text-sm text-foreground">--surface</code>,{" "}
            <code className="font-mono text-sm text-foreground">--accent</code>, and{" "}
            <code className="font-mono text-sm text-foreground">--highlight</code>) feel in real components.
          </p>
        </section>

        {/* Buttons & Actions Test */}
        <section className="space-y-4">
          <h2 className="text-sm font-mono uppercase tracking-wider text-muted">
            1. Buttons & Interactive States
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            <button className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-text transition-all hover:opacity-90 active:scale-95 shadow-sm">
              Primary Accent Action
            </button>

            <button className="rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-accent hover:text-accent active:scale-95">
              Secondary Outline
            </button>

            <button className="rounded-lg bg-highlight px-5 py-2.5 text-sm font-semibold text-background transition-all hover:opacity-90 active:scale-95 shadow-sm">
              Hire Me (Highlight)
            </button>
          </div>
        </section>

        {/* Cards & Surface Test */}
        <section className="space-y-4">
          <h2 className="text-sm font-mono uppercase tracking-wider text-muted">
            2. Card Surfaces & Elevation
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Card 1 */}
            <article className="group rounded-xl border border-border bg-surface p-6 space-y-4 transition-all duration-200 hover:-translate-y-1 hover:border-accent">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-0.5 font-mono text-xs text-accent">
                  Full Stack
                </span>
                <span className="font-mono text-xs text-muted">2026</span>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
                Real-Time Streaming Engine
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Distributed messaging platform designed to handle high event throughput with low latency.
              </p>
              <div className="flex items-center gap-2 pt-2 border-t border-border font-mono text-xs text-muted">
                <span>Next.js 16</span>
                <span>•</span>
                <span>TypeScript</span>
                <span>•</span>
                <span>Kafka</span>
              </div>
            </article>

            {/* Card 2 */}
            <article className="group rounded-xl border border-border bg-surface p-6 space-y-4 transition-all duration-200 hover:-translate-y-1 hover:border-highlight">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-highlight/20 bg-highlight/10 px-2.5 py-0.5 font-mono text-xs text-highlight">
                  ★ Featured Architecture
                </span>
                <span className="font-mono text-xs text-muted">2026</span>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-highlight transition-colors">
                Zero-Downtime Migration System
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Automated schema synchronization and data migration toolkit enabling non-blocking database cutovers.
              </p>
              <div className="flex items-center gap-2 pt-2 border-t border-border font-mono text-xs text-muted">
                <span>Prisma</span>
                <span>•</span>
                <span>PostgreSQL</span>
                <span>•</span>
                <span>Auth.js</span>
              </div>
            </article>
          </div>
        </section>

        {/* Form Controls & Tags Test */}
        <section className="space-y-4">
          <h2 className="text-sm font-mono uppercase tracking-wider text-muted">
            3. Form Controls & Tags
          </h2>
          <div className="rounded-xl border border-border bg-surface p-6 space-y-6">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-md border border-border bg-background px-3 py-1 font-mono text-xs text-muted">
                Instrument Sans
              </span>
              <span className="rounded-md border border-border bg-background px-3 py-1 font-mono text-xs text-muted">
                JetBrains Mono
              </span>
              <span className="rounded-md border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
                ● Live Service
              </span>
              <span className="rounded-md border border-highlight/30 bg-highlight/10 px-3 py-1 font-mono text-xs text-highlight">
                ★ 99.9% Uptime
              </span>
            </div>

            <div className="max-w-md space-y-2">
              <label className="block text-xs font-semibold text-foreground">
                Sample Form Field (Focus to test border)
              </label>
              <input
                type="email"
                placeholder="alex@example.com"
                className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted outline-none transition-colors focus:border-accent"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-border py-8 text-center font-mono text-xs text-muted">
        <span>portfolio-ts • palette test bench</span>
      </footer>
    </div>
  );
}
