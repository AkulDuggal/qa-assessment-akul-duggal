import { Page, expect } from '@playwright/test';

export class GoSettlePage {
  readonly page: Page;
  readonly dialogBox;
  readonly tradingTabs;
  readonly goSettleTab;
  readonly accountsTab;

  constructor(page: Page) {
    this.page = page;
    this.dialogBox = page.locator('.text-green-400:first-child');
    this.tradingTabs = page.locator('.flex.flex-row.gap-2 nav');
    this.goSettleTab = page.locator("//span[normalize-space()='GoSettle']");
    this.accountsTab = page.locator('.space-y-4');
  }

  async openGoSettle() {
    // Wait for and click dialog box (green notification)
    await this.dialogBox.waitFor({ state: 'visible', timeout: 10000 });
    await this.dialogBox.click();

    // Navigate through tabs
    await this.tradingTabs.nth(2).waitFor({ state: 'visible' });
    await this.tradingTabs.nth(2).click();

    // Click on GoSettle tab
    await this.goSettleTab.waitFor({ state: 'visible' });
    await this.goSettleTab.click();

    // Verify and click accounts tab
    await expect(this.accountsTab).toBeVisible({ timeout: 10000 });
    await this.accountsTab.click();
  }
}
