// Selectors & Element Interaction

const { type } = require("node:os");


// CSS Selector
await page.click('button#login');        
await page.fill('input[name="email"]', 'test@example.com');

// Text Selector
await page.click('text="Submit"'); 

// Role Selector
await page.getByRole('button', { name: 'Submit' }).click();

// Placeholder Selector
await page.getByPlaceholder('Enter your email').fill('user@example.com');

// Test ID Selector
await page.getByTestId('login-button').click();

// XPath Selector
await page.click('//input[@id="search"]');

// Click an Element
await page.click('button#submit'); 
await page.getByText('Submit').click(); 

// Fill an Input Field
await page.fill('#email', 'example@mail.com');

// Type with Delay
await page.type('#username', 'JohnDoe', { delay: 100 });

// Select Dropdown Option
await page.selectOption('#country', 'US'); 

// Check or Uncheck a Checkbox
await page.check('#agree');    
await page.uncheck('#agree'); 

// Hover Over Element
await page.hover('.menu-item');


// Element Interaction 
click()
type()
fill()
hover()

