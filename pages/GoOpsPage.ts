import { Page } from '@playwright/test';

export class GoOpsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openDialog() {
    const dialogBox = this.page.locator('.text-green-400:first-child');
    await dialogBox.waitFor({ state: 'visible' });
    await dialogBox.click();
  }

  async navigateToGoOps() {
    const tradingTabs = this.page.locator('.flex.flex-row.gap-2 nav');
    await tradingTabs.nth(2).waitFor({ state: 'visible' });
    await tradingTabs.nth(2).click();

    const goOps = this.page.locator("//span[normalize-space()='GoOps']");
    await goOps.waitFor({ state: 'visible' });
    await goOps.click();
  }

  async selectMetricsOptions() {
    const optionsMetrics = this.page.locator('.w-full .h-8 .ring-offset-background');
    await optionsMetrics.nth(1).click();

    const timeFrame = this.page.locator('(//button)[26]');
    await timeFrame.click();

    const metricType = this.page.locator('.inline-flex.items-center .truncate ');
    await metricType.nth(0).click();

    const options = this.page.locator('.relative.cursor-default');
    await options.nth(1).click();

    await this.page.waitForTimeout(5000);
  }

   async openReconciliationTab() {
    const optionsMetrics = this.page.locator('.w-full .h-8 .ring-offset-background');
    await optionsMetrics.nth(2).click();
    await this.page.waitForTimeout(5000);
  }

  async openWalletBillingPage() {
    const billing = this.page.locator('.flex.items-center.gap-2 .flex.flex-col');
    await billing.click();

    const optionsBilling = this.page.locator('.relative.flex.cursor-default');
    await optionsBilling.nth(0).click();

    await this.page.waitForTimeout(5000);
  }

}
