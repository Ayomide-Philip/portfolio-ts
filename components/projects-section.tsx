"use client";

import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
  SiGithub,
} from "react-icons/si";

export interface Project {
  title: string;
  category: string;
  description: string;
  stack: string[];
  liveUrl: string;
  sourceUrl: string;
  featured: boolean;
  image: string;
}

export const Projects: Project[] = [
  {
    title: "Fashion E-Commerce",
    category: "Full-Stack",
    description:
      "AI-Based Personalized Recommendation System for Fashion E-Commerce with Content-based AI recommendations and AI image classification.",
    stack: ["Next.js", "Typescript", "MongoDB", "Tailwindcss"],
    liveUrl: "https://ecommerce-fashion-7fz3.onrender.com/",
    sourceUrl: "",
    featured: true,
    image: "/projects/fashion-ecommerce.png",
  },
  {
    title: "Classora",
    category: "Full-Stack",
    description:
      "Core pillars are class management, community engagement, real‑time chat, searchable venue mapping and advanced reminders.",
    stack: ["Next.js", "Javascript", "MongoDB", "Tailwindcss"],
    liveUrl: "https://classora-eight.vercel.app/",
    sourceUrl: "https://github.com/Ayomide-Philip/Classora",
    featured: false,
    image: "/projects/classora.png",
  },
  {
    title: "Mentorship Website",
    category: "Full-Stack",
    description:
      "A mentorship platform that connects mentors and mentees, facilitating knowledge sharing and professional growth.",
    stack: ["Next.js", "Typescript", "MongoDB", "Tailwindcss"],
    liveUrl: "https://balogun-initiative-beta.vercel.app/",
    sourceUrl: "",
    featured: true,
    image: "/projects/mentorship-platform.png",
  },
];

function getTechIcon(tech: string) {
  const t = tech.toLowerCase();
  if (t.includes("next"))
    return <SiNextdotjs size={11} className="text-slate-900 dark:text-white" />;
  if (t.includes("type"))
    return <SiTypescript size={11} className="text-[#3178C6]" />;
  if (t.includes("java"))
    return <SiJavascript size={11} className="text-[#F7DF1E]" />;
  if (t.includes("mongo"))
    return <SiMongodb size={11} className="text-[#47A248]" />;
  if (t.includes("tailwind"))
    return <SiTailwindcss size={11} className="text-[#06B6D4]" />;
  return null;
}

export function ProjectsSection() {
  const displayedProjects = Projects.slice(0, 3);

  return (
    <section className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 py-10 sm:py-18 lg:py-10 border-t border-slate-200/70 dark:border-white/8">
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
          <article
            key={project.title}
            className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 ease-out
            backdrop-blur-2xl backdrop-saturate-150
            bg-white/60 border border-slate-200/80 shadow-[0_4px_24px_0_rgba(15,23,42,0.03)]
            hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-[0_16px_36px_0_rgba(15,23,42,0.08)]
            dark:bg-slate-900/35 dark:border-white/8 dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.06)]
            dark:hover:border-white/20 dark:hover:bg-slate-900/45"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-slate-900 border-b border-slate-200/70 dark:border-white/8">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority={idx === 0}
                className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            <div className="flex flex-col justify-between flex-1 p-4 sm:p-5 lg:p-6 space-y-5">
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal text-pretty line-clamp-3">
                  {project.description.trim()}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-200/60 dark:border-white/6">
                <div className="flex flex-wrap items-center gap-1.5">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/85 bg-white/65 dark:border-white/12 dark:bg-white/8 backdrop-blur-md px-2.5 py-0.5 text-[11px] font-mono text-slate-700 dark:text-slate-200 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]"
                    >
                      {getTechIcon(item)}
                      <span>{item}</span>
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 sm:gap-2.5 pt-1">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn h-10 px-4 sm:px-5 rounded-full inline-flex items-center justify-center gap-2 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-95 active:translate-y-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-teal-500 shrink-0
                      bg-teal-600 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_4px_14px_rgba(15,118,110,0.25)] hover:bg-teal-700 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_6px_20px_rgba(15,118,110,0.35)]
                      dark:bg-teal-400 dark:text-[#080B11] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_0_24px_-4px_rgba(45,212,191,0.35)] dark:hover:bg-teal-300 dark:hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_0_32px_-2px_rgba(45,212,191,0.55)]"
                    >
                      <span>Live demo</span>
                      <HugeiconsIcon
                        icon={ArrowUpRight01Icon}
                        size={15}
                        className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                      />
                    </a>
                  )}

                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn h-10 px-4 sm:px-5 rounded-full inline-flex items-center justify-center gap-2 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-95 active:translate-y-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-teal-500 shrink-0
                      backdrop-blur-xl bg-white/65 text-slate-900 border border-slate-200/85 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_8px_rgba(15,23,42,0.04)] hover:bg-white/90 hover:border-slate-300
                      dark:bg-white/6 dark:text-slate-100 dark:border-white/12 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.16)] dark:hover:bg-white/12 dark:hover:border-white/22 dark:hover:text-white"
                      title="View GitHub Repository"
                    >
                      <SiGithub
                        size={14}
                        className="transition-transform duration-200 group-hover/btn:scale-110"
                      />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 sm:mt-16 text-center">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 rounded-full border border-slate-300/90 bg-white/80 dark:border-white/12 dark:bg-white/6 hover:bg-slate-100 dark:hover:bg-white/10 px-6 py-3 text-sm font-semibold text-slate-900 dark:text-slate-100 shadow-xs transition-all duration-200 hover:-translate-y-0.5 active:scale-95 cursor-pointer focus-visible:outline-2 focus-visible:outline-teal-500"
        >
          <span>View all projects</span>
          <HugeiconsIcon
            icon={ArrowRight01Icon}
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
}
