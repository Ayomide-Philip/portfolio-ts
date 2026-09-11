"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, GitBranch, Layers3 } from "lucide-react";
import { Card, Section } from "@/components/ui";

type ProjectCategory = "All" | "Web App" | "Mobile" | "System";

interface Project {
  title: string;
  category: Exclude<ProjectCategory, "All">;
  description: string;
  stack: string[];
  accent: keyof typeof accentStyles;
  liveUrl: string;
  sourceUrl: string;
  featured?: boolean;
}

const categories: ProjectCategory[] = ["All", "Web App", "Mobile", "System"];

const projects: Project[] = [
  {
    title: "SaaS Dashboard",
    category: "Web App",
    description:
      "A real-time analytics workspace designed to make complex product data easy to scan, compare, and act on.",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    accent: "cyan",
    liveUrl: "#",
    sourceUrl: "https://github.com/yourusername/saas-dashboard",
    featured: true,
  },
  {
    title: "Mobile App",
    category: "Mobile",
    description:
      "An offline-first mobile experience with resilient sync, focused navigation, and a fast path to the important actions.",
    stack: ["React Native", "Firebase", "Redux"],
    accent: "amber",
    liveUrl: "#",
    sourceUrl: "https://github.com/yourusername/mobile-app",
  },
  {
    title: "Design System",
    category: "System",
    description:
      "A reusable component library and token system that gives enterprise teams a shared visual and engineering language.",
    stack: ["React", "Storybook", "TypeScript"],
    accent: "emerald",
    liveUrl: "#",
    sourceUrl: "https://github.com/yourusername/design-system",
  },
  {
    title: "Commerce Platform",
    category: "Web App",
    description:
      "A streamlined storefront foundation with flexible content blocks, fast search, and a checkout flow built for clarity.",
    stack: ["Next.js", "MongoDB", "Stripe"],
    accent: "violet",
    liveUrl: "#",
    sourceUrl: "https://github.com/yourusername/commerce-platform",
  },
];

const accentStyles = {
  cyan: {
    wash: "from-cyan-300/60 via-cyan-200/20 to-transparent",
    glow: "bg-cyan-300/50 dark:bg-cyan-400/25",
    mark: "text-cyan-950/70 dark:text-cyan-100/80",
  },
  amber: {
    wash: "from-amber-300/60 via-amber-200/20 to-transparent",
    glow: "bg-amber-300/50 dark:bg-amber-400/25",
    mark: "text-amber-950/70 dark:text-amber-100/80",
  },
  emerald: {
    wash: "from-emerald-300/60 via-emerald-200/20 to-transparent",
    glow: "bg-emerald-300/50 dark:bg-emerald-400/25",
    mark: "text-emerald-950/70 dark:text-emerald-100/80",
  },
  violet: {
    wash: "from-violet-300/50 via-violet-200/20 to-transparent",
    glow: "bg-violet-300/40 dark:bg-violet-400/20",
    mark: "text-violet-950/70 dark:text-violet-100/80",
  },
};

function ProjectVisual({ project }: { project: Project }) {
  const style = accentStyles[project.accent];

  return (
    <div className="relative h-56 overflow-hidden border-b border-white/35 dark:border-white/10">
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-linear-to-br ${style.wash} dark:opacity-50`}
      />
      <div
        aria-hidden="true"
        className={`absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl ${style.glow}`}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-white/70 bg-white/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_24px_50px_-28px_rgba(0,0,0,0.7)] backdrop-blur-md transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 dark:border-white/15 dark:bg-white/10">
          <Layers3 className={style.mark} size={42} strokeWidth={1.25} />
        </div>
      </div>
      <span className="absolute left-5 top-5 rounded-full border border-white/60 bg-white/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/60 backdrop-blur-md dark:border-white/15 dark:bg-white/10 dark:text-white/65">
        {project.category}
      </span>
      {project.featured && (
        <span className="absolute right-5 top-5 rounded-full bg-black/75 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md dark:bg-white/80 dark:text-black">
          Featured
        </span>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group flex h-full flex-col transition-all duration-500 hover:-translate-y-2 hover:border-white/80 hover:shadow-[0_30px_80px_-28px_rgba(0,0,0,0.45)] dark:hover:border-white/25 dark:hover:shadow-[0_30px_80px_-28px_rgba(0,0,0,0.95)]">
      <ProjectVisual project={project} />
      <div className="flex flex-1 flex-col gap-5 p-6">
        <div className="space-y-2">
          <h2 className="bg-linear-to-br from-black to-zinc-500 bg-clip-text text-2xl font-bold text-transparent dark:from-white dark:to-zinc-400">
            {project.title}
          </h2>
          <p className="text-sm leading-relaxed text-black/60 dark:text-white/60">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/60 bg-white/45 px-3 py-1 text-xs font-medium text-black/70 backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-white/70"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
          {project?.liveUrl ?? (
            <Link
              href={project.liveUrl}
              className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2.5 text-xs font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 dark:bg-white dark:text-black"
            >
              Live preview
              <ExternalLink size={14} />
            </Link>
          )}
          {project?.sourceUrl ?? (
            <Link
              href={project?.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/35 px-4 py-2.5 text-xs font-semibold text-black transition-colors duration-300 hover:bg-white/70 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/15"
            >
              <GitBranch size={14} />
              Source code
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
}

export default function Project() {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("All");
  const visibleProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <main>
      <Section size="md" className="pt-32 md:pt-36">
        <div className="mb-12 space-y-6 text-center">
          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-black/45 dark:text-white/45">
              Selected work
            </p>
            <h1 className="text-5xl font-bold tracking-tight text-black md:text-6xl dark:text-white">
              Projects
            </h1>
            <p className="mx-auto max-w-xl text-base leading-relaxed text-black/60 dark:text-white/60">
              Explore the products, systems, and experiments I&apos;ve built.
            </p>
          </div>

          <div
            className="mx-auto flex w-fit max-w-full gap-1 overflow-x-auto rounded-full p-1 scrollbar-none"
            aria-label="Project categories"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap rounded-full px-4 py-2.5 text-xs font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-black text-white shadow-md dark:bg-white dark:text-black"
                    : "text-black/55 hover:bg-black/5 hover:text-black dark:text-white/55 dark:hover:bg-white/10 dark:hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {visibleProjects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-5 rounded-3xl border border-white/50 bg-white/35 p-6 backdrop-blur-xl sm:flex-row sm:items-center sm:p-8 dark:border-white/10 dark:bg-white/5">
          <div>
            <h2 className="text-xl font-semibold text-black dark:text-white">
              Have a project in mind?
            </h2>
            <p className="mt-1 text-sm text-black/60 dark:text-white/60">
              Let&apos;s turn the rough idea into something people want to use.
            </p>
          </div>
          <Link
            href="mailto:hello@example.com"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 dark:bg-white dark:text-black"
          >
            Start a conversation
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </Section>
    </main>
  );
}
