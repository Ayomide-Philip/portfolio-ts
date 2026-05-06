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
import { useEffect } from "react";

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

const SkillBadge: React.FC<{ item: SkillItem }> = ({ item }) => (
  <div className="flex-shrink-0 w-32 h-32 rounded-2xl bg-white dark:bg-zinc-800 border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 p-4 flex flex-col items-center justify-center gap-3 hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 hover:scale-105">
    <div className="text-black dark:text-white">{item.icon}</div>
    <span className="text-sm font-medium text-center text-black dark:text-white">
      {item.name}
    </span>
  </div>
);

export default function Skills() {
  useEffect(() => {
    const carousel = document.getElementById("skills-carousel");
    if (!carousel) return;

    const scroll = () => {
      carousel.scrollLeft += 1;
      if (
        carousel.scrollLeft >=
        carousel.scrollWidth - carousel.clientWidth
      ) {
        carousel.scrollLeft = 0;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section size="md" id="about" className="bg-zinc-50/50 dark:bg-zinc-900/50">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
            Skills & Expertise
          </h2>
          <p className="text-black/60 dark:text-white/60 text-lg max-w-2xl mx-auto">
            Continuously learning and evolving with the latest technologies and
            best practices.
          </p>
        </div>

        <div className="relative">
          <div
            id="skills-carousel"
            className="flex gap-6 overflow-x-hidden scroll-smooth pb-4"
          >
            {[...allSkills, ...allSkills].map((skill, index) => (
              <SkillBadge key={`${skill.name}-${index}`} item={skill} />
            ))}
          </div>

          <div className="absolute left-0 top-0 bottom-4 w-12 bg-gradient-to-r from-zinc-50 dark:from-zinc-900/50 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-zinc-50 dark:from-zinc-900/50 to-transparent pointer-events-none z-10" />
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-2 rounded-full bg-black/20 dark:bg-white/20 transition-all duration-300"
              style={{
                width: i === 0 ? "24px" : "8px",
                opacity: i === 0 ? 1 : 0.5,
              }}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
