import { Page, Locator } from '@playwright/test';

export class DiscoveryPage {
  readonly page: Page;
  readonly dialogBox: Locator;
  readonly discoveryButton: Locator;
  readonly typeButtons: Locator;
  readonly swapType: Locator;
  readonly assetInput: Locator;
  readonly selectBaseAsset: Locator;
  readonly quoteInput: Locator;
  readonly selectQuoteAsset: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dialogBox = page.locator('.text-green-400:first-child');
    this.discoveryButton = page.locator("(//button[@id='symbol-discovery'])[1]");
    this.typeButtons = page.locator('.mt-2.w-full button:nth-child(2) .truncate');
    this.swapType = page.locator("//div[@data-value='swap']");
    this.assetInput = page.locator("input[placeholder='Search base assets...']");
    this.selectBaseAsset = page.locator('.overflow-hidden.p-1 .px-2').first();
    this.quoteInput = page.locator("(//input[@placeholder='Search quote assets...'])[1]");
    this.selectQuoteAsset = page.locator('.z-50.rounded-lg .px-2').first();
  }

  async openDiscovery() {
    await this.dialogBox.waitFor({ state: 'visible' });
    await this.dialogBox.click();

    await this.discoveryButton.click();
    await this.page.waitForSelector('.mt-2.w-full button:nth-child(2) .truncate');
  }

  async selectSwap() {
    await this.typeButtons.first().click();
    await this.swapType.click();
  }

  async selectAssets(base: string, quote: string) {
    await this.assetInput.waitFor({ state: 'visible' });
    await this.assetInput.fill(base);
    await this.selectBaseAsset.click();

    await this.quoteInput.fill(quote);
    await this.selectQuoteAsset.click();
  }
}
