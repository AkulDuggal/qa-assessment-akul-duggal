import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DiscoveryPage } from '../pages/discoverypage';

test('Discovery Mode flow', async ({ page }) => {
  test.setTimeout(60000);

  const loginPage = new LoginPage(page);
  const discoveryPage = new DiscoveryPage(page);

  await loginPage.goto();
  await loginPage.login('user16@goquant.io', '60Re3G9KvvFl4Ihegxpi');
  await discoveryPage.openDiscovery();
  await discoveryPage.selectSwap();
  await discoveryPage.selectAssets('eth', 'usdt');

  await page.waitForTimeout(10000);
});
