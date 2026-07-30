
import { test, expect } from '@playwright/test';

test('Playwright Assertions', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');

  await expect(page.locator('#user-name')).toHaveValue('standard_user');

  await page.locator('#login-button').click();

  await expect(page).toHaveURL(/inventory.html/);

  await expect(page.locator('.title')).toHaveText('Products');

  await expect(page.locator('.inventory_item')).toHaveCount(6);

});


// // Assertion Type 

// page Assertion - toHaveTitle(), toHaveURL()
// Locator Assertion - toBeVisible(), toBeHidden(), toBeEnabled(), toBeDiable(),
//                     toBeChecked(), not.toBeChecked(), toBeEnabled(), toBeEmpty(),

// Test & Value - toHaveText(), toHaveValue(), toHaveAttribute(), tocontainsText()
// Count Assertion - toHaveCount()
// Screenshot - toHaveScreenshot(), locator.toHaveScreenshot()


