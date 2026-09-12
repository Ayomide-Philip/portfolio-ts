import { Card } from "@/components/ui";
import { Project } from "@/types/project.types";
import { ExternalLink, GitBranch } from "lucide-react";
import Link from "next/link";

const getPreviewImage = (project: Project) => {
  const repository = project.sourceUrl
    .replace("https://github.com/", "")
    .replace(/\/$/, "");

  return `https://opengraph.githubassets.com/1/${repository}`;
};

function ProjectVisual({ project }: { project: Project }) {
  const previewImage = getPreviewImage(project);

  return (
    <div className="relative h-56 overflow-hidden border-b border-white/35 dark:border-white/10">
      <div
        aria-label={`${project.title} preview`}
        role="img"
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${previewImage})` }}
      />
      <span className="absolute left-5 top-5 z-10 rounded-full border border-white/60 bg-white/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/60 backdrop-blur-md dark:border-white/15 dark:bg-white/10">
        {project.category}
      </span>
      {project.featured && (
        <span className="absolute right-5 top-5 z-10 rounded-full bg-black/75 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md dark:bg-white/80 dark:text-black">
          Featured
        </span>
      )}
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group flex h-full flex-col transition-all duration-500 hover:-translate-y-2 hover:bordser-white/80 hover:shadow-[0_30px_80px_-28px_rgba(0,0,0,0.45)] dark:hover:border-white/25 dark:hover:shadow-[0_30px_80px_-28px_rgba(0,0,0,0.95)]">
      <ProjectVisual project={project} />
      <div className="flex flex-1 flex-col gap-5 p-6">
        <div className="space-y-2">
          <h2 className="bg-linear-to-br from-black to-zinc-500 bg-clip-text text-2xl font-bold text-transparent dark:from-white dark:to-zinc-400">
            {project?.title}
          </h2>
          <p className="text-sm leading-relaxed text-black/60 dark:text-white/60">
            {project?.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/60 bg-white/45 px-3 py-1 text-xs font-medium text-black/70 backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-white/70"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
          {project?.liveUrl?.length > 0 && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2.5 text-xs font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 dark:bg-white dark:text-black"
            >
              Live preview
              <ExternalLink size={14} />
            </Link>
          )}
          {project?.sourceUrl?.length > 0 && (
            <Link
              href={project?.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/35 px-4 py-2.5 text-xs font-semibold text-black transition-colors duration-300 hover:bg-white/70 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/15"
            >
              <GitBranch size={14} />
              Source code
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
}
