import { test, expect } from '@playwright/test';


test('navigate and open admin page', async ({ page }) => {
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
  await page.waitForLoadState('networkidle'); // waits until network is idle

  const dialogBox = page.locator('.text-green-400:first-child');
  await dialogBox.waitFor({ state: 'visible' });
  await dialogBox.click();

  // Navigate to Admin page
  const accountTab=page.locator('.flex.flex-row.gap-2 nav');
  await accountTab.nth(2).waitFor({ state: 'visible' });
  await accountTab.nth(2).click();

  const adminTab=page.locator("//span[normalize-space()='Admin']");
  await adminTab.waitFor({ state: 'visible' });
  await adminTab.click();


  //groups tab
  const groupTab=page.locator('.bg-background.inline-flex button');
  await groupTab.nth(1).click();

  await page.waitForTimeout(4000);

  await groupTab.nth(0).click();

  //adding account button
  const button=page.locator("(//button[normalize-space()='Add Account'])[1]");
  await button.waitFor({state: 'visible'});
  await button.click();

  // FORM FILLING

  const keyInput=page.locator('.space-y-4 div input');
  await keyInput.nth(0).fill('testaccount');
  
  await keyInput.nth(1).click();
  await keyInput.nth(1).fill("thisisatstkey");

  await keyInput.nth(2).fill('thisisalsorandomkey');
  
  await keyInput.nth(3).click();
  await keyInput.nth(3).fill("thisisalsoatestkey");

  const testButton=page.locator('.space-y-4 button');
  await testButton.nth(0).click();

  await testButton.nth(1).click();

  //await page.waitForTimeout(20000);

});