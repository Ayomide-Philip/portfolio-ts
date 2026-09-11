import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui";
import LetterGlitch from "../ui/letterglitch";
import Toggle from "../toggle";

export default function Hero() {
  return (
    <div className="relative isolate min-h-170 overflow-hidden md:min-h-190">
      <div className="pointer-events-none absolute inset-0 z-0">
        <LetterGlitch
          className="h-full w-full"
          glitchSpeed={90}
          centerVignette={true}
          outerVignette={true}
          smooth={false}
          glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 z-1 bg-linear-to-b from-black/20 via-transparent to-black/60"
        aria-hidden="true"
      />
      <div className="absolute right-4 top-4 z-20 md:hidden">
        <Toggle className="mr-0 bg-white text-black hover:bg-zinc-100" />
      </div>
      <Section size="lg" className="relative z-10 pb-24 pt-36 text-center">
        <div className="mx-auto max-w-4xl space-y-10">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.9)]" />
              Full-stack developer
            </div>
            <h1 className="mx-auto capitalize max-w-4xl text-5xl font-bold leading-[0.98] tracking-tight text-white drop-shadow-2xl md:text-8xl">
              Build digital experiences that feel alive.
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/70 md:text-xl">
              Full-stack developer crafting beautiful, performant web
              experiences. Frontend + Backend + Cloud Infrastructure.{" "}
            </p>
          </div>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/project"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-7 text-sm font-semibold text-black shadow-[0_12px_40px_rgba(255,255,255,0.16)] transition-transform duration-300 hover:-translate-y-1 hover:bg-zinc-200"
            >
              View Projects
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/25 bg-black/20 px-7 text-sm font-semibold text-white backdrop-blur-md transition-colors duration-300 hover:bg-white/10"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
