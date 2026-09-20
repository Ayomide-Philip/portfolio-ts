export const PostCategorys = ["All", "Frontend", "Backend", "Process"] as const;

export type PostCategory = (typeof PostCategorys)[number];

export const PostStatusFilters = [
  "All",
  "Published",
  "Draft",
  "Scheduled",
] as const;

export type PostStatusFilter = (typeof PostStatusFilters)[number];

export type PostStatus = Exclude<PostStatusFilter, "All">;

export type PostAccent = "cyan" | "amber" | "emerald";

export interface Post {
  title: string;
  slug: string;
  excerpt: string;
  category: Exclude<PostCategory, "All">;
  status: PostStatus;
  date: string;
  readTime: string;
  accent: PostAccent;
  featured?: boolean;
}
