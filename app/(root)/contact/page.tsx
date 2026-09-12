import Link from "next/link";
import {
  ArrowUpRight,
  GitBranch,
  // Network,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { Card, Section } from "@/components/ui";

const contactLinks = [
  {
    label: "Email",
    value: "areoayomide2008@gmail.com",
    href: "mailto:areoayomide2008@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "Explore my code",
    href: "https://github.com/Ayomide Philip",
    icon: GitBranch,
  },
  // {
  //   label: "LinkedIn",
  //   value: "Let&apos;s connect",
  //   href: "https://linkedin.com",
  //   icon: Network,
  // },
];

export default function ContactPage() {
  return (
    <main>
      <Section size="md" className="pt-32 md:pt-36">
        <div className="mb-12 space-y-6 text-center">
          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-black/45 dark:text-white/45">
              Start a conversation
            </p>
            <h1 className="text-5xl font-bold tracking-tight text-black md:text-6xl dark:text-white">
              Contact
            </h1>
            <p className="mx-auto max-w-xl text-base leading-relaxed text-black/60 dark:text-white/60">
              Have an idea, a role, or a problem worth solving? Send a note and
              let&apos;s see what we can make of it.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="space-y-5">
            <Card variant="bordered" className="p-6 sm:p-8">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/70 bg-white/55 text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-md dark:border-white/15 dark:bg-white/10 dark:text-white">
                <Send size={21} strokeWidth={1.6} />
              </div>
              <h2 className="text-2xl font-semibold text-black dark:text-white">
                Let&apos;s build something useful.
              </h2>
              <p className="mt-3 leading-relaxed text-black/60 dark:text-white/60">
                I&apos;m open to thoughtful collaborations, product work, and
                conversations about making software better.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm text-black/55 dark:text-white/55">
                <MapPin size={16} /> Available worldwide
              </div>
            </Card>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {contactLinks.map((contact) => {
                const ContactIcon = contact.icon;
                return (
                  <Link
                    key={contact.label}
                    href={contact.href}
                    target={
                      contact.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      contact.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-3 rounded-2xl border border-white/50 bg-white/30 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/55 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/60 bg-white/45 text-black/75 dark:border-white/10 dark:bg-white/10 dark:text-white/75">
                      <ContactIcon size={16} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-black/45 dark:text-white/45">
                        {contact.label}
                      </span>
                      <span className="mt-1 block truncate text-sm font-medium text-black dark:text-white">
                        {contact.value}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={15}
                      className="ml-auto shrink-0 text-black/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:text-white/40"
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          <Card variant="bordered" className="p-6 sm:p-8">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45 dark:text-white/45">
                Send a message
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-black dark:text-white">
                Tell me what you&apos;re working on.
              </h2>
            </div>
            <form
              action="mailto:areoayomide"
              method="post"
              encType="text/plain"
              className="space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-medium text-black/70 dark:text-white/70">
                  Name
                  <input
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-3 text-sm text-black outline-none backdrop-blur-md placeholder:text-black/35 focus:border-black/30 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/35 dark:focus:border-white/35"
                  />
                </label>
                <label className="space-y-2 text-sm font-medium text-black/70 dark:text-white/70">
                  Email
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-white/60 bg-white/45 px-4 py-3 text-sm text-black outline-none backdrop-blur-md placeholder:text-black/35 focus:border-black/30 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/35 dark:focus:border-white/35"
                  />
                </label>
              </div>
              <label className="block space-y-2 text-sm font-medium text-black/70 dark:text-white/70">
                What can I help with?
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="A few words about your project..."
                  className="w-full rounded-2xl border resize-none border-white/60 bg-white/45 px-4 py-3 text-sm leading-relaxed text-black outline-none backdrop-blur-md placeholder:text-black/35 focus:border-black/30 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/35 dark:focus:border-white/35"
                />
              </label>
              <button
                type="submit"
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 dark:bg-white dark:text-black"
              >
                Send message
                <ArrowUpRight size={16} />
              </button>
            </form>
          </Card>
        </div>
      </Section>
    </main>
  );
}
