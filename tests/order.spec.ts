import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { OrderPage } from '../pages/OrderPage';

test('book a trade order', async ({ page }) => {
  test.setTimeout(60000);

  const loginPage = new LoginPage(page);
  const orderPage = new OrderPage(page);

  // Step 1: Go to login and login
  await loginPage.goto();
  await loginPage.login('user16@goquant.io', '60Re3G9KvvFl4Ihegxpi');

  // Step 2: Handle dialog box
  await orderPage.handleDialogBox();
  await page.waitForTimeout(2000);

  // Step 3: Fill trade details
  await orderPage.fillTradeDetails('10', '1', '0.5');

  // Step 4: Place trade
  await orderPage.placeTrade();

  // Step 5: Open order history
  await orderPage.openOrderHistory();
});
