import { accentStyles } from "@/data/project";

export interface Project {
  title: string;
  category?: Exclude<ProjectCategory, "All">;
  description: string;
  stack: string[];
  accent?: keyof typeof accentStyles;
  liveUrl: string;
  sourceUrl: string;
  featured?: boolean;
}

export type ProjectCategory =
  | "All"
  | "Web App"
  | "Full-Stack"
  | "System"
  | "WebSocket";
