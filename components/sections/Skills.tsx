"use client";

import { Section } from "@/components/ui";
import {
  SiDocker,
  SiGit,
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { FaAws, FaTools } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import type { IconType } from "react-icons";

interface SkillItem {
  name: string;
  icon: IconType;
  color: string;
}

const allSkills: SkillItem[] = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "REST APIs", icon: TbApi, color: "#FF6C37" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "DevOps", icon: FaTools, color: "#6B7280" },
];

const SkillBadge: React.FC<{ item: SkillItem; index: number }> = ({
  item,
  index,
}) => (
  <div className="group relative flex h-32 w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-3xl border border-white/60 bg-white/35 p-4 text-black shadow-[0_14px_35px_-25px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-white hover:bg-white/55 hover:shadow-[0_24px_45px_-25px_rgba(0,0,0,0.5)] dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-white/25 dark:hover:bg-white/10">
    <span
      aria-hidden="true"
      className={`absolute -right-8 -top-8 h-20 w-20 rounded-full blur-2xl transition-opacity duration-500 group-hover:opacity-100 ${index % 3 === 0 ? "bg-cyan-300/35" : index % 3 === 1 ? "bg-emerald-300/35" : "bg-amber-300/35"}`}
    />
    <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/70 bg-white/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-md transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 dark:border-white/15 dark:bg-white/10">
      <item.icon
        size={25}
        color={item.color}
        className={item.name === "Next.js" ? "dark:invert" : undefined}
        aria-hidden="true"
      />
    </div>
    <span className="relative text-center text-sm font-medium text-black/75 dark:text-white/80">
      {item.name}
    </span>
  </div>
);

export default function Skills() {
  return (
    <Section size="md" id="about" className="relative overflow-hidden">
      <div className="space-y-12">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-black/45 dark:text-white/45">
            My toolkit
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
            Skills & Expertise
          </h2>
          <p className="text-lg text-black/60 dark:text-white/60">
            Continuously learning and evolving with the latest technologies and
            best practices.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {allSkills.map((skill, index) => (
            <SkillBadge key={skill.name} item={skill} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}
