"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft01Icon,
  Search01Icon,
  Cancel01Icon,
} from "@hugeicons/core-free-icons";
import ProjectCard from "@/components/ui/project-card";
import { Projects as ALL_PROJECTS } from "@/data/projects";

const CATEGORIES = ["All", "Full-Stack", "Frontend", "Systems & AI"] as const;

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProjects = useMemo(() => {
    return ALL_PROJECTS.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.stack.some((tech) => tech.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="w-full pb-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mb-8 sm:mb-10">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white transition-colors"
          >
            <HugeiconsIcon
              icon={ArrowLeft01Icon}
              size={16}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            <span>Back to portfolio</span>
          </Link>
        </div>

        <div className="space-y-4 max-w-2xl">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100 text-pretty">
            Engineering Projects
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal text-pretty">
            A comprehensive catalog of production applications, distributed
            systems, client platforms, and security tools engineered with modern
            TypeScript, Next.js, and cloud backends.
          </p>
        </div>

        {/* Controls: Search & Category Filters */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between pb-8 border-b border-slate-200/70 dark:border-white/8">
          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium transition-all duration-200 cursor-pointer shrink-0 whitespace-nowrap ${
                    active
                      ? "bg-slate-900 text-white shadow-xs dark:bg-white dark:text-slate-950"
                      : "backdrop-blur-xl bg-white/65 text-slate-800 border border-slate-200/85 hover:bg-white/90 dark:bg-white/6 dark:text-slate-200 dark:border-white/12 dark:hover:bg-white/12"
                  }`}
                >
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <HugeiconsIcon
              icon={Search01Icon}
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 pointer-events-none"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects or stack..."
              className="w-full h-10 pl-10 pr-9 rounded-full text-xs sm:text-sm bg-white/70 dark:bg-white/6 border border-slate-200/90 dark:border-white/12 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                aria-label="Clear search"
              >
                <HugeiconsIcon icon={Cancel01Icon} size={14} />
              </button>
            )}
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        ) : (
          <div className="mt-16 py-16 text-center rounded-3xl border border-dashed border-slate-300 dark:border-white/10">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              No projects found matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-4 px-4 py-2 rounded-full text-xs font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-950 transition-all hover:opacity-90"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
