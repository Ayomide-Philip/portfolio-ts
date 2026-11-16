# Product Requirements Document (PRD)

## 1. Document Overview

- **Project Name:** Portfolio-TS (Senior Developer Portfolio & Admin CMS)
- **Document Version:** v1.0.0
- **Document Status:** Approved
- **Approved Date:** 2026-11-16
- **Scope Tier:** Standard Tier
- **Document Purpose:** Single source of truth defining the product vision, multi-page architecture, visual and theme requirements, admin CMS capabilities, data entities, and technical specifications for implementation.

---

## 2. Product Overview

### 2.1 Problem Statement

Senior developers require a professional online presence that clearly demonstrates high technical competence, architectural thinking, and career impact to recruiters, engineering leaders, and potential clients. Many portfolio templates are either static (requiring code changes and redeployments for minor content updates) or lack comprehensive career context, technical depth, and admin management.

### 2.2 Product Vision & Proposed Solution

A modern, performant, multi-page developer portfolio built with Next.js 16 (App Router), TypeScript, and Tailwind CSS. It features a persistent light/dark mode system, senior-level presentation standards (case studies, architectural breakdown, career timeline, technical writing), and a private administrative dashboard secured by Auth.js via Google OAuth (restricted strictly to the owner's Gmail) for full dynamic control over projects, articles, messages, and profile data.

### 2.3 Goals

- Provide an elite, clean visual experience highlighting senior engineering caliber.
- Support persistent Light and Dark theme toggling with zero flash on initial load.
- Present a structured multi-page experience: Home, About, Projects, Blog, Contact, and Admin.
- Deliver an authenticated Admin CMS to manage dynamic content (Projects, Blog Posts, Contact Inquiries, Profile Metadata) without code updates.
- Secure admin access exclusively to the owner's Gmail account via Auth.js.
- Maintain database flexibility via an ORM (Prisma) supporting either PostgreSQL or MongoDB with zero business logic disruption.

### 2.4 Non-Goals

- Multi-tenant admin support or multiple editor accounts (single-owner only).
- Public user registration, visitor logins, or commenting systems (visitors are strictly read-only guests; no public login buttons or links exist anywhere on the site).
- Heavy visual bloat or bloated 3D animations that detract from performance and readability.

---

## 3. Target Users & User Roles

### 3.1 User Personas & Roles

1. **Recruiter / Hiring Manager (Public):** Seeks quick validation of skills, senior experience timeline, contact methods, and resume/CV download.
2. **Engineering Leader / Peer Developer (Public):** Evaluates code quality, system design capabilities, project case studies, and technical writing/blog posts.
3. **Site Owner / Administrator (Authenticated):** The portfolio owner, authenticated strictly via Google OAuth matching `ADMIN_EMAIL`, with full CRUD permissions over portfolio content.

### 3.2 Role Permissions Matrix

| Capability                                  |   Public Visitor    | Admin (Owner) |
| :------------------------------------------ | :-----------------: | :-----------: |
| View Home, About, Projects, Blog, Contact   |         ✅          |      ✅       |
| Toggle Light / Dark Mode                    |         ✅          |      ✅       |
| Submit Contact Inquiries                    |         ✅          |      ✅       |
| Public Login Links / Visitor Accounts       |   ❌ (None exist)   |   ❌ (N/A)    |
| Unlisted Admin Gateway (`/admin/login`)     | ❌ (Denied/Blocked) |      ✅       |
| Access `/admin/*` Dashboard & APIs          | ❌ (Denied/Blocked) |      ✅       |
| CRUD Projects & Case Studies                |         ❌          |      ✅       |
| Draft / Publish / Edit Blog Posts           |         ❌          |      ✅       |
| Read / Mark / Delete Contact Inquiries      |         ❌          |      ✅       |
| Edit Profile Info, Social Links, Resume URL |         ❌          |      ✅       |

---

## 4. Functional Requirements

### 4.1 Theme & Global Layout

- **FR-001: Persistent Theme Engine (Light & Dark Mode)**
  - **Description:** Global theme toggle accessible from every public page and admin view.
  - **Priority:** Must Have
  - **Rules:**
    - Default to system preference (`prefers-color-scheme`) on initial visit.
    - Persist user selection across sessions using `localStorage` and cookie/class injection without screen flicker (FOUC).
  - **Acceptance Criteria:**
    - [ ] Clicking the theme switch toggles between `light` and `dark` modes instantly.
    - [ ] Refreshing the page preserves the previously selected theme.
    - [ ] All UI components (typography, borders, cards, inputs) render legible contrast in both modes (WCAG AA).

- **FR-002: Multi-Page Navigation & Responsive Shell**
  - **Description:** Consistent header, responsive mobile drawer/navbar, and footer across all public routes.
  - **Priority:** Must Have
  - **Rules:** Nav links highlight active route state.
  - **Acceptance Criteria:**
    - [ ] Navigation includes links to `/`, `/about`, `/projects`, `/blog`, and `/contact`.
    - [ ] Mobile view renders an accessible hamburger menu with smooth toggle.
    - [ ] Footer contains copyright, quick links, and social links (GitHub, LinkedIn, Email).

---

### 4.2 Public Multi-Page Views

- **FR-003: Home Page (`/`)**
  - **Description:** High-impact landing page introducing the engineer.
  - **Priority:** Must Have
  - **Acceptance Criteria:**
    - [ ] Hero section displays name, professional title, concise value proposition, and primary CTAs ("View Projects", "Contact Me", "Resume").
    - [ ] Featured Projects highlight (top 3–4 projects with live/code links).
    - [ ] Tech stack banner / skills categorization.
    - [ ] Recent articles teaser & quick contact CTA.

- **FR-004: About Page (`/about`)**
  - **Description:** Comprehensive background, career timeline, technical depth, and downloadable CV.
  - **Priority:** Must Have
  - **Acceptance Criteria:**
    - [ ] Displays narrative bio, engineering philosophy, and career milestones in a chronological timeline.
    - [ ] Categorized skills matrix (Frontend, Backend, Cloud/DevOps, Architecture & Leadership).
    - [ ] Direct "Download Resume/CV" action linking to the latest CV file or URL.

- **FR-005: Projects Showcase (`/projects` & `/projects/[slug]`)**
  - **Description:** Filterable project catalog with deep-dive technical case study pages.
  - **Priority:** Must Have
  - **Acceptance Criteria:**
    - [ ] Lists all published projects with filter tags (e.g., Full Stack, Frontend, Backend, Open Source).
    - [ ] Each project card shows title, summary, thumbnail, tech badges, live demo link, and GitHub repository link.
    - [ ] Individual project page displays problem statement, architecture/tech stack decisions, key challenges, and results.

- **FR-006: Blog / Articles (`/blog` & `/blog/[slug]`)**
  - **Description:** Technical writing feed supporting Markdown/MDX content.
  - **Priority:** Must Have
  - **Acceptance Criteria:**
    - [ ] Lists published articles with publish date, reading time estimate, tags, and summary.
    - [ ] Post detail page renders syntax-highlighted code blocks, formatted headings, and responsive images.
    - [ ] Unfinished/draft posts are strictly excluded from public views.

- **FR-007: Contact Page (`/contact`)**
  - **Description:** Interactive inquiry form and verified contact channels.
  - **Priority:** Must Have
  - **Acceptance Criteria:**
    - [ ] Form includes fields: `Name`, `Email`, `Subject`, and `Message` with client and server-side validation.
    - [ ] Submissions are saved to the database for admin viewing.
    - [ ] Visual success notification shown on successful submission; informative error state on failure.
    - [ ] Lists verified external direct links (LinkedIn, GitHub, direct email).

---

### 4.3 Authentication & Security

- **FR-008: Private Admin Doorway via Auth.js (Google OAuth)**
  - **Description:** Unlisted administrative login page (`/admin/login`) enabling sign-in exclusively for the portfolio owner via Google OAuth.
  - **Priority:** Must Have
  - **Rules:**
    - Zero public visibility: No "Log In" or "Sign In" buttons appear anywhere in the public header, navigation, or footer.
    - Google is the sole authentication provider.
    - Only the Google account matching the environment variable `ADMIN_EMAIL` is granted access.
    - Any other Google account receives an immediate `403 Forbidden` / Access Denied page and no session is created.
  - **Acceptance Criteria:**
    - [ ] Public site contains no login links or buttons.
    - [ ] Navigating directly to `/admin` or `/admin/login` while unauthenticated presents an owner sign-in screen ("Owner Sign In with Google").
    - [ ] Signing in with the configured `ADMIN_EMAIL` successfully grants an admin session and opens the dashboard (`/admin`).
    - [ ] Signing in with any unauthorized Google account displays "403 Unauthorized: Access restricted to portfolio owner" and terminates the session.
    - [ ] Direct attempts by unauthenticated users to access any `/admin/*` route or admin API endpoints are rejected.

---

### 4.4 Admin Dashboard (`/admin`)

- **FR-009: Admin Dashboard Overview (`/admin`)**
  - **Description:** Central command view displaying high-level metrics and quick links.
  - **Priority:** Should Have
  - **Acceptance Criteria:**
    - [ ] Displays count of total projects, published articles, and unread contact messages.
    - [ ] Shows recent contact submissions with quick view action.

- **FR-010: Project Management (CRUD)**
  - **Description:** Full project management interface in the admin panel.
  - **Priority:** Must Have
  - **Acceptance Criteria:**
    - [ ] Create, Read, Update, and Delete project entries.
    - [ ] Manage project fields: title, slug, summary, full description (Markdown), tags/technologies, live URL, GitHub URL, featured status (boolean), and cover image URL.
    - [ ] Validation prevents duplicate slugs.

- **FR-011: Blog Post Management (CRUD)**
  - **Description:** Content creation and publishing system for articles.
  - **Priority:** Must Have
  - **Acceptance Criteria:**
    - [ ] Create, edit, preview, and delete blog posts.
    - [ ] Support status toggle (`Draft` vs `Published`).
    - [ ] Content editor supporting Markdown formatting with live preview.

- **FR-012: Contact Inquiries Inbox**
  - **Description:** Interface to inspect and manage inbound messages.
  - **Priority:** Must Have
  - **Acceptance Criteria:**
    - [ ] Lists received contact submissions with sender name, email, date, subject, and read/unread status.
    - [ ] Clicking a message opens full inquiry details and marks it as read.
    - [ ] Action to delete old or spam inquiries.

- **FR-013: Profile & Settings Management**
  - **Description:** Manage dynamic portfolio bio details, resume link, and social profiles.
  - **Priority:** Should Have
  - **Acceptance Criteria:**
    - [ ] Edit bio text, current job title/headline, resume link, and social handles (GitHub, LinkedIn, Twitter/X).
    - [ ] Updates reflect immediately across the public pages.

---

## 5. User Journeys & Workflows

### 5.1 Public Recruiter / Peer Flow

```
Visitor arrives at Home (/)
  ├─ Toggles Dark / Light mode (preference saved)
  ├─ Reviews Hero, headline, and featured projects
  ├─ Navigates to /about -> inspects career milestones, downloads CV
  ├─ Navigates to /projects -> filters by stack -> clicks Project Case Study
  ├─ Navigates to /blog -> reads technical article
  └─ Navigates to /contact -> submits inquiry form -> receives confirmation
```

### 5.2 Admin Authentication & Management Flow

```
Owner directly navigates to /admin (unlisted private route)
  ├─ If unauthenticated: shows "Owner Sign In with Google"
  ├─ Clicks "Sign in with Google" -> Google OAuth Consent
  ├─ Auth.js checks authenticated email against ADMIN_EMAIL
  │    ├─ If Email != ADMIN_EMAIL: 403 Access Denied (Session Terminated)
  │    └─ If Email == ADMIN_EMAIL: Issues Admin Session & opens Dashboard (/admin)
  └─ In Admin Dashboard (/admin):
       ├─ Adds new project with live demo and GitHub link -> Published to /projects
       ├─ Writes draft article -> Sets status to Published -> Visible on /blog
       └─ Reviews new contact message in Inbox -> Marks as read
```

---

## 6. UI/UX Requirements & Visual Standards

### 6.1 Design Principles for Senior Dev Standards

- **Aesthetic:** Minimalist, high contrast, clean typography (Geist / Inter + JetBrains Mono for code), subtle borders (`border-border`), and optional bento-grid cards.
- **Theme Support:** Native Tailwind CSS Dark/Light utility support utilizing CSS custom properties for effortless restyling during design exploration.
- **Responsive Layout:** Mobile first, fully optimized across 375px (mobile), 768px (tablet), 1024px (desktop), and 1440px+ (wide screens).

### 6.2 State Management for All Views

Every data-driven page (Projects, Blog, Messages, Admin CRUD) must account for all 5 essential states:

1. **Loading State:** Skeleton loaders matching card/table layouts (no generic spinners that shift layout).
2. **Empty State:** Friendly graphic or clean copy with clear call to action (e.g. "No projects found matching this filter" or "No messages yet").
3. **Success State:** Immediate visual feedback (toast notifications on save/delete/submit).
4. **Error State:** Accessible error banners with actionable retry prompts.
5. **Interactive/Active State:** Subtle hover and focus-visible states on all interactive elements.

---

## 7. Data & Technical Architecture

### 7.1 Technology Stack

- **Framework:** Next.js 16 (App Router, Server Components & Server Actions)
- **Language:** TypeScript (strict mode enabled)
- **Styling:** Tailwind CSS v4 + Tailwind typography plugin
- **Theme Provider:** `next-themes` (SSR-safe, zero FOUC)
- **Authentication:** Auth.js (`@auth/core`, `@auth/nextjs`) with Google Provider
- **ORM / Data Layer:** Prisma ORM (abstracted data layer supporting PostgreSQL or MongoDB via provider configuration)
- **Form Handling & Validation:** React Hook Form + Zod schemas
- **Icons:** Lucide React

### 7.2 Core Data Entities (Schema Agnostic)

The data models are designed to work seamlessly whether PostgreSQL (relational) or MongoDB (document) is connected:

1. **User / Admin:**
   - `id`: String (Primary Key)
   - `email`: String (Unique)
   - `name`: String
   - `image`: String (Google avatar URL)
   - `role`: Enum ("ADMIN", "USER")

2. **Project:**
   - `id`: String (Primary Key)
   - `title`: String
   - `slug`: String (Unique)
   - `summary`: String
   - `description`: String (Markdown/HTML)
   - `tags`: String[]
   - `liveUrl`: String (Optional)
   - `githubUrl`: String (Optional)
   - `featured`: Boolean (Default: false)
   - `order`: Int (Default: 0)
   - `createdAt`: DateTime
   - `updatedAt`: DateTime

3. **BlogPost:**
   - `id`: String (Primary Key)
   - `title`: String
   - `slug`: String (Unique)
   - `summary`: String
   - `content`: String (Markdown/MDX)
   - `published`: Boolean (Default: false)
   - `publishedAt`: DateTime (Optional)
   - `readingTime`: String
   - `tags`: String[]
   - `createdAt`: DateTime
   - `updatedAt`: DateTime

4. **ContactMessage:**
   - `id`: String (Primary Key)
   - `name`: String
   - `email`: String
   - `subject`: String
   - `message`: String
   - `read`: Boolean (Default: false)
   - `createdAt`: DateTime

5. **ProfileSettings:**
   - `id`: String (Single record)
   - `headline`: String
   - `bio`: String
   - `resumeUrl`: String
   - `githubUrl`: String
   - `linkedinUrl`: String
   - `twitterUrl`: String

---

## 8. Non-Functional Requirements

- **NFR-001: Performance & Web Vitals:** Core Web Vitals target of 90+ across Performance, Accessibility, Best Practices, and SEO on Google Lighthouse.
- **NFR-002: Security & Route Protection:**
  - Middleware enforces session validation on all `/admin/:path*` and `/api/admin/:path*` routes.
  - Server actions validate input payloads using Zod before persisting data.
  - Email identity verified on server side via OAuth session claims, not client parameters.
- **NFR-003: Accessibility (a11y):** WCAG 2.1 AA compliance across light and dark modes, keyboard navigable menus, ARIA labels for icon buttons and modals.
- **NFR-004: Modular Design Extensibility:** UI components isolated and styled with atomic Tailwind tokens, allowing the developer to easily update color schemes, card styles, or layout variants as they explore design ideas.

---

## 9. MVP Scope & Prioritization (MoSCoW)

### Must Have (MVP)

- Global Light / Dark mode toggle with persistent state.
- Public multi-page structure: Home (`/`), About (`/about`), Projects (`/projects`), Blog (`/blog`), Contact (`/contact`) with zero visitor login elements.
- Private unlisted Admin doorway (`/admin` / `/admin/login`) secured strictly by Auth.js Google OAuth matching `ADMIN_EMAIL`.
- Admin dashboard route protection (`/admin/*`) rejecting unauthorized traffic with 403.
- Admin CRUD for Projects and Blog posts.
- Contact form submission stored in database and viewable in Admin Inbox.
- Prisma schema configured for database connection (PostgreSQL or MongoDB).

### Should Have

- Markdown live preview editor in Admin for blog posts and project case studies.
- Profile and resume link editing directly from Admin dashboard.
- Project category filtering on public `/projects` page.
- Reading time estimation for blog posts.

### Could Have

- Email notification to owner (via Resend) when a new contact message is received.
- View count / analytics on blog posts and project links.
- Bento-grid style layout option on the Home page.

### Won't Have (Initial Release)

- Public comments or user registration.
- Multiple admin accounts or role-based user management.
- Integrated payment or booking checkout systems.

---

## 10. Assumptions & Open Decisions

### Confirmed Decisions

1. Scope tier is **Standard Tier**.
2. Multi-page architecture (`/`, `/about`, `/projects`, `/blog`, `/contact`, `/admin`).
3. Theme switch supporting light and dark modes across every page.
4. Admin authentication exclusively using **Auth.js** with Google OAuth provider.
5. Admin access strictly gated by single `ADMIN_EMAIL` match.
6. Admin has complete management control over Projects, Blogs, Contact Messages, and Profile Info.
7. The UI layout foundation will remain flexible and modular to accommodate visual styling exploration.

### Open Decision (Deferred to Setup Stage)

- **Database Choice (PostgreSQL vs MongoDB):**
  - _Recommendation:_ Prisma schema will define model structures using standard types so you can switch between `provider = "postgresql"` and `provider = "mongodb"` seamlessly by updating the connection string and Prisma provider.
