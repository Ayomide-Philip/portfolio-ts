import { Project } from "@/types/project.types";

export const Projects: Project[] = [
  {
    title: "End to End Encryption",
    category: "WebSocket",
    description:
      "A secure, real-time chat application built with Next.js, WebSockets, and AES-GCM 256-bit encryption. Messages are encrypted in the browser before being sent",
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
    title: "Fashion E-Commerce",
    category: "Full-Stack",
    description:
      " AI-Based Personalized Recommendation System for Fashion E-Commerce with Content-based AI recommendations and AI image classification",
    stack: ["Next.js", "Typescript", "Tailwindcss", "REST APIs", "MongoDB"],
    liveUrl: "https://ecommerce-fashion-7fz3.onrender.com/",
    sourceUrl: "https://github.com/Ayomide-Philip/ecommerce-project",
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
    title: "Classora",
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
  {
    title: "DevSpace",
    category: "Full-Stack",
    description:
      " Core pillars are class management, community engagement, real‑time chat, searchable venue mapping and advanced reminders.",
    stack: ["Next.js", "Javascript", "Tailwindcss", "REST APIs", "MongoDB"],
    liveUrl: "https://dev-space-tau.vercel.app/",
    sourceUrl: "https://github.com/Ayomide-Philip/DevSpace",
    featured: false,
  },
];
