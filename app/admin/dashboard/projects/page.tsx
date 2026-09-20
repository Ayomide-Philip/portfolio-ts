"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ExternalLink,
  FolderKanban,
  FolderPlus,
  GitBranch,
  Pencil,
  Search,
  SearchX,
  Star,
  Trash2,
} from "lucide-react";
import { Projects as initialProjects } from "@/data/project";
import { ProjectCategorys } from "@/types/project.types";
import type { Project, ProjectCategory } from "@/types/project.types";

const panelClass =
  "rounded-3xl border border-white/60 bg-white/45 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.35)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5";

const getStatus = (project: Project) =>
  project.liveUrl
    ? {
        label: "Live",
        className: "bg-emerald-400/15 text-emerald-700 dark:text-emerald-300",
      }
    : project.sourceUrl
      ? {
          label: "Code only",
          className: "bg-cyan-400/15 text-cyan-700 dark:text-cyan-300",
        }
      : {
          label: "Draft",
          className: "bg-amber-400/15 text-amber-700 dark:text-amber-300",
        };

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ProjectCategory>("All");
  const [notice, setNotice] = useState("");

  const showNotice = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2200);
  };

  const featuredCount = projects.filter((project) => project.featured).length;
  const liveCount = projects.filter((project) => project.liveUrl).length;
  const hasProjects = projects.length > 0;

  const visibleProjects = useMemo(() => {
    const search = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory =
        category === "All" || project.category === category;

      if (!matchesCategory) return false;
      if (!search) return true;

      return [
        project.title,
        project.description,
        project.category ?? "",
        project.stack.join(" "),
      ]
        .join(" ")
        .toLowerCase()
        .includes(search);
    });
  }, [projects, query, category]);

  const clearFilters = () => {
    setQuery("");
    setCategory("All");
  };

  const removeProject = (title: string) => {
    setProjects((current) =>
      current.filter((project) => project.title !== title),
    );
    showNotice(`"${title}" removed from the list.`);
  };

  return (
    <div className="space-y-5">
      {hasProjects && (
        <div className={`${panelClass} p-4 sm:p-5`}>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/70 bg-white/55 text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] dark:border-white/15 dark:bg-white/10 dark:text-white">
                <FolderKanban size={19} strokeWidth={1.7} />
              </span>
              <div>
                <p className="text-sm font-semibold">
                  {projects.length} project{projects.length === 1 ? "" : "s"}
                </p>
                <p className="mt-0.5 text-xs text-black/50 dark:text-white/50">
                  {featuredCount} featured · {liveCount} live
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <label className="relative flex min-w-0 flex-1 items-center sm:w-64 sm:flex-none">
                <span className="sr-only">Search projects</span>
                <Search
                  size={16}
                  className="pointer-events-none absolute left-3 text-black/35 dark:text-white/35"
                />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search projects..."
                  className="h-11 w-full rounded-xl border border-white/60 bg-white/45 pl-9 pr-3 text-sm text-black outline-none backdrop-blur-md placeholder:text-black/35 focus:border-black/25 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/35 dark:focus:border-white/30"
                />
              </label>
              <button
                type="button"
                onClick={() =>
                  showNotice("The new project form is ready to connect.")
                }
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-black px-4 text-xs font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 dark:bg-white dark:text-black"
              >
                <FolderPlus size={16} />
                Add project
              </button>
            </div>
          </div>

          <div
            aria-label="Filter by category"
            className="mt-4 flex gap-1.5 overflow-x-auto border-t border-black/5 pt-4 dark:border-white/5"
          >
            {ProjectCategorys.map((item) => {
              const isActive = category === item;
              return (
                <button
                  key={item}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setCategory(item)}
                  className={`whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-semibold transition-colors ${
                    isActive
                      ? "bg-black text-white shadow-md dark:bg-white dark:text-black"
                      : "text-black/55 hover:bg-black/5 hover:text-black dark:text-white/55 dark:hover:bg-white/10 dark:hover:text-white"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {!hasProjects && (
        <section className={`${panelClass} px-6 py-14 text-center sm:py-20`}>
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl border border-white/70 bg-white/55 text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_18px_40px_-25px_rgba(0,0,0,0.5)] dark:border-white/15 dark:bg-white/10 dark:text-white">
            <FolderPlus size={26} strokeWidth={1.5} />
          </span>

          <h2 className="mt-6 text-2xl font-bold tracking-tight">
            No projects yet
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-black/60 dark:text-white/60">
            Your portfolio is ready for its first piece of work. Add a project
            to show what you have built, the stack behind it, and where people
            can find it.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() =>
                showNotice("The new project form is ready to connect.")
              }
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-black px-5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto dark:bg-white dark:text-black"
            >
              <FolderPlus size={17} />
              Add your first project
            </button>
            <button
              type="button"
              onClick={() =>
                showNotice("Repository import is ready to connect.")
              }
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-white/60 bg-white/45 px-5 text-sm font-semibold text-black backdrop-blur-md transition-colors hover:bg-white/70 sm:w-auto dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              <GitBranch size={17} />
              Import from GitHub
            </button>
          </div>

          <div className="mx-auto mt-12 grid max-w-2xl gap-3 text-left sm:grid-cols-3">
            {[
              {
                title: "Describe the build",
                body: "A clear summary of the problem and what you shipped.",
              },
              {
                title: "List the stack",
                body: "The technologies that make the project work.",
              },
              {
                title: "Link it up",
                body: "A live preview, the source code, or both.",
              },
            ].map((tip) => (
              <div
                key={tip.title}
                className="rounded-2xl border border-white/50 bg-white/35 p-4 backdrop-blur-md dark:border-white/10 dark:bg-white/5"
              >
                <p className="text-sm font-semibold">{tip.title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-black/55 dark:text-white/55">
                  {tip.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {hasProjects && visibleProjects.length === 0 && (
        <section className={`${panelClass} px-6 py-14 text-center`}>
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/60 bg-white/35 text-black/55 dark:border-white/10 dark:bg-white/5 dark:text-white/55">
            <SearchX size={24} strokeWidth={1.5} />
          </span>
          <h2 className="mt-5 text-xl font-semibold">No matching projects</h2>
          <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-black/60 dark:text-white/60">
            Nothing matches the current search or category filter. Try a
            different term or reset the filters.
          </p>
          <button
            type="button"
            onClick={clearFilters}
            className="mt-5 rounded-full bg-black px-4 py-2.5 text-xs font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 dark:bg-white dark:text-black"
          >
            Clear filters
          </button>
        </section>
      )}

      {hasProjects && visibleProjects.length > 0 && (
        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project) => {
            const status = getStatus(project);
            const extraStack = project.stack.length - 3;

            return (
              <article
                key={project.title}
                className={`${panelClass} group flex flex-col p-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/80 hover:shadow-[0_28px_70px_-28px_rgba(0,0,0,0.45)] dark:hover:border-white/25 dark:hover:shadow-[0_28px_70px_-28px_rgba(0,0,0,0.9)]`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/70 bg-white/55 text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-md transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 dark:border-white/15 dark:bg-white/10 dark:text-white">
                    <FolderKanban size={19} strokeWidth={1.7} />
                  </span>
                  <div className="flex flex-wrap items-center justify-end gap-1.5">
                    {project.featured && (
                      <span
                        title="Featured project"
                        className="inline-flex items-center gap-1 rounded-full bg-amber-400/15 px-2.5 py-1 text-[10px] font-semibold text-amber-700 dark:text-amber-300"
                      >
                        <Star size={11} className="fill-current" />
                        Featured
                      </span>
                    )}
                    <span
                      className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${status.className}`}
                    >
                      {status.label}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex-1">
                  <h3 className="truncate text-base font-semibold">
                    {project.title}
                  </h3>
                  {project.category && (
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/40 dark:text-white/40">
                      {project.category}
                    </p>
                  )}
                  <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-black/55 dark:text-white/55">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 3).map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/60 bg-white/45 px-2.5 py-1 text-[10px] font-medium text-black/65 backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-white/65"
                      >
                        {technology}
                      </span>
                    ))}
                    {extraStack > 0 && (
                      <span className="rounded-full px-2.5 py-1 text-[10px] font-medium text-black/45 dark:text-white/45">
                        +{extraStack} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between gap-2 border-t border-black/10 pt-4 dark:border-white/10">
                  <div className="flex min-w-0 items-center gap-2">
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-9 items-center gap-1.5 rounded-xl bg-black px-3 text-[11px] font-semibold text-white dark:bg-white dark:text-black"
                      >
                        <ExternalLink size={13} />
                        Live
                      </Link>
                    )}
                    {project.sourceUrl && (
                      <Link
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open source code for ${project.title}`}
                        className="inline-flex h-9 items-center gap-1.5 rounded-xl border border-white/60 bg-white/45 px-3 text-[11px] font-semibold text-black/70 backdrop-blur-md transition-colors hover:bg-white/70 dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:bg-white/10"
                      >
                        <GitBranch size={13} />
                        Code
                      </Link>
                    )}
                  </div>

                  <div className="flex shrink-0 items-center gap-1.5">
                    <button
                      type="button"
                      aria-label={`Edit ${project.title}`}
                      onClick={() =>
                        showNotice(
                          `Editing "${project.title}" is ready to connect.`,
                        )
                      }
                      className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/60 bg-white/45 text-black/65 backdrop-blur-md transition-colors hover:bg-white/70 dark:border-white/10 dark:bg-white/5 dark:text-white/65 dark:hover:bg-white/10"
                    >
                      <Pencil size={15} />
                    </button>
                    <button
                      type="button"
                      aria-label={`Delete ${project.title}`}
                      onClick={() => removeProject(project.title)}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/60 bg-white/45 text-red-600/80 backdrop-blur-md transition-colors hover:bg-red-500/10 hover:text-red-600 dark:border-white/10 dark:bg-white/5 dark:text-red-300/80 dark:hover:text-red-300"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      )}

      {notice && (
        <div
          role="status"
          className="fixed bottom-24 left-1/2 z-60 -translate-x-1/2 rounded-full border border-white/60 bg-black/85 px-4 py-2.5 text-xs font-medium text-white shadow-xl backdrop-blur-xl lg:bottom-8 dark:border-white/15 dark:bg-white/90 dark:text-black"
        >
          {notice}
        </div>
      )}
    </div>
  );
}
