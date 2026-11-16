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
      {/* Floating Island Container */}
      <div className="relative flex h-14 items-center justify-between rounded-full border border-slate-200/90 bg-white/80 px-4 sm:px-5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-colors duration-200 dark:border-[#1E283D] dark:bg-[#111622]/85 dark:backdrop-blur-md dark:shadow-none">
        {/* Brand / Monogram */}
        <Link
          href="/"
          className="group flex items-center gap-1.5 font-mono text-sm font-semibold tracking-tight text-slate-900 transition-colors dark:text-slate-100"
        >
          <span>portfolio</span>
          <span className="text-teal-600 transition-transform duration-200 group-hover:scale-125 dark:text-teal-400">
            .ts
          </span>
        </Link>

        {/* Center Desktop Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1"
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
                className={`relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-150 ${
                  isActive
                    ? "bg-slate-100 font-semibold text-slate-900 dark:bg-[#1E283D] dark:text-slate-100"
                    : "text-slate-600 hover:bg-slate-100/70 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-[#1E283D]/60 dark:hover:text-slate-200"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions Cluster */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Status Badge (Desktop only) */}
          <div className="hidden lg:inline-flex items-center gap-1.5 rounded-full border border-teal-500/20 bg-teal-500/10 px-2.5 py-1 font-mono text-[11px] text-teal-800 dark:border-teal-400/20 dark:bg-teal-400/10 dark:text-teal-300">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-600 dark:bg-teal-400 animate-pulse" />
            <span>Open to work</span>
          </div>

          {/* Theme Switcher Toggle */}
          <ThemeToggle />

          {/* CTA Action Button (Desktop only) */}
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-teal-600 px-4 py-1.5 text-xs font-semibold text-white transition-all duration-150 hover:bg-teal-700 active:scale-95 shadow-sm dark:bg-teal-400 dark:text-[#080B11] dark:hover:bg-teal-300 dark:shadow-none"
          >
            Get in touch
          </Link>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/90 bg-white/70 text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-900 md:hidden dark:border-[#1E283D] dark:bg-[#0E131F]/80 dark:text-slate-300 dark:hover:border-[#334466] dark:hover:text-slate-100"
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

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="mt-2 overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 p-3 backdrop-blur-md shadow-xl md:hidden dark:border-[#1E283D] dark:bg-[#111622]/95 dark:backdrop-blur-md dark:shadow-none">
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
                  className={`flex h-11 items-center rounded-xl px-4 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-slate-100 font-semibold text-slate-900 dark:bg-[#1E283D] dark:text-slate-100"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-[#1E283D]/50 dark:hover:text-slate-200"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="mt-2 border-t border-slate-100 pt-3 dark:border-[#1E283D]">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-11 w-full items-center justify-center rounded-xl bg-teal-600 text-sm font-semibold text-white transition-all hover:bg-teal-700 active:scale-95 dark:bg-teal-400 dark:text-[#080B11] dark:hover:bg-teal-300"
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
