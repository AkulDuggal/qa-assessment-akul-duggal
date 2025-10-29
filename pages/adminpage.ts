import { Page, Locator } from '@playwright/test';

export class AdminPage {
  readonly page: Page;
  readonly dialogBox: Locator;
  readonly accountTab: Locator;
  readonly adminTab: Locator;
  readonly groupTabs: Locator;
  readonly addAccountButton: Locator;
  readonly keyInputs: Locator;
  readonly formButtons: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dialogBox = page.locator('.text-green-400:first-child');
    this.accountTab = page.locator('.flex.flex-row.gap-2 nav');
    this.adminTab = page.locator("//span[normalize-space()='Admin']");
    this.groupTabs = page.locator('.bg-background.inline-flex button');
    this.addAccountButton = page.locator("(//button[normalize-space()='Add Account'])[1]");
    this.keyInputs = page.locator('.space-y-4 div input');
    this.formButtons = page.locator('.space-y-4 button');
  }

  async openAdminPage() {
    await this.dialogBox.waitFor({ state: 'visible' });
    await this.dialogBox.click();

    await this.accountTab.nth(2).waitFor({ state: 'visible' });
    await this.accountTab.nth(2).click();

    await this.adminTab.waitFor({ state: 'visible' });
    await this.adminTab.click();
  }

  async handleGroups() {
    await this.groupTabs.nth(1).click();
    await this.page.waitForTimeout(4000);
    await this.groupTabs.nth(0).click();
  }

  async addAccount() {
    await this.addAccountButton.waitFor({ state: 'visible' });
    await this.addAccountButton.click();

    await this.keyInputs.nth(0).fill('testaccount');
    await this.keyInputs.nth(1).fill('thisisatstkey');
    await this.keyInputs.nth(2).fill('thisisalsorandomkey');
    await this.keyInputs.nth(3).fill('thisisalsoatestkey');

    await this.formButtons.nth(0).click(); // test button
    await this.formButtons.nth(1).click(); // submit button
  }
}
