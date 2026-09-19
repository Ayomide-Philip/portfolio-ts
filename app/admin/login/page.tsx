"use client";

import { ArrowUpRight, LockKeyhole } from "lucide-react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function AdminLoginPage() {
  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden px-4 py-8 sm:px-6 sm:py-12">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/15 blur-3xl sm:h-96 sm:w-96 dark:bg-cyan-300/10" />
        <div className="absolute -right-32 top-8 h-56 w-56 rounded-full bg-emerald-300/15 blur-3xl sm:-right-24 sm:top-16 sm:h-72 sm:w-72 dark:bg-emerald-300/10" />
      </div>

      <section className="relative w-full max-w-md">
        <div className="mb-6 text-center sm:mb-8">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/70 bg-white/55 text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_18px_40px_-25px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:mb-5 sm:h-14 sm:w-14 dark:border-white/15 dark:bg-white/10 dark:text-white">
            <LockKeyhole
              size={22}
              strokeWidth={1.6}
              className="sm:h-6 sm:w-6"
            />
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-black/45 dark:text-white/45">
            Private workspace
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl dark:text-white">
            Admin login
          </h1>
          <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-black/60 sm:max-w-sm dark:text-white/60">
            Sign in securely to manage your portfolio content.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/45 p-5 shadow-[0_24px_70px_-30px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:p-8 dark:border-white/10 dark:bg-white/5 dark:shadow-[0_24px_70px_-30px_rgba(0,0,0,0.9)]">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-white to-transparent dark:via-white/30"
          />

          <Link
            href="/api/auth/signin/google"
            className="group flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-black px-4 text-center text-sm font-semibold text-white shadow-[0_12px_30px_-18px_rgba(0,0,0,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-black/50 focus:ring-offset-2 sm:gap-3 sm:px-5 dark:bg-white dark:text-black dark:hover:bg-zinc-100 dark:focus:ring-white/50"
          >
            <FcGoogle size={19} aria-hidden="true" />
            Continue with Google
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

          <div className="mt-5 flex items-center gap-2 text-center text-[11px] text-black/45 sm:mt-6 sm:gap-3 sm:text-xs dark:text-white/45">
            <span className="h-px flex-1 bg-black/10 dark:bg-white/10" />
            <span>Google account required</span>
            <span className="h-px flex-1 bg-black/10 dark:bg-white/10" />
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-black/45 dark:text-white/45">
          Authorized administrators only.
        </p>
      </section>
    </main>
  );
}
