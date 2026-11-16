import { HeroSection } from "@/components/hero-section";
import { WhatIDoSection } from "@/components/what-i-do-section";
import { TechStackSection } from "@/components/tech-stack-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactCtaSection } from "@/components/contact-cta-section";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <WhatIDoSection />
      <TechStackSection />
      <ProjectsSection />
      <ContactCtaSection />
    </main>
  );
}
