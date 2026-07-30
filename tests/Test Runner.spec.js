// Test Runner


const { test, expect } = require('@playwright/test');

test('Login Test', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator('#user-name').fill('standard_user');

  await page.locator('#password').fill('secret_sauce');

  await page.locator('#login-button').click();

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});


// Explanation:

// Checks whether the browser navigated to the inventory page.
// All test case is run after excecute the "except" is run test passed
// If the URL matches, the test passes.
// If the URL doesn't match, the test fails.