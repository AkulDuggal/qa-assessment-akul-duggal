import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Correct login', async ({ page }) => {
  test.setTimeout(60000);
  const loginPage = new LoginPage(page);

  // Go to login page
  await loginPage.goto();

  // Perform login
  await loginPage.login('user16@goquant.io', '60Re3G9KvvFl4Ihegxpi');

  // Wait for page to finish loading after login
  await page.waitForLoadState('domcontentloaded');

  // Verify that the dialog box is visible after login
  await expect(page.locator('.text-green-400:first-child')).toBeVisible();
});
