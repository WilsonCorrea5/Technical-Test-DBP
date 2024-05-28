import { Locator, Page, expect } from "@playwright/test";
import { LOCATORS } from "../locators/RegisterPageLocators";

export class Register {
  private readonly page: Page;
  private readonly UsernameTextbox: Locator;
  private readonly PasswordTextbox: Locator;
  private readonly SignupButton: Locator;

  constructor(page: Page) {
    this.UsernameTextbox = page.locator(LOCATORS.USERNAME_TXTBOX);
    this.PasswordTextbox = page.locator(LOCATORS.PASSWORD_TXTBOX);
    this.SignupButton = page.getByRole("button", { name: LOCATORS.SIGNUP_BUTTON });
    this.page = page;

  }

  async fillUsername(username: string) {
    await this.UsernameTextbox.fill(username);
  }
  async fillPassword(Password: string) {
    await this.PasswordTextbox.fill(Password);
  }
  async clickSignupButton() {
    await this.SignupButton.click();
  }
  async checkSuccessfullRegister() {
    const alertMsg = await this.page.waitForEvent("dialog");
    expect(alertMsg.message()).toContain("Sign up successful.");
    alertMsg.accept();
  }
  async registerNewUser(username: string, Password: string) {
    await this.fillUsername(username);
    await this.fillPassword(Password);
    await this.clickSignupButton();
    await this.checkSuccessfullRegister()
  }
  
}
