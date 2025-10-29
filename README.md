QA Assessment - Akul Duggal

# GoTrade UI Automation – Playwright + TypeScript

## Overview
This project contains automated UI test scripts developed using Playwright and TypeScript to validate the GoTrade Web Platform.
The automation framework follows the Page Object Model (POM) design pattern to ensure scalability, modularity, and ease of maintenance.

The suite focuses on verifying end-to-end user journeys, navigation flows, and key UI components to ensure platform stability across multiple browsers.
## Tech Stack
- Language: TypeScript
- Framework: Playwright Test Runner
- Design Pattern: Page Object Model (POM)
- Browsers Tested: Chromium, Firefox, WebKit
- Node.js Version: 18 or higher
- Operating System:  Windows

## Project Structure
project-root/
│
├── tests/ # Contains all test scripts
├── pages/ # Page Object Model files for reusable actions
├── reports/ # Contains playwrright generated HTML Reports
├── playwright.config.ts # Playwright configuration file
├── package.json # Project dependencies and scripts
├── package-lock.json
├── Test_Report_Akul_Duggal.pdf # Summary test execution report
└── README.md # Project documentation

## Running Tests

To run all test cases, use the following command:
- npx playwright test

To run a specific test file:
- npx playwright test <test-file-name>.spec.ts

To open the HTML test report after execution:
- npx playwright show-report

# Framework Design (POM)

The Page Object Model (POM) structure separates test logic from page interactions, improving reusability and readability.

- pages/ folder: Defines reusable functions (e.g., login, navigation, button clicks).
- tests/ folder: Contains actual test cases that call these page methods.

Benefits:

- Cleaner and modular code
- Easier to maintain when UI changes
- Promotes reusability and consistency across tests

# Test Scope
The current automation suite focuses on:

- Validating UI components and navigation flows
- Ensuring cross-browser compatibility
- Verifying form submissions, button actions, and modal interactions
- Identifying broken or non-functional modules
- Automating key user workflows such as:
    - Login validation
    - Order booking flow
    - Various Page Validation such as GoTrade , GoSettle etc
    - Settings and logout functionality

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
- Enable parallel test execution for faster runs

# Author
Akul Duggal
QA Engineer – Automation (Playwright + TypeScript)
