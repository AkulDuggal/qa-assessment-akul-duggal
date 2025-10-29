/* symbol changing */

import { test, expect } from '@playwright/test';

test('symbol search', async ({ page }) => {
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

  // Click the symbols dropdown
  const symbolDropdown = page.locator("(//button[@data-testid='symbols-dropdown'])");
  await symbolDropdown.waitFor({ state: 'visible' });
  await symbolDropdown.click();

  // Wait for the search box to appear
  const searchBox = page.locator("//input[@placeholder='Search symbol...']");
  await searchBox.waitFor({ state: 'visible' });

  // Type 'eth' and press Enter
  await searchBox.fill('eth');
  await searchBox.press('Enter');

  // Optional wait for results to load
  
});
