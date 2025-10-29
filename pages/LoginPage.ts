import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly signInButton: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('(//input[@id="_R_1eqlubsnmlb_-form-item"])[1]');
    this.password = page.locator('input[name="password"]');
    this.signInButton = page.locator("(//button[normalize-space()='Sign In'])[1]");
    
  }

  async goto() {
    await this.page.goto('https://test1.gotrade.goquant.io/auth/login');
  }

  async login(user: string, pass: string) {
    await this.username.waitFor({ state: 'visible' });
    await this.username.fill(user);

    await this.password.waitFor({ state: 'visible' });
    await this.password.fill(pass);

    await this.signInButton.click();

    
  }

}
