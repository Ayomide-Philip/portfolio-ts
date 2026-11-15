---
name: prd
description: Generate a comprehensive Product Requirements Document (PRD) in Markdown before writing any code. Use whenever the user wants to build a new website, app, feature, or product, or says "I want to build", "create a project", or invokes /prd.
---

# Objectives

Before writing any code, scaffolding files, or installing dependencies, create a clear, well-structured Product Requirements Document (`PRD.md` or `docs/prd.md`) that defines what is being built and get the user's approval.

# Workflow

1. **Inspect Context & Determine Intent (Silent Step — Do Not Ask Yet):**
   - Scan the workspace directory and read key config files (`package.json`, `README.md`, existing `docs/prd*.md`, directory tree) if present.
   - Classify the user's intent from `$ARGUMENTS`:
     - **Review / Discuss only:** Answer questions or brainstorm without creating or modifying files.
     - **Create / Update PRD:** Proceed to Step 2.
   - Determine target file path:
     - Full product / greenfield build → `docs/prd.md`
     - Specific feature in an existing codebase → `docs/prd-<feature-name>.md`

2. **Clarify Requirements (Single Turn):**
   - Review `$ARGUMENTS` and the codebase context from Step 1. Do **not** ask anything already answered by the prompt or existing files.
   - If the request is already crystal clear—or if the user says **"use smart defaults"**—skip questions and proceed directly to Step 3.
   - Otherwise, ask **3 to 5 concise questions** (max 5 total, including any scope/overwrite clarifications) covering:
     - **Vision & Audience & idea:** What is the product's purpose, target audience, and core idea?
     - **Core Features:** Must-have MVP features vs. nice-to-haves.
     - **Design & UX:** Any specific design preferences, branding, color suggestions, typography choices, or UX considerations?
     - **Tech Stack & Constraints:** Frameworks, APIs, or constraints (skip existing stack details already found in Step 1).
   - _Include a note telling the user they can reply **"use smart defaults"** to skip questions and generate the draft immediately._
