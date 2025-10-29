import { test, expect } from '@playwright/test';

test('navigate and open goops', async ({ page }) => {
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

  const dialogBox = page.locator('.text-green-400:first-child');
  await dialogBox.waitFor({ state: 'visible' });
  await dialogBox.click();

  // Wait for navigation buttons 
  const tradingTabs = page.locator('.flex.flex-row.gap-2 nav');
  await tradingTabs.nth(2).waitFor({ state: 'visible' });
  await tradingTabs.nth(2).click();

  // Click on "goops"
  const postTrade = page.locator("//span[normalize-space()='GoOps']");
  await postTrade.waitFor({ state: 'visible' });
  await postTrade.click();

  // Reconciliation page
  const optionsMetrics=page.locator('.w-full .h-8 .ring-offset-background');
  await optionsMetrics.nth(2).click();

  //continue here ..need to work on filters

  //await optionsMetrics.nth(2).click();

  // Optional pause for observation
  await page.waitForTimeout(5000);
});