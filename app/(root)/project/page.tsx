"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, GitBranch } from "lucide-react";
import { Card, Section } from "@/components/ui";

type ProjectCategory = "All" | "Web App" | "Mobile" | "System";

interface Project {
  title: string;
  category: Exclude<ProjectCategory, "All">;
  description: string;
  stack: string[];
  accent: "cyan" | "amber" | "emerald" | "violet";
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
    liveUrl: "https://e2e-tbki.onrender.com/",
    sourceUrl: "https://github.com/Ayomide-Philip/E2E",
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

const getPreviewImage = (project: Project) => {
  const repository = project.sourceUrl
    .replace("https://github.com/", "")
    .replace(/\/$/, "");

  return `https://opengraph.githubassets.com/1/${repository}`;
};

function ProjectVisual({ project }: { project: Project }) {
  const previewImage = getPreviewImage(project);

  return (
    <div className="relative h-56 overflow-hidden border-b border-white/35 dark:border-white/10">
      <div
        aria-label={`${project.title} preview`}
        role="img"
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${previewImage})` }}
      />
      <span className="absolute left-5 top-5 z-10 rounded-full border border-white/60 bg-white/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/60 backdrop-blur-md dark:border-white/15 dark:bg-white/10 dark:text-white/65">
        {project.category}
      </span>
      {project.featured && (
        <span className="absolute right-5 top-5 z-10 rounded-full bg-black/75 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md dark:bg-white/80 dark:text-black">
          Featured
        </span>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group flex h-full flex-col transition-all duration-500 hover:-translate-y-2 hover:bordser-white/80 hover:shadow-[0_30px_80px_-28px_rgba(0,0,0,0.45)] dark:hover:border-white/25 dark:hover:shadow-[0_30px_80px_-28px_rgba(0,0,0,0.95)]">
      <ProjectVisual project={project} />
      <div className="flex flex-1 flex-col gap-5 p-6">
        <div className="space-y-2">
          <h2 className="bg-linear-to-br from-black to-zinc-500 bg-clip-text text-2xl font-bold text-transparent dark:from-white dark:to-zinc-400">
            {project?.title}
          </h2>
          <p className="text-sm leading-relaxed text-black/60 dark:text-white/60">
            {project?.description}
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
          {project.liveUrl !== "#" && (
            <Link
              href={project.liveUrl}
              className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2.5 text-xs font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 dark:bg-white dark:text-black"
            >
              Live preview
              <ExternalLink size={14} />
            </Link>
          )}
          {project.sourceUrl && (
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
