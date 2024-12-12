import { test, expect } from '@playwright/test';
import { locators } from './locators';

test.describe('Demo App Task and Tag Verification', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the Demo App and log in
    await page.goto('/');
    await page.waitForSelector(locators.login.emailInput, { state: 'visible' });
    await page.fill(locators.login.emailInput, 'admin');
    await page.fill(locators.login.passwordInput, 'password123');
    await page.click(locators.login.signInButton);

    // Verify landing page
    await expect(page.locator(locators.navigation.webAppButton)).toBeVisible();
  });

  const testCases = [
    {
      navigation: locators.navigation.webAppButton,
      column: 'To Do',
      task: 'Implement user authentication',
      tags: ['Feature', 'High Priority'],
    },
    {
      navigation: locators.navigation.webAppButton,
      column: 'To Do',
      task: 'Fix navigation bug',
      tags: ['Bug'],
    },
    {
      navigation: locators.navigation.webAppButton,
      column: 'In Progress',
      task: 'Design system updates',
      tags: ['Design'],
    },
    {
      navigation: locators.navigation.mobileAppButton,
      column: 'To Do',
      task: 'Push notification system',
      tags: ['Feature'],
    },
    {
      navigation: locators.navigation.mobileAppButton,
      column: 'In Progress',
      task: 'Offline mode',
      tags: ['Feature', 'High Priority'],
    },
    {
      navigation: locators.navigation.mobileAppButton,
      column: 'Done',
      task: 'App icon design',
      tags: ['Design'],
    },
  ];

  for (const testCase of testCases) {
    test(`Verify task: "${testCase.task}" in "${testCase.column}" column with tags: ${testCase.tags.join(', ')}`, async ({ page }) => {
      // Navigate to the specified section
      await page.click(testCase.navigation);

      // Verify the column exists
      await expect(page.locator(locators.columns(testCase.column))).toBeVisible();

      // Verify the task exists in the specified column
      const taskLocator = page.locator(locators.taskInColumn(testCase.column, testCase.task));
      await expect(taskLocator).toBeVisible();

      // Verify tags associated with the task
      for (const tag of testCase.tags) {
        const tagLocator = page.locator(locators.tagInColumnTask(testCase.column, testCase.task, tag));
        await expect(tagLocator).toBeVisible();
      }
    });
  }
});
