import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SettingsPage } from '../pages/SettingsPage';

test('setting page', async ({ page }) => {
  test.setTimeout(60000);
  const loginPage = new LoginPage(page);
  const settingsPage = new SettingsPage(page);

  await loginPage.goto();
  await loginPage.login('user16@goquant.io', '60Re3G9KvvFl4Ihegxpi');

  await settingsPage.openFirstDialogBox();
  await settingsPage.navigateToSettings();
  await settingsPage.openShortcuts();
  await settingsPage.searchShortcut('GoTrade');

  
});
