"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen, CalendarDays, Clock3 } from "lucide-react";
import { Card, Section } from "@/components/ui";

type ArticleCategory = "All" | "Frontend" | "Backend" | "Process";

interface Article {
  title: string;
  excerpt: string;
  category: Exclude<ArticleCategory, "All">;
  date: string;
  readTime: string;
  accent: "cyan" | "amber" | "emerald";
}

const categories: ArticleCategory[] = ["All", "Frontend", "Backend", "Process"];

const articles: Article[] = [
  {
    title: "Designing interfaces that feel effortless",
    excerpt:
      "A practical look at hierarchy, motion, and the small decisions that make an interface easier to understand.",
    category: "Frontend",
    date: "May 18, 2024",
    readTime: "6 min read",
    accent: "cyan",
  },
  {
    title: "The quiet power of a well-shaped API",
    excerpt:
      "Why naming, boundaries, and predictable responses matter as much as the code behind a service.",
    category: "Backend",
    date: "Apr 29, 2024",
    readTime: "8 min read",
    accent: "amber",
  },
  {
    title: "What I learned shipping a design system",
    excerpt:
      "The lessons that only appear when reusable components meet real teams, real deadlines, and real products.",
    category: "Process",
    date: "Mar 12, 2024",
    readTime: "5 min read",
    accent: "emerald",
  },
];

const accentStyles = {
  cyan: "from-cyan-300/60 via-cyan-200/20 to-transparent bg-cyan-300/35 dark:bg-cyan-400/20",
  amber:
    "from-amber-300/60 via-amber-200/20 to-transparent bg-amber-300/35 dark:bg-amber-400/20",
  emerald:
    "from-emerald-300/60 via-emerald-200/20 to-transparent bg-emerald-300/35 dark:bg-emerald-400/20",
};

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<ArticleCategory>("All");
  const visibleArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <main>
      <Section size="md" className="pt-32 md:pt-36">
        <div className="mb-12 space-y-6 text-center">
          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-black/45 dark:text-white/45">
              Notes from the build
            </p>
            <h1 className="text-5xl font-bold tracking-tight text-black md:text-6xl dark:text-white">
              Blog
            </h1>
            <p className="mx-auto max-w-xl text-base leading-relaxed text-black/60 dark:text-white/60">
              Ideas about building better interfaces, dependable systems, and a
              more thoughtful way to work.
            </p>
          </div>

          <div
            className="mx-auto flex w-fit max-w-full gap-1 overflow-x-auto rounded-full p-1 scrollbar-none"
            aria-label="Article categories"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap rounded-full px-4 py-2.5 text-xs font-semibold transition-all duration-300 ${
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleArticles.map((article) => (
            <Card
              key={article.title}
              className="group flex h-full flex-col transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_70px_-28px_rgba(0,0,0,0.45)] dark:hover:shadow-[0_28px_70px_-28px_rgba(0,0,0,0.9)]"
            >
              <div className="relative h-40 overflow-hidden border-b border-white/35 dark:border-white/10">
                <div
                  className={`absolute inset-0 bg-linear-to-br ${accentStyles[article.accent].split(" bg-")[0]}`}
                />
                <div
                  className={`absolute -right-8 -top-10 h-36 w-36 rounded-full blur-3xl ${accentStyles[article.accent].split(" ").slice(-3).join(" ")}`}
                />
                <div className="relative flex h-full items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/70 bg-white/45 text-black/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-md transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 dark:border-white/15 dark:bg-white/10 dark:text-white/80">
                    <BookOpen size={28} strokeWidth={1.4} />
                  </div>
                </div>
                <span className="absolute left-5 top-5 rounded-full border border-white/60 bg-white/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/60 backdrop-blur-md dark:border-white/15 dark:bg-white/10 dark:text-white/65">
                  {article.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-5 p-6">
                <div className="space-y-3">
                  <h2 className="text-xl font-bold leading-tight text-black dark:text-white">
                    {article.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-black/60 dark:text-white/60">
                    {article.excerpt}
                  </p>
                </div>
                <div className="mt-auto flex flex-wrap items-center gap-3 text-xs text-black/50 dark:text-white/50">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays size={14} />
                    {article.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock3 size={14} />
                    {article.readTime}
                  </span>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-black dark:text-white"
                >
                  Read article{" "}
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </main>
  );
}
