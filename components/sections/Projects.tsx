import Link from "next/link";
import { Section, Card, Button, Icon } from "@/components/ui";

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string[];
  accent: "cyan" | "amber" | "emerald";
  href: string;
}

const accentStyles = {
  cyan: {
    wash: "from-cyan-300/50 via-cyan-200/20 to-transparent",
    glow: "bg-cyan-300/50 dark:bg-cyan-400/25",
    glyph: "text-cyan-950/70 dark:text-cyan-100/80",
    border:
      "group-hover:border-cyan-300/60 dark:group-hover:border-cyan-300/25",
  },
  amber: {
    wash: "from-amber-300/50 via-amber-200/20 to-transparent",
    glow: "bg-amber-300/50 dark:bg-amber-400/25",
    glyph: "text-amber-950/70 dark:text-amber-100/80",
    border:
      "group-hover:border-amber-300/60 dark:group-hover:border-amber-300/25",
  },
  emerald: {
    wash: "from-emerald-300/50 via-emerald-200/20 to-transparent",
    glow: "bg-emerald-300/50 dark:bg-emerald-400/25",
    glyph: "text-emerald-950/70 dark:text-emerald-100/80",
    border:
      "group-hover:border-emerald-300/60 dark:group-hover:border-emerald-300/25",
  },
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  stack,
  accent,
  href,
}) => {
  const style = accentStyles[accent];

  return (
    <Card
      variant="bordered"
      className={`group flex flex-col transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_70px_-24px_rgba(0,0,0,0.35)] dark:hover:shadow-[0_28px_70px_-24px_rgba(0,0,0,0.9)] ${style.border}`}
    >
      <div className="relative h-48 shrink-0">
        <div
          aria-hidden="true"
          className={`absolute inset-0 bg-linear-to-br ${style.wash} dark:opacity-50`}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-transform duration-500 group-hover:scale-125 ${style.glow}`}
          />
          <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/70 bg-white/45 text-4xl shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_20px_45px_-25px_rgba(0,0,0,0.6)] backdrop-blur-md transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 dark:border-white/15 dark:bg-white/10">
            <span className={style.glyph}>✦</span>
          </div>
        </div>
        <span
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/80 to-transparent dark:via-white/25"
        />
      </div>

      <div className="relative flex flex-1 flex-col gap-4 p-6">
        <h3 className="bg-linear-to-br from-black to-zinc-500 bg-clip-text text-xl font-bold text-transparent dark:from-white dark:to-zinc-400">
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-black/60 dark:text-white/60">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/60 bg-white/50 px-3 py-1 text-xs font-medium text-black/70 backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-white/70"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={href}
          className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-semibold text-black dark:text-white"
        >
          <span className="border-b border-transparent transition-colors duration-300 group-hover:border-current">
            View Project
          </span>
          <Icon
            name="external"
            size={16}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </Card>
  );
};

export default function Projects() {
  const projects: ProjectCardProps[] = [
    {
      title: "SaaS Dashboard",
      description:
        "Real-time analytics platform with interactive charts and user management.",
      stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      accent: "cyan",
      href: "#",
    },
    {
      title: "Mobile App",
      description:
        "Cross-platform mobile application with offline-first capabilities.",
      stack: ["React Native", "Firebase", "Redux"],
      accent: "amber",
      href: "#",
    },
    {
      title: "Design System",
      description:
        "Comprehensive component library and design tokens for enterprise apps.",
      stack: ["React", "Storybook", "TypeScript"],
      accent: "emerald",
      href: "#",
    },
  ];

  return (
    <Section size="md" id="projects" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -right-32 top-4 h-80 w-80 rounded-full bg-white/45 blur-3xl dark:bg-white/10" />
        <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-white/40 blur-3xl dark:bg-white/5" />
      </div>

      <div className="space-y-14">
        <div className="mx-auto max-w-2xl space-y-5 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-black/60 backdrop-blur-md dark:border-white/15 dark:bg-white/5 dark:text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            Selected Work
          </span>

          <h2 className="text-4xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
            Featured Projects
          </h2>

          <p className="text-lg text-black/60 dark:text-white/60">
            A selection of recent work showcasing modern development practices.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>

        <div className="pt-2 text-center">
          <Link href="/project">
            <Button variant="secondary" size="lg">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
