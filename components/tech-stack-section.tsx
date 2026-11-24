"use client";

import { useEffect, useRef } from "react";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiHtml5,
  SiMongodb,
  SiMongoose,
  SiPrisma,
  SiGit,
  SiGithub,
  SiPnpm,
  SiVercel,
  SiFramer,
  SiPostman,
  SiRedis,
  SiCloudinary,
  SiJsonwebtokens,
  SiEslint,
  SiPrettier,
  SiShadcnui,
} from "react-icons/si";
import { TbApi, TbBrandCss3 } from "react-icons/tb";
import type { IconType } from "react-icons";

interface TechItem {
  id: string;
  name: string;
  icon: IconType;
  iconColor: string;
}

// Row 1 — left scroll  (Languages, Frameworks & Styling)
const ROW_1: TechItem[] = [
  {
    id: "typescript",
    name: "TypeScript",
    icon: SiTypescript,
    iconColor: "text-[#3178C6]",
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: SiNextdotjs,
    iconColor: "text-slate-900 dark:text-white",
  },
  { id: "react", name: "React", icon: SiReact, iconColor: "text-[#61DAFB]" },
  {
    id: "nodejs",
    name: "Node.js",
    icon: SiNodedotjs,
    iconColor: "text-[#5FA04E]",
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: SiJavascript,
    iconColor: "text-[#F7DF1E]",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    iconColor: "text-[#06B6D4]",
  },
  { id: "html5", name: "HTML5", icon: SiHtml5, iconColor: "text-[#E34F26]" },
  { id: "css", name: "CSS", icon: TbBrandCss3, iconColor: "text-[#1572B6]" },
  {
    id: "framer",
    name: "Framer Motion",
    icon: SiFramer,
    iconColor: "text-slate-900 dark:text-white",
  },
  {
    id: "shadcn",
    name: "shadcn/ui",
    icon: SiShadcnui,
    iconColor: "text-slate-900 dark:text-white",
  },
  { id: "eslint", name: "ESLint", icon: SiEslint, iconColor: "text-[#4B32C3]" },
  {
    id: "prettier",
    name: "Prettier",
    icon: SiPrettier,
    iconColor: "text-[#F7B93E]",
  },
];

// Row 2 — right scroll  (Databases, APIs, Infra & Tooling)
const ROW_2: TechItem[] = [
  {
    id: "mongodb",
    name: "MongoDB",
    icon: SiMongodb,
    iconColor: "text-[#47A248]",
  },
  {
    id: "mongoose",
    name: "Mongoose",
    icon: SiMongoose,
    iconColor: "text-[#E53E3E]",
  },
  {
    id: "rest-api",
    name: "REST APIs",
    icon: TbApi,
    iconColor: "text-teal-600 dark:text-teal-400",
  },
  {
    id: "prisma",
    name: "Prisma",
    icon: SiPrisma,
    iconColor: "text-[#2D3748] dark:text-[#818CF8]",
  },
  { id: "redis", name: "Redis", icon: SiRedis, iconColor: "text-[#FF4438]" },
  {
    id: "cloudinary",
    name: "Cloudinary",
    icon: SiCloudinary,
    iconColor: "text-[#3448C5]",
  },
  {
    id: "jwt",
    name: "JWT",
    icon: SiJsonwebtokens,
    iconColor: "text-slate-900 dark:text-white",
  },
  {
    id: "nextauth",
    name: "NextAuth",
    icon: SiNextdotjs,
    iconColor: "text-slate-900 dark:text-white",
  },
  {
    id: "postman",
    name: "Postman",
    icon: SiPostman,
    iconColor: "text-[#FF6C37]",
  },
  {
    id: "vercel",
    name: "Vercel",
    icon: SiVercel,
    iconColor: "text-slate-900 dark:text-white",
  },
  { id: "git", name: "Git", icon: SiGit, iconColor: "text-[#F05032]" },
  {
    id: "github",
    name: "GitHub",
    icon: SiGithub,
    iconColor: "text-slate-900 dark:text-slate-100",
  },
  { id: "pnpm", name: "pnpm", icon: SiPnpm, iconColor: "text-[#F69220]" },
];

function TechPill({ tech }: { tech: TechItem }) {
  const Icon = tech.icon;
  return (
    <div className="inline-flex items-center gap-2.5 px-4 py-2.5 mr-3 rounded-full shrink-0 select-none cursor-pointer backdrop-blur-md bg-white/80 dark:bg-white/6 border border-slate-200/80 dark:border-white/10 shadow-[0_2px_8px_rgba(15,23,42,0.03),inset_0_1px_1px_rgba(255,255,255,0.9)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
      <Icon size={18} className={tech.iconColor} />
      <span className="text-sm font-medium text-slate-800 dark:text-slate-200 whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  );
}

function MarqueeRow({
  items,
  direction,
  pxPerSec = 60,
}: {
  items: TechItem[];
  direction: "left" | "right";
  pxPerSec?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const offset = useRef(0);
  const paused = useRef(false);
  const lastTime = useRef<number | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // For right-to-left direction we start pre-offset at -copyWidth so it
    // scrolls INTO view from the left; for left-to-right start at 0.
    const getHalf = () => track.scrollWidth / 2;

    if (direction === "right") {
      offset.current = -getHalf();
      track.style.transform = `translateX(${offset.current}px)`;
    }

    const tick = (now: number) => {
      if (lastTime.current === null) lastTime.current = now;
      const delta = now - lastTime.current;
      lastTime.current = now;

      if (!paused.current) {
        const half = getHalf();
        const speed = (pxPerSec / 1000) * delta;

        if (direction === "left") {
          offset.current -= speed;
          // When copy-1 fully scrolls out, snap back — visually identical
          if (offset.current <= -half) offset.current += half;
        } else {
          offset.current += speed;
          // When copy-2 fully scrolls out, snap back
          if (offset.current >= 0) offset.current -= half;
        }

        track.style.transform = `translateX(${offset.current}px)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    const pause = () => {
      paused.current = true;
    };
    const resume = () => {
      paused.current = false;
      lastTime.current = null;
    };

    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
    };
  }, [direction, pxPerSec]);

  return (
    <div className="relative w-full overflow-hidden py-1">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-linear-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-linear-to-l from-background to-transparent z-10" />

      <div
        ref={trackRef}
        className="flex w-max"
        style={{ willChange: "transform" }}
      >
        {/* Two identical copies — reset is invisible because they match */}
        {[...items, ...items].map((item, idx) => (
          <TechPill key={`${item.id}-${idx}`} tech={item} />
        ))}
      </div>
    </div>
  );
}

export function TechStackSection() {
  return (
    <section
      id="stack"
      className="relative mx-auto w-full max-w-6xl px-3.5 sm:px-6 py-16 sm:py-28 border-t border-slate-200/70 dark:border-white/8 scroll-mt-24 overflow-hidden"
    >
      <div className="mx-auto max-w-2xl text-center space-y-3.5 mb-12 sm:mb-16">
        <h2 className="text-3xl capitalize sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 text-pretty">
          Technologies I use
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal text-pretty">
          The runtime engines, modern frameworks, and production tools I reach
          for to build reliable software.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:gap-5 w-full">
        <MarqueeRow items={ROW_1} direction="left" pxPerSec={55} />
        <MarqueeRow items={ROW_2} direction="right" pxPerSec={45} />
      </div>
    </section>
  );
}
