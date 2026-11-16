"use client";

import { useState, useRef } from "react";
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
  SiNpm,
  SiPnpm,
} from "react-icons/si";
import { TbApi, TbBrandCss3 } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import type { IconType } from "react-icons";

type CategoryId = "all" | "languages" | "styling" | "databases" | "tooling";

interface TechItem {
  id: string;
  name: string;
  category: "languages" | "styling" | "databases" | "tooling";
  badge: string;
  experience: string;
  spec: string;
  role: string;
  file: string;
  snippet: string;
  tags: string[];
  icon: IconType;
  iconColor: string;
}

const CATEGORIES: { id: CategoryId; label: string }[] = [
  { id: "all", label: "All Stack" },
  { id: "languages", label: "Languages" },
  { id: "styling", label: "Styling & UI" },
  { id: "databases", label: "Databases & APIs" },
  { id: "tooling", label: "Tooling" },
];

const TECH_ITEMS: TechItem[] = [
  // Languages & Frameworks
  {
    id: "typescript",
    name: "TypeScript",
    category: "languages",
    badge: "Primary Language",
    experience: "Daily driver",
    spec: "Strict End-to-End Typing",
    role: "Enforces strict type safety across React components, Next.js route handlers, and database schemas with zero any.",
    file: "tsconfig.json",
    snippet: `{\n  "compilerOptions": {\n    "target": "ESNext",\n    "strict": true,\n    "noImplicitAny": true,\n    "isolatedModules": true\n  }\n}`,
    tags: ["Strict Mode", "Generics", "Zero Any", "Type Inference"],
    icon: SiTypescript,
    iconColor: "text-[#3178C6]",
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "languages",
    badge: "Framework",
    experience: "Core stack",
    spec: "App Router & SSR",
    role: "Fullstack architecture leveraging React Server Components, streaming SSR, parallel routes, and low-latency route handlers.",
    file: "app/api/projects/route.ts",
    snippet: `export async function GET(req: Request) {\n  const data = await getCachedProjects();\n  return Response.json(data);\n}`,
    tags: ["App Router", "RSC", "Streaming SSR", "Server Actions"],
    icon: SiNextdotjs,
    iconColor: "text-slate-900 dark:text-white",
  },
  {
    id: "react",
    name: "React",
    category: "languages",
    badge: "UI Library",
    experience: "Core stack",
    spec: "React 19 Architecture",
    role: "Modern component hierarchies, custom hooks, optimistic UI patterns, and concurrent state management.",
    file: "components/Card.tsx",
    snippet: `export function Card({ title, badge }: Props) {\n  const [saved, setSaved] = useState(false);\n  return <button onClick={() => setSaved(!saved)} />;\n}`,
    tags: ["React 19", "Custom Hooks", "Optimistic UI", "Compound Pattern"],
    icon: SiReact,
    iconColor: "text-[#61DAFB]",
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "languages",
    badge: "Backend Runtime",
    experience: "Production",
    spec: "V8 Event Loop",
    role: "Asynchronous backend services, microservices, REST endpoints, and automated background script orchestration.",
    file: "server/runtime.ts",
    snippet: `import { createServer } from "node:http";\n\n// V8 non-blocking event-driven runtime\nexport const runtime = "nodejs";`,
    tags: ["V8 Engine", "Async I/O", "Microservices", "Event Loop"],
    icon: SiNodedotjs,
    iconColor: "text-[#5FA04E]",
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "languages",
    badge: "Core Language",
    experience: "Foundation",
    spec: "ESNext Standards",
    role: "Modern ECMAScript logic, async/await concurrency primitives, web worker integration, and cross-browser execution.",
    file: "lib/concurrency.js",
    snippet: `export const raceWithTimeout = (promise, ms) =>\n  Promise.race([promise, timeoutReject(ms)]);`,
    tags: ["ES2024", "Async/Await", "Promises", "DOM APIs"],
    icon: SiJavascript,
    iconColor: "text-[#F7DF1E]",
  },

  // Styling & UI
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    category: "styling",
    badge: "Design System",
    experience: "Primary styling",
    spec: "Tailwind v4 Engine",
    role: "Utility-first design tokens, container queries, fluid typography ramps, and custom dark mode variant stepping.",
    file: "app/globals.css",
    snippet: `@theme {\n  --font-sans: var(--font-instrument);\n  --color-brand: oklch(0.65 0.18 178);\n}`,
    tags: ["Tailwind v4", "Fluid Typography", "Dark Mode", "Zero Runtime"],
    icon: SiTailwindcss,
    iconColor: "text-[#06B6D4]",
  },
  {
    id: "html5",
    name: "HTML5",
    category: "styling",
    badge: "Markup Standard",
    experience: "Standard",
    spec: "Semantic Web",
    role: "Accessible landmarks, semantic document hierarchy, WCAG AA compliance, and clean DOM trees.",
    file: "app/layout.tsx",
    snippet: `<main id="main-content" role="main" aria-label="Portfolio">\n  <section aria-labelledby="section-title">\n  </section>\n</main>`,
    tags: ["Semantic Tags", "WCAG AA", "ARIA Landmarks", "Clean DOM"],
    icon: SiHtml5,
    iconColor: "text-[#E34F26]",
  },
  {
    id: "css",
    name: "CSS Custom Properties",
    category: "styling",
    badge: "Dynamic Theming",
    experience: "Modern CSS",
    spec: "CSS Variables",
    role: "Dynamic runtime design tokens, fluid clamp calculations, smooth transitions, and multi-layered glass surfaces.",
    file: "styles/tokens.css",
    snippet: `:root {\n  --surface-glass: rgba(255, 255, 255, 0.65);\n  --elevation-shadow: 0 8px 32px rgba(15, 23, 42, 0.05);\n}`,
    tags: ["CSS Variables", "Liquid Glass", "Fluid Scales", "Theming"],
    icon: TbBrandCss3,
    iconColor: "text-[#1572B6]",
  },

  // Databases & State
  {
    id: "mongodb",
    name: "MongoDB",
    category: "databases",
    badge: "Database",
    experience: "Primary DB",
    spec: "NoSQL Document Store",
    role: "Document collections, compound indexing strategies, aggregation pipelines, and high availability clusters.",
    file: "lib/mongodb.ts",
    snippet: `const client = await MongoClient.connect(MONGODB_URI, {\n  maxPoolSize: 10,\n  serverSelectionTimeoutMS: 5000,\n});`,
    tags: ["NoSQL", "Aggregation", "Indexes", "Atlas Cluster"],
    icon: SiMongodb,
    iconColor: "text-[#47A248]",
  },
  {
    id: "mongoose",
    name: "Mongoose",
    category: "databases",
    badge: "ODM Layer",
    experience: "Data modeling",
    spec: "Schema Modeling",
    role: "Strict schema constraints, lifecycle middleware hooks, typed models, and automated data sanitization.",
    file: "models/Project.ts",
    snippet: `const schema = new Schema({\n  title: { type: String, required: true, trim: true },\n  slug: { type: String, unique: true, index: true },\n});`,
    tags: ["ODM Layer", "Typed Schemas", "Validators", "Middleware"],
    icon: SiMongoose,
    iconColor: "text-[#E53E3E]",
  },
  {
    id: "rest-api",
    name: "REST APIs",
    category: "databases",
    badge: "API Architecture",
    experience: "API design",
    spec: "JSON Contracts",
    role: "Predictable resource routing, HTTP status code hygiene, payload validation, and robust error payloads.",
    file: "contracts/api.ts",
    snippet: `interface ApiResponse<T> {\n  status: 200 | 201 | 400 | 404 | 500;\n  data: T;\n  meta: { latency: string };\n}`,
    tags: ["RESTful", "JSON Contracts", "HTTP Hygiene", "Status Codes"],
    icon: TbApi,
    iconColor: "text-teal-600 dark:text-teal-400",
  },
  {
    id: "prisma",
    name: "Prisma",
    category: "databases",
    badge: "ORM / Client",
    experience: "Type-safe DB",
    spec: "Type-safe Client",
    role: "Declarative schema modeling, automatic database migrations, and generated type-safe query clients.",
    file: "prisma/schema.prisma",
    snippet: `model Project {\n  id        String   @id @default(cuid())\n  slug      String   @unique\n  published Boolean  @default(false)\n}`,
    tags: ["Type-safe ORM", "Migrations", "Client Gen", "Relations"],
    icon: SiPrisma,
    iconColor: "text-[#2D3748] dark:text-[#818CF8]",
  },

  // Tooling & Workflow
  {
    id: "git",
    name: "Git",
    category: "tooling",
    badge: "Version Control",
    experience: "Daily workflow",
    spec: "Branching & History",
    role: "Atomic commits, interactive rebases, cherry-picks, and clean collaborative Git flow without merge bloat.",
    file: ".gitconfig",
    snippet: `git commit -m "feat(api): add typed aggregation pipeline"\ngit status -s # atomic branch hygiene`,
    tags: ["Atomic Commits", "Rebase", "Branch Hygiene", "Clean History"],
    icon: SiGit,
    iconColor: "text-[#F05032]",
  },
  {
    id: "github",
    name: "GitHub",
    category: "tooling",
    badge: "Collaboration",
    experience: "Code hosting",
    spec: "PRs & Code Review",
    role: "Pull requests with thoughtful descriptions, structured code reviews, issue tracking, and CI/CD automation.",
    file: ".github/workflows/ci.yml",
    snippet: `name: CI Check\non: [pull_request]\njobs:\n  verify:\n    runs-on: ubuntu-latest\n    steps: [{ run: npm test }]`,
    tags: ["Pull Requests", "Code Review", "CI Actions", "Repo Health"],
    icon: SiGithub,
    iconColor: "text-slate-900 dark:text-slate-100",
  },
  {
    id: "vscode",
    name: "VS Code",
    category: "tooling",
    badge: "Primary IDE",
    experience: "Primary IDE",
    spec: "macOS Environment",
    role: "Tailored developer setup with strict TypeScript language tooling, customized keybindings, and automated formatting.",
    file: ".vscode/settings.json",
    snippet: `{\n  "editor.formatOnSave": true,\n  "typescript.tsdk": "node_modules/typescript/lib",\n  "editor.defaultFormatter": "esbenp.prettier-vscode"\n}`,
    tags: ["Language Server", "ESLint Integration", "Prettier", "macOS Setup"],
    icon: VscVscode,
    iconColor: "text-[#007ACC]",
  },
  {
    id: "pnpm",
    name: "pnpm",
    category: "tooling",
    badge: "Package Manager",
    experience: "Preferred PM",
    spec: "Fast & Strict",
    role: "Content-addressable storage, disk efficiency, reproducible lockfiles, and strict dependency tree isolation.",
    file: "pnpm-workspace.yaml",
    snippet: `packages:\n  - "apps/*"\n  - "packages/*"\n# Content-addressable strict isolation`,
    tags: ["Strict Tree", "Disk Efficient", "Fast Installs", "Lockfile"],
    icon: SiPnpm,
    iconColor: "text-[#F69220]",
  },
  {
    id: "npm",
    name: "npm",
    category: "tooling",
    badge: "Package Registry",
    experience: "Standard",
    spec: "Standard Tooling",
    role: "Standard ecosystem package publishing, workspace script orchestration, semantic versioning, and audits.",
    file: "package.json",
    snippet: `{\n  "scripts": {\n    "dev": "next dev",\n    "build": "next build",\n    "typecheck": "tsc --noEmit"\n  }\n}`,
    tags: ["Semantic Version", "Script Runner", "Audits", "Registry"],
    icon: SiNpm,
    iconColor: "text-[#CB3837]",
  },
];

export function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [selectedTechId, setSelectedTechId] = useState<string>("typescript");
  const inspectorRef = useRef<HTMLDivElement>(null);

  const handleSelectTech = (id: string) => {
    setSelectedTechId(id);
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      inspectorRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const filteredItems =
    activeCategory === "all"
      ? TECH_ITEMS
      : TECH_ITEMS.filter((item) => item.category === activeCategory);

  const selectedTech =
    TECH_ITEMS.find((item) => item.id === selectedTechId) || TECH_ITEMS[0];
  const SelectedIcon = selectedTech.icon;

  return (
    <section className="relative mx-auto w-full max-w-6xl px-3.5 sm:px-6 py-10 sm:py-18 border-t border-slate-200/70 dark:border-white/8">
      <div className="mx-auto max-w-2xl text-center space-y-3.5">
        <h2 className="text-3xl capitalize sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 text-pretty">
          Technologies I use
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal text-pretty">
          The tools, runtime engines, and libraries I reach for to build
          production applications. Click any technology to inspect its
          architecture role and config.
        </p>
      </div>

      <div className="mt-10 -mx-3.5 sm:mx-0 px-3.5 sm:px-0 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          const count =
            cat.id === "all"
              ? TECH_ITEMS.length
              : TECH_ITEMS.filter((item) => item.category === cat.id).length;

          return (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                if (cat.id !== "all") {
                  const firstOfCategory = TECH_ITEMS.find(
                    (item) => item.category === cat.id,
                  );
                  if (firstOfCategory) setSelectedTechId(firstOfCategory.id);
                }
              }}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer shrink-0 whitespace-nowrap ${
                isActive
                  ? "bg-slate-900 text-white shadow-xs dark:bg-white dark:text-slate-950"
                  : "bg-slate-100/80 text-slate-600 hover:bg-slate-200/70 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`rounded-full px-1.5 py-0.2 text-[11px] font-mono font-medium ${
                  isActive
                    ? "bg-white/20 text-white dark:bg-black/15 dark:text-slate-900"
                    : "bg-slate-200/80 text-slate-600 dark:bg-white/10 dark:text-slate-300"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 items-start">
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5">
          {filteredItems.map((tech) => {
            const IconComponent = tech.icon;
            const isSelected = selectedTech.id === tech.id;

            return (
              <button
                key={tech.id}
                onClick={() => handleSelectTech(tech.id)}
                className={`group relative flex flex-col justify-between text-left p-4 rounded-2xl transition-all duration-200 cursor-pointer select-none ${
                  isSelected
                    ? "bg-white dark:bg-slate-800/90 border-2 border-teal-600 dark:border-teal-400 shadow-[0_8px_24px_rgba(15,23,42,0.08)] -translate-y-1"
                    : "bg-white/60 dark:bg-slate-900/40 border border-slate-200/80 dark:border-white/8 hover:bg-white hover:border-slate-300 dark:hover:bg-slate-900/70 dark:hover:border-white/20 hover:-translate-y-0.5"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105 shrink-0 ${
                        isSelected
                          ? "bg-teal-500/15 border border-teal-600/30"
                          : "bg-slate-100/90 dark:bg-white/6 border border-slate-200/70 dark:border-white/8"
                      }`}
                    >
                      <IconComponent size={20} className={tech.iconColor} />
                    </div>

                    <div className="flex items-center gap-1.5">
                      {isSelected && (
                        <span className="sm:hidden text-[10px] font-mono text-teal-800 dark:text-teal-300 font-medium">
                          Active ↓
                        </span>
                      )}
                      <span
                        className={`h-1.5 w-1.5 rounded-full transition-all ${
                          isSelected
                            ? "bg-teal-600 dark:bg-teal-400 scale-125"
                            : "bg-slate-300 dark:bg-slate-600 group-hover:bg-slate-400"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="mt-3.5 font-semibold text-sm tracking-tight text-slate-900 dark:text-slate-100 truncate">
                    {tech.name}
                  </div>
                  <div className="mt-0.5 text-[11px] font-mono text-slate-600 dark:text-slate-400 truncate">
                    {tech.badge}
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-200/60 dark:border-white/6 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-600 dark:text-slate-400 capitalize truncate">
                    {tech.category}
                  </span>
                  <span
                    className={`font-medium truncate ${
                      isSelected
                        ? "text-teal-800 dark:text-teal-300"
                        : "text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    {tech.experience}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div
          ref={inspectorRef}
          className="lg:col-span-5 lg:sticky lg:top-24 scroll-mt-24"
        >
          <div className="rounded-3xl border border-slate-200/80 bg-white/70 p-5 sm:p-6 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_32px_0_rgba(15,23,42,0.06)] dark:border-white/9 dark:bg-slate-900/50">
            <div className="flex items-center justify-between pb-3.5 border-b border-slate-200/70 dark:border-white/8 min-w-0">
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              </div>

              <div className="text-[11px] font-mono text-slate-600 dark:text-slate-400 truncate px-2">
                inspector://{selectedTech.id}
              </div>

              <span className="inline-flex items-center gap-1 rounded-full border border-teal-600/30 bg-teal-500/10 px-2 py-0.5 text-[11px] font-mono font-medium text-teal-800 dark:text-teal-300 shrink-0">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-600 dark:bg-teal-400" />
                Live
              </span>
            </div>

            <div className="mt-5 space-y-4 animate-in fade-in duration-200">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100/90 dark:bg-white/6 border border-slate-200/70 dark:border-white/8 shrink-0 shadow-xs">
                    <SelectedIcon
                      size={24}
                      className={selectedTech.iconColor}
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 truncate">
                      {selectedTech.name}
                    </h3>
                    <div className="text-[11px] font-mono text-teal-800 dark:text-teal-300 font-medium truncate">
                      {selectedTech.spec}
                    </div>
                  </div>
                </div>

                <span className="rounded-md border border-slate-200/80 bg-white/80 dark:border-white/8 dark:bg-white/4 px-2.5 py-1 font-mono text-[11px] font-medium text-slate-700 dark:text-slate-300 shrink-0">
                  {selectedTech.badge}
                </span>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-pretty">
                {selectedTech.role}
              </p>

              <div className="rounded-xl bg-slate-900 dark:bg-[#0c1017] p-3.5 text-slate-100 overflow-hidden font-mono text-[11px] leading-relaxed">
                <div className="flex items-center justify-between pb-2 border-b border-white/8 text-slate-400 text-[11px]">
                  <span>{selectedTech.file}</span>
                  <span className="text-teal-400 font-medium">Config</span>
                </div>
                <pre className="mt-2 text-[11px] font-mono overflow-x-auto text-slate-300 whitespace-pre scrollbar-none">
                  {selectedTech.snippet}
                </pre>
              </div>

              <div className="pt-1">
                <div className="text-[11px] font-mono text-slate-600 dark:text-slate-400 mb-2 font-medium">
                  Architecture Capabilities:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedTech.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-slate-200/80 bg-slate-100/70 px-2 py-0.5 text-[11px] font-mono text-slate-700 dark:border-white/8 dark:bg-white/4 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
