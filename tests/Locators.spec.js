
// Locator

// ID Locator
await page.locator('#user-name').fill('standard_user');
// Class locator
await page.locator('.submit-button').click();

// CSS Selector
await page.locator('.submit-button').click();

// XPath
await page.locator('//input[@id="user-name"]').fill('standard_user');

// Text Locator
await page.getByText('Login').click();

// Placeholder
await page.getByPlaceholder('Username').fill('standard_user');

// Label
await page.getByLabel('Username').fill('standard_user');

// Role
await page.getByRole('button', { name: 'Login' }).click();

// Alt Text'
await page.getByAltText('Company Logo').click();

// Title
await page.getByTitle('Search').click();


// Advance Locator

// First Element
await page.locator('.inventory_item').first().click();
// Last Element
await page.locator('.inventory_item').last().click();
// nth() Element
await page.locator('.inventory_item').nth(2).click();
// Filter by Text
await page
  .locator('.inventory_item')
  .filter({ hasText: 'Sauce Labs Backpack' })
  .click();

// has()
await page.locator('div', {
    has: page.locator('button')
}).click();

// hasText()

await page.locator('div', {
    hasText: 'Products'
}).click();


// Most commonly used Playwright locators in real projects

// locator()
// getByRole()
// getByText()
// getByLabel()
// getByPlaceholder()
// getByTestId()
// first()
// last()
// nth()
// filter({ hasText })
// has()
// count()