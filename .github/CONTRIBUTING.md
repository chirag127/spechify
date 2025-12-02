# Contributing Guidelines

Welcome to **AudioWhisper-System-Audio-Capture-Mobile-App**! We appreciate your interest in contributing to this project.

## Code of Conduct

This project adheres to the Contributor Covenant Code of Conduct. Please read the full text at [https://www.contributor-covenant.org/version/2/1/04guidelines/](https://www.contributor-covenant.org/version/2/1/04guidelines/) to understand the expected behavior.

## How to Contribute

We welcome contributions in the form of bug reports, feature requests, and pull requests.

### Reporting Bugs

1.  **Search First:** Please check if your bug has already been reported. Search existing issues on the [GitHub repository](https://github.com/chirag127/AudioWhisper-System-Audio-Capture-Mobile-App/issues).
2.  **Create a Detailed Issue:** If your bug is new, please open a new issue. Use the provided bug report template to ensure all necessary information is included:
    *   **Version:** The specific version of the app you are using.
    *   **Device & OS:** Your Android device model and OS version.
    *   **Steps to Reproduce:** Clear, concise steps that lead to the bug.
    *   **Expected Behavior:** What you expected to happen.
    *   **Actual Behavior:** What actually happened.
    *   **Screenshots/Recordings:** If possible, include visual aids.
    *   **Logs:** Any relevant error messages or console logs.

### Feature Requests

If you have an idea for a new feature, please open a new issue and select the "Feature Request" template. Provide a clear description of the proposed feature and its potential benefits.

### Pull Requests

We follow a fork-and-pull request model for contributions:

1.  **Fork the Repository:** Click the "Fork" button on the top right of the [main repository page](https://github.com/chirag127/AudioWhisper-System-Audio-Capture-Mobile-App).
2.  **Clone Your Fork:** Clone your forked repository to your local machine:
    bash
    git clone https://github.com/chirag127/AudioWhisper-System-Audio-Capture-Mobile-App.git
    cd AudioWhisper-System-Audio-Capture-Mobile-App
    
3.  **Create a New Branch:** Create a descriptive branch for your changes:
    bash
    git checkout -b feature/your-new-feature
    # or for a bug fix:
    git checkout -b fix/your-bug-fix
    
4.  **Make Your Changes:** Implement your feature or fix the bug. Ensure your code adheres to the project's coding standards (see below).
5.  **Test Your Changes:** Run the tests to ensure your changes haven't introduced regressions.
    bash
    # Refer to README.md for specific testing commands (e.g., vitest, playwright)
    
6.  **Commit Your Changes:** Make clear, concise commits. Use conventional commits if possible.
    bash
    git add .
    git commit -m "feat: Add user profile editing functionality"
    
7.  **Push to Your Fork:** Push your branch to your fork on GitHub:
    bash
    git push origin feature/your-new-feature
    
8.  **Open a Pull Request:** Navigate to the [main repository](https://github.com/chirag127/AudioWhisper-System-Audio-Capture-Mobile-App) and click the "Compare & pull request" button. Provide a clear title and description for your PR.

## Development Standards

This project adheres to the Apex Technical Authority standards, focusing on maintainability, scalability, and developer velocity.

*   **Language:** TypeScript (Strict Mode Enabled).
*   **Framework:** React Native.
*   **Build/Bundle:** Expo.
*   **Linting/Formatting:** Biome (for speed and comprehensive checks).
*   **Testing:** Vitest (Unit) & Playwright (E2E).
*   **Architecture:** Feature-Sliced Design (FSD) principles are encouraged for modularity and scalability.
*   **Code Quality:** Adhere to SOLID principles, DRY (Don't Repeat Yourself), and YAGNI (You Ain't Gonna Need It).
*   **Commit Messages:** Follow [Conventional Commits](https://www.conventionalcommits.org/) for clarity and automated changelog generation.

### Setup

Refer to the `README.md` for detailed setup instructions, including environment configuration and dependency installation.

### Running Tests

Refer to the `README.md` for commands to run unit and end-to-end tests.

## AI Agent Directives

This repository is managed by AI Agents following the Apex Technical Authority protocols. Ensure your contributions are compatible with the AI's understanding:

<details>
<summary>View AI Agent Directives</summary>

## SYSTEM: APEX TECHNICAL AUTHORITY & ELITE ARCHITECT (DECEMBER 2025 EDITION)

### 1. IDENTITY & PRIME DIRECTIVE
**Role:** Senior Principal Software Architect, Master Technical Copywriter. 40+ years of elite industry experience. Enforce FAANG-level standards and "Managing the Unmanageable."
**Context:** December 2025. Building for 2026 standards.
**Output Standard:** EXECUTION-ONLY.
**Philosophy:** "Zero-Defect, High-Velocity, Future-Proof."

### 2. INPUT PROCESSING & COGNITION
*   **SPEECH-TO-TEXT INTERPRETATION PROTOCOL:** Infer technical intent based on project context; **STRICTLY FORBIDDEN** from executing literal typos. SSOT is `README.md`.
*   **MANDATORY MCP INSTRUMENTATION:** Use `linkup`/`brave` for December 2025 industry standards, security threats, and 2026 UI trends. Use `docfork` to verify external APIs. Use `clear-thought-two` for complex flows.

### 3. CONTEXT-AWARE APEX TECH STACKS (LATE 2025 STANDARDS)
*   **PROJECT TYPE:** Web / App / GUI (Modern Frontend).
*   **STACK:** **TypeScript 6.x (Strict)**, **Vite 7 (Rolldown)**, **TailwindCSS v4**, **Tauri v2.x**.
*   **LINT/TEST:** **Biome** (Speed) + **Vitest** (Unit) + **Playwright** (E2E).
*   **ARCHITECTURE:** **Feature-Sliced Design (FSD)**.

### 4. APEX NAMING CONVENTION (THE "STAR VELOCITY" ENGINE)
Format: `<Product-Name>-<Primary-Function>-<Platform>-<Type>` (e.g., `AudioWhisper-System-Audio-Capture-Mobile-App`).

### 5. THE README REPLICATION PROTOCOL (THE ULTIMATE ARTIFACT)
*   **VISUAL AUTHORITY:** Hero Banner/Logo, Live Badges (`flat-square`, `chirag127`), Social Proof.
*   **STRUCTURAL CLARITY:** BLUF, Architecture Diagram, Table of Contents.
*   **🤖 AI AGENT DIRECTIVES:** Collapsible `<details>` block. Tech Stack, Architectural Patterns, Verification Commands.
*   **DEVELOPMENT STANDARDS:** Setup commands, Scripts table, Principles (SOLID, DRY, YAGNI).

### 6. CHAIN OF THOUGHT (CoT) PROTOCOL
Audit -> Pivot/Archive -> Naming -> Agent Directives -> File Generation -> Polish.

### 7. DYNAMIC URL & BADGE PROTOCOL
*   **Base URL:** `https://github.com/chirag127/AudioWhisper-System-Audio-Capture-Mobile-App`
*   **Consistency:** Always use the new repository name in links and badges.

### 8. AGENTS.MD CUSTOMIZATION
Customize `AGENTS.md` for the specific repository's tech stack while retaining core Apex principles.

</details>

By adhering to these guidelines, you help maintain a high-quality, consistent, and AI-friendly codebase.

---