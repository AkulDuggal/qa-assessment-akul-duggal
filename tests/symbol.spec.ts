import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SymbolPage } from '../pages/Symbol';

test('symbol search', async ({ page }) => {
  test.setTimeout(60000);
  const loginPage = new LoginPage(page);
  const symbolPage = new SymbolPage(page);

  await loginPage.goto();
  await loginPage.login('user16@goquant.io', '60Re3G9KvvFl4Ihegxpi');

  await symbolPage.openDialogBox();
  await symbolPage.changeSymbol('eth');
});
