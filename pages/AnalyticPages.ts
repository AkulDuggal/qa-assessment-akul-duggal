import { Page, expect } from '@playwright/test';

export class AnalyticsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openFirstDialogBox() {
    const dialogBox = this.page.locator('.text-green-400:first-child');
    await dialogBox.waitFor({ state: 'visible' });
    await dialogBox.click();
  }

  async openSecondTab() {
    const tradingTabs = this.page.locator('.flex.flex-row.gap-2 nav');
    await tradingTabs.nth(1).waitFor({ state: 'visible' });
    await tradingTabs.nth(1).click();
  }

  async openPostTradeAnalytics() {
    const postTrade = this.page.locator("//span[normalize-space()='Post-Trade Analytics']");
    await postTrade.waitFor({ state: 'visible' });
    await postTrade.click();
  }

  async generateBillingReport() {
    const billing = this.page.locator('.mt-4.flex.items-center.gap-2 button');
    await billing.nth(1).click();

    const optionsBilling = this.page.locator('.relative.flex.cursor-default');
    await optionsBilling.nth(0).click();

    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    const options = this.page.locator('.flex.w-full.flex-col .overflow-x-auto .whitespace-nowrap');
    await options.first().waitFor({ state: 'visible' });

    // Click the first 3 options sequentially
    await options.nth(0).click();
    await options.nth(1).click();
    await options.nth(2).click();
  }
}
