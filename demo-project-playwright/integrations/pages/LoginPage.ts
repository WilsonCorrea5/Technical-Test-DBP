import { Locator, Page, expect } from "@playwright/test";
import { LOCATORS } from "../locators/LoginLocators";

export class Login {
  private readonly UsernameTextbox: Locator;
  private readonly PasswordTextbox: Locator;
  private readonly LoginButton: Locator;
  private readonly userMessage: Locator;

  constructor(page: Page) {
    this.UsernameTextbox = page.locator(LOCATORS.USER_TXTBOX);
    this.PasswordTextbox = page.locator(LOCATORS.PASSWORD_TXTBOX);
    this.LoginButton = page.getByRole("button", { name: LOCATORS.LOGIN_BUTTON });
    this.userMessage = page.locator(LOCATORS.WELCOME_MSG);
  }

  async fillUsername(username: string) {
    await this.UsernameTextbox.fill(username);
  }
  async fillPassword(Password: string) {
    await this.PasswordTextbox.fill(Password);
  }
  async clickLoginButton() {
    await this.LoginButton.click();
  }
  async LoginWithUsernameAndPassword(username: string, Password: string) {
    await this.fillUsername(username);
    await this.fillPassword(Password);
    await this.clickLoginButton();
  }
  async checkSuccessfullLogin() {
    await expect(this.userMessage).toBeVisible();
  }
  async checkWrongLogin() {
    await expect(this.userMessage).not.toBeVisible();
  }
}