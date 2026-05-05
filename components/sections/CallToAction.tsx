import Link from "next/link";
import { Section, Button } from "@/components/ui";

export const CallToAction: React.FC = () => {
  return (
    <Section size="md" id="contact" className="text-center">
      <div className="space-y-8 max-w-2xl mx-auto">
        <div className="space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-black dark:text-white">
            Let's build something great together
          </h2>
          <p className="text-lg text-black/60 dark:text-white/60">
            Have a project in mind? I'm always interested in hearing about new
            opportunities and exciting challenges.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link href="mailto:hello@example.com">
            <Button size="lg" variant="primary">
              Get in Touch
            </Button>
          </Link>
          <Link href="#">
            <Button size="lg" variant="secondary">
              View My Resume
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
};
