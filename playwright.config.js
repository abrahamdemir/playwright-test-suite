const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  use: {
    headless: true, // Run tests in headless mode
    baseURL: 'https://animated-gingersnap-8cf7f2.netlify.app/',
    trace: 'on-first-retry', // Generate trace for failed tests
    video: 'retain-on-failure', // Record video only for failed tests
    screenshot: 'only-on-failure', // Capture screenshots only for failed tests
    outputDir: 'test-results', // Save videos and screenshots in the test-results folder
  },
  reporter: [
    ['list'], // Terminal output
    ['html', { outputFolder: 'html-report', open: 'never' }], // HTML report
  ],
  globalTeardown: './global-teardown.js', // Reference the teardown file
});
