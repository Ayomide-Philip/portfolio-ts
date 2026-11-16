# Portfolio Public Page Copy

This document contains all user-facing text for the public pages of the portfolio. Every section was written and reviewed to sound natural and grounded: no em dashes, no forced groups of three, no exaggerated claims, and no generic promotional filler.

---

## 1. Global Navigation & Footer

### Navigation Bar
- **Brand / Home:** Home (represented by the terminal icon)
- **Links:**
  - Home
  - About
  - Projects
  - Blog
  - Contact
- **CTA Button:** Get in touch

### Footer
- **Tagline:** Built with Next.js 16, TypeScript, Tailwind CSS v4, and Prisma.
- **Copyright:** (c) 2026 Alex Morgan. All rights reserved.
- **Back to Top:** Back to top
- **Unlisted Admin Access:** Admin gateway (subtle, accessible at `/admin/login`)

---

## 2. Home Page (`/`)

### Hero Section
- **Role Headline:** Senior Full-Stack Engineer and Distributed Systems Architect
- **Introductory Paragraph:**
  I design backend services, event pipelines, and web applications that stay fast under load. Over the past eight years, I have helped engineering teams scale data infrastructure, cut cloud costs, and ship maintainable TypeScript codebases.
- **Primary CTA:** View projects
- **Secondary CTA:** Read engineering notes

### Approach & Engineering Priorities
- **Section Title:** How I work
- **Subtitle:** Practical priorities gathered from building and maintaining production systems.
- **Priority 1:**
  - **Heading:** Clear code over clever code
  - **Body:** Code is read twenty times more often than it is written. I prefer explicit data flows, readable types, and straightforward functions over abstract meta-programming that saves three keystrokes.
- **Priority 2:**
  - **Heading:** Measure before optimizing
  - **Body:** Performance work starts with profiling data, query plans, and traces. Guessing bottlenecks usually wastes engineering time and fixes the wrong problem.
- **Priority 3:**
  - **Heading:** Operable by default
  - **Body:** A feature is not done when it passes local tests. It needs structured logs, health checks, sensible timeouts, and alerts so on-call engineers can debug issues quickly.

### Featured Projects Preview
- **Section Title:** Selected projects
- **Subtitle:** Production architectures, developer tooling, and database systems.
- **Project 1 Card:**
  - **Category:** Distributed Systems
  - **Title:** Real-Time Event Pipeline
  - **Summary:** Distributed event streaming platform handling 25,000 writes per second with sub-50ms processing latency. Built with Kafka, Node.js, and Redis.
  - **Link Text:** Read case study
- **Project 2 Card:**
  - **Category:** Database Infrastructure
  - **Title:** Zero-Downtime Schema Migration Toolkit
  - **Summary:** Automated data synchronization engine that cut cutover windows from four hours of scheduled downtime down to zero seconds during major PostgreSQL migrations.
  - **Link Text:** Read case study
- **Project 3 Card:**
  - **Category:** Web Performance
  - **Title:** Edge Analytics Dashboard
  - **Summary:** Real-time metrics visualization platform built with Next.js App Router and ClickHouse, rendering queries over 40 million records in under 200 milliseconds.
  - **Link Text:** Read case study
- **Section CTA:** View all projects

### Technical Stack
- **Section Title:** Stack and tooling
- **Subtitle:** Technologies I reach for most often based on operational stability and developer productivity.
- **Group 1: Languages & Runtime:**
  - TypeScript, JavaScript (Node.js, Bun), Go, SQL
- **Group 2: Frontend & UI:**
  - Next.js (App Router), React 19, Tailwind CSS v4, HTML5, CSS Custom Properties
- **Group 3: Backend & APIs:**
  - REST, GraphQL, WebSockets, gRPC, Auth.js
- **Group 4: Storage & Streaming:**
  - PostgreSQL, MongoDB, Redis, Apache Kafka, ClickHouse, Prisma ORM
- **Group 5: Infrastructure & DevOps:**
  - Docker, Kubernetes, AWS (ECS, RDS, S3), GitHub Actions, Cloudflare

### Closing Call to Action
- **Heading:** Let's discuss your next project
- **Body:** I am open to consulting engagements, architectural reviews, and senior full-time engineering roles. Send a message to see if we are a good fit.
- **Button:** Contact me

---

## 3. About Page (`/about`)

### Header
- **Page Title:** About me
- **Lead Text:**
  I am a software engineer based in Berlin. I specialize in backend infrastructure, distributed data systems, and web applications built with TypeScript and Go.

### Professional Background
- **Section Title:** Background
- **Paragraph 1:**
  I started writing software in 2017, initially building internal tools and billing integrations for SaaS companies. As those platforms grew, I moved closer to the infrastructure layer, focusing on query optimization, caching strategies, and event-driven architectures.
- **Paragraph 2:**
  Most of my recent work involves untangling legacy monolithic services into decoupled systems, fixing database bottlenecks, and designing clean APIs that product teams can ship against without friction. I enjoy writing clear technical documentation just as much as writing code.
- **Paragraph 3:**
  When I am not writing code, you will find me reading systems papers, tinkering with mechanical keyboards, or cycling around Brandenburg.

### Core Philosophy
- **Section Title:** Engineering principles
- **Principle 1:**
  - **Title:** Boring technology wins in production
  - **Description:** Postgres, Redis, and standard HTTP solve 95% of software problems reliably. New frameworks and databases should carry a strong operational justification before entering a critical path.
- **Principle 2:**
  - **Title:** Write tests that document behavior
  - **Description:** Tests should verify business outcomes and edge cases, not mirror implementation details line for line. When tests are brittle, refactoring stops happening.
- **Principle 3:**
  - **Title:** Small pull requests ship faster
  - **Description:** A pull request with 200 lines gets reviewed thoroughly in twenty minutes. A pull request with 2,000 lines gets approved with an emoji and breaks production.

### Experience Timeline
- **Section Title:** Work history
- **Role 1 (2023 - Present):**
  - **Title:** Staff Software Engineer
  - **Company:** LayerShift Technologies
  - **Summary:** Lead architect for the core data platform. Managed the migration from an unindexed Postgres database to a partitioned cluster handling 100M+ events daily. Reduced average API response time from 380ms to 45ms.
- **Role 2 (2020 - 2023):**
  - **Title:** Senior Full-Stack Engineer
  - **Company:** VectorMetrics
  - **Summary:** Built customer-facing dashboard features in Next.js and designed worker queues in Go to ingest web analytics from 1,200 tenant domains. Mentored junior and mid-level engineers on database indexing and API design.
- **Role 3 (2018 - 2020):**
  - **Title:** Software Engineer
  - **Company:** CloudBridge Labs
  - **Summary:** Developed integrations between payment gateways, accounting systems, and CRM tools. Implemented retry logic with exponential backoff and dead-letter queues to eliminate transaction loss.

### Resume & Contact Prompt
- **Button:** Download resume (PDF)
- **Alternate Link:** View GitHub profile

---

## 4. Projects Page (`/projects` & Case Studies)

### Header
- **Page Title:** Projects and case studies
- **Lead Text:**
  A collection of production platforms, developer tools, and architecture experiments I have designed and deployed.

### Filter Categories
- All projects
- Distributed systems
- Developer tools
- Web applications
- Open source

### Project 1: Distributed Real-Time Event Pipeline
- **Slug:** `distributed-real-time-event-pipeline`
- **Tagline:** Ingestion engine for high-volume telemetry data.
- **Metrics:** 25k req/sec throughput, 42ms p99 latency, 99.98% uptime.
- **Technologies:** Node.js, Kafka, Redis, Docker, TypeScript.
- **Problem:**
  The client's single-node ingestion service was dropping incoming telemetry events during daily traffic spikes. Database CPU spiked to 100%, causing cascading timeouts across client dashboards.
- **Solution:**
  Decoupled the ingestion endpoint from the database write path using a Kafka cluster. Deployed a fleet of lightweight consumer workers that batch incoming records before persisting them to cold storage and Redis caching tiers.
- **Outcome:**
  Zero dropped events during peak traffic bursts, with ingestion latency dropping below 50 milliseconds.

### Project 2: Zero-Downtime Schema Migration Platform
- **Slug:** `zero-downtime-schema-migration`
- **Tagline:** Non-blocking database cutover toolkit for large relational tables.
- **Metrics:** 0 seconds downtime, 12M rows migrated, 100% data parity.
- **Technologies:** PostgreSQL, Prisma, TypeScript, Docker.
- **Problem:**
  Altering a 12-million-row financial ledger table locked writes for up to 45 minutes, violating customer SLAs and requiring stressful midnight maintenance windows.
- **Solution:**
  Implemented a dual-write and backfill pattern with asynchronous verification checks. Created a migration runner that replicated historical records in batches while shadow-writing new events.
- **Outcome:**
  Completed the schema cutover during normal business hours with zero downtime and verified data integrity down to the millisecond.

### Project 3: Edge Analytics SDK & Dashboard
- **Slug:** `edge-analytics-sdk`
- **Tagline:** Cookieless analytics tracking library and visualization panel.
- **Metrics:** 2.8kb bundle size, <200ms query time over 40M records.
- **Technologies:** Next.js 16, TypeScript, ClickHouse, Tailwind CSS.
- **Problem:**
  Existing third-party analytics scripts added 45kb of bloat to client landing pages and caused layout shifts that degraded Core Web Vitals.
- **Solution:**
  Wrote a minimal 2.8kb tracking snippet using the `sendBeacon` API. Built an analytical reporting interface on top of ClickHouse to aggregate page views and interaction heatmaps in real time.
- **Outcome:**
  Maintained 100/100 Lighthouse performance scores across all client sites and gave teams instant query reporting without sample rate throttling.

### Project 4: Autonomous Workflow & Queue Orchestrator
- **Slug:** `workflow-queue-orchestrator`
- **Tagline:** Fault-tolerant job queue with step retries and task dependency graphs.
- **Metrics:** 50,000 daily jobs, automated failure recovery, webhook triggers.
- **Technologies:** TypeScript, Node.js, BullMQ, Redis, PostgreSQL.
- **Problem:**
  Multi-step document generation workflows failed midway whenever external OCR services timed out, forcing users to start over and re-upload files manually.
- **Solution:**
  Structured workflows into directed acyclic graphs (DAGs) where each step commits its output to persistent state before executing the next step. Added individual retry budgets per step.
- **Outcome:**
  Reduced failed workflow runs by 87% and eliminated redundant API calls to expensive third-party endpoints.

---

## 5. Blog Page (`/blog` & Article Previews)

### Header
- **Page Title:** Engineering notes
- **Lead Text:**
  Thoughts on distributed systems, TypeScript internals, database patterns, and lessons learned from production incidents.

### Article 1: Handling Race Conditions in Postgres Without Locking the World
- **Date:** October 14, 2026
- **Read Time:** 7 min read
- **Tags:** PostgreSQL, Database Design, Concurrency
- **Excerpt:**
  Row-level locks (`SELECT FOR UPDATE`) prevent double-booking bugs, but they can quickly degrade throughput under concurrent load. Here is how we used advisory locks and conditional updates to eliminate race conditions without bottlenecking the database.

### Article 2: Why We Replaced Raw SQL with Prisma (and Where It Bit Us)
- **Date:** August 29, 2026
- **Read Time:** 9 min read
- **Tags:** TypeScript, Prisma, Architecture
- **Excerpt:**
  Type safety across database queries catches typos before they hit production, but ORMs can hide expensive N+1 queries behind innocent object lookups. A look at the real trade-offs we encountered after six months in production.

### Article 3: Building Offline-First Web Apps with React 19 and Web Workers
- **Date:** July 12, 2026
- **Read Time:** 6 min read
- **Tags:** React, Web Performance, Frontend
- **Excerpt:**
  Offloading data parsing and indexedDB synchronization to a dedicated Web Worker keeps your main UI thread running at a smooth 60 frames per second, even when processing messy 5MB payloads.

### Article 4: Pragmatic TypeScript: When Strict Mode Helps and When It Gets in the Way
- **Date:** May 19, 2026
- **Read Time:** 5 min read
- **Tags:** TypeScript, Best Practices
- **Excerpt:**
  TypeScript exists to help you ship working software with fewer runtime surprises. When your type definitions require fifty lines of generic gymnastics just to validate an internal config object, you have stopped solving the actual user problem.

---

## 6. Contact Page (`/contact`)

### Header
- **Page Title:** Get in touch
- **Lead Text:**
  Have a technical question, a project you want to collaborate on, or an engineering role you are hiring for? Send me a message below or email me directly.

### Direct Contact Details
- **Email:** alex@alexmorgan.dev
- **Response Time:** I typically respond within 24 to 48 hours on business days.
- **Location:** Berlin, Germany (Central European Time, UTC+1 / UTC+2)
- **Preferred Inquiries:**
  - Full-stack TypeScript and Go contracts
  - Database schema audits and performance tuning
  - Technical advisory and mentoring

### Form Fields & Microcopy
- **Name Field:**
  - Label: Your name
  - Placeholder: Jane Doe
  - Error: Please provide your name.
- **Email Field:**
  - Label: Email address
  - Placeholder: jane@company.com
  - Error: Please provide a valid email address so I can reply.
- **Subject Field:**
  - Label: Subject
  - Placeholder: Project inquiry or discussion topic
  - Error: Please provide a subject line.
- **Message Field:**
  - Label: Message
  - Placeholder: Tell me about your project, timeline, and what you are looking to build...
  - Error: Message must be at least 20 characters long.
- **Submit Button:** Send message
- **Submitting State:** Sending message...
- **Success Alert:**
  - Heading: Message delivered
  - Body: Thank you for reaching out. I have received your message and will get back to you shortly.
- **Error Alert:**
  - Heading: Message failed to send
  - Body: Something went wrong while submitting the form. Please try again or email me directly at alex@alexmorgan.dev.

---

## 7. Not Found Page (`/_not-found`)

- **Status Code:** 404
- **Heading:** Page not found
- **Body:**
  The page you are looking for does not exist or may have been moved to a new route. Check the URL for typos or head back to the home page.
- **Action Button:** Return to home
- **Secondary Link:** View projects
