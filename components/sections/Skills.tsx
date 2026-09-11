"use client";

import { Section } from "@/components/ui";
import {
  Code2,
  Database,
  Server,
  GitBranch,
  Package,
  Zap,
  Terminal,
  Cloud,
  Layers,
  Cpu,
  Box,
  Wrench,
} from "lucide-react";

interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

const allSkills: SkillItem[] = [
  {
    name: "React",
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    name: "TypeScript",
    icon: <Terminal className="w-6 h-6" />,
  },
  {
    name: "Next.js",
    icon: <Layers className="w-6 h-6" />,
  },
  {
    name: "Tailwind",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    name: "Vue.js",
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    name: "JavaScript",
    icon: <Package className="w-6 h-6" />,
  },
  {
    name: "Node.js",
    icon: <Server className="w-6 h-6" />,
  },
  {
    name: "Python",
    icon: <Cpu className="w-6 h-6" />,
  },
  {
    name: "PostgreSQL",
    icon: <Database className="w-6 h-6" />,
  },
  {
    name: "MongoDB",
    icon: <Database className="w-6 h-6" />,
  },
  {
    name: "REST APIs",
    icon: <Server className="w-6 h-6" />,
  },
  {
    name: "Git",
    icon: <GitBranch className="w-6 h-6" />,
  },
  {
    name: "Docker",
    icon: <Box className="w-6 h-6" />,
  },
  {
    name: "AWS",
    icon: <Cloud className="w-6 h-6" />,
  },
  {
    name: "GraphQL",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    name: "DevOps",
    icon: <Wrench className="w-6 h-6" />,
  },
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
      {item.icon}
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
