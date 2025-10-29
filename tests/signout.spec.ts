import { test, expect } from '@playwright/test';

test('logout', async ({ page }) => {
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
  //await page.waitForLoadState('networkidle'); 

  // Click dialog box (first green item)
  const dialogBox = page.locator('.text-green-400:first-child');
  await dialogBox.waitFor({ state: 'visible' });
  await dialogBox.click();

  

  const signoutButton=page.locator('.flex.items-center.gap-2 button').first();
  await signoutButton.waitFor({ state: 'visible' });
  await signoutButton.click();


  const signout=page.locator("div[role='menuitem']");
  await signout.waitFor({ state: 'visible' });
  await signout.click();    

  await page.waitForTimeout(5000);

});