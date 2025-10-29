import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { GoSettlePage } from '../pages/GoSettlePage';

test('navigate and open GoSettle', async ({ page }) => {
    test.setTimeout(60000);
  const loginPage = new LoginPage(page);
  const goSettlePage = new GoSettlePage(page);

  await loginPage.goto();
  await loginPage.login('user16@goquant.io', '60Re3G9KvvFl4Ihegxpi');

  await goSettlePage.openGoSettle();

  
});