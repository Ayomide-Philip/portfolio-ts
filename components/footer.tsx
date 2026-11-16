"use client";

import Link from "next/link";
import { SiGithub } from "react-icons/si";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full border-t border-slate-200/80 dark:border-white/8 bg-slate-100/70 dark:bg-[#030712]/95 backdrop-blur-xl transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-slate-200/70 dark:border-white/6">
          <div className="md:col-span-6 space-y-3">
            <Link
              href="/"
              className="text-base font-bold tracking-tight text-slate-900 dark:text-slate-100 hover:opacity-80 transition-opacity"
            >
              Ayomide Philip
            </Link>

            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm pt-1">
              Built with Next.js, TypeScript, Tailwind CSS, and MongoDB. Focused
              on clean architecture and performance.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              Connect
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/Ayomide-Philip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <SiGithub size={14} />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.69 1.69 0 0 0 1.69-1.68 1.69 1.69 0 0 0-1.69-1.69 1.69 1.69 0 0 0-1.68 1.69c0 .93.76 1.68 1.68 1.68m1.39 9.94v-8.37H5.07v8.37h2.78z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs font-mono text-slate-500 dark:text-slate-400">
          <div>&copy; 2026 Ayomide Philip. All rights reserved.</div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-200 group-hover:-translate-y-0.5"
                aria-hidden="true"
              >
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </button>

            <Link
              href="/admin/login"
              className="text-slate-400/50 dark:text-slate-600/60 hover:text-slate-600 dark:hover:text-slate-400 transition-colors text-[10px]"
              title="Admin Portal"
            >
              Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
