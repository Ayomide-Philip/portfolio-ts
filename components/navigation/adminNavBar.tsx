"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  ChevronLeft,
  ChevronRight,
  FileText,
  FolderKanban,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Plus,
  Search,
  Settings,
} from "lucide-react";
import Toggle from "../toggle";

const navigation = [
  { label: "Overview", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Projects", href: "/admin/dashboard/projects", icon: FolderKanban },
  { label: "Posts", href: "/admin/dashboard/posts", icon: FileText },
  { label: "Messages", href: "/admin/dashboard/messages", icon: MessageSquare },
];

export default function AdminNavBar({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [notice, setNotice] = useState("");
  const pathname = usePathname();
  const activeItem =
    navigation.find((item) => item.href === pathname)?.label ??
    (pathname === "/admin/dashboard/settings" ? "Settings" : "Overview");

  const showNotice = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2200);
  };

  return (
    <main className="min-h-dvh bg-transparent text-black dark:text-white">
      <div className="mx-auto flex min-h-dvh max-w-[1600px]">
        <aside
          className={`hidden w-72 flex-col border-r border-white/50 p-5 backdrop-blur-2xl transition-[width] duration-300 dark:border-white/10 dark:bg-zinc-950/75 lg:relative lg:flex ${isSidebarCollapsed ? "lg:w-20 lg:p-3" : "lg:w-72"}`}
        >
          <div
            className={`flex items-center justify-between px-2 ${isSidebarCollapsed ? "lg:flex-col lg:gap-3 lg:px-0" : ""}`}
          >
            <Link
              href="/admin/dashboard"
              className={`flex items-center gap-3 ${isSidebarCollapsed ? "lg:justify-center" : ""}`}
            >
              <span
                className={`flex h-10 w-10 items-center justify-center bg-black text-sm font-bold text-white dark:bg-white dark:text-black ${isSidebarCollapsed ? "lg:rounded-full" : "rounded-2xl"}`}
              >
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
              title={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
              onClick={() => setIsSidebarCollapsed((collapsed) => !collapsed)}
              className="absolute right-0 top-8 z-10 hidden h-9 w-9 translate-x-1/2 items-center justify-center rounded-full border border-white/70 bg-white/85 p-0 text-black/55 shadow-lg backdrop-blur-xl transition-colors hover:bg-white dark:border-white/15 dark:bg-zinc-900/90 dark:text-white/60 dark:hover:bg-zinc-800 lg:flex"
            >
              {isSidebarCollapsed ? (
                <ChevronRight size={18} />
              ) : (
                <ChevronLeft size={18} />
              )}
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
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition-colors ${isSidebarCollapsed ? "lg:mx-auto lg:h-11 lg:w-11 lg:justify-center lg:rounded-full lg:p-0" : ""} ${isActive ? "bg-black text-white shadow-lg shadow-black/10 dark:bg-white dark:text-black" : "text-black/55 hover:bg-black/5 hover:text-black dark:text-white/55 dark:hover:bg-white/10 dark:hover:text-white"}`}
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
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="mt-auto space-y-1">
            <Link
              href="/admin/dashboard/settings"
              className={`flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium text-black/55 hover:bg-black/5 hover:text-black dark:text-white/55 dark:hover:bg-white/10 dark:hover:text-white ${isSidebarCollapsed ? "lg:mx-auto lg:h-11 lg:w-11 lg:justify-center lg:rounded-full lg:p-0" : ""}`}
            >
              <Settings size={18} strokeWidth={1.7} />
              <span className={isSidebarCollapsed ? "lg:hidden" : ""}>
                Settings
              </span>
            </Link>
            <div
              className={`mt-4 flex w-full items-center gap-3 rounded-2xl border border-white/60 bg-white/45 p-3 dark:border-white/10 dark:bg-white/5 ${isSidebarCollapsed ? "lg:mx-auto lg:h-11 lg:w-11 lg:justify-center lg:rounded-full lg:p-0" : ""}`}
            >
              <span
                className={`flex h-9 w-9 items-center justify-center bg-linear-to-br from-cyan-400 to-emerald-400 text-xs font-bold text-black ${isSidebarCollapsed ? "lg:rounded-full" : "rounded-xl"}`}
              >
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
            </div>
            <button
              type="button"
              onClick={() => showNotice("Logout is ready to connect.")}
              className={`flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium text-red-600/75 transition-colors hover:bg-red-500/10 hover:text-red-600 dark:text-red-300/75 dark:hover:text-red-300 ${isSidebarCollapsed ? "lg:justify-center" : ""}`}
            >
              <LogOut size={18} strokeWidth={1.7} />
              <span className={isSidebarCollapsed ? "lg:hidden" : ""}>
                Log out
              </span>
            </button>
          </div>
        </aside>

        <section className="min-w-0 flex-1 px-3 py-3 pb-24 sm:px-6 sm:py-5 sm:pb-24 lg:px-10 lg:py-8 lg:pb-8">
          <header className="mb-5 flex items-center justify-between gap-3 lg:mb-8">
            <div className="flex min-w-0 items-center gap-2.5 sm:gap-3 lg:gap-4">
              <div className="flex min-w-0 items-center gap-2.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-black text-xs font-bold text-white lg:hidden dark:bg-white dark:text-black">
                  A
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[10px] font-semibold uppercase tracking-[0.18em] text-black/40 dark:text-white/40 lg:text-xs">
                    {activeItem}
                  </p>
                  <h1 className="truncate text-base font-bold tracking-tight sm:text-xl lg:mt-1 lg:text-3xl lg:font-bold">
                    {pathname === "/admin/dashboard"
                      ? "Good morning, Ayomide."
                      : activeItem}
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-1.5 sm:gap-3 lg:gap-4">
              <button
                type="button"
                aria-label="Search"
                onClick={() =>
                  showNotice(
                    "Search is available in the next dashboard update.",
                  )
                }
                className="hidden h-11 w-11 items-center justify-center rounded-xl border border-white/60 bg-white/45 p-2.5 text-black/55 backdrop-blur-md hover:bg-white/70 md:flex dark:border-white/10 dark:bg-white/5 dark:text-white/55 dark:hover:bg-white/10"
              >
                <Search size={18} />
              </button>
              <button
                type="button"
                aria-label="Notifications"
                onClick={() => showNotice("You have 4 unread messages.")}
                className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/60 bg-white/45 p-2.5 text-black/55 backdrop-blur-md hover:bg-white/70 lg:h-11 lg:w-11 dark:border-white/10 dark:bg-white/5 dark:text-white/55 dark:hover:bg-white/10"
              >
                <Bell size={18} />
                <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-amber-400" />
              </button>
              <div className="flex h-10 w-10 items-center justify-center lg:h-11 lg:w-11">
                <Toggle />
              </div>
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
          {children}
        </section>
      </div>
      <nav
        aria-label="Mobile admin navigation"
        className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-5 rounded-2xl border border-white/60 bg-white/85 p-1.5 shadow-[0_18px_45px_-22px_rgba(0,0,0,0.45)] backdrop-blur-2xl lg:hidden dark:border-white/10 dark:bg-zinc-950/85"
      >
        {[
          ...navigation,
          {
            label: "Settings",
            href: "/admin/dashboard/settings",
            icon: Settings,
          },
        ].map((item) => {
          const ItemIcon = item.icon;
          const isActive = activeItem === item.label;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex min-w-0 flex-col items-center justify-center gap-1 rounded-xl px-1 py-2 text-[10px] font-semibold leading-none transition-colors ${isActive ? "bg-black text-white dark:bg-white dark:text-black" : "text-black/50 hover:bg-black/5 hover:text-black dark:text-white/50 dark:hover:bg-white/10 dark:hover:text-white"}`}
            >
              <ItemIcon size={17} strokeWidth={1.8} />
              <span className="w-full truncate text-center">{item.label}</span>
            </Link>
          );
        })}
      </nav>
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
