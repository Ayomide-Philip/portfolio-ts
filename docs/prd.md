# Product Requirements Document (PRD)

## 1. Document Overview

- **Project Name:** Ayomide Philip — Senior Developer Portfolio (`portfolio-ts`)
- **Document Version:** v2.0.0
- **Document Status:** Approved & Active
- **Last Updated:** 2026-11-17
- **Scope Tier:** Standard Tier
- **Document Purpose:** Single source of truth defining the product vision, single-page hybrid architecture, tactile design system, functional specifications, and future roadmap for Ayomide Philip's developer portfolio.

### Changelog (v1.0.0 → v2.0.0)
- **Scrapped Admin Portal & OAuth:** Removed all Google OAuth, Auth.js, Prisma, and database CMS requirements in favor of a lean, zero-maintenance static architecture.
- **Adopted Single-Page Hybrid Navigation:** Replaced multi-page navigation (`/about`, `/contact`, `/blog`) with smooth anchor scrolling on the homepage (`#services`, `#stack`, `#projects`, `#contact`) alongside a dedicated `/projects` archive.
- **Automated GitHub Social Cards:** Replaced local image folder dependencies with automated GitHub OpenGraph preview cards (`https://opengraph.githubassets.com/1/{owner}/{repo}`) and custom `/github-fallback.png` fallback.
- **Mobile Responsive Polish:** Updated tech stack grid to 1-card-per-row on mobile with logo on top and name below; hid desktop inspector sidebar on mobile screens.
- **Blog Engine Deferred:** Slated technical blog for future phase using local Markdown/MDX files rather than a database CMS.

---

## 2. Product Overview

### 2.1 Problem Statement
Recruiters, engineering leaders, and potential clients spend an average of 15–30 seconds reviewing a developer portfolio. Traditional multi-page portfolios create unnecessary friction with empty or fragmented sub-pages, while static templates often lack the technical depth and micro-interactions required to signal senior-level engineering craftsmanship.

### 2.2 Product Vision & Proposed Solution
A modern, high-performance developer portfolio built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**. It features an immersive single-page storytelling flow on the home route, persistent light/dark theming, interactive telemetry inspection on desktop, and a dedicated filterable `/projects` archive with real-time search and automated GitHub social cards.

### 2.3 Goals
- **Zero-Friction Recruiter Experience:** Enable visitors to evaluate engineering philosophy, tech stack proficiency, and flagship project proof points within a 20-second scroll.
- **Tactile Senior-Level Craft:** Implement polished micro-interactions, dark/light mode parity, frosted glassmorphism, and responsive dot-matrix canvas backdrops.
- **Zero Asset Maintenance:** Automate project preview cards directly via GitHub's OpenGraph engine with a local brand fallback, eliminating manual screenshot cropping.
- **Future-Proof Extensibility:** Lay the architectural foundation for a local Markdown-driven technical blog without requiring external databases or server management.

### 2.4 Non-Goals
- **No Admin CMS / Authentication:** No login portals, OAuth providers, session databases, or password gateways.
- **No Database Dependencies:** Content is statically typed and version-controlled via code.
- **No Multi-Page Fragmented Routes for Core Bio:** No separate `/about` or `/contact` pages; all core narrative sections reside seamlessly on the main page.

---

## 3. Target Audience & Personas

1. **Tech Recruiters & Talent Partners:**
   - *Goal:* Rapidly verify seniority, location, core stack, availability status, and contact channels.
   - *Needs:* Smooth skimming, clear value proposition, instant email copy action, direct LinkedIn/GitHub links.
2. **Engineering Managers & Technical Directors:**
   - *Goal:* Assess code quality, architectural depth, system design decisions, and real-world project impact.
   - *Needs:* Deep stack rationale ("Why I reach for this"), live application demos, and clean source repositories.
3. **Prospective Clients & Founders:**
   - *Goal:* Evaluate execution speed, full-stack capability, UI/UX polish, and communication readiness.

---

## 4. Architecture & Navigation Structure

```
                                  +-----------------------+
                                  |     Floating Nav      |
                                  +-----------+-----------+
                                              |
        +-------------------+-----------------+-------------------+-------------------+
        |                   |                                     |                   |
        v                   v                                     v                   v
+---------------+   +---------------+                     +---------------+   +---------------+
|  What I Build |   |  Tech Stack   |                     |   Projects    |   |  Contact CTA  |
|  (#services)  |   |    (#stack)   |                     |  (#projects)  |   |   (#contact)  |
+---------------+   +---------------+                     +-------+-------+   +---------------+
                                                                  |
                                                         "View all projects"
                                                                  |
                                                                  v
                                                        +-------------------+
                                                        |  /projects Page   |
                                                        |  - Live Search    |
                                                        |  - Category Pills |
                                                        |  - GitHub Cards   |
                                                        +-------------------+
```

---

## 5. Functional Requirements

### 5.1 Theme & Layout Engine
- **FR-001: Persistent Theme Engine (Light & Dark Mode)**
  - **Rules:** Powered by `next-themes`. Defaults to system preference on initial visit. Persists selection across reloads with zero flash of unstyled content (FOUC).
  - **Colors:**
    - Light Mode: Neutral slate background (`#F8FAFC`), white surface (`#FFFFFF`), brand teal accent (`#0F766E` / `bg-teal-700`).
    - Dark Mode: Deep dark background (`#080B11`), dark surface (`#111622`), vibrant teal accent (`#2DD4BF` / `dark:bg-teal-400`).
  - **Acceptance Criteria:**
    - [ ] Clicking the theme toggle switches seamlessly between light and dark themes.
    - [ ] All typography maintains strict 11px minimum floor and passes WCAG AA contrast standards.
    - [ ] Buttons, badges, and glassmorphism rings adapt contrast automatically.

- **FR-002: Floating Island Navigation Bar**
  - **Rules:** Fixed pill navbar (`max-w-3xl`) with backdrop blur (`backdrop-blur-2xl`). Contains Logo, Section Anchors, Theme Toggle, and "Get in touch" CTA button.
  - **Links:**
    - `What I do` $\rightarrow$ `/#services`
    - `Stack` $\rightarrow$ `/#stack`
    - `Projects` $\rightarrow$ `/#projects`
    - `Contact` $\rightarrow$ `/#contact`
  - **Acceptance Criteria:**
    - [ ] Smooth scrolling triggers with appropriate scroll offset (`scroll-mt-24`) so headers remain visible.
    - [ ] Mobile view collapses into a clean glassmorphic dropdown menu.
    - [ ] Navigating from `/projects` back to an anchor properly redirects to the homepage section.

---

### 5.2 Homepage Narrative Sections (`/`)

- **FR-003: Hero Section**
  - **Description:** Above-the-fold identity statement establishing Ayomide Philip's role and specialization.
  - **Acceptance Criteria:**
    - [ ] Displays name, role title, tactile availability indicator, and primary call-to-actions.
    - [ ] Visual portrait/graphic with responsive layout.

- **FR-004: What I Build Section (`#services`)**
  - **Description:** Demonstrates engineering versatility across frontend craft, backend APIs, and developer workflows.
  - **Acceptance Criteria:**
    - [ ] Interactive live simulation cards (e.g. streaming JSON responses, real React button sandbox, workflow check).
    - [ ] Semantic section wrapper with `id="services"` and `scroll-mt-24`.

- **FR-005: Tech Stack & Telemetry Inspector (`#stack`)**
  - **Description:** Comprehensive inventory of programming languages, frameworks, databases, and toolchains with rationale.
  - **Desktop Behavior (`lg:` and up):**
    - Left side: 3-column grid of technologies categorized by Runtime/Language, Styling, Backend/Cloud, and Tooling.
    - Right side: Sticky Telemetry Inspector with `[Impact]` and `[Config]` tabs detailing production role, "Why I reach for this", applied projects, and code snippets.
  - **Mobile Behavior (`< lg`):**
    - Cards stack vertically (1 card per row: `grid-cols-1`).
    - Card layout: Logo on top (`h-12 w-12 rounded-2xl mb-2.5`), followed by tech name below.
    - Inspector sidebar is strictly hidden (`hidden lg:block`) to prevent vertical clutter.
    - No distracting "Focused" pill or pulse badge on tap.
  - **Acceptance Criteria:**
    - [ ] Category chips filter items dynamically with live count badges.
    - [ ] Desktop clicking updates the sticky inspector in real time.
    - [ ] Mobile renders a clean 1-per-row grid without sidebar interference.

- **FR-006: Selected Projects Section (`#projects`)**
  - **Description:** Highlights top 3 curated flagship applications with tactile cards and direct actions.
  - **Acceptance Criteria:**
    - [ ] Displays top 3 featured projects using the standardized `ProjectCard` component.
    - [ ] Each card features automated GitHub preview image, title, category/year badges, stack chips, Live Demo, and GitHub code links.
    - [ ] Live Demo button adheres strictly to brand teal (`bg-teal-700` in light mode, `dark:bg-teal-400` in dark mode).
    - [ ] Centerpiece "View all projects" button features frosted glassmorphism and links directly to `/projects`.

- **FR-007: Contact CTA Section (`#contact`)**
  - **Description:** Direct outreach terminal for recruiting inquiries and client discussions.
  - **Acceptance Criteria:**
    - [ ] Centered headline and availability notice.
    - [ ] One-click copy email button with feedback indicator ("Copied!").
    - [ ] Verified external links to GitHub, LinkedIn, and direct mail.

---

### 5.3 Dedicated Projects Archive (`/projects`)

- **FR-008: Projects Archive & Live Filter**
  - **Description:** Full catalog of public applications, security protocols, and cloud platforms.
  - **Features:**
    - **Header:** Back-link (`← Back to portfolio` linking to `/#projects`), total systems counter badge.
    - **Live Search:** Instant client-side filtering by project title, description, or stack tags.
    - **Category Filters:** Filter by `All`, `Full-Stack`, `Frontend`, and `Systems & AI`.
    - **Zero-State:** Clean fallback message with a "Reset filters" action when query yields no matches.
  - **Acceptance Criteria:**
    - [ ] Typing in search input instantly narrows the displayed cards with zero page reloads.
    - [ ] Category buttons update the filtered view in real time.
    - [ ] All project cards render identically to homepage cards using `ProjectCard`.

---

### 5.4 Automated Project Image Engine

- **FR-009: Dynamic GitHub Social Cards & Local Fallback**
  - **Description:** Eliminates manual image uploads by auto-generating preview cards from GitHub repository URLs.
  - **Logic:**
    1. Extracts repository path from `sourceUrl` (stripping `https://github.com/`, `.git`, and trailing slashes).
    2. Queries GitHub's official OpenGraph image endpoint:
       `https://opengraph.githubassets.com/1/{owner}/{repo}` (e.g. `Ayomide-Philip/Classora`).
    3. If `sourceUrl` is empty, non-GitHub, or fails to load, it automatically falls back to `/github-fallback.png`.
  - **Acceptance Criteria:**
    - [ ] Public GitHub repos display their live GitHub OpenGraph preview card automatically.
    - [ ] Projects without public repos seamlessly display the custom Octocat fallback image.
    - [ ] Card images support lazy loading and responsive aspect-video sizing.

---

## 6. UI/UX & Design Token Specifications

| Token | Light Mode Value | Dark Mode Value | Usage |
| :--- | :--- | :--- | :--- |
| **Background** | `#F8FAFC` (Slate 50) | `#080B11` (Deep Charcoal) | Canvas root background |
| **Surface** | `#FFFFFF` | `#111622` (Navy Surface) | Cards, modals, drawers |
| **Text Primary** | `#0F172A` (Slate 900) | `#F1F5F9` (Slate 100) | Headings, titles |
| **Text Secondary** | `#475569` (Slate 600) | `#94A3B8` (Slate 400) | Body copy, subtitles |
| **Brand Accent** | `#0F766E` (Teal 700) | `#2DD4BF` (Teal 400) | Primary buttons, active rings |
| **Border Neutral** | `rgba(226,232,240,0.85)` | `rgba(255,255,255,0.08)` | Card borders, dividers |
| **Glass Backdrop** | `backdrop-blur-xl bg-white/70` | `backdrop-blur-xl bg-white/6` | Island nav, glass buttons |
| **Font Sans** | Instrument Sans | Instrument Sans | Headings, body prose |
| **Font Mono** | JetBrains Mono | JetBrains Mono | Badges, code snippets, metadata |
| **Minimum Font** | `11px` | `11px` | Strict accessibility floor |

---

## 7. Future Roadmap: Markdown Blog Engine (Phase 2)

- **Architecture:** Local Markdown/MDX content stored in `content/blog/*.mdx` (Zero database required).
- **Capabilities:**
  - Frontmatter schema: `title`, `date`, `summary`, `tags`, `readingTime`, `published`.
  - Syntax-highlighted code blocks with line numbering.
  - Table of contents with active scroll-spy.
  - Reusable Callout alerts (Note, Tip, Warning).
- **Execution Condition:** Activated only once at least 2 full-length technical engineering deep-dives are written.

---

## 8. Verification & Acceptance Checklist

- [x] **Single-Page Navigation:** Navbar smooth-scrolls to `#services`, `#stack`, `#projects`, and `#contact`.
- [x] **Responsive Tech Stack:** Mobile displays 1 card per row (logo on top, name below) with sidebar inspector hidden.
- [x] **Project Cards:** Card design in `#projects` matches `/projects` 1:1.
- [x] **Light Mode Button Colors:** Live Demo buttons render brand teal (`bg-teal-700`) in light mode, not solid black.
- [x] **Automated Image Fallback:** GitHub OpenGraph URLs are generated dynamically with `/github-fallback.png` fallback.
- [x] **Search & Filters:** Dedicated `/projects` page correctly filters by search term and category pills.
- [x] **Design Tokens:** Strict 11px font floor and WCAG AA contrast maintained across both modes.
