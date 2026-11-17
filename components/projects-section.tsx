"use client";

import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import ProjectCard from "./ui/project-card";
import { Projects } from "@/data/projects";

export function ProjectsSection() {
  const displayedProjects = Projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 py-10 sm:py-18 lg:py-10 border-t border-slate-200/70 dark:border-white/8 scroll-mt-24"
    >
      <div className="mx-auto max-w-2xl text-center space-y-3.5">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 text-pretty">
          Selected projects
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal text-pretty max-w-xl mx-auto">
          A showcase of recent web applications, encrypted communications, and
          intelligent platforms.
        </p>
      </div>

      <div className="mt-10 sm:mt-14 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
        {displayedProjects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>

      <div className="mt-12 sm:mt-16 text-center">
        <Link
          href="/projects"
          className="group inline-flex items-center justify-center gap-2 h-10 px-5 rounded-full font-medium text-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-95 cursor-pointer select-none
            backdrop-blur-xl bg-white/70 hover:bg-white/95 text-slate-900 border border-slate-200/90 shadow-[0_2px_12px_rgba(15,23,42,0.06),inset_0_1px_1px_rgba(255,255,255,0.95)] hover:shadow-[0_6px_20px_rgba(15,23,42,0.10)] hover:border-slate-300
            dark:bg-white/8 dark:hover:bg-white/15 dark:text-white dark:border-white/15 dark:shadow-[0_2px_16px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.2)] dark:hover:border-white/25"
        >
          <span>View all projects</span>
          <HugeiconsIcon
            icon={ArrowRight01Icon}
            size={15}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
}
