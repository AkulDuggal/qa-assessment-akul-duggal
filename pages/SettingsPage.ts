import { Page } from '@playwright/test';

export class SettingsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openFirstDialogBox() {
    const dialogBox = this.page.locator('.text-green-400:first-child');
    await dialogBox.waitFor({ state: 'visible' });
    await dialogBox.click();
  }

  async navigateToSettings() {
    const accountTab = this.page.locator('.flex.flex-row.gap-2 nav');
    await accountTab.nth(2).waitFor({ state: 'visible' });
    await accountTab.nth(2).click();

    const settingsTab = this.page.locator("//span[normalize-space()='Settings']");
    await settingsTab.waitFor({ state: 'visible' });
    await settingsTab.click();
  }

  async openShortcuts() {
    const option = this.page.locator("(//button[normalize-space()='Shortcuts'])[1]");
    await option.waitFor({ state: 'visible' });
    await option.click();
  }

  async searchShortcut(keyword: string) {
    const searchBar = this.page.locator('.relative.flex-1 input');
    await searchBar.waitFor({ state: 'visible' });
    await searchBar.click();
    await searchBar.fill(keyword);
  }
}
