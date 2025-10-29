import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { GoRiskPage } from '../pages/GoRiskPage';

test('navigate and open gorisk page', async ({ page }) => {
  test.setTimeout(60000);
  const loginPage = new LoginPage(page);
  const goRiskPage = new GoRiskPage(page);

  await loginPage.goto();
  await loginPage.login('user16@goquant.io', '60Re3G9KvvFl4Ihegxpi');

  await goRiskPage.openDialog();
  await goRiskPage.navigateToGoRisk();
  await goRiskPage.openRiskTab();
});
