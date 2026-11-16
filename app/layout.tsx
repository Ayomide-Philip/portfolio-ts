import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingNavbar } from "@/components/floating-navbar";

export const metadata: Metadata = {
  title: "Senior Full-Stack Developer | Portfolio",
  description:
    "Architecting high-throughput distributed systems, real-time engines, and resilient web platforms.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans antialiased selection:bg-teal-500/20 selection:text-teal-900 dark:selection:text-teal-200 transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNavbar />
          <div className="flex-1 pt-20 sm:pt-24">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
