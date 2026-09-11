import { Project } from "@/types/project.types";

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
    liveUrl: "",
    sourceUrl: "https://github.com/Ayomide-Philip/digital-attendance",
    featured: false,
  },
  {
    title: "Classora – Teach more, Manage less!",
    category: "Full-Stack",
    description:
      " Core pillars are class management, community engagement, real‑time chat, searchable venue mapping and advanced reminders.",
    stack: ["Next.js", "Javascript", "Tailwindcss", "MongoDB"],
    liveUrl: "https://classora-eight.vercel.app/",
    sourceUrl: "https://github.com/Ayomide-Philip/Classora",
    featured: false,
  },
  {
    title: "Country Explorer",
    category: "Frontend",
    description:
      " Core pillars are class management, community engagement, real‑time chat, searchable venue mapping and advanced reminders.",
    stack: ["Next.js", "Javascript", "Tailwindcss", "REST APIs"],
    liveUrl: "https://country-explorer-rosy.vercel.app/",
    sourceUrl: "https://github.com/Ayomide-Philip/country-explorer",
    featured: false,
  },
];
