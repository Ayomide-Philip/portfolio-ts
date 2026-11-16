# Design System Specification

## 1. Overview & Design Philosophy

- **Project:** Portfolio-TS (Senior Developer Portfolio & Admin CMS)
- **Design Archetype:** *Elevated Minimalist Engineering (Obsidian & Glass)*
- **Purpose:** A refined, craft-oriented visual language tailored for senior engineers. It prioritizes crisp typography, ambient dark surfaces, tactile micro-interactions, and accessible light/dark balance without corporate fluff.
- **Key Tenets:**
  1. **Obsidian Depth & Ambient Light:** Deep obsidian darks (`#050505`) with soft radial ambient mesh gradients and subtle hairline borders (`1px`).
  2. **Modern Typography:** Geometric sans-serif (`Plus Jakarta Sans` or `Geist Sans`) paired with precision monospaced (`JetBrains Mono`).
  3. **Tactile Micro-Interactions:** Subtle shimmer buttons, smooth 300ms cubic-bezier transitions, and hover card elevations.
  4. **Adaptable Bento Modularity:** Fluid grid layouts that present projects, career milestones, and availability in clean digestible blocks.
  5. **Zero Fluff:** Focused purely on real developer artifacts: code snippets, architecture highlights, tech tags, and direct contact.

---

## 2. Color Palette & Semantic Tokens

The design system uses CSS custom properties configured for Tailwind CSS v4. Theme toggling operates via `next-themes` injecting the `.dark` class onto the `<html>` element.

### 2.1 Color Token Mapping (Calibrated Slate, Teal & Amber)

| Token Name | Light Mode Value | Dark Mode Value | Usage / Semantic Role |
| :--- | :--- | :--- | :--- |
| `--background` | `#F8FAFC` (Slate 50) | `#080B11` (Deep Obsidian Slate) | Primary canvas background |
| `--surface` | `#FFFFFF` (Pure White) | `#111622` (Elevated Dark Slate) | Surface background (cards, sidebars, panels) |
| `--foreground` | `#0F172A` (Slate 900) | `#F1F5F9` (Slate 100) | Primary body text and headings |
| `--muted` | `#475569` (Slate 600) | `#94A3B8` (Slate 400) | Secondary text, captions, subtitles |
| `--accent` | `#0F766E` (Teal 700 - AAA) | `#2DD4BF` (Luminous Teal 400) | Primary interactive accent, active links |
| `--highlight` | `#D97706` (Amber 600) | `#F59E0B` (Amber 500) | Status highlights, featured pills, badges |
| `--border` | `#E2E8F0` (Slate 200) | `#1E283D` (Slate 800 Border) | Hairline card and divider borders |
| `--border-hover` | `#CBD5E1` (Slate 300) | `#334466` (Hover Highlight) | Interactive hover border highlight |

> **Perceptual Calibration Note:** Dark mode uses a deep obsidian slate canvas (`#080B11`) to eliminate the muddy navy wash of default slate-900, allowing the luminous teal accent (`#2DD4BF`) to pop with clean fiber-optic intensity. In light mode, the accent deepens to `#0F766E` (Teal 700) to ensure full WCAG AAA (7:1+) contrast on white surfaces.

---

## 3. Typography Hierarchy

The typography stack pairs a modern geometric sans-serif for UI clarity with a monospaced font for technical identifiers, metrics, and code blocks.

### 3.1 Font Families
- **Primary Sans:** `var(--font-instrument-sans)`, `Instrument Sans`, -apple-system, sans-serif
- **Technical Mono:** `var(--font-geist-mono)`, `JetBrains Mono`, monospace

### 3.2 Type Scale & Applications

| Level | Size / Line Height | Weight | Tracking | Tailored Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Display / Hero** | `text-4xl md:text-6xl` (36px/60px) | `font-bold` (700) | `-tracking-tight` | Home page hero headline |
| **H1** | `text-3xl md:text-4xl` (30px/36px) | `font-bold` (700) | `-tracking-tight` | Page titles (`About`, `Projects`, `Blog`) |
| **H2** | `text-2xl md:text-3xl` (24px/30px) | `font-semibold` (600) | `-tracking-tight` | Section headings, project case-study titles |
| **H3** | `text-lg md:text-xl` (18px/20px) | `font-semibold` (600) | `tracking-normal` | Card titles, admin modal titles |
| **Body Large** | `text-lg` (18px/28px) | `font-normal` (400) | `tracking-normal` | Lead paragraphs, hero introductions |
| **Body Default** | `text-base` (16px/24px) | `font-normal` (400) | `tracking-normal` | General prose, project descriptions, articles |
| **Body Small** | `text-sm` (14px/20px) | `font-normal` (400) | `tracking-normal` | Metadata, helper texts, table data |
| **Caption / Badge** | `text-xs` (12px/16px) | `font-medium` (500) | `tracking-wide uppercase` | Tech stack tags, category pills, timestamps |
| **Code / Snippet** | `text-sm` (14px/20px) | `font-mono` (400) | `tracking-tight` | Inline code, git hashes, terminal prompts |

---

## 4. Spacing, Layout & Grid Systems

### 4.1 Spatial Rhythm (8pt Grid)
All padding, margin, gap, and sizing follow a base-4/base-8 rhythm:
- `space-1` = `4px` (fine badge padding)
- `space-2` = `8px` (icon spacing, compact gaps)
- `space-3` = `12px` (input padding, card compact padding)
- `space-4` = `16px` (card standard padding, grid gap mobile)
- `space-6` = `24px` (card desktop padding, section sub-gap)
- `space-8` = `32px` (grid gap desktop, major component separation)
- `space-12` = `48px` (section inner rhythm)
- `space-16` to `space-24` = `64px–96px` (vertical section padding `py-16 md:py-24`)

### 4.2 Containers & Layout Constraints
- **Max Content Width:** `max-w-5xl` (1024px) for focused reading (Home, About, Blog, Contact).
- **Expanded Grid Width:** `max-w-6xl` (1152px) for project galleries and admin dashboards.
- **Horizontal Screen Gutters:** `px-4 sm:px-6 lg:px-8` on all viewport widths.

### 4.3 Grid Paradigms
- **Bento Grid Layout (Hero / Highlights):** Asymmetric CSS Grid:
  - Mobile: 1 column (`grid-cols-1`).
  - Tablet: 2 columns (`md:grid-cols-2`).
  - Desktop: 3 or 4 columns with spanning cards (`col-span-1`, `col-span-2`, `row-span-2`).
- **Standard Card Gallery (Projects & Blog):**
  - `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`.

---

## 5. Component Specifications & Tokens

### 5.1 Buttons

```
[ Primary Button ]
- Background: var(--primary)
- Foreground: #FFFFFF / var(--background)
- Border: none
- Radius: rounded-lg (8px)
- Padding: px-4 py-2.5 (text-sm font-medium)
- Hover: var(--primary-hover), shadow-sm, active:scale-[0.98]
- Focus: ring-2 ring-primary ring-offset-2

[ Secondary / Outline Button ]
- Background: transparent
- Foreground: var(--foreground)
- Border: 1px solid var(--border)
- Radius: rounded-lg (8px)
- Padding: px-4 py-2.5 (text-sm font-medium)
- Hover: bg-surface, border-border-hover, active:scale-[0.98]

[ Ghost Button ]
- Background: transparent
- Foreground: var(--foreground-muted)
- Radius: rounded-lg (8px)
- Padding: px-3 py-2 (text-sm font-medium)
- Hover: bg-surface, text-foreground

[ Destructive / Danger Button (Admin) ]
- Background: var(--danger)
- Foreground: #FFFFFF
- Radius: rounded-lg (8px)
- Hover: opacity-90
```

### 5.2 Cards & Surface Containers
- **Base Card:**
  - Background: `bg-surface` or `bg-background`
  - Border: `1px solid var(--border)`
  - Radius: `rounded-xl` (12px)
  - Shadow: `shadow-sm` on light mode; subtle border highlight on dark mode.
- **Interactive Card (Projects / Articles):**
  - Transition: `transition-all duration-200 ease-out`
  - Hover: `hover:-translate-y-1 hover:border-border-hover hover:shadow-md`
- **Inner Padding:** `p-5 md:p-6`

### 5.3 Badges & Tech Chips
- **Tech Stack Badges:**
  - Layout: `inline-flex items-center gap-1.5`
  - Padding: `px-2.5 py-1`
  - Text: `text-xs font-mono font-medium text-foreground-muted`
  - Background: `bg-surface`
  - Border: `1px solid var(--border)`
  - Radius: `rounded-md` (6px)
- **Status Pills (Live, Draft, Featured):**
  - Featured: `bg-primary-muted text-primary border border-primary/20`
  - Published: `bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20`
  - Draft: `bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20`

### 5.4 Form Inputs & Controls
- **Text Inputs & Textareas:**
  - Background: `bg-surface`
  - Border: `1px solid var(--border)`
  - Radius: `rounded-lg` (8px)
  - Typography: `text-sm text-foreground placeholder:text-foreground-subtle`
  - Padding: `px-3.5 py-2.5`
  - Focus State: `outline-none ring-2 ring-primary/50 border-primary`
  - Error State: `border-danger ring-danger/20`

### 5.5 Global Navigation Bar
- **Surface:** `fixed top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border`
- **Height:** `h-16` (64px)
- **Elements:**
  - Left: Developer logo / Monogram mark (`font-mono font-bold tracking-wider`).
  - Center: Nav link pills (`Home`, `About`, `Projects`, `Blog`, `Contact`).
  - Right: Theme toggle switch (`Sun/Moon` icon button) + optional quick "Hire Me" / Contact CTA.

### 5.6 Theme Toggle Component
- **Mechanism:** Accessible button with `aria-label="Toggle theme"`.
- **Icon:** Animated transition between `Sun` (light mode) and `Moon` (dark mode) icons with rotation and scale transitions (`duration-200`).

---

## 6. Motion & Micro-Interactions

| Interaction Type | Duration | Timing Function | Behavior / Tailwind Classes |
| :--- | :--- | :--- | :--- |
| **Theme Crossfade** | `200ms` | `ease-in-out` | Color transition on background, border, text |
| **Button Click / Tap** | `100ms` | `ease-out` | `active:scale-[0.98]` tactile press |
| **Card Hover Lift** | `200ms` | `cubic-bezier(0.16, 1, 0.3, 1)` | `hover:-translate-y-1 hover:shadow-md` |
| **Dropdown / Modal Open**| `150ms` | `ease-out` | `opacity-0 scale-95` to `opacity-100 scale-100` |
| **Drawer Slide (Mobile)**| `250ms` | `cubic-bezier(0.32, 0.72, 0, 1)` | `translate-x-full` to `translate-x-0` |

---

## 7. The Five Essential UI States

Every view and component must strictly handle all 5 states:

```
1. Normal State:
   - Polished typography, correct theme colors, balanced padding.

2. Hover / Active State:
   - Subtle background tint (bg-surface), border-border-hover, cursor-pointer.

3. Loading State:
   - Animated skeleton pulses (bg-surface animate-pulse rounded-md).
   - Prevents layout cumulative shift (CLS).

4. Empty State:
   - Clean iconography (e.g. Inbox / FolderMinus from Lucide).
   - Informative title + explanation + primary CTA.
   - Example: "No projects in this category yet. [View All Projects]"

5. Error / Validation State:
   - Inline field error message in text-xs text-danger.
   - Form inputs highlighted with border-danger.
   - Toast banner for network/API failures with a "Retry" button.
```

---

## 8. Tailwind CSS v4 Configuration Blueprint

To implement this design system in the codebase, the tokens are embedded directly into `app/globals.css` using Tailwind v4 native `@theme`:

```css
@import "tailwindcss";

:root {
  --background: #F8FAFC;
  --surface: #FFFFFF;
  --foreground: #0F172A;
  --muted: #475569;
  --accent: #0F766E;
  --accent-text: #FFFFFF;
  --highlight: #D97706;
  --border: #E2E8F0;
  --border-hover: #CBD5E1;
}

.dark {
  --background: #080B11;
  --surface: #111622;
  --foreground: #F1F5F9;
  --muted: #94A3B8;
  --accent: #2DD4BF;
  --accent-text: #080B11;
  --highlight: #F59E0B;
  --border: #1E283D;
  --border-hover: #334466;
}
  --border: rgba(255, 255, 255, 0.08);
  --border-hover: rgba(45, 212, 191, 0.35);
}

@theme inline {
  --color-background: var(--background);
  --color-surface: var(--surface);
  --color-foreground: var(--foreground);
  --color-muted: var(--muted);
  --color-accent: var(--accent);
  --color-accent-text: var(--accent-text);
  --color-highlight: var(--highlight);
  --color-border: var(--border);
  --color-border-hover: var(--border-hover);

  --font-sans: var(--font-instrument-sans), "Instrument Sans", system-ui, sans-serif;
  --font-mono: var(--font-jetbrains-mono), "JetBrains Mono", monospace;
}
```
  --color-primary-muted: var(--primary-muted);
  --color-border: var(--border);
  --color-border-hover: var(--border-hover);
  --color-ring: var(--ring);
  --color-success: var(--success);
  --color-warning: var(--warning);
  --color-danger: var(--danger);

  --font-sans: var(--font-geist-sans), Inter, system-ui, sans-serif;
  --font-mono: var(--font-geist-mono), JetBrains Mono, monospace;
}

body {
  background-color: var(--background);
  color: var(--foreground);
  font-family: var(--font-sans);
  min-height: 100vh;
  transition: background-color 0.2s ease, color 0.2s ease;
}
```

---

## 9. Design Exploration Guidelines

As you explore visual styles, this design system provides three interchangeable aesthetic directions that you can test without modifying HTML structures or business logic:

1. **Option A: Clean Minimal Slate (Default)**
   - Sharp, modern, corporate-friendly. High white space, crisp typography, Slate/Zinc neutral tones with Electric Sky blue accents.
2. **Option B: Terminal / Neo-Engineering**
   - High-tech vibe. JetBrains Mono badges, subtle dotted background pattern (`radial-gradient`), Emerald Green or Amber accenting, terminal-style window frames for code blocks.
3. **Option C: Bento Grid Craft**
   - Modular card containers with rounded borders (`rounded-2xl`), subtle inner card gradients, and grouped metric chips.
