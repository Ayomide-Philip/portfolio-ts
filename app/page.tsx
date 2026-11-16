import { HeroSection } from "@/components/hero-section";
import { WhatIDoSection } from "@/components/what-i-do-section";
import { TechStackSection } from "@/components/tech-stack-section";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <WhatIDoSection />
      <TechStackSection />
    </main>
  );
}
