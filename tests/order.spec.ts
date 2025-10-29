/* this test is used to book a order , currently has login steps too */
/* USE npx playwright test tests/order.spec.ts --project=chromium --headed */

import { test, expect } from '@playwright/test';

test('trade flow test', async ({ page }) => {
   test.setTimeout(60000);
  
  await page.goto('https://test1.gotrade.goquant.io/auth/login');

  // Locate the username input using XPath
  const username = page.locator('(//input[@id="_R_1eqlubsnmlb_-form-item"])[1]');
  await username.waitFor({ state: 'visible' });
  await username.click();
  await username.fill('user16@goquant.io');

  // Locate the password input using name attribute
  const password = page.locator('input[name="password"]');
  await password.waitFor({ state: 'visible' });
  await password.click();
  await password.fill('60Re3G9KvvFl4Ihegxpi'); 

  // Locate and click the Sign In button using XPath
  const signInButton = page.locator("(//button[normalize-space()='Sign In'])[1]");
  await signInButton.waitFor({ state: 'visible' });
  await signInButton.click();

  // Wait for navigation / next page to load
  //await page.waitForLoadState('networkidle'); // waits until network is idle


  // Click dialog box (first green item)
  const dialogBox = page.locator('.text-green-400:first-child');
  await dialogBox.waitFor({ state: 'visible' });
  await dialogBox.click();

  // Wait for 10 seconds (same as time.sleep(10))
  await page.waitForTimeout(10000);

  // Fill amount
  const amount = page.locator('#emailInput');
  await amount.click();
  await amount.fill('10');

  // Fill duration
  const duration = page.locator("input[placeholder='Enter duration']");
  await duration.click();
  await duration.fill('1');

  // Fill decay factor
  const decayFactor = page.locator("input[placeholder='Enter decay factor']");
  await decayFactor.click();
  await decayFactor.fill('0.5');

  // Click Trade button
  const tradeButton = page.locator("//button[normalize-space()='Trade']").first();
  await tradeButton.waitFor({ state: 'visible' });
  await tradeButton.click();

  // Scroll down to bottom
  await page.evaluate(() => window.scrollBy(0, document.body.scrollHeight));

  // Click Order History
  const orderHistory = page.locator("//button[normalize-space()='Order History']");
  await orderHistory.click();

  // Wait for 10 seconds (for visual confirmation)
  await page.waitForTimeout(10000);
});
