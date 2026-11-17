"use client";

import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

import ProjectCard, { type Project } from "./ui/project-card";

export const Projects: Project[] = [
  {
    title: "Fashion E-Commerce",
    category: "Full-Stack",
    description:
      "AI-Based Personalized Recommendation System for Fashion E-Commerce with Content-based AI recommendations and AI image classification.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://ecommerce-fashion-7fz3.onrender.com/",
    sourceUrl: "",
    featured: true,
    year: "2024",
  },
  {
    title: "Classora",
    category: "Full-Stack",
    description:
      "Core pillars are class management, community engagement, real‑time chat, searchable venue mapping and advanced reminders.",
    stack: ["Next.js", "JavaScript", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://classora-eight.vercel.app/",
    sourceUrl: "https://github.com/Ayomide-Philip/Classora",
    featured: false,
    year: "2024",
  },
  {
    title: "Mentorship Website",
    category: "Full-Stack",
    description:
      "A mentorship platform that connects mentors and mentees, facilitating knowledge sharing and professional growth.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://balogun-initiative-beta.vercel.app/",
    sourceUrl: "",
    featured: true,
    year: "2023",
  },
];

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
