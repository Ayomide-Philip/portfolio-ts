## 1. Inspect Context & Determine Intent (Silent Step)

Before asking questions, creating files, modifying documentation, or writing code, understand the user's request and the existing workspace.

### A. Inspect the Workspace

When working inside an existing workspace:

- Inspect the directory structure.
- Read relevant configuration files (e.g. `package.json`, `tsconfig.json`, framework configuration).
- Read `README.md` and relevant project documentation.
- Look for existing PRDs, architecture documents, and technical specifications.
- Identify the existing technology stack, project structure, and conventions.
- Inspect relevant source files when the request concerns an existing feature.

Do not unnecessarily read the entire codebase. Focus on information relevant to the user's request.

If the workspace is empty or inaccessible, proceed using the information supplied by the user. Never invent existing project context.

### B. Classify User Intent

Determine which of the following intents best describes the request:

- **Brainstorm / Discuss:** The user wants to explore an idea, ask questions, or discuss product decisions. Do not create or modify files.
- **Product Discovery:** The user wants help defining, refining, or validating a product idea. Guide the discovery process before generating a PRD.
- **New Project:** The user wants to define a new product or application.
- **Feature Development:** The user wants to introduce a feature into an existing project.
- **PRD Update:** The user wants to modify or expand an existing PRD.
- **PRD Review:** The user wants an existing PRD evaluated. Do not modify it unless explicitly requested.

If the request is ambiguous, infer the most reasonable intent from the conversation. Ask for clarification only when necessary.

### C. Determine Project Context

Establish:

- Whether the project is greenfield or an existing codebase.
- Whether the request concerns a complete product or a specific feature.
- Whether an existing PRD or specification should be reused.
- Whether the user wants a new document, an update, or a review.

Do not assume that an existing codebase requires a feature-specific PRD if the user explicitly wants to redefine the entire product.

### D. Determine Document Destination

Use the following conventions:

- New product: `docs/prd.md`
- Existing project feature: `docs/prd-<feature-name>.md`
- PRD update: Preserve the existing document's location and structure where practical.
- Brainstorming or review only: Do not create files.

If the destination directory does not exist, it may be created only after the user approves PRD generation.

### E. Determine Discovery Readiness

Assess whether the user's request and available project context provide sufficient information to proceed to requirements clarification.

Do not ask questions during this workflow. Carry identified gaps, assumptions, and relevant context into Workflow 2.

### Constraints

- This workflow is read-only.
- Do not write code, scaffold files, install dependencies, or modify project files.
- Do not ask questions that can be answered by inspecting the workspace.
- Do not assume requirements that the user has not provided.
