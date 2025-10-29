import { test, expect } from '@playwright/test';

test('navigate and open post-trade analytics', async ({ page }) => {
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
  await page.waitForTimeout(5000);

  const dialogBox = page.locator('.text-green-400:first-child');
  await dialogBox.waitFor({ state: 'visible' });
  await dialogBox.click();

  // Wait for navigation buttons and click the 2nd one
  const tradingTabs = page.locator('.flex.flex-row.gap-2 nav');
  await tradingTabs.nth(1).waitFor({ state: 'visible' });
  await tradingTabs.nth(1).click();

  // Click on "Post-Trade Analytics"
  const postTrade = page.locator("//span[normalize-space()='Post-Trade Analytics']");
  await postTrade.waitFor({ state: 'visible' });
  await postTrade.click();
  
  // billing file generation
  const billing = await page.locator('.mt-4.flex.items-center.gap-2 button');
  await billing.nth(1).click();

  // Click the first dropdown or option element
  const optionsBilling = await page.locator('.relative.flex.cursor-default');
  await optionsBilling.nth(0).click();
  // Scroll to bottom of page
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  // Wait for the options to load
  const options = page.locator('.flex.w-full.flex-col .overflow-x-auto .whitespace-nowrap');
  await options.first().waitFor({ state: 'visible' });

  // Click the first 3 options sequentially
  await options.nth(0).click();
  await options.nth(1).click();
  await options.nth(2).click();

  // Optional pause for observation
  //await page.waitForLoadState('networkidle');
});
