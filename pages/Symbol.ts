import { Page } from '@playwright/test';

export class SymbolPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openDialogBox() {
    const dialogBox = this.page.locator('.text-green-400:first-child');
    await dialogBox.waitFor({ state: 'visible' });
    await dialogBox.click();
  }

  async changeSymbol(symbol: string) {
    const symbolDropdown = this.page.locator("(//button[@data-testid='symbols-dropdown'])");
    await symbolDropdown.waitFor({ state: 'visible' });
    await symbolDropdown.click();

    const searchBox = this.page.locator("//input[@placeholder='Search symbol...']");
    await searchBox.waitFor({ state: 'visible' });
    await searchBox.fill(symbol);
    await searchBox.press('Enter');
  }
}
