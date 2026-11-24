/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingNavbar } from "@/components/floating-navbar";
import { Footer } from "@/components/footer";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#080B11" },
  ],
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      "https://ayomide-philip-beta.vercel.app",
  ),
  title: {
    default: "Ayomide Philip | Fullstack & Systems Developer",
    template: "%s | Ayomide Philip",
  },
  description:
    "Fullstack developer crafting high-performance web applications, distributed systems, and real-time platforms with Next.js, TypeScript, and modern cloud tech.",
  applicationName: "Ayomide Philip Portfolio",
  authors: [
    { name: "Ayomide Philip", url: "https://github.com/Ayomide-Philip" },
  ],
  creator: "Ayomide Philip",
  publisher: "Ayomide Philip",
  keywords: [
    "Ayomide Philip",
    "Fullstack Developer",
    "Next.js Developer",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "Software Engineer Portfolio",
    "Web Development",
    "Systems Architecture",
  ],
  category: "technology",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Ayomide Philip — Portfolio",
    title: "Ayomide Philip | Fullstack & Systems Developer",
    description:
      "Fullstack developer crafting high-performance web applications, distributed systems, and real-time platforms with Next.js and TypeScript.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Ayomide Philip | Fullstack & Systems Developer - sudo rm -rf /",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AyomidePhilip",
    creator: "@AyomidePhilip",
    title: "Ayomide Philip | Fullstack & Systems Developer",
    description:
      "Fullstack developer crafting high-performance web applications and distributed systems with Next.js and TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://ayomide-philip-beta.vercel.app/#person",
      name: "Ayomide Philip",
      url: "https://ayomide-philip-beta.vercel.app",
      jobTitle: "Fullstack & Systems Developer",
      sameAs: ["https://github.com/Ayomide-Philip", "https://linkedin.com"],
      knowsAbout: [
        "Next.js",
        "TypeScript",
        "React",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "Distributed Systems",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://ayomide-philip-beta.vercel.app/#website",
      url: "https://ayomide-philip-beta.vercel.app",
      name: "Ayomide Philip Portfolio",
      publisher: {
        "@id": "https://ayomide-philip-beta.vercel.app/#person",
      },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="relative min-h-full flex flex-col bg-background text-foreground font-sans antialiased selection:bg-teal-500/20 selection:text-teal-900 dark:selection:text-teal-200 transition-colors duration-300">
        <div
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none -z-10 bg-dot-matrix mask-[radial-gradient(ellipse_at_center,black_80%,transparent_98%)] transition-opacity duration-300"
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNavbar />
          <div className="flex-1 pt-20 sm:pt-24">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
