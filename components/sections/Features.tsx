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
    className="group p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/70 hover:shadow-[0_28px_70px_-24px_rgba(0,0,0,0.35)] dark:hover:border-white/25 dark:hover:shadow-[0_28px_70px_-24px_rgba(0,0,0,0.9)]"
  >
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/90 to-transparent dark:via-white/30"
    />
    <span
      aria-hidden="true"
      className="pointer-events-none absolute -right-12 -top-16 h-40 w-40 rounded-full bg-white/80 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 dark:bg-white/20"
    />

    <div className="relative space-y-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/70 bg-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_24px_-12px_rgba(0,0,0,0.45)] backdrop-blur-md transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 dark:border-white/15 dark:bg-white/10 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
        <Icon
          name={icon}
          size={22}
          className="text-black/75 transition-colors duration-500 group-hover:text-black dark:text-white/85 dark:group-hover:text-white"
        />
      </div>

      <h3 className="bg-linear-to-br capitalize from-black to-zinc-500 bg-clip-text text-lg font-semibold text-transparent dark:from-white dark:to-zinc-400">
        {title}
      </h3>

      <p className="text-sm leading-relaxed text-black/60 dark:text-white/60">
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
    <Section size="md" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-32 top-8 h-80 w-80 rounded-full bg-white/50 blur-3xl dark:bg-white/10" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-white/40 blur-3xl dark:bg-white/5" />
      </div>

      <div className="space-y-14">
        <div className="mx-auto max-w-2xl space-y-5 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-black/60 backdrop-blur-md dark:border-white/15 dark:bg-white/5 dark:text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            Capabilities
          </span>

          <h2 className="text-4xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
            What I Offer
          </h2>

          <p className="text-lg text-black/60 dark:text-white/60">
            End-to-end development solutions focused on quality, performance,
            and user satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} />
          ))}
        </div>
      </div>
    </Section>
  );
}
