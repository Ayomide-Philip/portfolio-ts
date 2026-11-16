export default function Home() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-5xl flex-col items-center justify-center px-6 text-center">
      <div className="space-y-6 max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-slate-100">
          Senior Full-Stack Engineer &amp; Distributed Systems Architect
        </h1>

        <p className="mx-auto max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
          Designing and deploying fault-tolerant backend infrastructures, high-throughput event pipelines, and precision web experiences.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="/projects"
            className="inline-flex h-10 items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white transition-all duration-150 hover:bg-slate-800 active:scale-95 dark:bg-teal-400 dark:text-[#080B11] dark:hover:bg-teal-300"
          >
            Explore Projects
          </a>
          <a
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-medium text-slate-700 transition-all duration-150 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 active:scale-95 dark:border-[#1E283D] dark:bg-[#111622] dark:text-slate-300 dark:hover:border-[#334466] dark:hover:text-slate-100"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </main>
  );
}
