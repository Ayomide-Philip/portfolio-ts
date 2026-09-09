import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/sections/Footer";
import AuraBackground from "@/components/AuraBackground";

export default function Page() {
  return (
    <AuraBackground>
      <div className="flex flex-col">
        <Navbar />
        <Hero />
        <Features />
        <Projects />
        <Skills />
        <CallToAction />
        <Footer />
      </div>
    </AuraBackground>
  );
}
