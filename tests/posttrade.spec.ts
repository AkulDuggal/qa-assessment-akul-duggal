import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AnalyticsPage } from '../pages/AnalyticPages';

test('navigate and open post-trade analytics', async ({ page }) => {
  test.setTimeout(60000);
  const loginPage = new LoginPage(page);
  const analyticsPage = new AnalyticsPage(page);

  await loginPage.goto();
  await loginPage.login('user16@goquant.io', '60Re3G9KvvFl4Ihegxpi');

  await page.waitForTimeout(5000);

  await analyticsPage.openFirstDialogBox();
  await analyticsPage.openSecondTab();
  await analyticsPage.openPostTradeAnalytics();
  await analyticsPage.generateBillingReport();
});
