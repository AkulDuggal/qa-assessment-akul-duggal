QA Assessment - Akul Duggal

# GoTrade UI Automation – Playwright + TypeScript

## Overview
This project contains automated test scripts developed using Playwright and TypeScript to validate the GoTrade Web Platform. The focus of these tests is to ensure that key user interface components, navigation flows, and core functionality of the application operate as expected across multiple browsers.

The framework follows a modular structure, allowing easy maintenance and scalability for future test case additions.

## Tech Stack
- Language: TypeScript
- Framework: Playwright Test Runner
- Browsers Tested: Chromium, Firefox, WebKit
- Node.js Version: 18 or higher
- Operating System: Cross-platform (Windows, macOS, Linux)

## Project Structure
project-root/
│
├── tests/ # Contains all test scripts
├── playwright.config.ts # Playwright configuration file
├── package.json # Project dependencies and scripts
├── package-lock.json
└── README.md # Project documentation

## Running Tests

To run all test cases, use the following command:
- npx playwright test

To run a specific test file:
- npx playwright test <test-file-name>.spec.ts

To open the HTML test report after execution:
- npx playwright show-report

# Test Scope
The current suite focuses on:
- Validating key UI elements and navigational flows
- Ensuring cross-browser compatibility
- Verifying button actions, form submissions, and visual consistency
- Detecting broken or inaccessible modules during runtime

# Reporting

Upon completion, Playwright automatically generates a detailed HTML report located in the reports/ directory.
The report includes:

- Pass/fail status of each test
- Execution time and duration

To view the report, run the following command in your terminal:
- npx playwright show-report

This will open the interactive HTML report in your default web browser, allowing you to explore detailed results, screenshots, and traces for each test execution.

# Future Enhancements

- Add data-driven tests for multiple input scenarios
- Integrate API-level validation for better coverage
- Include visual regression testing
- Enable CI/CD pipeline integration (GitHub Actions or Jenkins)

# Author
Akul Duggal
QA Engineer – Automation (Playwright + TypeScript)