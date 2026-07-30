import { test, expect } from '@playwright/test';

test('File Download', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  await expect(page.locator('a[href*="sample.pdf"]')).toBeVisible();

  // Wait for the download event
  const downloadPromise = page.waitForEvent('download');

  // Click the download link
  await page.locator('a[href*="sample.pdf"]').click();

  // Get the downloaded file
  const download = await downloadPromise;

  // Save the file
  await download.saveAs('./Downloads/sample.pdf');

  console.log("Downloaded Successfully");

  await page.waitForTimeout(2000);

}); 