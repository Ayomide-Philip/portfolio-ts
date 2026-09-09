import { Section, Card, Icon } from "@/components/ui";

interface FeatureCardProps {
  icon: "spark" | "server" | "bolt" | "shield";
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <Card
    variant="bordered"
    className="p-6 group hover:bg-white/80 dark:hover:bg-black/80 transition-colors duration-300"
  >
    <div className="space-y-3">
      <div className="w-12 h-12 rounded-lg bg-black/5 dark:bg-white/5 flex items-center justify-center group-hover:bg-black/10 dark:group-hover:bg-white/10 transition-colors duration-300">
        <Icon name={icon} size={24} className="text-black dark:text-white" />
      </div>
      <h3 className="text-lg font-semibold text-black dark:text-white">
        {title}
      </h3>
      <p className="text-black/60 dark:text-white/60 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  </Card>
);

export default function Features() {
  const features: FeatureCardProps[] = [
    {
      icon: "spark",
      title: "Beautiful UI",
      description:
        "Pixel-perfect interfaces with attention to detail. Every component is crafted for optimal user experience.",
    },
    {
      icon: "server",
      title: "Scalable APIs",
      description:
        "Robust backend systems designed for performance and reliability. Built to handle growth at any scale.",
    },
    {
      icon: "bolt",
      title: "Lightning Fast",
      description:
        "Optimized for speed with modern tooling. Core Web Vitals matter, and they're optimized by default.",
    },
    {
      icon: "shield",
      title: "Secure & Tested",
      description:
        "Production-ready code with comprehensive testing. Security best practices built into every layer.",
    },
  ];

  return (
    <Section size="md" className="bg-zinc-50/50 dark:bg-zinc-900/50">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
            What I Offer
          </h2>
          <p className="text-black/60 dark:text-white/60 text-lg max-w-2xl mx-auto">
            End-to-end development solutions focused on quality, performance,
            and user satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} />
          ))}
        </div>
      </div>
    </Section>
  );
}
