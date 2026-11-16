"use client";

import Link from "next/link";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  Mail01Icon,
  Copy01Icon,
  Tick01Icon,
  GitBranchIcon,
  Folder01Icon,
  Search01Icon,
  Settings01Icon,
} from "@hugeicons/core-free-icons";

type FileTab = "developer.ts" | "Project.schema.ts" | "route.ts";

const CODE_FILES: Record<
  FileTab,
  {
    breadcrumb: string;
    lang: string;
    lines: { num: number; code: string }[];
  }
> = {
  "developer.ts": {
    breadcrumb: "portfolio > src > config > developer.ts > developer",
    lang: "TypeScript",
    lines: [
      {
        num: 1,
        code: `<span class="token-comment">// Fullstack Developer Profile</span>`,
      },
      {
        num: 2,
        code: `<span class="token-keyword">export const</span> <span class="token-id">developer</span> = {`,
      },
      {
        num: 3,
        code: `  <span class="token-prop">name</span>: <span class="token-str">"Ayomide Philip"</span>,`,
      },
      {
        num: 4,
        code: `  <span class="token-prop">role</span>: <span class="token-str">"Fullstack Developer"</span>,`,
      },
      {
        num: 5,
        code: `  <span class="token-prop">location</span>: <span class="token-str">"Remote"</span>,`,
      },
      { num: 6, code: `  <span class="token-prop">technologies</span>: {` },
      {
        num: 7,
        code: `    <span class="token-prop">frontend</span>: [<span class="token-str">"React"</span>, <span class="token-str">"Next.js"</span>, <span class="token-str">"Tailwind CSS"</span>],`,
      },
      {
        num: 8,
        code: `    <span class="token-prop">backend</span>: [<span class="token-str">"Node.js"</span>, <span class="token-str">"MongoDB"</span>, <span class="token-str">"REST APIs"</span>],`,
      },
      {
        num: 9,
        code: `    <span class="token-prop">languages</span>: [<span class="token-str">"TypeScript"</span>, <span class="token-str">"JavaScript"</span>, <span class="token-str">"HTML5"</span>, <span class="token-str">"CSS"</span>],`,
      },
      { num: 10, code: `  },` },
      {
        num: 11,
        code: `  <span class="token-prop">availableForHire</span>: <span class="token-bool">true</span>,`,
      },
      {
        num: 12,
        code: `  <span class="token-prop">focus</span>: <span class="token-str">"Clean code, fast load times, and structured data."</span>,`,
      },
      { num: 13, code: `} <span class="token-keyword">as const</span>;` },
      { num: 14, code: `` },
    ],
  },
  "Project.schema.ts": {
    breadcrumb: "portfolio > src > models > Project.schema.ts > ProjectSchema",
    lang: "TypeScript (Mongoose)",
    lines: [
      {
        num: 1,
        code: `<span class="token-comment">// MongoDB Document Schema</span>`,
      },
      {
        num: 2,
        code: `<span class="token-keyword">import</span> { Schema, model } <span class="token-keyword">from</span> <span class="token-str">"mongoose"</span>;`,
      },
      { num: 3, code: `` },
      {
        num: 4,
        code: `<span class="token-keyword">const</span> <span class="token-id">ProjectSchema</span> = <span class="token-keyword">new</span> Schema({`,
      },
      {
        num: 5,
        code: `  <span class="token-prop">title</span>: { type: String, required: <span class="token-bool">true</span> },`,
      },
      {
        num: 6,
        code: `  <span class="token-prop">slug</span>: { type: String, unique: <span class="token-bool">true</span>, index: <span class="token-bool">true</span> },`,
      },
      {
        num: 7,
        code: `  <span class="token-prop">techStack</span>: [String],`,
      },
      { num: 8, code: `  <span class="token-prop">liveUrl</span>: String,` },
      { num: 9, code: `  <span class="token-prop">githubUrl</span>: String,` },
      {
        num: 10,
        code: `  <span class="token-prop">isFeatured</span>: { type: Boolean, default: <span class="token-bool">true</span> },`,
      },
      {
        num: 11,
        code: `  <span class="token-prop">createdAt</span>: { type: Date, default: Date.now },`,
      },
      { num: 12, code: `});` },
      { num: 13, code: `` },
      {
        num: 14,
        code: `<span class="token-keyword">export default</span> model(<span class="token-str">"Project"</span>, ProjectSchema);`,
      },
    ],
  },
  "route.ts": {
    breadcrumb: "portfolio > src > app > api > projects > route.ts > GET",
    lang: "TypeScript (Next.js)",
    lines: [
      {
        num: 1,
        code: `<span class="token-comment">// Next.js App Router Route Handler</span>`,
      },
      {
        num: 2,
        code: `<span class="token-keyword">import</span> { NextResponse } <span class="token-keyword">from</span> <span class="token-str">"next/server"</span>;`,
      },
      {
        num: 3,
        code: `<span class="token-keyword">import</span> connectMongo <span class="token-keyword">from</span> <span class="token-str">"@/lib/mongodb"</span>;`,
      },
      {
        num: 4,
        code: `<span class="token-keyword">import</span> Project <span class="token-keyword">from</span> <span class="token-str">"@/models/Project"</span>;`,
      },
      { num: 5, code: `` },
      {
        num: 6,
        code: `<span class="token-keyword">export async function</span> <span class="token-id">GET</span>() {`,
      },
      {
        num: 7,
        code: `  <span class="token-keyword">await</span> connectMongo();`,
      },
      {
        num: 8,
        code: `  <span class="token-keyword">const</span> data = <span class="token-keyword">await</span> Project.find({ isFeatured: <span class="token-bool">true</span> })`,
      },
      { num: 9, code: `    .sort({ createdAt: -1 })` },
      { num: 10, code: `    .lean();` },
      {
        num: 11,
        code: `  <span class="token-keyword">return</span> NextResponse.json({ <span class="token-prop">success</span>: <span class="token-bool">true</span>, data });`,
      },
      { num: 12, code: `}` },
      { num: 13, code: `` },
      {
        num: 14,
        code: `<span class="token-comment">// 100% Type-Safe API response</span>`,
      },
    ],
  },
};

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<FileTab>("developer.ts");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npx ayomide-philip");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentFile = CODE_FILES[activeTab];

  return (
    <section className="relative mx-auto w-full max-w-5xl px-3.5 sm:px-6 pt-2 sm:pt-4 pb-14 sm:pb-20">
      {/* Hero Typography & CTA Block */}
      <div className="relative mx-auto max-w-3xl text-center space-y-4 sm:space-y-5">
        {/* Availability Status Badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-[11px] sm:text-xs transition-all
          bg-teal-500/8 border border-teal-600/20 text-teal-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]
          dark:bg-teal-400/8 dark:border-teal-400/25 dark:text-teal-300 dark:shadow-[inset_0_1px_0_rgba(45,212,191,0.2)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-400" />
          </span>
          <span>Ayomide Philip • Available for remote work</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 leading-[1.12]">
          Building fast web apps from concept to production.
        </h1>

        {/* Lead Paragraph */}
        <p className="mx-auto max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          I build responsive web applications using React, Next.js, TypeScript,
          and MongoDB. I focus on clean code, solid database design, and
          interfaces that feel effortless to use.
        </p>

        {/* Action Button Cluster */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
          <Link
            href="/projects"
            className="group inline-flex items-center justify-center gap-2 rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold tracking-tight transition-all duration-200 ease-out active:scale-[0.98]
              bg-teal-700 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_4px_14px_rgba(15,118,110,0.25)] hover:bg-teal-800 hover:shadow-[0_6px_20px_rgba(15,118,110,0.35)] hover:-translate-y-0.5 active:translate-y-0
              dark:bg-teal-400 dark:text-[#080B11] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_0_24px_-4px_rgba(45,212,191,0.35)] dark:hover:bg-teal-300 dark:hover:shadow-[0_0_32px_-2px_rgba(45,212,191,0.55)] dark:hover:-translate-y-0.5 dark:active:translate-y-0"
          >
            <span>View my work</span>
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              size={15}
              strokeWidth={2.2}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold tracking-tight transition-all duration-200 ease-out active:scale-[0.98]
              backdrop-blur-xl bg-white/70 text-slate-800 border border-slate-200/90 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_8px_rgba(15,23,42,0.04)] hover:bg-white hover:border-slate-300 hover:text-slate-950 hover:-translate-y-0.5 active:translate-y-0
              dark:bg-white/6 dark:text-slate-200 dark:border-white/12 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.16)] dark:hover:bg-white/12 dark:hover:border-white/22 dark:hover:text-white dark:hover:-translate-y-0.5 dark:active:translate-y-0"
          >
            <HugeiconsIcon icon={Mail01Icon} size={15} strokeWidth={2} />
            <span>Get in touch</span>
          </Link>
        </div>
      </div>

      {/* macOS VS Code Editor Window */}
      <div className="relative mt-10 sm:mt-14 mx-auto w-full max-w-4xl">
        <div
          className="overflow-hidden rounded-xl sm:rounded-2xl border transition-all duration-300
          backdrop-blur-2xl backdrop-saturate-150
          bg-white/95 border-slate-300/80 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.12),inset_0_1px_1px_rgba(255,255,255,1)]
          dark:bg-[#1E1E1E] dark:border-white/12 dark:shadow-[0_24px_60px_-15px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.1)]"
        >
          {/* macOS VS Code Title Bar */}
          <div className="relative flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 border-b border-slate-200/80 bg-slate-100/90 dark:border-[#2D2D2D] dark:bg-[#323233]">
            {/* macOS Traffic Lights */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3 items-center justify-center rounded-full bg-[#FF5F56] border border-[#E0443E] shadow-xs cursor-pointer group">
                <span className="opacity-0 group-hover:opacity-100 text-[8px] font-bold text-[#4c0000] leading-none select-none">
                  ×
                </span>
              </span>
              <span className="relative flex h-3 w-3 items-center justify-center rounded-full bg-[#FFBD2E] border border-[#DEA123] shadow-xs cursor-pointer group">
                <span className="opacity-0 group-hover:opacity-100 text-[8px] font-bold text-[#5c3c00] leading-none select-none">
                  –
                </span>
              </span>
              <span className="relative flex h-3 w-3 items-center justify-center rounded-full bg-[#27C93F] border border-[#1AAB29] shadow-xs cursor-pointer group">
                <span className="opacity-0 group-hover:opacity-100 text-[7px] font-bold text-[#004d00] leading-none select-none">
                  +
                </span>
              </span>
            </div>

            {/* VS Code Window Centered Title Breadcrumb */}
            <div className="hidden sm:flex items-center gap-1.5 font-mono text-xs text-slate-600 dark:text-slate-300 select-none">
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {activeTab}
              </span>
              <span className="text-slate-400">—</span>
              <span className="text-slate-500 dark:text-slate-400">
                portfolio-ts — Visual Studio Code
              </span>
            </div>

            {/* Quick CLI Copy Pill */}
            <button
              onClick={handleCopy}
              aria-label="Copy npx command"
              className="flex items-center gap-1.5 rounded-md px-2 py-1 font-mono text-[10px] sm:text-[11px] font-medium text-slate-700 bg-white border border-slate-200/80 transition-all hover:bg-slate-50 dark:bg-[#252526] dark:border-[#3C3C3C] dark:text-slate-300 dark:hover:bg-[#2D2D2D] dark:hover:text-white cursor-pointer select-none"
            >
              <HugeiconsIcon
                icon={copied ? Tick01Icon : Copy01Icon}
                size={12}
                strokeWidth={2}
                className={copied ? "text-teal-600 dark:text-teal-400" : ""}
              />
              <span className="hidden xs:inline">
                {copied ? "Copied!" : "npx ayomide-philip"}
              </span>
              <span className="xs:hidden">{copied ? "Copied" : "Copy"}</span>
            </button>
          </div>

          {/* VS Code Workspace (Activity Bar + Editor Area) */}
          <div className="flex">
            {/* Mini VS Code Activity Bar (Leftmost icons) */}
            <div className="hidden sm:flex flex-col items-center justify-between py-3 px-2 border-r border-slate-200/70 bg-slate-50 dark:border-[#2D2D2D] dark:bg-[#333333] text-slate-500 dark:text-slate-400 select-none">
              <div className="flex flex-col items-center gap-3.5">
                <div
                  className="relative text-teal-700 dark:text-white cursor-pointer"
                  title="Explorer"
                >
                  <span className="absolute -left-2 top-0 bottom-0 w-0.5 bg-teal-600 dark:bg-white rounded-r" />
                  <HugeiconsIcon
                    icon={Folder01Icon}
                    size={16}
                    strokeWidth={2}
                  />
                </div>
                <div
                  className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors"
                  title="Search"
                >
                  <HugeiconsIcon
                    icon={Search01Icon}
                    size={16}
                    strokeWidth={2}
                  />
                </div>
                <div
                  className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors"
                  title="Source Control"
                >
                  <HugeiconsIcon
                    icon={GitBranchIcon}
                    size={16}
                    strokeWidth={2}
                  />
                </div>
              </div>
              <div
                className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors"
                title="Settings"
              >
                <HugeiconsIcon
                  icon={Settings01Icon}
                  size={15}
                  strokeWidth={2}
                />
              </div>
            </div>

            {/* Main VS Code Editor Container */}
            <div className="flex-1 min-w-0">
              {/* VS Code Editor Tabs Bar */}
              <div className="flex items-center border-b border-slate-200/70 bg-slate-100/70 dark:border-[#252526] dark:bg-[#252526] overflow-x-auto scrollbar-none">
                {(
                  ["developer.ts", "Project.schema.ts", "route.ts"] as FileTab[]
                ).map((tab) => {
                  const isActive = activeTab === tab;
                  const isTs = tab.endsWith(".ts");
                  const isSchema = tab.includes("schema");

                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`group relative flex items-center gap-2 px-3 sm:px-4 py-2 font-mono text-xs border-r border-slate-200/60 dark:border-[#1E1E1E] transition-all cursor-pointer select-none whitespace-nowrap shrink-0 ${
                        isActive
                          ? "bg-white text-slate-900 font-medium dark:bg-[#1E1E1E] dark:text-[#E0E0E0]"
                          : "bg-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-[#2D2D2D]/50"
                      }`}
                    >
                      {/* Active top bar indicator in VS Code style */}
                      {isActive && (
                        <span className="absolute top-0 inset-x-0 h-0.5 bg-teal-600 dark:bg-[#007ACC]" />
                      )}

                      {/* File Icon Badge */}
                      <span
                        className={`inline-flex items-center justify-center h-4 w-4 rounded text-[9px] font-bold ${
                          isSchema
                            ? "bg-emerald-600 text-white"
                            : isTs
                              ? "bg-blue-600 text-white"
                              : "bg-purple-600 text-white"
                        }`}
                      >
                        {isSchema ? "DB" : isTs ? "TS" : "API"}
                      </span>

                      <span>{tab}</span>

                      {/* Close 'x' icon */}
                      <span className="opacity-0 group-hover:opacity-100 text-[10px] text-slate-400 hover:text-slate-700 dark:hover:text-white ml-1">
                        ×
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* VS Code Breadcrumb Path */}
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 font-mono text-[11px] border-b border-slate-100 dark:border-[#252526] bg-slate-50/50 dark:bg-[#1E1E1E] text-slate-500 dark:text-slate-400 select-none overflow-x-auto whitespace-nowrap scrollbar-none">
                <span>{currentFile.breadcrumb}</span>
              </div>

              {/* Code Viewer: Constant Fixed Height Across All Tabs (NO layout jumping!) */}
              <div className="relative h-90 sm:h-97.5 p-3 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed bg-white dark:bg-[#1E1E1E] overflow-x-auto overflow-y-auto">
                <table className="w-full border-collapse">
                  <tbody>
                    {currentFile.lines.map(({ num, code }) => (
                      <tr
                        key={num}
                        className="leading-6 hover:bg-slate-50/60 dark:hover:bg-[#2A2D2E]/40 transition-colors"
                      >
                        {/* Gutter Line Number */}
                        <td className="w-8 sm:w-10 text-right pr-3 sm:pr-4 select-none text-slate-300 dark:text-[#858585] text-xs align-top">
                          {num}
                        </td>
                        {/* Code Content Line: clean wrap/flow with NO individual scrollbars */}
                        <td className="text-slate-800 dark:text-[#D4D4D4] whitespace-pre font-mono">
                          <span dangerouslySetInnerHTML={{ __html: code }} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* VS Code Status Bar (Classic Bottom Accent) */}
              <div className="flex items-center justify-between px-3 py-1 bg-teal-800 text-white dark:bg-[#007ACC] dark:text-white font-mono text-[10px] sm:text-[11px] select-none">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <HugeiconsIcon
                      icon={GitBranchIcon}
                      size={11}
                      strokeWidth={2}
                    />
                    <span>main*</span>
                  </span>
                  <span>0 errors, 0 warnings</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline">
                    Ln {currentFile.lines.length}, Col 2
                  </span>
                  <span className="hidden sm:inline">Spaces: 2</span>
                  <span>UTF-8</span>
                  <span className="font-semibold">{currentFile.lang}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
