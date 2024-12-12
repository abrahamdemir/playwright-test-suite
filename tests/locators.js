export const locators = {
    // Login Page Locators
    login: {
      emailInput: 'input#username', 
      passwordInput: 'input#password', 
      signInButton: 'button[type="submit"]', 
    },
  
    // Navigation Locators
    navigation: {
      webAppButton: 'button:has-text("Web Application")',
      mobileAppButton: 'button:has-text("Mobile Application")',
      marketingCampaignButton: 'button:has-text("Marketing Campaign")',
    },
  
    columns: (columnName) => `h2:has-text("${columnName}")`, // Dynamic locator template for column headers
  
    // Task Locators (Dynamic)
    taskInColumn: (columnName, taskTitle) =>
        `h2:has-text("${columnName}") ~ div div:has(h3:has-text("${taskTitle}"))`, // Locator for tasks within a specific column
  
    // Tag Locators (Dynamic)
    tagInColumnTask: (columnName, taskName, tagName) =>
        `h2:has-text("${columnName}") ~ div div:has(h3:has-text("${taskName}")) span:has-text("${tagName}")`,
  };
  