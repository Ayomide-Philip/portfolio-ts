import type { Post } from "@/types/blog.types";

export const Posts: Post[] = [
  {
    title: "Designing interfaces that feel effortless",
    slug: "designing-interfaces-that-feel-effortless",
    excerpt:
      "A practical look at hierarchy, motion, and the small decisions that make an interface easier to understand.",
    category: "Frontend",
    status: "Published",
    date: "May 18, 2024",
    readTime: "6 min read",
    accent: "cyan",
    featured: true,
  },
  {
    title: "The quiet power of a well-shaped API",
    slug: "the-quiet-power-of-a-well-shaped-api",
    excerpt:
      "Why naming, boundaries, and predictable responses matter as much as the code behind a service.",
    category: "Backend",
    status: "Published",
    date: "Apr 29, 2024",
    readTime: "8 min read",
    accent: "amber",
  },
  {
    title: "What I learned shipping a design system",
    slug: "what-i-learned-shipping-a-design-system",
    excerpt:
      "The lessons that only appear when reusable components meet real teams, real deadlines, and real products.",
    category: "Process",
    status: "Published",
    date: "Mar 12, 2024",
    readTime: "5 min read",
    accent: "emerald",
  },
  {
    title: "Shipping a real-time app with WebSockets",
    slug: "shipping-a-real-time-app-with-websockets",
    excerpt:
      "Notes on connection handling, reconnection strategy, and keeping encrypted messages in sync across clients.",
    category: "Backend",
    status: "Draft",
    date: "Edited 3 days ago",
    readTime: "7 min read",
    accent: "amber",
  },
  {
    title: "A calmer approach to component state",
    slug: "a-calmer-approach-to-component-state",
    excerpt:
      "Reducing the number of states a component can be in, and why fewer branches lead to fewer bugs.",
    category: "Frontend",
    status: "Draft",
    date: "Edited 6 days ago",
    readTime: "4 min read",
    accent: "cyan",
  },
  {
    title: "How I scope small projects that still feel polished",
    slug: "how-i-scope-small-projects",
    excerpt:
      "A short framework for deciding what belongs in version one and what should wait for real feedback.",
    category: "Process",
    status: "Scheduled",
    date: "Publishes Oct 2, 2024",
    readTime: "6 min read",
    accent: "emerald",
  },
];
