"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui";
import { FolderKanban, House, Mail, UserRound } from "lucide-react";
import Toggle from "../toggle";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const mobileNavItems = [
  { label: "Home", href: "#", icon: House },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "About", href: "#about", icon: UserRound },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed bottom-4 top-auto md:top-4 md:bottom-auto left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] md:w-full max-w-md md:max-w-6xl px-2 md:px-4 transition-all duration-300 ease-in-out ${
        isScrolled ? "shadow-lg" : "shadow-none"
      } bg-white/85 dark:bg-black/70 backdrop-blur-lg border border-black/10 dark:border-white/10 rounded-2xl`}
    >
      <div className="hidden md:flex items-center justify-between h-16 px-6">
        <Link
          href="#"
          className="text-xl font-bold bg-linear-to-r from-black to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent"
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

        <div className="hidden md:flex">
          <Toggle />
          <Button variant="secondary" size="sm">
            Get Started
          </Button>
        </div>
      </div>

      <div className="flex md:hidden items-center justify-around h-16 px-1">
        {mobileNavItems.map((item) => {
          const ItemIcon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              className="flex min-w-14 flex-col items-center gap-1 rounded-xl px-2 py-1 text-[10px] font-medium text-black/60 transition-colors hover:bg-black/5 hover:text-black dark:text-white/60 dark:hover:bg-white/10 dark:hover:text-white"
            >
              <ItemIcon size={19} strokeWidth={1.8} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
