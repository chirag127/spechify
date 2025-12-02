# Security Policy for AudioWhisper

## Our Commitment

The AudioWhisper team is deeply committed to the security of our application and the privacy of our users. We value the contributions of the security research community and believe that responsible disclosure of security vulnerabilities helps us ensure the safety of our product.

## Supported Versions

Security updates are applied only to the most recent release. We encourage all users to stay on the latest version of the application to benefit from the latest features and security patches.

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability, please report it to us privately to protect our users' information. **Do not disclose the issue publicly** until we have had a chance to address it.

Please report vulnerabilities via the **[Private Vulnerability Reporting feature on GitHub](https://github.com/chirag127/AudioWhisper-System-Audio-Capture-Mobile-App/security/advisories/new)**.

### What to Include in Your Report

To ensure we can effectively assess and remediate the issue, please provide a detailed report including:

- **A clear and descriptive title** for the vulnerability.
- **A detailed description** of the vulnerability and its potential impact.
- **Step-by-step instructions** to reproduce the issue, including any required setup, configuration, or proof-of-concept code.
- The **version of the application** you tested against.
- Any relevant logs, screenshots, or screen recordings.

We will make a best effort to acknowledge your report within 48 hours and will keep you updated on the progress of our investigation and resolution.

## Security Best Practices

We adhere to modern security best practices throughout our development lifecycle:

- **Dependency Management:** We use Dependabot to monitor our dependencies for known vulnerabilities and apply patches promptly.
- **Static Analysis:** Our CI/CD pipeline includes Static Application Security Testing (SAST) tools to scan our TypeScript and React Native code for common security flaws.
- **Secret Scanning:** This repository has GitHub's secret scanning enabled to prevent the accidental commitment of API keys, credentials, and other sensitive data.

Thank you for helping keep AudioWhisper and our users safe.