import Link from "next/link";
import { Section, Button } from "@/components/ui";

export default function Hero() {
  return (
    <Section size="lg" className="pt-32 text-center">
      <div className="space-y-6 mx-auto max-w-3xl">
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-linear-to-r from-black via-black to-zinc-600 dark:from-white dark:via-white dark:to-zinc-400 bg-clip-text text-transparent">
              Build faster with modern tech
            </span>
          </h1>
          <p className="text-lg md:text-xl text-black/60 dark:text-white/60">
            Full-stack developer crafting beautiful, performant web experiences.
            Frontend + Backend + Cloud Infrastructure.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link href="#projects">
            <Button size="lg" variant="primary">
              View Projects
            </Button>
          </Link>
          <Link href="#contact">
            <Button size="lg" variant="secondary">
              Contact Me
            </Button>
          </Link>
        </div>

        <div className="pt-12 grid grid-cols-3 gap-4 max-w-md mx-auto text-sm text-black/60 dark:text-white/60">
          <div>
            <div className="font-bold text-black dark:text-white">5+</div>
            <div>Projects Built</div>
          </div>
          <div>
            <div className="font-bold text-black dark:text-white">2+</div>
            <div>Years Experience</div>
          </div>
          <div>
            <div className="font-bold text-black dark:text-white">100%</div>
            <div>Client Satisfaction</div>
          </div>
        </div>
      </div>
    </Section>
  );
}
