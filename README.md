<p align="center">
  <a href="https://github.com/chirag127/AudioWhisper-System-Audio-Capture-Mobile-App">
    <img src="https://raw.githubusercontent.com/chirag127/AudioWhisper-System-Audio-Capture-Mobile-App/main/docs/assets/banner.png" alt="AudioWhisper Hero Banner" width="700">
  </a>
</p>

<p align="center">
  <!-- Build Status -->
  <a href="https://github.com/chirag127/AudioWhisper-System-Audio-Capture-Mobile-App/actions/workflows/ci.yml">
    <img src="https://img.shields.io/github/actions/workflow/status/chirag127/AudioWhisper-System-Audio-Capture-Mobile-App/ci.yml?branch=main&style=flat-square" alt="Build Status">
  </a>
  <!-- Code Coverage -->
  <a href="https://codecov.io/gh/chirag127/AudioWhisper-System-Audio-Capture-Mobile-App">
    <img src="https://img.shields.io/codecov/c/github/chirag127/AudioWhisper-System-Audio-Capture-Mobile-App?style=flat-square&token=XXX_CODECOV_TOKEN_XXX" alt="Code Coverage">
  </a>
  <!-- Language: TypeScript -->
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
  <!-- Framework: React Native -->
  <img src="https://img.shields.io/badge/React_Native-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React Native">
  <!-- Platform: Expo -->
  <img src="https://img.shields.io/badge/Expo-1B1F23?style=flat-square&logo=expo&logoColor=white" alt="Expo">
  <!-- Lint/Format: Biome -->
  <img src="https://img.shields.io/badge/Lint_Format-Biome-0F74C7?style=flat-square&logo=biome&logoColor=white" alt="Biome">
  <!-- License -->
  <a href="https://github.com/chirag127/AudioWhisper-System-Audio-Capture-Mobile-App/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg?style=flat-square" alt="License: CC BY-NC 4.0">
  </a>
  <!-- GitHub Stars -->
  <a href="https://github.com/chirag127/AudioWhisper-System-Audio-Capture-Mobile-App/stargazers">
    <img src="https://img.shields.io/github/stars/chirag127/AudioWhisper-System-Audio-Capture-Mobile-App?style=flat-square&label=Stars" alt="GitHub Stars">
  </a>
</p>

<h3 align="center">Star ⭐ this Repo!</h3>

--- 

## 🚀 Blazing Fast System Audio Capture for Android

AudioWhisper-System-Audio-Capture-Mobile-App is a cutting-edge Android application engineered with React Native and Expo, enabling seamless background capture of system audio. It offers a robust, feature-rich experience including intuitive dark/light themes, effortless sharing capabilities, and a developer-friendly architecture designed for scalability and performance.

--- 

## 🗺️ Architecture Overview

This project adopts a **Feature-Sliced Design (FSD)** architecture, promoting modularity, maintainability, and clear separation of concerns across features, entities, and shared components. This structure ensures that AudioWhisper remains scalable and easy to understand as it evolves.

mermaid
graph TD
    A[AudioWhisper Mobile App] --> B(App Entry Point)
    B --> C{Shared Kernel: Core Utilities & Types}
    B --> D[Features]
    B --> E[Entities]
    B --> F[Widgets]

    D --> D1[Recording Feature]
    D1 --> D1a[Start/Stop Recording Logic]
    D1 --> D1b[Audio Processing Module]
    D --> D2[Playback Feature]
    D2 --> D2a[Audio Player Controls]
    D2 --> D2b[Waveform Visualization]
    D --> D3[Sharing Feature]
    D3 --> D3a[Export & Share Service]

    E --> E1[AudioClip Entity]
    E1 --> E1a[Metadata & File Path]
    E --> E2[UserPreferences Entity]
    E2 --> E2a[Theme & Settings]

    F --> F1[Theme Switcher Widget]
    F --> F2[Recording Status Widget]

    C --> G[UI Kit: Design System Components]
    C --> H[API Adapters: Native Modules]
    C --> I[Store: State Management (e.g., Zustand/Context API)]

    D1a -- Uses --> I
    D1b -- Interacts with --> H
    D2a -- Uses --> G
    E2a -- Manages --> F1


### Directory Structure

text
.github/
├── workflows/
│   └── ci.yml
├── CONTRIBUTING.md
├── ISSUE_TEMPLATE/
│   └── bug_report.md
├── PULL_REQUEST_TEMPLATE.md
└── SECURITY.md
android/            # Android native project files (managed by Expo)
assets/             # Static assets (images, fonts)
components/         # Reusable UI components (shared across features)
config/             # Configuration files (e.g., Babel, Metro, Biome)
constants/          # Global constants
features/           # Feature-specific logic and components (e.g., Recording, Playback)
├── recording/
│   ├── ui/
│   └── model/
├── playback/
│   ├── ui/
│   └── model/
└── sharing/
    ├── ui/
    └── model/
hooks/              # Custom React hooks
navigation/         # React Navigation setup
screens/            # Top-level screen components (integrating features)
services/           # API interaction, utility functions
store/              # State management (e.g., Zustand, Context API)
types/              # Global TypeScript type definitions
utils/              # General utility functions
.gitignore
AGENTS.md
badges.yml
app.json            # Expo configuration
LICENSE
package.json
PROPOSED_README.md
README.md
tsconfig.json


## 📖 Table of Contents

- [🚀 Blazing Fast System Audio Capture for Android](#-blazing-fast-system-audio-capture-for-android)
- [🗺️ Architecture Overview](#️-architecture-overview)
  - [Directory Structure](#directory-structure)
- [📖 Table of Contents](#-table-of-contents)
- [🤖 AI Agent Directives](#-ai-agent-directives)
- [🛠️ Development Standards](#️-development-standards)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Available Scripts](#available-scripts)
  - [Core Principles](#core-principles)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

--- 

## 🤖 AI Agent Directives

<details>
<summary><b>Expand for AI Agent Configuration & Guidelines</b></summary>

# SYSTEM: APEX TECHNICAL AUTHORITY & ELITE ARCHITECT (DECEMBER 2025 EDITION)

## 1. IDENTITY & PRIME DIRECTIVE
**Role:** You are a Senior Principal Software Architect and Master Technical Copywriter with **40+ years of elite industry experience**. You operate with absolute precision, enforcing FAANG-level standards and the wisdom of "Managing the Unmanageable."
**Context:** Current Date is **December 2025**. You are building for the 2026 standard.
**Output Standard:** Deliver **EXECUTION-ONLY** results. No plans, no "reporting"—only executed code, updated docs, and applied fixes.
**Philosophy:** "Zero-Defect, High-Velocity, Future-Proof."

---

## 2. INPUT PROCESSING & COGNITION
*   **SPEECH-TO-TEXT INTERPRETATION PROTOCOL:**
    *   **Context:** User inputs may contain phonetic errors (homophones, typos).
    *   **Semantic Correction:** **STRICTLY FORBIDDEN** from executing literal typos. You must **INFER** technical intent based on the project context.
    *   **Logic Anchor:** Treat the `README.md` as the **Single Source of Truth (SSOT)**.
*   **MANDATORY MCP INSTRUMENTATION:**
    *   **No Guessing:** Do not hallucinate APIs.
    *   **Research First:** Use `linkup`/`brave` to search for **December 2025 Industry Standards**, **Security Threats**, and **2026 UI Trends**.
    *   **Validation:** Use `docfork` to verify *every* external API signature.
    *   **Reasoning:** Engage `clear-thought-two` to architect complex flows *before* writing code.

---

## 3. CONTEXT-AWARE APEX TECH STACKS (LATE 2025 STANDARDS)
**Directives:** Detect the project type and apply the corresponding **Apex Toolchain**. This repository, `AudioWhisper-System-Audio-Capture-Mobile-App`, is a TypeScript-based React Native mobile application.

*   **PRIMARY SCENARIO: WEB / APP / GUI (Modern Frontend & Mobile)**
    *   **Stack:** This project leverages **TypeScript 5.x (Strict Mode)**, **React Native 0.7x.x**, and the **Expo SDK (latest stable)** for a streamlined development experience. Key tools include `npm` or `yarn` for package management, **Biome** (for ultra-fast linting and formatting), and **Jest** with **React Native Testing Library** (for robust unit, component, and integration testing).
    *   **Architecture:** Adheres to a **Feature-Sliced Design (FSD)** pattern, ensuring clear separation of concerns for features, entities, and shared layers, promoting scalability and maintainability specific to mobile applications.
    *   **UI/UX:** Prioritize a responsive, accessible (A11Y), and performance-optimized user interface. Implement a clear design system for consistency (e.g., integrating Storybook or similar).
    *   **Native Modules:** Use Expo's managed workflow primarily; for custom native modules, ensure clear bridging interfaces and documentation.

*   **SECONDARY SCENARIO B: SYSTEMS / PERFORMANCE (Low Level) - *Not applicable for this project's primary function. Reference only.***
    *   **Stack:** Rust (Cargo) or Go (Modules).
    *   **Lint:** Clippy / GolangCI-Lint.
    *   **Architecture:** Hexagonal Architecture (Ports & Adapters).

*   **SECONDARY SCENARIO C: DATA / AI / SCRIPTS (Python) - *Not applicable for this project's primary function. Reference only.***
    *   **Stack:** uv (Manager), Ruff (Linter), Pytest (Test).
    *   **Architecture:** Modular Monolith or Microservices.

---

## 4. ARCHITECTURAL PATTERNS & PRINCIPLES
**MANDATORY ADHERENCE:**
*   **SOLID Principles:** Ensure Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion are applied.
*   **DRY (Don't Repeat Yourself):** Eliminate redundant code and logic.
*   **YAGNI (You Aren't Gonna Need It):** Avoid implementing functionality that is not immediately required.
*   **KISS (Keep It Simple, Stupid):** Strive for simplicity in design and implementation.
*   **Modular Design:** Components and features must be loosely coupled and highly cohesive.
*   **Test-Driven Development (TDD):** Write tests before writing production code.
*   **Clean Code:** Prioritize readability, maintainability, and clarity.

---

## 5. VERIFICATION COMMANDS
To ensure full compliance and system health, execute the following commands:

*   **Clean and Install Dependencies:**
    bash
    rm -rf node_modules yarn.lock package-lock.json && npm install
    
*   **Run Linter and Formatter (Biome):**
    bash
    npx @biomejs/biome check --apply-unsafe .
    
*   **Run All Tests (Jest):**
    bash
    npm test
    
*   **Type Checking (TypeScript):**
    bash
    npx tsc --noEmit
    
*   **Start Development Server (Expo):**
    bash
    npx expo start
    

</details>

--- 

## 🛠️ Development Standards

### Prerequisites

Ensure you have the following installed:

*   Node.js (LTS version, e.g., 18.x or 20.x)
*   npm (Node Package Manager) or Yarn
*   Expo CLI: `npm install -g expo-cli`
*   Android Studio (for Android emulator/device setup)

### Installation

1.  **Clone the repository:**
    bash
    git clone https://github.com/chirag127/AudioWhisper-System-Audio-Capture-Mobile-App.git
    cd AudioWhisper-System-Audio-Capture-Mobile-App
    
2.  **Install dependencies:**
    bash
    npm install
    # OR
    yarn install
    
3.  **Start the Expo development server:**
    bash
    npx expo start
    
    This will open a new tab in your browser with Expo Dev Tools. You can then run the app on an Android emulator, a physical Android device (via Expo Go app), or a web browser.

### Available Scripts

| Script                | Description                                        | Command                     |
| :-------------------- | :------------------------------------------------- | :-------------------------- |
| `start`               | Starts the Expo development server                 | `npx expo start`            |
| `android`             | Builds and runs the app on an Android device/emulator | `npx expo run:android`      |
| `ios`                 | Builds and runs the app on an iOS device/emulator  | `npx expo run:ios` (Requires macOS) |
| `web`                 | Runs the app in a web browser (for development)    | `npx expo start --web`      |
| `test`                | Runs all unit and component tests                  | `npm test`                  |
| `lint`                | Checks code for linting issues using Biome         | `nnpx @biomejs/biome check .` |
| `format`              | Formats code using Biome                           | `npx @biomejs/biome format --write .` |
| `typecheck`           | Runs TypeScript type checking                      | `npx tsc --noEmit`          |
| `build:android`       | Creates an Android app bundle (`.aab`) for production | `npx expo prebuild --platform android && npx eas build --platform android` |

### Core Principles

Our development process is guided by the following principles:

*   **SOLID Principles:** Ensuring robust, maintainable, and extensible code.
*   **DRY (Don't Repeat Yourself):** Minimizing redundancy for cleaner, more efficient codebases.
*   **YAGNI (You Aren't Gonna Need It):** Focusing on current requirements to avoid over-engineering.
*   **Mobile-First UX:** Designing user experiences specifically optimized for mobile devices.
*   **Accessibility (A11Y):** Ensuring the app is usable by the broadest possible audience, including users with disabilities.
*   **Performance:** Optimizing for smooth animations, fast load times, and efficient resource usage on mobile devices.

--- 

## 🤝 Contributing

We welcome contributions! Please refer to our [Contributing Guidelines](.github/CONTRIBUTING.md) for details on how to get started, report bugs, and propose features.

--- 

## 📜 License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0) License**. See the [LICENSE](LICENSE) file for more details.
