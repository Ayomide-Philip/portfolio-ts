import Link from "next/link";
import { Section, Button } from "@/components/ui";
import { Projects as ProjectsArray } from "@/data/project";
import { ProjectCard } from "../ui/projectCard";

export default function Projects() {
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
          {ProjectsArray.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          )).slice(0, 3)}
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
