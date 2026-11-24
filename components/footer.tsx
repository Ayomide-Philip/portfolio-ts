import { SiGithub } from "react-icons/si";

export async function Footer() {
  "use cache";
  return (
    <footer className="w-full border-t border-slate-200/80 dark:border-white/8 bg-slate-100/70 dark:bg-[#030712]/95 backdrop-blur-xl transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-900 dark:text-slate-100 font-sans text-sm">
              Ayomide Philip
            </span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
            <a
              href="https://github.com/Ayomide-Philip"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <SiGithub size={13} />
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.69 1.69 0 0 0 1.69-1.68 1.69 1.69 0 0 0-1.69-1.69 1.69 1.69 0 0 0-1.68 1.69c0 .93.76 1.68 1.68 1.68m1.39 9.94v-8.37H5.07v8.37h2.78z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${DEVELOPER_EMAIL}`}
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export const DEVELOPER_EMAIL = "areoayomide1234@gmail.com";
