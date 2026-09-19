import { FolderKanban } from "lucide-react";

export default function AdminProjectsPage() {
  return (
    <section className="rounded-3xl border border-white/60 bg-white/45 p-8 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
      <FolderKanban className="text-cyan-500" size={24} />
      <h1 className="mt-5 text-3xl font-bold">Projects</h1>
      <p className="mt-2 text-sm text-black/60 dark:text-white/60">
        Manage the projects displayed on your portfolio.
      </p>
    </section>
  );
}
