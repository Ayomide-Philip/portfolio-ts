import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
  SiGithub,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";
import { ProjectCardImage } from "../project-card-image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { FaMarkdown } from "react-icons/fa";

export interface Project {
  title: string;
  category: string;
  description: string;
  stack: string[];
  liveUrl: string;
  sourceUrl: string;
  featured: boolean;
  year?: string;
}

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
  if (t.includes("github"))
    return <SiGithub size={11} className="text-slate-900 dark:text-white" />;
  if (t.includes("node"))
    return <SiNodedotjs size={11} className="text-[#339933]" />;
  if (t.includes("react"))
    return <SiReact size={11} className="text-[#61DAFB]" />;
  if (t.includes("markdown"))
    return (
      <FaMarkdown size={11} className="text-[#000000] dark:text-[#ffffff]" />
    );
  return null;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 ease-out backdrop-blur-2xl backdrop-saturate-150 bg-white/60 border border-slate-200/80 shadow-[0_4px_24px_0_rgba(15,23,42,0.03)] hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-[0_16px_36px_0_rgba(15,23,42,0.08)] dark:bg-slate-900/35 dark:border-white/8 dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.06)] dark:hover:border-white/20 dark:hover:bg-slate-900/45">
      <ProjectCardImage
        title={project.title}
        category={project.category}
        year={project.year}
        stack={project.stack}
        sourceUrl={project.sourceUrl}
      />

      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6 space-y-5">
        <div className="space-y-2.5">
          <h2 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            {project.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal line-clamp-3">
            {project.description}
          </p>
        </div>

        <div className="space-y-4 pt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium font-mono bg-slate-100/90 text-slate-700 border border-slate-200/70 dark:bg-white/6 dark:text-slate-300 dark:border-white/8"
              >
                {getTechIcon(tech)}
                <span>{tech}</span>
              </span>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-200/60 dark:border-white/8 flex items-center gap-2.5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex-1 h-9 px-4 rounded-full inline-flex items-center justify-center gap-1.5 font-semibold text-xs tracking-tight transition-all duration-200 hover:-translate-y-0.5 active:scale-95 cursor-pointer
                bg-teal-700 text-white hover:bg-teal-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_4px_14px_rgba(15,118,110,0.25)]
                dark:bg-teal-400 dark:text-[#080B11] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] dark:hover:bg-teal-300"
              >
                <span>Live Demo</span>
                <HugeiconsIcon
                  icon={ArrowUpRight01Icon}
                  size={14}
                  className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                />
              </a>
            )}

            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 px-3.5 rounded-full inline-flex items-center justify-center gap-1.5 font-semibold text-xs transition-all duration-200 hover:-translate-y-0.5 active:scale-95 cursor-pointer shrink-0 backdrop-blur-xl bg-white/65 text-slate-900 border border-slate-200/85 hover:bg-white/90 dark:bg-white/6 dark:text-slate-100 dark:border-white/12 dark:hover:bg-white/12"
                title="View Source Code"
              >
                <SiGithub size={13} />
                <span>Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
