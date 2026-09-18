"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, SearchX } from "lucide-react";
import { Section } from "@/components/ui";
import { Projects } from "@/data/project";
import type { Project, ProjectCategory } from "@/types/project.types";
import { ProjectCategorys } from "@/types/project.types";
import { ProjectCard } from "@/components/ui/projectCard";

export default function Project() {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("All");
  const visibleProjects =
    selectedCategory === "All"
      ? Projects
      : Projects.filter((project) => project.category === selectedCategory);

  return (
    <main>
      <Section size="md" className="pt-10 md:pt-30">
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
            {ProjectCategorys.map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap cursor-pointer rounded-full px-4 py-2.5 text-xs font-semibold transition-all duration-300 ${
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

        {visibleProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        ) : (
          <div className="flex min-h-72 flex-col items-center justify-center px-6 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/60 bg-white/35 text-black/55 backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-white/55">
              <SearchX size={25} strokeWidth={1.5} />
            </div>
            <h2 className="mt-5 text-xl font-semibold text-black dark:text-white">
              No projects found
            </h2>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-black/60 dark:text-white/60">
              There are no projects in the {selectedCategory} category yet. Try
              another filter to keep exploring.
            </p>
            <button
              type="button"
              onClick={() => setSelectedCategory("All")}
              className="mt-5 rounded-full bg-black px-4 py-2.5 text-xs font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 dark:bg-white dark:text-black"
            >
              View all projects
            </button>
          </div>
        )}

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
            href="mailto:areoayomide2008@gmail.com"
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
