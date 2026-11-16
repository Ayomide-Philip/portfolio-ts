"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  SourceCodeSquareIcon,
  Menu01Icon,
  Cancel01Icon,
} from "@hugeicons/core-free-icons";
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
      <div
        className="relative flex h-14 items-center justify-between rounded-full px-3.5 sm:px-5 transition-all duration-300 ease-out
        backdrop-blur-2xl backdrop-saturate-150
        bg-white/60 border border-white/80 shadow-[0_12px_36px_-6px_rgba(15,23,42,0.08),inset_0_1px_1px_0_rgba(255,255,255,0.95)]
        dark:bg-[#080B11]/60 dark:border-white/9 dark:shadow-[0_16px_40px_-10px_rgba(0,0,0,0.65),inset_0_1px_1px_0_rgba(255,255,255,0.12)]"
      >
        <Link
          href="/"
          aria-label="Home"
          className="group relative flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-xl transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/50 active:scale-95
            bg-slate-900/4 border border-slate-200/80 text-teal-800 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] hover:bg-slate-900/8 hover:border-slate-300 hover:text-teal-900 hover:-translate-y-0.5
            dark:bg-white/6 dark:border-white/12 dark:text-teal-400 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.16)] dark:hover:bg-white/12 dark:hover:border-teal-400/40 dark:hover:shadow-[0_0_16px_rgba(45,212,191,0.25)] dark:hover:-translate-y-0.5"
        >
          <HugeiconsIcon
            icon={SourceCodeSquareIcon}
            size={18}
            strokeWidth={2}
            className="transition-transform duration-200 group-hover:scale-110"
          />
        </Link>

        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 rounded-full p-1 border border-black/3 bg-black/2 dark:border-white/4 dark:bg-white/2"
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
                    ? "bg-white/90 text-slate-950 font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,1)] border border-slate-200/70 dark:bg-white/12 dark:text-white dark:border-white/[0.14] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
                    : "text-slate-600 hover:text-slate-950 hover:bg-white/50 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-white/6"
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
              dark:bg-white/6 dark:border-white/12 dark:text-slate-300 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.16)] dark:hover:bg-white/12 dark:hover:text-white"
          >
            {mobileMenuOpen ? (
              <HugeiconsIcon icon={Cancel01Icon} size={18} strokeWidth={2} />
            ) : (
              <HugeiconsIcon icon={Menu01Icon} size={18} strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className="mt-2.5 overflow-hidden rounded-2xl p-3 md:hidden transition-all duration-300 ease-out
          backdrop-blur-2xl backdrop-saturate-150
          bg-white/80 border border-white/90 shadow-[0_20px_40px_-10px_rgba(15,23,42,0.12),inset_0_1px_1px_0_rgba(255,255,255,0.95)]
          dark:bg-[#080B11]/85 dark:border-white/10 dark:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.8),inset_0_1px_1px_0_rgba(255,255,255,0.15)]"
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
                      ? "bg-slate-900/6 font-semibold text-slate-950 dark:bg-white/12 dark:text-white"
                      : "text-slate-600 hover:bg-black/3 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-slate-200"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="mt-2 border-t border-slate-200/60 pt-3 dark:border-white/8">
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
