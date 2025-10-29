import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AdminPage } from '../pages/adminpage';

test('navigate and open admin page', async ({ page }) => {
  test.setTimeout(60000);
  const loginPage = new LoginPage(page);
  const adminPage = new AdminPage(page);

  // Step 1: Login
  await loginPage.goto();
  await loginPage.login('user16@goquant.io', '60Re3G9KvvFl4Ihegxpi');

  // Step 2: Navigate to Admin
  await adminPage.openAdminPage();

  // Step 3: Work with groups
  await adminPage.handleGroups();

  // Step 4: Add account
  await adminPage.addAccount();


});
