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
    breadcrumb: "src > config > developer.ts",
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
        code: `    <span class="token-prop">frontend</span>: [<span class="token-str">"React"</span>, <span class="token-str">"Next.js"</span>, <span class="token-str">"Tailwind"</span>],`,
      },
      {
        num: 8,
        code: `    <span class="token-prop">backend</span>: [<span class="token-str">"Node.js"</span>, <span class="token-str">"MongoDB"</span>, <span class="token-str">"REST APIs"</span>],`,
      },
      {
        num: 9,
        code: `    <span class="token-prop">languages</span>: [<span class="token-str">"TypeScript"</span>, <span class="token-str">"JavaScript"</span>],`,
      },
      { num: 10, code: `  },` },
      {
        num: 11,
        code: `  <span class="token-prop">availableForHire</span>: <span class="token-bool">true</span>,`,
      },
      {
        num: 12,
        code: `  <span class="token-prop">focus</span>: <span class="token-str">"Clean code &amp; fast web apps"</span>,`,
      },
      { num: 13, code: `} <span class="token-keyword">as const</span>;` },
      { num: 14, code: `` },
    ],
  },
  "Project.schema.ts": {
    breadcrumb: "src > models > Project.schema.ts",
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
        code: `  <span class="token-prop">slug</span>: { type: String, unique: <span class="token-bool">true</span> },`,
      },
      { num: 7, code: `  <span class="token-prop">stack</span>: [String],` },
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
    breadcrumb: "src > app > api > projects > route.ts",
    lang: "TypeScript (Next.js)",
    lines: [
      {
        num: 1,
        code: `<span class="token-comment">// Next.js App Router API Route</span>`,
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
        code: `  <span class="token-keyword">const</span> data = <span class="token-keyword">await</span> Project.find({ featured: <span class="token-bool">true</span> })`,
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
        code: `<span class="token-comment">// 100% Type-Safe Endpoint</span>`,
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
    <section className="relative mx-auto w-full max-w-5xl px-3 sm:px-6 pt-2 sm:pt-4 pb-12 sm:pb-20 overflow-hidden">
      <div className="relative mx-auto max-w-3xl text-center space-y-3.5 sm:space-y-5">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 leading-[1.12]">
          Building fast web apps from concept to production.
        </h1>

        <p className="mx-auto max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-slate-600 dark:text-slate-400 px-1">
          I build responsive web applications using React, Next.js, TypeScript,
          and MongoDB. I focus on clean code, solid database design, and
          interfaces that feel effortless to use.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 pt-1">
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

      <div className="relative mt-9 sm:mt-14 mx-auto w-full max-w-4xl">
        <div
          className="overflow-hidden rounded-xl sm:rounded-2xl border transition-all duration-300
          backdrop-blur-2xl backdrop-saturate-150
          bg-white/95 border-slate-300/80 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.12),inset_0_1px_1px_rgba(255,255,255,1)]
          dark:bg-[#1E1E1E] dark:border-white/12 dark:shadow-[0_24px_60px_-15px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.1)]"
        >
          <div className="relative flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 border-b border-slate-200/80 bg-slate-100/90 dark:border-[#2D2D2D] dark:bg-[#323233]">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3 items-center justify-center rounded-full bg-[#FF5F56] border border-[#E0443E] shadow-xs cursor-pointer group">
                <span className="opacity-0 group-hover:opacity-100 text-[7px] sm:text-[8px] font-bold text-[#4c0000] leading-none select-none">
                  ×
                </span>
              </span>
              <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3 items-center justify-center rounded-full bg-[#FFBD2E] border border-[#DEA123] shadow-xs cursor-pointer group">
                <span className="opacity-0 group-hover:opacity-100 text-[7px] sm:text-[8px] font-bold text-[#5c3c00] leading-none select-none">
                  –
                </span>
              </span>
              <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3 items-center justify-center rounded-full bg-[#27C93F] border border-[#1AAB29] shadow-xs cursor-pointer group">
                <span className="opacity-0 group-hover:opacity-100 text-[6px] sm:text-[7px] font-bold text-[#004d00] leading-none select-none">
                  +
                </span>
              </span>
            </div>

            <div className="flex items-center gap-1.5 font-mono text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 select-none truncate px-2">
              <span className="font-semibold text-slate-800 dark:text-slate-200 truncate">
                {activeTab}
              </span>
              <span className="hidden sm:inline text-slate-400">—</span>
              <span className="hidden sm:inline text-slate-500 dark:text-slate-400 truncate">
                portfolio-ts — Visual Studio Code
              </span>
            </div>

            <button
              onClick={handleCopy}
              aria-label="Copy npx command"
              className="flex items-center gap-1 sm:gap-1.5 rounded-md px-2 py-1 font-mono text-[10px] sm:text-[11px] font-medium text-slate-700 bg-white border border-slate-200/80 transition-all hover:bg-slate-50 dark:bg-[#252526] dark:border-[#3C3C3C] dark:text-slate-300 dark:hover:bg-[#2D2D2D] dark:hover:text-white cursor-pointer select-none shrink-0"
            >
              <HugeiconsIcon
                icon={copied ? Tick01Icon : Copy01Icon}
                size={11}
                strokeWidth={2}
                className={copied ? "text-teal-600 dark:text-teal-400" : ""}
              />
              <span className="hidden sm:inline">
                {copied ? "Copied!" : "npx ayomide-philip"}
              </span>
              <span className="sm:hidden">{copied ? "Copied" : "Copy"}</span>
            </button>
          </div>

          <div className="flex min-w-0">
            <div className="hidden md:flex flex-col items-center justify-between py-3 px-2 border-r border-slate-200/70 bg-slate-50 dark:border-[#2D2D2D] dark:bg-[#333333] text-slate-500 dark:text-slate-400 select-none shrink-0">
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

            <div className="flex-1 min-w-0 overflow-hidden">
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
                      className={`group relative flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 font-mono text-[11px] sm:text-xs border-r border-slate-200/60 dark:border-[#1E1E1E] transition-all cursor-pointer select-none whitespace-nowrap shrink-0 ${
                        isActive
                          ? "bg-white text-slate-900 font-medium dark:bg-[#1E1E1E] dark:text-[#E0E0E0]"
                          : "bg-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-[#2D2D2D]/50"
                      }`}
                    >
                      {isActive && (
                        <span className="absolute top-0 inset-x-0 h-0.5 bg-teal-600 dark:bg-[#007ACC]" />
                      )}

                      <span
                        className={`inline-flex items-center justify-center h-3.5 w-3.5 sm:h-4 sm:w-4 rounded text-[8px] sm:text-[9px] font-bold ${
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

                      <span className="opacity-0 group-hover:opacity-100 text-[10px] text-slate-400 hover:text-slate-700 dark:hover:text-white ml-0.5 sm:ml-1">
                        ×
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-1 px-3 py-1 font-mono text-[10px] sm:text-[11px] border-b border-slate-100 dark:border-[#252526] bg-slate-50/50 dark:bg-[#1E1E1E] text-slate-500 dark:text-slate-400 select-none overflow-x-auto whitespace-nowrap scrollbar-none">
                <span>{currentFile.breadcrumb}</span>
              </div>

              <div className="vscode-editor-scroll relative h-77.5 sm:h-92.5 p-2.5 sm:p-5 font-mono text-[11px] sm:text-[13px] leading-5 sm:leading-6 bg-white dark:bg-[#1E1E1E] overflow-x-auto overflow-y-auto">
                <table className="w-full border-collapse">
                  <tbody>
                    {currentFile.lines.map(({ num, code }) => (
                      <tr
                        key={num}
                        className="hover:bg-slate-50/60 dark:hover:bg-[#2A2D2E]/40 transition-colors"
                      >
                        <td className="w-6 sm:w-8 text-right pr-2 sm:pr-3 select-none text-slate-300 dark:text-[#858585] text-[10px] sm:text-xs align-top">
                          {num}
                        </td>
                        <td className="text-slate-800 dark:text-[#D4D4D4] whitespace-pre font-mono">
                          <span dangerouslySetInnerHTML={{ __html: code }} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-between px-2.5 sm:px-3 py-1 bg-teal-800 text-white dark:bg-[#007ACC] dark:text-white font-mono text-[10px] sm:text-[11px] select-none">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="flex items-center gap-1">
                    <HugeiconsIcon
                      icon={GitBranchIcon}
                      size={11}
                      strokeWidth={2}
                    />
                    <span>main*</span>
                  </span>
                  <span className="hidden xs:inline">0 errors</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="hidden sm:inline">Spaces: 2</span>
                  <span>UTF-8</span>
                  <span className="font-semibold truncate max-w-30 sm:max-w-none">
                    {currentFile.lang}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
