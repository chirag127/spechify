# Spechify-Audio-Capture-Android-Mobile-App

## 1. PROJECT OVERVIEW & VALUE PROPOSITION

This repository contains the source code for **Spechify**, a native-grade mobile application built with React Native (Expo) designed to securely capture and manage system-level audio streams originating from other running applications on the Android platform. It prioritizes robustness, background execution stability, and a seamless user experience for high-fidelity audio documentation.

## 2. ARCHITECTURAL DIAGRAM (MERMAID)

This architecture follows a layered approach, isolating platform-specific audio capture modules from the core state management and UI layers.

mermaid
graph TD
    A[React Native UI/Expo] --> B{State Management / Context}
    B --> C[Business Logic / Services]
    C --> D[Native Module Bridge (JNI/Expo SDK)]
    D -- Android API Hooks --> E[(System Audio Stream Access)]
    C --> F[Local Storage / Async Storage]
    style E fill:#f9f,stroke:#333,stroke-width:2px
    style D fill:#ccf,stroke:#333,stroke-width:2px


## 3. TABLE OF CONTENTS

1.  [Project Overview & Value Proposition](#1-project-overview--value-proposition)
2.  [Architectural Diagram (Mermaid)](#2-architectural-diagram-mermaid)
3.  [Table of Contents](#3-table-of-contents)
4.  [🤖 AI Agent Directives (The Apex Blueprint)](#4-ai-agent-directives-the-apex-blueprint)
5.  [Technology Stack & Core Principles](#5-technology-stack--core-principles)
6.  [Development Setup & Execution](#6-development-setup--execution)
7.  [Contributing Guidelines](#7-contributing-guidelines)

---

## 4. 🤖 AI Agent Directives (The Apex Blueprint)

<details>
<summary>Click to expand the **DECEMBER 2025 APEX ARCHITECTURAL MANDATES**</summary>

### 4.1. IDENTITY & PRIME DIRECTIVE
**Role:** You are a Senior Principal Software Architect and Master Technical Copywriter with **40+ years of elite industry experience**. You operate with absolute precision, enforcing FAANG-level standards and the wisdom of "Managing the Unmanageable."
**Context:** Current Date is **December 2025**. You are building for the 2026 standard.
**Output Standard:** Deliver **EXECUTION-ONLY** results. No plans, no "reporting"—only executed code, updated docs, and applied fixes.
**Philosophy:** "Zero-Defect, High-Velocity, Future-Proof."

### 4.2. CONTEXT-AWARE APEX TECH STACK
**Project Type:** Mobile Application (React Native / TypeScript).
**Apex Toolchain (Mobile 2026 Standard):**
*   **Language:** TypeScript 5.x (Strict Mode enforced via `tsconfig.json`).
*   **Framework:** React Native (Targeting latest Expo SDK for stability).
*   **Styling:** TailwindCSS integration (via NativeWind or comparable utility layer).
*   **Lint/Format:** **Biome** (for unified, high-speed linting, formatting, and parsing).
*   **Testing:** **Vitest** (for unit/component testing) and **Playwright** (for cross-platform E2E simulation, although primary focus remains on Android environment stability).
*   **Architecture:** Feature-Sliced Design (FSD) principles applied within the component tree structure to clearly separate **App**, **Pages**, **Features**, **Entities**, and **Shared** layers.

### 4.3. CORE PRINCIPLES VERIFICATION
1.  **SOLID Enforcement:** Ensure Dependency Inversion (DIP) is strictly followed when bridging to native/platform-specific audio APIs (e.g., AudioRecord/MediaRecorder via Expo bridges).
2.  **DRY Adherence:** Configuration for background services and permissions handling must be centralized in a `Shared/PlatformAdapters` slice.
3.  **YAGNI/KISS:** Avoid premature abstraction for non-core audio codecs or complex UI states unless necessitated by current requirements or proven scaling bottlenecks.

### 4.4. VERIFICATION COMMANDS (For Future Agents)
*   **Lint/Format Check:** `npx @biomejs/biome check --apply ./src`
*   **Unit Test Execution:** `npx vitest run`
*   **E2E Verification (Simulation):** `npx playwright test`
*   **Dependency Resolution:** `npx expo install` (Use `uv` equivalent for general Python tooling if this repo included backend/scripts).

</details>

## 5. TECHNOLOGY STACK & CORE PRINCIPLES

| Component | Technology | Version Standard | Purpose |
| :--- | :--- | :--- | :--- |
| Core Language | TypeScript | 5.x+ | Type Safety & Scalability |
| Runtime/Framework | React Native / Expo | Latest SDK | Cross-Platform Execution |
| Utility Layer | Biome | Latest | Linting, Formatting, Speed |
| Testing Suite | Vitest | Latest | Unit & Component Verification |
| State Management | React Context / Zustand | Current | Predictable State Flow |
| Architectural Pattern | Feature-Sliced Design (FSD) | N/A | Maintainability & Scalability |

**Core Development Philosophy:**
*   **Type-First:** All data contracts involving audio metadata or configuration must utilize strict TypeScript interfaces.
*   **Platform-Awareness:** Acknowledge Android's aggressive background process killing and implement necessary foreground service mechanics via the Expo Native layer.

## 6. DEVELOPMENT SETUP & EXECUTION

**Prerequisites:** Node.js (LTS+), npm/yarn/pnpm, Android Studio with necessary SDKs for native builds.

### 6.1. CLONE AND INITIALIZE
bash
git clone https://github.com/chirag127/Spechify-Audio-Capture-Android-Mobile-App.git
cd Spechify-Audio-Capture-Android-Mobile-App
# Use pnpm for optimal speed in large RN/TS projects
pnpm install


### 6.2. AVAILABLE SCRIPTS

| Script | Command | Description |
| :--- | :--- | :--- | 
| `dev` | `npx expo start` | Start the development server and Metro bundler. |
| `lint:fix` | `npx @biomejs/biome check --apply ./src` | Auto-fix linting and formatting issues. |
| `test` | `npx vitest run` | Run all unit and component tests. |
| `android` | `npx expo run:android` | Build and run the application on an attached Android device/emulator. |

## 7. CONTRIBUTING GUIDELINES

Contributions are welcomed provided they strictly adhere to the Apex Standards detailed in the `.github/CONTRIBUTING.md` file. All Pull Requests **MUST** pass CI checks (Build Status, Linting) before merging. Please review the Security Policy before disclosing vulnerabilities.
