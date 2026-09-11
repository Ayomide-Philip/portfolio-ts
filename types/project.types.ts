export interface Project {
  title: string;
  category?: Exclude<ProjectCategory, "All">;
  description: string;
  stack: string[];
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
