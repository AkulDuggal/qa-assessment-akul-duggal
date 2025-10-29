import { Page, Locator, expect } from '@playwright/test';

export class OrderPage {
  readonly page: Page;
  readonly dialogBox: Locator;
  readonly amountInput: Locator;
  readonly durationInput: Locator;
  readonly decayFactorInput: Locator;
  readonly tradeButton: Locator;
  readonly orderHistoryButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dialogBox = page.locator('.text-green-400:first-child');
    this.amountInput = page.locator('#emailInput');
    this.durationInput = page.locator("input[placeholder='Enter duration']");
    this.decayFactorInput = page.locator("input[placeholder='Enter decay factor']");
    this.tradeButton = page.locator("//button[normalize-space()='Trade']").first();
    this.orderHistoryButton = page.locator("//button[normalize-space()='Order History']");
  }

  async handleDialogBox() {
    await this.dialogBox.waitFor({ state: 'visible' });
    await this.dialogBox.click();
  }

  async fillTradeDetails(amount: string, duration: string, decay: string) {
    await this.amountInput.waitFor({ state: 'visible' });
    await this.amountInput.fill(amount);

    await this.durationInput.fill(duration);
    await this.decayFactorInput.fill(decay);
  }

  async placeTrade() {
    await this.tradeButton.waitFor({ state: 'visible' });
    await this.tradeButton.click();
  }

  async openOrderHistory() {
    await this.page.evaluate(() => window.scrollBy(0, document.body.scrollHeight));
    await this.orderHistoryButton.waitFor({ state: 'visible' });
    await this.orderHistoryButton.click();
  }
}
