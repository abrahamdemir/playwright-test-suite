# Playwright Test Suite

This repository contains a Playwright test suite to validate tasks and tags in the Demo App: [Demo App](https://animated-gingersnap-8cf7f2.netlify.app).

## Prerequisites
1. Install **Node.js** (version 14 or later): [Download Node.js](https://nodejs.org/)
2. Install Playwright's browsers:
   ```bash
   npx playwright install
   ```

## Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/abrahamdemir/playwright-test-suite.git
   cd your-repo-name
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests
- **Headless mode** (default, no browser UI):
  ```bash
  npx playwright test
  ```
- **Headed mode** (with browser UI):
  ```bash
  npx playwright test --headed
  ```

## Debugging Tests
- Use debug mode for interactive debugging:
  ```bash
  npx playwright test --debug
  ```
- Add `await page.pause();` in the test to inspect elements.

## Video Recording
Videos are recorded **only for failed tests**. After running the tests, check the `test-results` folder for videos of failed test cases.

---
