# AudioWhisper

[![Build Status](https://img.shields.io/github/actions/workflow/ci.yml?style=flat-square&logo=github&label=Build&user=chirag127&repo=AudioWhisper-System-Audio-Capture-Mobile-App)](https://github.com/chirag127/AudioWhisper-System-Audio-Capture-Mobile-App/actions/workflows/ci.yml)  [![Code Coverage](https://img.shields.io/codecov/c/github/chirag127/AudioWhisper-System-Audio-Capture-Mobile-App?style=flat-square&label=Coverage&user=chirag127&logo=codecov)](https://app.codecov.io/gh/chirag127/AudioWhisper-System-Audio-Capture-Mobile-App)  [![Tech Stack](https://img.shields.io/badge/Tech%20Stack-TypeScript%20%7C%20React%20Native%20%7C%20Expo-blue.svg?style=flat-square&logo=react)](https://github.com/chirag127/AudioWhisper-System-Audio-Capture-Mobile-App)  [![License](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg?style=flat-square)](https://creativecommons.org/licenses/by-nc/4.0/)

Capture system audio on Android devices with a sleek, user-friendly React Native interface.

[Star ⭐ this Repo](https://github.com/chirag127/AudioWhisper-System-Audio-Capture-Mobile-App)

## Table of Contents

1.  [About](#about)
2.  [Features](#features)
3.  [Installation](#installation)
4.  [Usage](#usage)
5.  [Architecture](#architecture)
6.  [Contributing](#contributing)
7.  [License](#license)

## About

AudioWhisper is a React Native mobile application designed to capture system audio on Android devices. It provides a clean and intuitive interface, enabling users to record audio streams from their device in the background. With support for dark and light themes, and easy sharing capabilities, AudioWhisper offers a seamless audio capture experience.

## Features

*   Background Audio Recording
*   Dark and Light Theme Support
*   Easy Audio Sharing
*   User-Friendly React Native Interface
*   Expo-based Development

## Installation

1.  **Clone the repository:**
    bash
    git clone https://github.com/chirag127/AudioWhisper-System-Audio-Capture-Mobile-App.git
    cd AudioWhisper-System-Audio-Capture-Mobile-App
    
2.  **Install dependencies:**
    bash
    npm install
    
3.  **Run the app:**
    bash
    npx expo start
    

## Usage

*   Launch the app on your Android device or emulator.
*   Grant necessary permissions for audio recording.
*   Start recording audio using the provided controls.
*   Access recorded audio files and share them as needed.

## Architecture

mermaid
graph LR
    A[App.js (Entry Point)] --> B{Context Providers};
    B --> C[AudioCaptureProvider];
    B --> D[ThemeProvider];
    C --> E[AudioRecorder];
    C --> F[AudioPlayer];
    D --> G[ThemeContext];
    E --> H[RecordingService];
    F --> I[PlaybackService];
    H --> J[NativeModule (Android)];
    I --> J
    style J fill:#f9f,stroke:#333,stroke-width:2px


## Contributing

Contributions are welcome! Please refer to the [CONTRIBUTING.md](https://github.com/chirag127/AudioWhisper-System-Audio-Capture-Mobile-App/blob/main/.github/CONTRIBUTING.md) file for guidelines.

## License

This project is licensed under the [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) license.

<details>
<summary>🤖 AI Agent Directives</summary>

This section provides directives for AI agents interacting with this repository.

**Tech Stack:**

*   **Language:** TypeScript
*   **Framework:** React Native, Expo
*   **State Management:** Context API
*   **Styling:** Native Base or similar
*   **Testing:** Jest, React Native Testing Library

**Architectural Patterns:**

*   **Component-Based Architecture:** Following React Native best practices.
*   **Separation of Concerns:** Clearly separated UI, audio capture logic, and data handling.

**Verification Commands:**

*   `npm install`: Install project dependencies.
*   `npx expo start`: Run the application in development mode.
*   `npm test`: Run unit tests.
*   `npm run lint`: Run the linter (e.g., eslint).
*   `npm run format`: Format the code using Prettier.

**AI Agent Guidelines:**

*   **Prioritize modularity**: Ensure that any changes or additions follow a modular design pattern.
*   **Adhere to coding standards:** strictly follow TypeScript and React Native best practices, including code style and naming conventions.
*   **Focus on user experience**: Any UI changes must maintain a clean and user-friendly design.
*   **Context API**: When integrating new features make sure it works in line with the context.
*   **Prioritize performance**: Minimize any performance bottlenecks.

</details>
