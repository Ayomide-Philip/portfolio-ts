"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui";
import Toggle from "../toggle";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-white/80 dark:bg-black/80 shadow-lg border-white/10 dark:border-white/10"
          : "bg-white/10 dark:bg-black/10"
      } backdrop-blur-lg border border-white/20 dark:border-white/5 rounded-2xl`}
    >
      <div className="flex items-center justify-between h-16 px-6">
        <Link
          href="#"
          className="text-xl font-bold bg-gradient-to-r from-black to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent"
        >
          Alex
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black dark:bg-white group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Toggle />
          <Button variant="secondary" size="sm">
            Get Started
          </Button>
        </div>

        <button
          className="md:hidden text-black dark:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 px-6 py-4 space-y-3 animate-in fade-in duration-300">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block text-sm font-medium text-black dark:text-white hover:text-black/70 dark:hover:text-white/70 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button variant="secondary" size="sm" className="w-full mt-4">
            Get Started
          </Button>
        </div>
      )}
    </nav>
  );
}
