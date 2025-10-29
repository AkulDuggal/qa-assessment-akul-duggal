import { Page } from '@playwright/test';

export class LogoutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openFirstDialogBox() {
    const dialogBox = this.page.locator('.text-green-400:first-child');
    await dialogBox.waitFor({ state: 'visible' });
    await dialogBox.click();
  }

  async logout() {
    const signoutButton = this.page.locator('.flex.items-center.gap-2 button').first();
    await signoutButton.waitFor({ state: 'visible' });
    await signoutButton.click();

    const signoutOption = this.page.locator("div[role='menuitem']");
    await signoutOption.waitFor({ state: 'visible' });
    await signoutOption.click();
  }
}
