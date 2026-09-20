"use client";

import {
  Activity,
  ArrowUpRight,
  ChevronDown,
  Clock3,
  FileText,
  FolderKanban,
  MessageSquare,
  Plus,
  TrendingUp,
} from "lucide-react";

const projects = [
  {
    name: "End to End Encryption",
    type: "WebSocket app",
    status: "Live",
    updated: "2 hours ago",
    color: "bg-cyan-400",
  },
  {
    name: "Classora",
    type: "Education platform",
    status: "Live",
    updated: "Yesterday",
    color: "bg-emerald-400",
  },
  {
    name: "Digital Attendance",
    type: "Full-stack app",
    status: "Draft",
    updated: "3 days ago",
    color: "bg-amber-400",
  },
];

const metrics = [
  {
    label: "Published projects",
    value: "12",
    icon: FolderKanban,
    tone: "text-cyan-600 dark:text-cyan-300",
  },
  {
    label: "Drafts in progress",
    value: "03",
    icon: Clock3,
    tone: "text-amber-600 dark:text-amber-300",
  },
  {
    label: "Published articles",
    value: "08",
    icon: FileText,
    tone: "text-violet-600 dark:text-violet-300",
  },
  {
    label: "Unread messages",
    value: "04",
    icon: MessageSquare,
    tone: "text-rose-600 dark:text-rose-300",
  },
];

export default function AdminDashboardPage() {
  return (
    <>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => {
          const MetricIcon = metric.icon;
          return (
            <div
              key={metric.label}
              className="rounded-3xl border border-white/60 bg-white/45 p-5 shadow-[0_14px_40px_-28px_rgba(0,0,0,0.35)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-2xl bg-black/5 dark:bg-white/10 ${metric.tone}`}
                >
                  <MetricIcon size={19} />
                </span>
              </div>
              <p className="mt-5 text-sm text-black/50 dark:text-white/50">
                {metric.label}
              </p>
              <div className="mt-1 flex items-end justify-between gap-2">
                <p className="text-2xl font-bold">{metric.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
        <div className="rounded-3xl border border-white/60 bg-white/45 p-5 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6 dark:border-white/10 dark:bg-white/5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold">Publishing activity</p>
              <p className="mt-1 text-xs text-black/45 dark:text-white/45">
                Projects and articles you have shipped this year
              </p>
            </div>
            <button
              type="button"
              className="rounded-xl border border-white/60 bg-white/45 px-3 py-2 text-xs font-medium text-black/60 dark:border-white/10 dark:bg-white/5 dark:text-white/60"
            >
              Last 30 days <ChevronDown size={13} className="ml-1 inline" />
            </button>
          </div>
          <div className="mt-8 flex h-48 items-end gap-2 sm:gap-4">
            <div className="flex h-full w-8 flex-col justify-end gap-2 text-[10px] text-black/35 dark:text-white/35">
              <span>3k</span>
              <span>2k</span>
              <span>1k</span>
              <span>0</span>
            </div>
            <div className="flex h-full flex-1 items-end justify-between gap-1 border-b border-black/10 pb-0 dark:border-white/10">
              {[34, 48, 42, 62, 55, 72, 64, 84, 76, 92, 80, 100].map(
                (height, index) => (
                  <div
                    key={index}
                    className="group relative flex h-full flex-1 items-end"
                  >
                    <div
                      className="w-full rounded-t-lg bg-linear-to-t from-cyan-500 to-emerald-300 opacity-75 transition-opacity group-hover:opacity-100"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="mt-4 flex items-center gap-4 text-xs text-black/45 dark:text-white/45">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-cyan-400" /> Published
              items
            </span>
            <span className="ml-auto inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-300">
              <TrendingUp size={14} /> 11 shipped this year
            </span>
          </div>
        </div>

        <div className="rounded-3xl border border-white/60 bg-white/45 p-5 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6 dark:border-white/10 dark:bg-white/5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold">Quick actions</p>
              <p className="mt-1 text-xs text-black/45 dark:text-white/45">
                Keep your portfolio moving
              </p>
            </div>
            <Activity size={19} className="text-emerald-500" />
          </div>
          <div className="mt-6 space-y-3">
            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-2xl border border-white/60 bg-white/40 p-3 text-left transition-colors hover:bg-white/70 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-600 dark:text-cyan-300">
                <Plus size={17} />
              </span>
              <span>
                <span className="block text-sm font-semibold">Add project</span>
                <span className="block text-xs text-black/45 dark:text-white/45">
                  Showcase new work
                </span>
              </span>
              <ArrowUpRight
                size={15}
                className="ml-auto text-black/35 dark:text-white/35"
              />
            </button>
            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-2xl border border-white/60 bg-white/40 p-3 text-left transition-colors hover:bg-white/70 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-400/15 text-violet-600 dark:text-violet-300">
                <FileText size={17} />
              </span>
              <span>
                <span className="block text-sm font-semibold">
                  Write an article
                </span>
                <span className="block text-xs text-black/45 dark:text-white/45">
                  Share what you learned
                </span>
              </span>
              <ArrowUpRight
                size={15}
                className="ml-auto text-black/35 dark:text-white/35"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-3xl border border-white/60 bg-white/45 p-5 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6 dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold">Recent projects</p>
            <p className="mt-1 text-xs text-black/45 dark:text-white/45">
              Your latest portfolio updates
            </p>
          </div>
          <button
            type="button"
            className="text-xs font-semibold text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
          >
            View all <ArrowUpRight size={14} className="ml-1 inline" />
          </button>
        </div>
        <div className="mt-5 divide-y divide-black/10 dark:divide-white/10">
          {projects.map((project) => (
            <div
              key={project.name}
              className="flex items-center gap-3 py-4 first:pt-0 last:pb-0"
            >
              <span
                className={`h-2.5 w-2.5 shrink-0 rounded-full ${project.color}`}
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">{project.name}</p>
                <p className="mt-1 text-xs text-black/45 dark:text-white/45">
                  {project.type}
                </p>
              </div>
              <div className="hidden items-center gap-1.5 text-xs text-black/45 sm:flex dark:text-white/45">
                <Clock3 size={14} /> {project.updated}
              </div>
              <span
                className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${project.status === "Live" ? "bg-emerald-400/15 text-emerald-700 dark:text-emerald-300" : "bg-amber-400/15 text-amber-700 dark:text-amber-300"}`}
              >
                {project.status}
              </span>
              <ArrowUpRight
                size={15}
                className="text-black/30 dark:text-white/30"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
