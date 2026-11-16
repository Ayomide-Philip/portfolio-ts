"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function FloatingNavbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 sm:top-6 inset-x-0 mx-auto z-50 w-full max-w-4xl px-4 sm:px-6">
      {/* Premium Glassmorphic Floating Island */}
      <div
        className="relative flex h-14 items-center justify-between rounded-full px-4 sm:px-5 transition-all duration-300 ease-out
        backdrop-blur-2xl backdrop-saturate-150
        bg-white/60 border border-white/80 shadow-[0_12px_36px_-6px_rgba(15,23,42,0.08),inset_0_1px_1px_0_rgba(255,255,255,0.95)]
        dark:bg-[#080B11]/60 dark:border-white/[0.09] dark:shadow-[0_16px_40px_-10px_rgba(0,0,0,0.65),inset_0_1px_1px_0_rgba(255,255,255,0.12)]"
      >
        {/* Brand Monogram */}
        <Link
          href="/"
          className="group flex items-center gap-1.5 font-mono text-xs sm:text-sm font-semibold tracking-tight text-slate-900 transition-colors dark:text-slate-100"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500 dark:bg-teal-400" />
          </span>
          <span>portfolio</span>
          <span className="text-teal-700 transition-transform duration-200 group-hover:scale-125 dark:text-teal-400">
            .ts
          </span>
        </Link>

        {/* Center Desktop Links with Glass Capsule Pills */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 rounded-full p-1 border border-black/[0.03] bg-black/[0.02] dark:border-white/[0.04] dark:bg-white/[0.02]"
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 ease-out ${
                  isActive
                    ? "bg-white/90 text-slate-950 font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,1)] border border-slate-200/70 dark:bg-white/[0.12] dark:text-white dark:border-white/[0.14] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
                    : "text-slate-600 hover:text-slate-950 hover:bg-white/50 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-white/[0.06]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-2.5">
          <ThemeToggle />

          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center rounded-full font-semibold text-xs tracking-tight px-4 py-2 cursor-pointer select-none transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/50 active:scale-[0.98]
              bg-teal-700 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_4px_14px_rgba(15,118,110,0.25)] hover:bg-teal-800 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_6px_20px_rgba(15,118,110,0.35)] hover:-translate-y-0.5
              dark:bg-teal-400 dark:text-[#080B11] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_0_24px_-4px_rgba(45,212,191,0.35)] dark:hover:bg-teal-300 dark:hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_0_32px_-2px_rgba(45,212,191,0.55)] dark:hover:-translate-y-0.5"
          >
            Get in touch
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-xl transition-all duration-200 md:hidden active:scale-95
              bg-white/65 border border-slate-200/80 text-slate-700 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] hover:bg-white/90 hover:text-slate-900
              dark:bg-white/6 dark:border-white/[0.12] dark:text-slate-300 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.16)] dark:hover:bg-white/[0.12] dark:hover:text-white"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown with Matching Glassmorphism */}
      {mobileMenuOpen && (
        <div
          className="mt-2.5 overflow-hidden rounded-2xl p-3 md:hidden transition-all duration-300 ease-out
          backdrop-blur-2xl backdrop-saturate-150
          bg-white/80 border border-white/90 shadow-[0_20px_40px_-10px_rgba(15,23,42,0.12),inset_0_1px_1px_0_rgba(255,255,255,0.95)]
          dark:bg-[#080B11]/85 dark:border-white/[0.10] dark:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.8),inset_0_1px_1px_0_rgba(255,255,255,0.15)]"
        >
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex h-11 items-center rounded-xl px-4 text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? "bg-slate-900/[0.06] font-semibold text-slate-950 dark:bg-white/[0.12] dark:text-white"
                      : "text-slate-600 hover:bg-black/[0.03] hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/[0.05] dark:hover:text-slate-200"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="mt-2 border-t border-slate-200/60 pt-3 dark:border-white/[0.08]">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-11 w-full items-center justify-center rounded-xl font-semibold text-sm transition-all duration-200 active:scale-[0.98]
                  bg-teal-700 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] hover:bg-teal-800
                  dark:bg-teal-400 dark:text-[#080B11] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_0_24px_-4px_rgba(45,212,191,0.35)] dark:hover:bg-teal-300"
              >
                Get in touch
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
