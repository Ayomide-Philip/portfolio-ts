import Link from "next/link";
import { Section, Button } from "@/components/ui";
import LetterGlitch from "../ui/letterglitch";
import Toggle from "../toggle";

export default function Hero() {
  return (
    <div className="relative isolate min-h-170 overflow-hidden md:min-h-190">
      <div className="pointer-events-none absolute inset-0 z-0">
        <LetterGlitch
          className="h-full w-full"
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={true}
          smooth
          glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
        />
      </div>
      <div className="absolute right-4 top-4 z-20 md:hidden">
        <Toggle className="mr-0 bg-white text-black hover:bg-zinc-100" />
      </div>
      <Section size="lg" className="relative z-10 pt-32 text-center">
        <div className="space-y-6 mx-auto max-w-3xl">
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-linear-to-r from-white via-white to-zinc-300 bg-clip-text text-transparent">
                Build faster with modern tech
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/70">
              Full-stack developer crafting beautiful, performant web
              experiences. Frontend + Backend + Cloud Infrastructure.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="#projects">
              <Button
                size="lg"
                variant="primary"
                className="bg-white text-black hover:bg-zinc-200"
              >
                View Projects
              </Button>
            </Link>
            <Link href="#contact">
              <Button
                size="lg"
                variant="secondary"
                className="border-white/20 text-white hover:bg-white/10"
              >
                Contact Me
              </Button>
            </Link>
          </div>

          <div className="pt-12 grid grid-cols-3 gap-4 max-w-md mx-auto text-sm text-white/70">
            <div>
              <div className="font-bold text-white">5+</div>
              <div>Projects Built</div>
            </div>
            <div>
              <div className="font-bold text-white">2+</div>
              <div>Years Experience</div>
            </div>
            <div>
              <div className="font-bold text-white">100%</div>
              <div>Client Satisfaction</div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
