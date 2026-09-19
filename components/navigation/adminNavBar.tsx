"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  FileText,
  FolderKanban,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageSquare,
  Plus,
  Search,
  Settings,
  X,
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
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
        {isSidebarOpen && (
          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
          />
        )}

        <aside
          className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-white/50 p-5 backdrop-blur-2xl transition-[width,transform] duration-300 dark:border-white/10 dark:bg-zinc-950/75 lg:static lg:translate-x-0 ${isSidebarCollapsed ? "lg:w-20 lg:p-3" : "lg:w-72"} ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:relative`}
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
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsSidebarOpen(false)}
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
              onClick={() => setIsSidebarOpen(false)}
              className={`flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium text-black/55 hover:bg-black/5 hover:text-black dark:text-white/55 dark:hover:bg-white/10 dark:hover:text-white ${isSidebarCollapsed ? "lg:mx-auto lg:h-11 lg:w-11 lg:justify-center lg:rounded-full lg:p-0" : ""}`}
            >
              <Settings size={18} strokeWidth={1.7} />
              <span className={isSidebarCollapsed ? "lg:hidden" : ""}>
                Settings
              </span>
            </Link>
            <div className="relative mt-4">
              {isProfileMenuOpen && (
                <div className="absolute bottom-full left-0 right-0 mb-2 rounded-2xl border border-white/60 bg-white/90 p-2 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/95">
                  <p className="px-3 py-2 text-xs leading-relaxed text-black/55 dark:text-white/55">
                    Signed in as Ayomide Philip
                  </p>
                  <button
                    type="button"
                    onClick={() => showNotice("Profile settings selected.")}
                    className="w-full rounded-xl px-3 py-2 text-left text-xs font-medium text-black/70 hover:bg-black/5 dark:text-white/70 dark:hover:bg-white/10"
                  >
                    Account details
                  </button>
                </div>
              )}
              <button
                type="button"
                aria-label="Open account menu"
                aria-expanded={isProfileMenuOpen}
                onClick={() => setIsProfileMenuOpen((open) => !open)}
                className={`flex w-full items-center gap-3 rounded-2xl border border-white/60 bg-white/45 p-3 text-left transition-colors hover:bg-white/70 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 ${isSidebarCollapsed ? "lg:mx-auto lg:h-11 lg:w-11 lg:justify-center lg:rounded-full lg:p-0" : ""}`}
              >
                <span
                  className={`flex h-9 w-9 items-center justify-center bg-linear-to-br from-cyan-400 to-emerald-400 text-xs font-bold text-black ${isSidebarCollapsed ? "lg:rounded-full" : "rounded-xl"}`}
                >
                  AP
                </span>
                <div
                  className={`min-w-0 ${isSidebarCollapsed ? "lg:hidden" : ""}`}
                >
                  <p className="truncate text-sm font-semibold">
                    Ayomide Philip
                  </p>
                  <p className="truncate text-xs text-black/45 dark:text-white/45">
                    Administrator
                  </p>
                </div>
                <ChevronDown
                  size={15}
                  className={`ml-auto shrink-0 text-black/40 dark:text-white/40 ${isSidebarCollapsed ? "lg:hidden" : ""}`}
                />
              </button>
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
              <Toggle />
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
