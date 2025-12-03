# Contributing to Spechify-Audio-Capture-Android-Mobile-App

Thank you for considering contributing to the Spechify-Audio-Capture-Android-Mobile-App project! We aim to maintain a high standard of quality, velocity, and future-proofing, mirroring the **Apex Technical Authority** principles.

## 1. Our Core Principles

*   **Zero-Defect:** Strive for production-ready code. All contributions should be well-tested and adhere to strict linting rules.
*   **High-Velocity:** Streamlined processes enable rapid iteration. Ensure your contributions are clear, concise, and easily reviewable.
*   **Future-Proof:** Embrace modern standards and best practices. Contributions should be scalable and maintainable for the long term.

## 2. Getting Started

### 2.1. Setup

1.  **Fork the repository:** Fork `https://github.com/chirag127/Spechify-Audio-Capture-Android-Mobile-App` to your GitHub account.
2.  **Clone your fork:**
    bash
    git clone https://github.com/<your-username>/Spechify-Audio-Capture-Android-Mobile-App.git
    cd Spechify-Audio-Capture-Android-Mobile-App
    
3.  **Set up upstream remote:**
    bash
    git remote add upstream https://github.com/chirag127/Spechify-Audio-Capture-Android-Mobile-App.git
    
4.  **Install dependencies:**
    bash
    # Assuming Expo/React Native project, adjust as necessary
    npm install
    # or
    yarn install
    

### 2.2. Development Environment (Late 2025 Standards)

*   **Language:** TypeScript 6.x (Strict Mode Enabled)
*   **Framework:** React Native (with Expo managed workflow)
*   **Bundler:** Vite 7 (Rolldown)
*   **Styling:** TailwindCSS v4+
*   **Native Layer:** Tauri v2.x (if applicable for future expansion beyond mobile)
*   **Linting/Formatting:** Biome (Ultra-fast, unified tool for linting and formatting)
*   **Testing:** Vitest (Unit Tests), Playwright (E2E Tests)

Ensure your local development environment meets these standards. Use Biome for code formatting before committing.

## 3. Contribution Workflow

### 3.1. Feature Development / Bug Fixes

1.  **Create a new branch:** Based on the `main` branch, create a descriptive branch name (e.g., `feature/add-background-recording` or `fix/audio-stutter-issue`).
    bash
    git checkout -b feature/your-feature-branch-name
    
2.  **Implement changes:** Follow the project's architectural patterns (e.g., Feature-Sliced Design if applicable) and coding standards.
3.  **Write tests:** Add unit tests for new logic and update existing tests. Ensure sufficient test coverage.
4.  **Format code:** Run the formatter.
    bash
    npx @biomejs/biome format --write .
    
5.  **Lint code:** Check for any linting errors.
    bash
    npx @biomejs/biome lint --apply .
    
6.  **Test thoroughly:** Run all tests locally.
    bash
    npx vitest
    # For E2E tests, follow instructions in README.md
    
7.  **Commit your changes:** Write clear, concise commit messages.
    bash
    git add .
    git commit -m "feat: Add seamless background audio capture"
    
8.  **Push your branch:**
    bash
    git push origin feature/your-feature-branch-name
    

### 3.2. Pull Request (PR) Creation

1.  **Open a Pull Request:** Navigate to the `https://github.com/chirag127/Spechify-Audio-Capture-Android-Mobile-App` repository and open a new pull request from your feature branch to the `main` branch.
2.  **PR Template:** Fill out the Pull Request template completely. This will include:
    *   A clear title.
    *   A detailed description of the changes.
    *   How to test the changes.
    *   Any relevant screenshots or videos.
    *   Confirmation that tests pass and code is formatted/linted.
3.  **Address Feedback:** Be responsive to code review feedback. If changes are requested, commit them to your feature branch and push again. The PR will update automatically.

## 4. Coding Standards & Best Practices

*   **TypeScript:** Use strict typing (`strict: true` in `tsconfig.json`). Prefer `const` over `let`. Avoid `any` type unless absolutely necessary and well-justified.
*   **React Native:** Follow functional component patterns with Hooks. Keep components small and focused.
*   **State Management:** Utilize React's built-in state management (useState, useReducer, Context API) or a community-standard library like Zustand or Jotai if complexity warrants it. Avoid prop drilling.
*   **Error Handling:** Implement robust error handling for all asynchronous operations, API calls, and background tasks. Use try-catch blocks and provide meaningful error messages.
*   **Background Tasks:** Adhere to best practices for background audio recording on Android to ensure stability and prevent app termination by the OS. Leverage Expo's background task APIs or native modules where appropriate.
*   **Security:** Be mindful of Android permissions. Request only necessary permissions and explain why they are needed. Avoid storing sensitive data insecurely.
*   **Performance:** Optimize rendering, minimize unnecessary re-renders, and be efficient with resource usage (CPU, memory, battery), especially for background processes.
*   **Architecture:** Adhere to the established architectural patterns. Consult the `AGENTS.md` file for specific directives.
*   **Documentation:** Write clear inline code comments for complex logic and update relevant documentation files (like `README.md`) if your changes introduce significant new features or alter existing behavior.

## 5. AI Agent Directives

For detailed instructions on how AI agents interact with this codebase, please refer to the **[AGENTS.md](./AGENTS.md)** file. Ensure your contributions align with the specified architecture, testing, and verification commands.

## 6. Reporting Issues

If you discover a bug or have a feature request, please open an issue on GitHub. Use the provided issue templates (`bug_report.md`) and provide as much detail as possible.

## 7. Code of Conduct

This project adheres to the Contributor Covenant Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to `chirag127@example.com`.

We appreciate your contributions to making `Spechify-Audio-Capture-Android-Mobile-App` a high-quality, reliable application!
