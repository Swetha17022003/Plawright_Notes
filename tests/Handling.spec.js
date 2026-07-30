import { test, expect } from '@playwright/test';
import { on } from 'node:cluster';

test('Frame, Dialog, and Popup Example', async ({ page }) => {

  // ---------------- IFRAME ----------------
  await page.goto('https://ui.vision/demo/webtest/frames/');

  // Switch to Frame 1
  const frame = page.frameLocator('frame[src="frame_1.html"]');

  // Enter text inside the frame
  await frame.locator('input[name="mytext1"]').fill('Swetha');


  // ---------------- DIALOG ----------------
  page.on('dialog', async (dialog) => {
    console.log('Dialog Message:', dialog.message());
    await dialog.accept();
  });

  // Example website for dialog
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  await page.click('button:text("Click for JS Alert")');


  // ---------------- POPUP ----------------
  await page.goto('https://the-internet.herokuapp.com/windows');

  const [popup] = await Promise.all([
  page.waitForEvent('popup'),
  page.locator('text=Click Here').click()
]);

  console.log('Popup Title:', await popup.title());

});


// Frames (Iframe or embedded document)
// Dialog (alert, confirm, Prompts)
// Popup (New Browser tab or Window)

// Iframe Means:
// Mini frame inside the frame

// Frame - frame(), frameLocator()
// Dialog -page on('dialog'),
//         dialog.accept()

// Popup - page.content().waitForEvent('page')
