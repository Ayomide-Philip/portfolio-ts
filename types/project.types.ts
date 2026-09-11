export interface Project {
  title: string;
  category?: Exclude<ProjectCategory, "All">;
  description: string;
  stack: string[];
  liveUrl: string;
  sourceUrl: string;
  featured?: boolean;
}

export type ProjectCategory = (typeof ProjectCategorys)[number];

export const ProjectCategorys = [
  "All",
  "Web App",
  "Full-Stack",
  "System",
  "WebSocket",
  "Frontend",
  "Backend",
] as const;
