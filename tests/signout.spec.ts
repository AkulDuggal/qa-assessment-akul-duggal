import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { LogoutPage } from '../pages/LogoutPage';

test('logout', async ({ page }) => {
  test.setTimeout(60000);
  const loginPage = new LoginPage(page);
  const logoutPage = new LogoutPage(page);

  await loginPage.goto();
  await loginPage.login('user16@goquant.io', '60Re3G9KvvFl4Ihegxpi');

  await logoutPage.openFirstDialogBox();
  await logoutPage.logout();

  
});
