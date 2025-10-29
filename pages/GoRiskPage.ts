import { Page } from '@playwright/test';

export class GoRiskPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openDialog() {
    const dialogBox = this.page.locator('.text-green-400:first-child');
    await dialogBox.waitFor({ state: 'visible' });
    await dialogBox.click();
  }

  async navigateToGoRisk() {
    const accountTab = this.page.locator('.flex.flex-row.gap-2 nav');
    await accountTab.nth(2).waitFor({ state: 'visible' });
    await accountTab.nth(2).click();

    const goRiskTab = this.page.locator("//span[normalize-space()='GoRisk']");
    await goRiskTab.waitFor({ state: 'visible' });
    await goRiskTab.click();
  }

  async openRiskTab() {
    const riskTab = this.page.locator('.bg-background.inline-flex button');
    await this.page.waitForTimeout(4000);
    await riskTab.nth(1).click();
    await this.page.waitForTimeout(4000);
  }
}
