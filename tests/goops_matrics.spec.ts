import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { GoOpsPage } from '../pages/GoOpsPage';

test('navigate and open goops', async ({ page }) => {
  test.setTimeout(60000);
  const loginPage = new LoginPage(page);
  const goOpsPage = new GoOpsPage(page);

  await loginPage.goto();
  await loginPage.login('user16@goquant.io', '60Re3G9KvvFl4Ihegxpi');

  await goOpsPage.openDialog();
  await goOpsPage.navigateToGoOps();
  await goOpsPage.selectMetricsOptions();
});
