import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('failed login test', async ({ page }) => {
  test.setTimeout(60000);

  const loginPage = new LoginPage(page);

  // Go to login page
  await loginPage.goto();

  // Attempt to log in with invalid password
  await loginPage.login('user16@goquant.io', 'YourPassword123');


});
