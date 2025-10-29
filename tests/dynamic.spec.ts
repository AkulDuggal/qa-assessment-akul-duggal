import { test, expect } from '@playwright/test';

test('discovery mode', async ({ page }) => {
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

  // Click the Discovery button
  const consolButton = page.locator("(//button[@id='symbol-discovery'])[1]");
  await consolButton.click();

  // Wait for UI to update instead of time.sleep(5)
  await page.waitForSelector('.mt-2.w-full button:nth-child(2) .truncate');

  // Click the second button
  const typeButtons = page.locator('.mt-2.w-full button:nth-child(2) .truncate');
  await typeButtons.first().click();

  // Choose swap type
  const typeChoose = page.locator("//div[@data-value='swap']");
  await typeChoose.click();

  // Wait for asset input to appear
  const assetInput = page.locator("input[placeholder='Search base assets...']");
  await assetInput.waitFor({ state: 'visible' });
  await assetInput.fill('eth');

  // Select first ETH result
  const selecter = page.locator('.overflow-hidden.p-1 .px-2').first();
  await selecter.waitFor({ state: 'visible' });
  await selecter.click();

  // Quote asset input
  const quoteInput = page.locator("(//input[@placeholder='Search quote assets...'])[1]");
  await quoteInput.fill('usdt');

  // Wait for dropdown
  const selecterAsset = page.locator('.z-50.rounded-lg .px-2').first();
  
  await selecterAsset.click();

  await page.waitForTimeout(10000);
});
