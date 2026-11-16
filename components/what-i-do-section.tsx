"use client";

import { useState, useEffect, useRef } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Layers01Icon,
  Database01Icon,
  GitBranchIcon,
  CheckIcon,
  Activity01Icon,
} from "@hugeicons/core-free-icons";

const API_RESPONSE_LINES = [
  { text: "{" },
  { key: '"status"', val: "200" },
  { key: '"db"', val: '"MongoDB"' },
  { key: '"cached"', val: "true" },
  { key: '"latency"', val: '"18ms"' },
  { text: "}" },
];

export function WhatIDoSection() {
  // Card 1 State (Frontend Craft: Real React Button JSX & Live Render)
  const [frontendMode, setFrontendMode] = useState<"jsx" | "render">("jsx");
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);

  // Card 2 State (Backend & APIs: Streaming Typewriter JSON)
  const [backendMode, setBackendMode] = useState<"payload" | "schema">(
    "payload",
  );
  const [visibleLines, setVisibleLines] = useState<number>(
    API_RESPONSE_LINES.length,
  );
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [latency, setLatency] = useState<number>(18);
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null);

  const startTypewriter = () => {
    if (isTyping) return;
    setIsTyping(true);
    setVisibleLines(0);
    const newLatency = Math.floor(Math.random() * 8) + 14;
    setLatency(newLatency);

    let current = 0;
    if (typingTimerRef.current) clearInterval(typingTimerRef.current);

    typingTimerRef.current = setInterval(() => {
      current += 1;
      setVisibleLines(current);
      if (current >= API_RESPONSE_LINES.length) {
        if (typingTimerRef.current) clearInterval(typingTimerRef.current);
        setIsTyping(false);
      }
    }, 220);
  };

  useEffect(() => {
    return () => {
      if (typingTimerRef.current) clearInterval(typingTimerRef.current);
    };
  }, []);

  // Card 3 State (Workflows & TS)
  const [workflowMode, setWorkflowMode] = useState<"typecheck" | "git">(
    "typecheck",
  );
  const [checkPhase, setCheckPhase] = useState<"idle" | "running" | "success">(
    "idle",
  );

  const handleRunTypecheck = () => {
    if (checkPhase === "running") return;
    setCheckPhase("running");
    setTimeout(() => {
      setCheckPhase("success");
      setTimeout(() => setCheckPhase("idle"), 2500);
    }, 550);
  };

  return (
    <section className="relative mx-auto w-full max-w-6xl px-3.5 sm:px-6 py-20 sm:py-28 border-t border-slate-200/70 dark:border-white/8">
      <div className="mx-auto max-w-2xl text-center space-y-3.5">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 text-pretty">
          What I build
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal text-pretty">
          Practical web development focused on performance, usability, and
          maintainability. Every layer is engineered with deliberate care and
          clean architecture.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
        <div
          className="relative flex flex-col justify-between rounded-3xl p-5 sm:p-7 transition-all duration-300 ease-out overflow-hidden
          backdrop-blur-2xl backdrop-saturate-150
          bg-white/55 border border-white/80 shadow-[0_8px_32px_0_rgba(15,23,42,0.05),inset_0_1px_1px_0_rgba(255,255,255,0.9)]
          hover:-translate-y-1 hover:border-slate-300/90 hover:shadow-[0_12px_40px_0_rgba(15,23,42,0.08)]
          dark:bg-slate-900/35 dark:border-white/9 dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.08)]
          dark:hover:-translate-y-1 dark:hover:border-white/20 dark:hover:bg-slate-900/45"
        >
          <div className="min-w-0 flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-700 dark:bg-teal-400/10 dark:text-teal-400">
                  <HugeiconsIcon
                    icon={Layers01Icon}
                    size={24}
                    strokeWidth={2}
                  />
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/70 px-2.5 py-1 text-[11px] font-mono text-slate-700 dark:border-white/8 dark:bg-white/4 dark:text-slate-300 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-600 dark:bg-teal-400" />
                  60 FPS UI
                </span>
              </div>

              <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                Frontend engineering
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-pretty sm:min-h-16">
                Building responsive, accessible interfaces with React, Next.js,
                and Tailwind CSS. Fast load times, smooth interactions, and
                layouts that look sharp on any screen.
              </p>
            </div>

            <div className="mt-5 h-55 flex flex-col rounded-2xl border border-slate-200/70 bg-slate-100/70 p-3 sm:p-3.5 dark:border-white/8 dark:bg-[#0c1017] overflow-hidden">
              <div className="flex items-center justify-between gap-1.5 border-b border-slate-200/70 dark:border-white/6 pb-2.5 min-w-0 shrink-0">
                <div className="flex items-center gap-1.5 min-w-0 truncate">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56] shrink-0" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e] shrink-0" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f] shrink-0" />
                  <span className="ml-1 text-[11px] font-mono text-slate-600 dark:text-slate-400 truncate">
                    Button.tsx
                  </span>
                </div>
                <div className="flex shrink-0 rounded-md bg-slate-200/70 p-0.5 dark:bg-white/6">
                  <button
                    onClick={() => setFrontendMode("jsx")}
                    className={`rounded px-2.5 py-0.5 text-[11px] font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                      frontendMode === "jsx"
                        ? "bg-white text-slate-950 shadow-xs dark:bg-slate-800 dark:text-white"
                        : "text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-200"
                    }`}
                  >
                    JSX
                  </button>
                  <button
                    onClick={() => setFrontendMode("render")}
                    className={`rounded px-2.5 py-0.5 text-[11px] font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                      frontendMode === "render"
                        ? "bg-white text-slate-950 shadow-xs dark:bg-slate-800 dark:text-white"
                        : "text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-200"
                    }`}
                  >
                    Render
                  </button>
                </div>
              </div>

              <div className="mt-2.5 flex-1 flex flex-col justify-center font-mono text-[11px] leading-relaxed overflow-hidden">
                {frontendMode === "jsx" ? (
                  <div className="space-y-1">
                    <div className="flex items-center justify-between pb-1 border-b border-slate-200/60 dark:border-white/6 text-slate-500 dark:text-slate-400 text-[11px]">
                      <span>components/Button.tsx</span>
                      <span className="text-teal-700 dark:text-teal-400 font-medium">
                        React 19
                      </span>
                    </div>

                    <div className="pt-0.5 space-y-0.5 text-[11px]">
                      <div className="truncate">
                        <span className="text-purple-700 dark:text-purple-300 font-medium">
                          export function
                        </span>{" "}
                        <span className="text-blue-700 dark:text-sky-300 font-semibold">
                          Button
                        </span>
                        (&#123; label &#125;: Props) &#123;
                      </div>
                      <div className="pl-3 truncate">
                        <span className="text-purple-700 dark:text-purple-300 font-medium">
                          const
                        </span>{" "}
                        [clicked, setClicked] ={" "}
                        <span className="text-blue-700 dark:text-sky-300">
                          useState
                        </span>
                        (false);
                      </div>
                      <div className="pl-3 truncate">
                        <span className="text-purple-700 dark:text-purple-300 font-medium">
                          return
                        </span>{" "}
                        (
                      </div>
                      <div className="pl-6 truncate text-slate-700 dark:text-slate-300">
                        &lt;
                        <span className="text-teal-700 dark:text-teal-400">
                          button
                        </span>{" "}
                        <span className="text-sky-700 dark:text-sky-300">
                          onClick
                        </span>
                        =&#123;() =&gt; setClicked(!clicked)&#125;
                      </div>
                      <div className="pl-6 truncate text-slate-700 dark:text-slate-300">
                        {"  "}&gt;&#123;clicked ? &quot;Clicked!&quot; :
                        label&#125;&lt;/
                        <span className="text-teal-700 dark:text-teal-400">
                          button
                        </span>
                        &gt;
                      </div>
                      <div className="pl-3 truncate text-slate-500 dark:text-slate-400">
                        ); &#125;
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full flex-1 flex flex-col items-center justify-center animate-in fade-in duration-200">
                    <button
                      onClick={() => setButtonClicked(!buttonClicked)}
                      className={`inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 active:scale-95 cursor-pointer shadow-xs ${
                        buttonClicked
                          ? "bg-teal-600 text-white hover:bg-teal-700 dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-400"
                          : "bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                      }`}
                      title="Click to toggle useState(clicked)"
                    >
                      {buttonClicked && (
                        <HugeiconsIcon icon={CheckIcon} size={15} />
                      )}
                      <span>{buttonClicked ? "Clicked!" : "Click me"}</span>
                    </button>

                    <div className="mt-2.5 text-center text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                      Click to test live useState re-render
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative flex flex-col justify-between rounded-3xl p-5 sm:p-7 transition-all duration-300 ease-out overflow-hidden
          backdrop-blur-2xl backdrop-saturate-150
          bg-white/55 border border-white/80 shadow-[0_8px_32px_0_rgba(15,23,42,0.05),inset_0_1px_1px_0_rgba(255,255,255,0.9)]
          hover:-translate-y-1 hover:border-slate-300/90 hover:shadow-[0_12px_40px_0_rgba(15,23,42,0.08)]
          dark:bg-slate-900/35 dark:border-white/9 dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.08)]
          dark:hover:-translate-y-1 dark:hover:border-white/20 dark:hover:bg-slate-900/45"
        >
          <div className="min-w-0 flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400">
                  <HugeiconsIcon
                    icon={Database01Icon}
                    size={24}
                    strokeWidth={2}
                  />
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/70 px-2.5 py-1 text-[11px] font-mono text-slate-700 dark:border-white/8 dark:bg-white/4 dark:text-slate-300 backdrop-blur-md transition-all">
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${isTyping ? "bg-amber-400 animate-pulse" : "bg-amber-600 dark:bg-amber-400"}`}
                  />
                  {isTyping ? "Streaming..." : `200 OK • ${latency}ms`}
                </span>
              </div>

              {/* Title & Narrative */}
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                Backend and APIs
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-pretty sm:min-h-16">
                Creating reliable backend services and REST APIs with Node.js,
                Next.js route handlers, and MongoDB. Structured data modeling,
                secure auth, and clear error handling.
              </p>
            </div>

            <div className="mt-5 h-55 flex flex-col rounded-2xl border border-slate-200/70 bg-slate-100/70 p-3 sm:p-3.5 dark:border-white/8 dark:bg-[#0c1017] overflow-hidden">
              <div className="flex items-center justify-between gap-1.5 border-b border-slate-200/70 dark:border-white/6 pb-2.5 min-w-0 shrink-0">
                <div className="flex items-center gap-1.5 min-w-0 truncate">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56] shrink-0" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e] shrink-0" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f] shrink-0" />
                  <span className="ml-1 text-[11px] font-mono text-slate-600 dark:text-slate-400 truncate">
                    api.inspector
                  </span>
                </div>
                <div className="flex shrink-0 rounded-md bg-slate-200/70 p-0.5 dark:bg-white/6">
                  <button
                    onClick={() => setBackendMode("payload")}
                    className={`rounded px-2 py-0.5 text-[11px] font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                      backendMode === "payload"
                        ? "bg-white text-slate-950 shadow-xs dark:bg-slate-800 dark:text-white"
                        : "text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-200"
                    }`}
                  >
                    Payload
                  </button>
                  <button
                    onClick={() => setBackendMode("schema")}
                    className={`rounded px-2 py-0.5 text-[11px] font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                      backendMode === "schema"
                        ? "bg-white text-slate-950 shadow-xs dark:bg-slate-800 dark:text-white"
                        : "text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-200"
                    }`}
                  >
                    Schema
                  </button>
                </div>
              </div>

              <div className="mt-2.5 flex-1 flex flex-col justify-start font-mono text-[11px] leading-relaxed overflow-hidden">
                {backendMode === "payload" ? (
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-1 pb-1 border-b border-slate-200/60 dark:border-white/6 min-w-0">
                      <div className="flex items-center gap-1.5 min-w-0 truncate">
                        <span className="rounded bg-teal-500/15 px-1.5 py-0.2 text-[10px] sm:text-[11px] font-bold text-teal-800 dark:text-teal-300 shrink-0">
                          GET
                        </span>
                        <span className="text-slate-700 dark:text-slate-300 text-[11px] truncate">
                          /api/projects
                        </span>
                      </div>
                      <button
                        onClick={startTypewriter}
                        disabled={isTyping}
                        className={`rounded border border-amber-600/30 bg-amber-500/10 px-2 py-0.2 text-[11px] font-mono text-amber-800 dark:text-amber-300 hover:bg-amber-500/20 transition-all duration-150 active:scale-95 cursor-pointer shrink-0 select-none ${
                          isTyping ? "opacity-60 cursor-wait" : ""
                        }`}
                      >
                        {isTyping ? "Streaming..." : "Run"}
                      </button>
                    </div>

                    <div className="pt-0.5 space-y-0.5 text-[11px]">
                      {visibleLines >= 1 && (
                        <div className="text-slate-500 dark:text-slate-400 animate-in fade-in duration-150">
                          &#123;
                        </div>
                      )}
                      {visibleLines >= 2 && (
                        <div className="pl-3 animate-in fade-in duration-150 truncate">
                          <span className="text-blue-700 dark:text-sky-300">
                            &quot;status&quot;
                          </span>
                          :{" "}
                          <span className="text-emerald-700 dark:text-emerald-400 font-semibold">
                            200
                          </span>
                          ,
                        </div>
                      )}
                      {visibleLines >= 3 && (
                        <div className="pl-3 animate-in fade-in duration-150 truncate">
                          <span className="text-blue-700 dark:text-sky-300">
                            &quot;db&quot;
                          </span>
                          :{" "}
                          <span className="text-amber-800 dark:text-amber-300">
                            &quot;MongoDB&quot;
                          </span>
                          ,
                        </div>
                      )}
                      {visibleLines >= 4 && (
                        <div className="pl-3 animate-in fade-in duration-150 truncate">
                          <span className="text-blue-700 dark:text-sky-300">
                            &quot;cached&quot;
                          </span>
                          :{" "}
                          <span className="text-teal-700 dark:text-teal-400 font-medium">
                            true
                          </span>
                          ,
                        </div>
                      )}
                      {visibleLines >= 5 && (
                        <div className="pl-3 animate-in fade-in duration-150 truncate">
                          <span className="text-blue-700 dark:text-sky-300">
                            &quot;latency&quot;
                          </span>
                          :{" "}
                          <span className="text-emerald-700 dark:text-emerald-400">
                            &quot;{latency}ms&quot;
                          </span>
                        </div>
                      )}
                      {visibleLines >= 6 && (
                        <div className="text-slate-500 dark:text-slate-400 flex items-center animate-in fade-in duration-150">
                          <span>&#125;</span>
                          <span className="inline-block w-1.5 h-3 bg-amber-500/70 ml-1.5 animate-pulse" />
                        </div>
                      )}

                      {isTyping && visibleLines < 6 && (
                        <div className="pl-3">
                          <span className="inline-block w-1.5 h-3 bg-teal-500 animate-pulse" />
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-1 animate-in fade-in duration-200">
                    <div className="pb-1 border-b border-slate-200/60 dark:border-white/6 text-slate-500 dark:text-slate-400 text-[11px] truncate">
                      models/Project.schema.ts
                    </div>
                    <div className="pt-0.5 space-y-0.5 text-[11px]">
                      <div className="text-purple-700 dark:text-purple-300 font-medium truncate">
                        new Schema(&#123;
                      </div>
                      <div className="pl-3 text-slate-700 dark:text-slate-300 truncate">
                        title:{" "}
                        <span className="text-amber-800 dark:text-amber-300">
                          String
                        </span>
                        ,
                      </div>
                      <div className="pl-3 text-slate-700 dark:text-slate-300 truncate">
                        published:{" "}
                        <span className="text-teal-700 dark:text-teal-400">
                          Boolean
                        </span>
                      </div>
                      <div className="text-purple-700 dark:text-purple-300 font-medium flex items-center">
                        <span>&#125;);</span>
                        <span className="inline-block w-1.5 h-3 bg-purple-500/70 ml-1.5 animate-pulse" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative flex flex-col justify-between rounded-3xl p-5 sm:p-7 transition-all duration-300 ease-out overflow-hidden
          backdrop-blur-2xl backdrop-saturate-150
          bg-white/55 border border-white/80 shadow-[0_8px_32px_0_rgba(15,23,42,0.05),inset_0_1px_1px_0_rgba(255,255,255,0.9)]
          hover:-translate-y-1 hover:border-slate-300/90 hover:shadow-[0_12px_40px_0_rgba(15,23,42,0.08)]
          dark:bg-slate-900/35 dark:border-white/9 dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.08)]
          dark:hover:-translate-y-1 dark:hover:border-white/20 dark:hover:bg-slate-900/45"
        >
          <div className="min-w-0 flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
                  <HugeiconsIcon
                    icon={GitBranchIcon}
                    size={24}
                    strokeWidth={2}
                  />
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/70 px-2.5 py-1 text-[11px] font-mono text-slate-700 dark:border-white/8 dark:bg-white/4 dark:text-slate-300 backdrop-blur-md transition-all">
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${checkPhase === "running" ? "bg-blue-400 animate-pulse" : "bg-blue-600 dark:bg-blue-400"}`}
                  />
                  {checkPhase === "running" ? "Checking AST..." : "0 ERRORS"}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                Clean workflows
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-pretty sm:min-h-16">
                Version control with Git, modular component design, and
                end-to-end type safety with TypeScript to keep codebases
                readable, resilient, and easy to scale.
              </p>
            </div>

            <div className="mt-5 h-55 flex flex-col rounded-2xl border border-slate-200/70 bg-slate-100/70 p-3 sm:p-3.5 dark:border-white/8 dark:bg-[#0c1017] overflow-hidden">
              <div className="flex items-center justify-between gap-1.5 border-b border-slate-200/70 dark:border-white/6 pb-2.5 min-w-0 shrink-0">
                <div className="flex items-center gap-1.5 min-w-0 truncate">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56] shrink-0" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e] shrink-0" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f] shrink-0" />
                  <span className="ml-1 text-[11px] font-mono text-slate-600 dark:text-slate-400 truncate">
                    dev.terminal
                  </span>
                </div>
                <div className="flex shrink-0 rounded-md bg-slate-200/70 p-0.5 dark:bg-white/6">
                  <button
                    onClick={() => setWorkflowMode("typecheck")}
                    className={`rounded px-2 py-0.5 text-[11px] font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                      workflowMode === "typecheck"
                        ? "bg-white text-slate-950 shadow-xs dark:bg-slate-800 dark:text-white"
                        : "text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-200"
                    }`}
                  >
                    Types
                  </button>
                  <button
                    onClick={() => setWorkflowMode("git")}
                    className={`rounded px-2 py-0.5 text-[11px] font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                      workflowMode === "git"
                        ? "bg-white text-slate-950 shadow-xs dark:bg-slate-800 dark:text-white"
                        : "text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-200"
                    }`}
                  >
                    Git
                  </button>
                </div>
              </div>

              <div className="mt-2.5 flex-1 flex flex-col justify-start font-mono text-[11px] leading-relaxed overflow-hidden">
                {workflowMode === "typecheck" ? (
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-1 pb-1 border-b border-slate-200/60 dark:border-white/6 min-w-0">
                      <div className="flex items-center gap-1.5 min-w-0 truncate text-slate-700 dark:text-slate-300">
                        <span className="text-teal-700 dark:text-teal-400 font-bold shrink-0">
                          $
                        </span>
                        <span className="truncate">tsc --noEmit</span>
                      </div>
                      <button
                        onClick={handleRunTypecheck}
                        className={`rounded border border-blue-600/30 bg-blue-500/10 px-2 py-0.2 text-[11px] font-mono text-blue-800 dark:text-blue-300 hover:bg-blue-500/20 transition-all duration-150 active:scale-95 cursor-pointer shrink-0 select-none ${
                          checkPhase === "running" ? "opacity-60 scale-95" : ""
                        }`}
                      >
                        {checkPhase === "running" ? "Checking..." : "Run"}
                      </button>
                    </div>

                    <div className="pt-0.5 space-y-0.5 transition-all duration-300">
                      {checkPhase === "running" ? (
                        <div className="text-slate-500 dark:text-slate-400 flex items-center gap-2 animate-in fade-in duration-150 truncate">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-ping shrink-0" />
                          <span className="truncate">Checking 42 files...</span>
                        </div>
                      ) : (
                        <div className="space-y-0.5 animate-in fade-in duration-200">
                          <div className="text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5 font-medium truncate">
                            <span className="shrink-0">✓</span>
                            <span className="truncate">42 files passed</span>
                          </div>
                          <div className="text-slate-600 dark:text-slate-400 text-[11px] flex items-center truncate">
                            <span className="truncate">0 errors • strict</span>
                            <span className="inline-block w-1.5 h-3 bg-teal-500/70 ml-1.5 animate-pulse shrink-0" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-1 animate-in fade-in duration-200">
                    <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 pb-1 border-b border-slate-200/60 dark:border-white/6 truncate">
                      <span className="text-teal-700 dark:text-teal-400 font-bold shrink-0">
                        $
                      </span>
                      <span className="truncate">git status -s</span>
                    </div>
                    <div className="pt-0.5 space-y-0.5">
                      <div className="flex items-center gap-1.5 text-blue-700 dark:text-blue-300 font-medium truncate">
                        <HugeiconsIcon
                          icon={Activity01Icon}
                          size={14}
                          className="animate-spin duration-1000 shrink-0"
                        />
                        <span className="truncate">## main (synced)</span>
                      </div>
                      <div className="text-emerald-700 dark:text-emerald-400 text-[11px] flex items-center truncate">
                        <span className="truncate">working tree clean</span>
                        <span className="inline-block w-1.5 h-3 bg-blue-500/70 ml-1.5 animate-pulse shrink-0" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
