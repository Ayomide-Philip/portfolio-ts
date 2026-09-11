import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Code2,
  Database,
  Mail,
  MapPin,
  Server,
  Sparkles,
} from "lucide-react";
import { Card, Section } from "@/components/ui";

const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "REST APIs", "GraphQL", "Python", "Authentication"],
  },
  {
    title: "Data & Cloud",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Docker", "AWS", "Git"],
  },
];

const experience = [
  {
    company: "Independent / Freelance",
    role: "Full-stack Developer",
    period: "2022 — Present",
    description:
      "Designing and shipping web products for people who need a clear, reliable path from idea to launch.",
    current: true,
  },
  {
    company: "Product Engineering",
    role: "Frontend & Backend Developer",
    period: "2020 — 2022",
    description:
      "Built reusable interfaces, production APIs, and data workflows with a close eye on performance and maintainability.",
    current: false,
  },
  {
    company: "Early-stage Teams",
    role: "Software Developer",
    period: "2018 — 2020",
    description:
      "Worked across the stack in fast-moving environments, turning rough product requirements into useful working software.",
    current: false,
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-black/45 dark:text-white/45">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
      {children}
    </p>
  );
}

export default function Page() {
  return (
    <main>
      <Section
        size="lg"
        className="relative overflow-hidden pb-20 pt-32 text-center md:pt-40"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute -left-40 top-8 h-96 w-96 rounded-full bg-cyan-300/15 blur-3xl dark:bg-cyan-300/10" />
          <div className="absolute -right-40 top-32 h-96 w-96 rounded-full bg-emerald-300/15 blur-3xl dark:bg-emerald-300/10" />
        </div>

        <div className="mx-auto max-w-3xl space-y-7">
          <div className="space-y-5">
            <SectionLabel>About me</SectionLabel>
            <h1 className="text-5xl font-bold leading-[0.98] tracking-tight text-black md:text-7xl dark:text-white">
              About me
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-black/65 dark:text-white/65 md:text-xl">
              I&apos;m Alex, a full-stack developer who enjoys turning complex
              ideas into simple, useful digital products. I care about the
              details people feel: fast interfaces, thoughtful systems, and
              software that is easy to keep improving.
            </p>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm text-black/55 dark:text-white/55">
              <span className="inline-flex items-center gap-2">
                <MapPin size={15} />
                Available worldwide
              </span>
              <span className="inline-flex items-center gap-2">
                <Sparkles size={15} />
                Open to good problems
              </span>
            </div>
          </div>
        </div>
      </Section>

      <Section size="md" className="pt-0">
        <div className="mb-10 space-y-3">
          <SectionLabel>What I work with</SectionLabel>
          <h2 className="text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
            Skills that move ideas forward.
          </h2>
          <p className="max-w-2xl text-black/60 dark:text-white/60">
            A practical toolkit for building complete products, from the first
            component to the systems that keep it running.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {skillGroups.map((group) => {
            const GroupIcon = group.icon;
            return (
              <Card key={group.title} variant="bordered" className="p-6">
                <div className="mb-8 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/70 bg-white/55 text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-md dark:border-white/15 dark:bg-white/10 dark:text-white">
                    <GroupIcon size={18} />
                  </div>
                  <h3 className="text-lg font-semibold text-black dark:text-white">
                    {group.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-sm text-black/65 dark:text-white/65"
                    >
                      <Check size={15} className="text-emerald-500" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section size="md" className="pt-0">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div className="space-y-4">
            <SectionLabel>Where I&apos;ve worked</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
              Experience across the stack.
            </h2>
            <p className="max-w-md leading-relaxed text-black/60 dark:text-white/60">
              From independent projects to product teams, I&apos;ve worked close
              to both the people using the software and the systems powering it.
            </p>
          </div>

          <div className="relative space-y-4 before:absolute before:bottom-5 before:left-[19px] before:top-5 before:w-px before:bg-black/10 dark:before:bg-white/10">
            {experience.map((item) => (
              <Card
                key={`${item.company}-${item.period}`}
                variant="bordered"
                className="relative ml-10 p-5 sm:p-6"
              >
                <span
                  className={`absolute -left-7.75 top-7 h-3 w-3 rounded-full border-2 border-white dark:border-zinc-900 ${item.current ? "bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.9)]" : "bg-black/30 dark:bg-white/35"}`}
                />
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div>
                    <p className="text-lg font-semibold text-black dark:text-white">
                      {item.company}
                    </p>
                    <p className="mt-1 text-sm text-black/55 dark:text-white/55">
                      {item.role}
                    </p>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-black/45 dark:text-white/45">
                    {item.period}
                  </span>
                </div>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black/60 dark:text-white/60">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section size="md" className="pt-0">
        <div className="flex flex-col items-start justify-between gap-5 rounded-3xl border border-white/50 bg-white/35 p-6 backdrop-blur-xl sm:flex-row sm:items-center sm:p-8 dark:border-white/10 dark:bg-white/5">
          <div>
            <h2 className="text-xl font-semibold text-black dark:text-white">
              Let&apos;s work together.
            </h2>
            <p className="mt-1 text-sm text-black/60 dark:text-white/60">
              Have a project or a role that sounds like a fit?
            </p>
          </div>
          <Link
            href="mailto:hello@example.com"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 dark:bg-white dark:text-black"
          >
            <Mail size={16} />
            Get in touch
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </Section>
    </main>
  );
}
