import { Project } from "@/types/project.types";

export const accentStyles = {
  cyan: {
    wash: "from-cyan-300/60 via-cyan-200/20 to-transparent",
    glow: "bg-cyan-300/50 dark:bg-cyan-400/25",
    mark: "text-cyan-950/70 dark:text-cyan-100/80",
  },
  amber: {
    wash: "from-amber-300/60 via-amber-200/20 to-transparent",
    glow: "bg-amber-300/50 dark:bg-amber-400/25",
    mark: "text-amber-950/70 dark:text-amber-100/80",
  },
  emerald: {
    wash: "from-emerald-300/60 via-emerald-200/20 to-transparent",
    glow: "bg-emerald-300/50 dark:bg-emerald-400/25",
    mark: "text-emerald-950/70 dark:text-emerald-100/80",
  },
  violet: {
    wash: "from-violet-300/50 via-violet-200/20 to-transparent",
    glow: "bg-violet-300/40 dark:bg-violet-400/20",
    mark: "text-violet-950/70 dark:text-violet-100/80",
  },
};

export const Projects: Project[] = [
  {
    title: "End to End Encryption",
    category: "WebSocket",
    description:
      "A secure, real-time chat application built with Next.js, WebSockets, and AES-GCM 256-bit encryption. Messages are encrypted in the browser before being sent — the server only relays ciphertext.",
    stack: [
      "Next.js",
      "TypeScript",
      "Web Crypto API",
      "WebSockets",
      "Tailwindcss",
    ],
    accent: "cyan",
    liveUrl: "https://e2e-tbki.onrender.com/",
    sourceUrl: "https://github.com/Ayomide-Philip/E2E",
    featured: true,
  },
  {
    title: "Digital Attendance System",
    category: "Full-Stack",
    description:
      " A location-based web application designed to streamline and secure attendance tracking in educational environments.",
    stack: ["Next.js", "Javascript", "Tailwindcss", "MongoDB"],
    accent: "cyan",
    liveUrl: "",
    sourceUrl: "https://github.com/Ayomide-Philip/digital-attendance",
    featured: false,
  },
];
