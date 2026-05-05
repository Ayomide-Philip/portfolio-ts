import Link from "next/link";
import { Section, Card, Button, Icon } from "@/components/ui";

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string[];
  accent: "cyan" | "amber" | "emerald";
  href: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  stack,
  accent,
  href,
}) => {
  const accentColors = {
    cyan: "bg-cyan-100 dark:bg-cyan-900/30",
    amber: "bg-amber-100 dark:bg-amber-900/30",
    emerald: "bg-emerald-100 dark:bg-emerald-900/30",
  };

  return (
    <Card
      variant="default"
      className="overflow-hidden group hover:shadow-xl transition-shadow duration-300"
    >
      <div
        className={`h-48 ${accentColors[accent]} flex items-center justify-center`}
      >
        <div className="text-6xl opacity-10">✦</div>
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-black dark:text-white">
          {title}
        </h3>
        <p className="text-black/60 dark:text-white/60 text-sm">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 text-xs font-medium text-black dark:text-white"
            >
              {tech}
            </span>
          ))}
        </div>
        <Link href={href} className="inline-block pt-2">
          <button className="flex items-center gap-2 text-sm font-semibold text-black dark:text-white group-hover:gap-3 transition-all duration-300">
            View Project
            <Icon name="external" size={16} />
          </button>
        </Link>
      </div>
    </Card>
  );
};

export default function Projects() {
  const projects: ProjectCardProps[] = [
    {
      title: "SaaS Dashboard",
      description:
        "Real-time analytics platform with interactive charts and user management.",
      stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      accent: "cyan",
      href: "#",
    },
    {
      title: "Mobile App",
      description:
        "Cross-platform mobile application with offline-first capabilities.",
      stack: ["React Native", "Firebase", "Redux"],
      accent: "amber",
      href: "#",
    },
    {
      title: "Design System",
      description:
        "Comprehensive component library and design tokens for enterprise apps.",
      stack: ["React", "Storybook", "TypeScript"],
      accent: "emerald",
      href: "#",
    },
  ];

  return (
    <Section size="md" id="projects" className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
          Featured Projects
        </h2>
        <p className="text-black/60 dark:text-white/60 text-lg max-w-2xl mx-auto">
          A selection of recent work showcasing modern development practices.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      <div className="text-center pt-8">
        <Link href="#">
          <Button variant="secondary" size="lg">
            View All Projects
          </Button>
        </Link>
      </div>
    </Section>
  );
}
