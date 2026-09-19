"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  Bell,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  FileText,
  FolderKanban,
  LayoutDashboard,
  Menu,
  MessageSquare,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  TrendingUp,
  X,
} from "lucide-react";

const navigation = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "Projects", icon: FolderKanban },
  { label: "Posts", icon: FileText },
  { label: "Messages", icon: MessageSquare },
];

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
    change: "+3 this month",
    icon: FolderKanban,
    tone: "text-cyan-600 dark:text-cyan-300",
  },
  {
    label: "Published articles",
    value: "08",
    change: "+2 this month",
    icon: FileText,
    tone: "text-violet-600 dark:text-violet-300",
  },
  {
    label: "Profile visits",
    value: "2,847",
    change: "+18.4% this month",
    icon: TrendingUp,
    tone: "text-emerald-600 dark:text-emerald-300",
  },
  {
    label: "Unread messages",
    value: "04",
    change: "Needs attention",
    icon: MessageSquare,
    tone: "text-amber-600 dark:text-amber-300",
  },
];

export default function AdminDashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("Overview");
  const [notice, setNotice] = useState("");

  const showNotice = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2200);
  };

  return (
    <main className="min-h-dvh bg-transparent text-black dark:text-white">
      <div className="mx-auto flex min-h-dvh max-w-[1600px]">
        {isSidebarOpen && (
          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
          />
        )}

        <aside
          className={`fixed inset-y-0 left-0 z-50 flex flex-col border-r border-white/50 bg-white/75 p-5 backdrop-blur-2xl transition-[width,transform] duration-300 dark:border-white/10 dark:bg-zinc-950/75 lg:static lg:translate-x-0 ${isSidebarCollapsed ? "lg:w-20" : "lg:w-72"} w-72 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex items-center justify-between px-2">
            <Link
              href="/admin/dashboard"
              className={`flex items-center gap-3 ${isSidebarCollapsed ? "lg:justify-center" : ""}`}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black text-sm font-bold text-white dark:bg-white dark:text-black">
                A
              </span>
              <span className={isSidebarCollapsed ? "lg:hidden" : ""}>
                <span className="block text-sm font-bold">Admin Studio</span>
                <span className="block text-xs text-black/45 dark:text-white/45">
                  Portfolio control
                </span>
              </span>
            </Link>
            <button
              type="button"
              aria-label={
                isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"
              }
              onClick={() => setIsSidebarCollapsed((collapsed) => !collapsed)}
              className="hidden rounded-xl p-2 text-black/50 hover:bg-black/5 lg:block dark:text-white/50 dark:hover:bg-white/10"
            >
              {isSidebarCollapsed ? (
                <ChevronRight size={18} />
              ) : (
                <ChevronLeft size={18} />
              )}
            </button>
            <button
              type="button"
              aria-label="Close navigation"
              onClick={() => setIsSidebarOpen(false)}
              className="rounded-xl p-2 text-black/50 hover:bg-black/5 lg:hidden dark:text-white/50 dark:hover:bg-white/10"
            >
              <X size={18} />
            </button>
          </div>

          <div className="mt-12">
            <p
              className={`px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/35 dark:text-white/35 ${isSidebarCollapsed ? "lg:hidden" : ""}`}
            >
              Workspace
            </p>
            <nav className="mt-3 space-y-1">
              {navigation.map((item) => {
                const ItemIcon = item.icon;
                const isActive = activeItem === item.label;
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => {
                      setActiveItem(item.label);
                      setIsSidebarOpen(false);
                    }}
                    className={`flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition-colors ${isSidebarCollapsed ? "lg:justify-center" : ""} ${isActive ? "bg-black text-white shadow-lg shadow-black/10 dark:bg-white dark:text-black" : "text-black/55 hover:bg-black/5 hover:text-black dark:text-white/55 dark:hover:bg-white/10 dark:hover:text-white"}`}
                  >
                    <ItemIcon size={18} strokeWidth={1.7} />
                    <span className={isSidebarCollapsed ? "lg:hidden" : ""}>
                      {item.label}
                    </span>
                    {item.label === "Messages" && !isSidebarCollapsed && (
                      <span className="ml-auto rounded-full bg-amber-400 px-2 py-0.5 text-[10px] font-bold text-black">
                        4
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="mt-auto space-y-1">
            <button
              type="button"
              onClick={() =>
                showNotice("Settings are ready for configuration.")
              }
              className={`flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium text-black/55 hover:bg-black/5 hover:text-black dark:text-white/55 dark:hover:bg-white/10 dark:hover:text-white ${isSidebarCollapsed ? "lg:justify-center" : ""}`}
            >
              <Settings size={18} strokeWidth={1.7} />
              <span className={isSidebarCollapsed ? "lg:hidden" : ""}>
                Settings
              </span>
            </button>
            <div className="mt-4 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/45 p-3 dark:border-white/10 dark:bg-white/5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-cyan-400 to-emerald-400 text-xs font-bold text-black">
                AP
              </span>
              <div
                className={`min-w-0 ${isSidebarCollapsed ? "lg:hidden" : ""}`}
              >
                <p className="truncate text-sm font-semibold">Ayomide Philip</p>
                <p className="truncate text-xs text-black/45 dark:text-white/45">
                  Administrator
                </p>
              </div>
              <ChevronDown
                size={15}
                className={`ml-auto shrink-0 text-black/40 dark:text-white/40 ${isSidebarCollapsed ? "lg:hidden" : ""}`}
              />
            </div>
          </div>
        </aside>

        <section className="min-w-0 flex-1 px-4 py-5 sm:px-6 lg:px-10 lg:py-8">
          <header className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Open navigation"
                onClick={() => setIsSidebarOpen(true)}
                className="rounded-xl border border-white/60 bg-white/45 p-2.5 text-black/65 backdrop-blur-md lg:hidden dark:border-white/10 dark:bg-white/5 dark:text-white/65"
              >
                <Menu size={20} />
              </button>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/40 dark:text-white/40">
                  {activeItem}
                </p>
                <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
                  Good morning, Ayomide.
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                aria-label="Search"
                onClick={() =>
                  showNotice(
                    "Search is available in the next dashboard update.",
                  )
                }
                className="hidden rounded-xl border border-white/60 bg-white/45 p-2.5 text-black/55 backdrop-blur-md hover:bg-white/70 sm:block dark:border-white/10 dark:bg-white/5 dark:text-white/55 dark:hover:bg-white/10"
              >
                <Search size={18} />
              </button>
              <button
                type="button"
                aria-label="Notifications"
                onClick={() => showNotice("You have 4 unread messages.")}
                className="relative rounded-xl border border-white/60 bg-white/45 p-2.5 text-black/55 backdrop-blur-md hover:bg-white/70 dark:border-white/10 dark:bg-white/5 dark:text-white/55 dark:hover:bg-white/10"
              >
                <Bell size={18} />
                <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-amber-400" />
              </button>
              <button
                type="button"
                onClick={() =>
                  showNotice("New content form is ready to connect.")
                }
                className="hidden items-center gap-2 rounded-xl bg-black px-4 py-2.5 text-xs font-semibold text-white sm:flex dark:bg-white dark:text-black"
              >
                <Plus size={16} /> New content
              </button>
            </div>
          </header>

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
                    <MoreHorizontal
                      size={18}
                      className="text-black/30 dark:text-white/30"
                    />
                  </div>
                  <p className="mt-5 text-sm text-black/50 dark:text-white/50">
                    {metric.label}
                  </p>
                  <div className="mt-1 flex items-end justify-between gap-2">
                    <p className="text-2xl font-bold">{metric.value}</p>
                    <p className="text-[11px] font-medium text-emerald-600 dark:text-emerald-300">
                      {metric.change}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
            <div className="rounded-3xl border border-white/60 bg-white/45 p-5 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6 dark:border-white/10 dark:bg-white/5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold">Portfolio activity</p>
                  <p className="mt-1 text-xs text-black/45 dark:text-white/45">
                    Views and content performance over the last 30 days
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
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />{" "}
                  Profile visits
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-cyan-400" /> Content
                  views
                </span>
                <span className="ml-auto inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-300">
                  <TrendingUp size={14} /> 18.4%
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
                  onClick={() => showNotice("Add project action selected.")}
                  className="flex w-full items-center gap-3 rounded-2xl border border-white/60 bg-white/40 p-3 text-left transition-colors hover:bg-white/70 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-600 dark:text-cyan-300">
                    <Plus size={17} />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">
                      Add project
                    </span>
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
                  onClick={() => showNotice("Article editor action selected.")}
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
                onClick={() => showNotice("Showing all recent projects.")}
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
                    <p className="truncate text-sm font-semibold">
                      {project.name}
                    </p>
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
        </section>
      </div>
      {notice && (
        <div
          role="status"
          className="fixed bottom-5 left-1/2 z-[60] -translate-x-1/2 rounded-full border border-white/60 bg-black/85 px-4 py-2.5 text-xs font-medium text-white shadow-xl backdrop-blur-xl dark:border-white/15 dark:bg-white/90 dark:text-black"
        >
          {notice}
        </div>
      )}
    </main>
  );
}
