import { Section } from "@/components/ui";

interface SkillGroupProps {
  title: string;
  skills: string[];
}

const SkillGroup: React.FC<SkillGroupProps> = ({ title, skills }) => (
  <div className="space-y-3">
    <h3 className="text-sm font-semibold text-black dark:text-white uppercase tracking-wide">
      {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-sm font-medium text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-300"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default function Skills() {
  const skillGroups: SkillGroupProps[] = [
    {
      title: "Frontend",
      skills: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Vue.js",
        "Framer Motion",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Python",
        "Express",
        "PostgreSQL",
        "MongoDB",
        "REST APIs",
      ],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "GraphQL"],
    },
  ];

  return (
    <Section size="md" id="about" className="bg-zinc-50/50 dark:bg-zinc-900/50">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
            Skills & Expertise
          </h2>
          <p className="text-black/60 dark:text-white/60 text-lg max-w-2xl mx-auto">
            Continuously learning and evolving with the latest technologies and
            best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <SkillGroup key={group.title} {...group} />
          ))}
        </div>
      </div>
    </Section>
  );
}
