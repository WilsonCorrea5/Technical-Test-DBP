import { Locator, Page, expect } from "@playwright/test";
import { CartAndPurchase } from "./ShoppingCartAndPurchase";
import { LOCATORS } from "../locators/HomePageLocators";

export class HomePage {
  private readonly PageTitle: Locator;
  private readonly page: Page;
  private readonly LoginButton: Locator;
  private readonly SignupButton: Locator;
  private readonly product: Locator;
  private readonly shoppingCartButton: Locator;
  private productName: string;

  constructor(page: Page) {
    this.page = page;
    this.LoginButton = page.locator(LOCATORS.LOGIN_BTN);
    this.SignupButton = page.locator(LOCATORS.SIGNUP_BTN);
    this.product = page.locator(LOCATORS.PRODUCTS);
    this.shoppingCartButton = page.getByRole("link", {
      name: LOCATORS.CART_BUTTON,
      exact: true,
    });
    this.PageTitle = page.locator(LOCATORS.PAGE_TITLE);
  }
  async goToUrl() {
    await this.page.goto("https://www.demoblaze.com/");
  }
  async clickToSignupLink() {
    await this.SignupButton.click();
  }
  async clickToLoginLink() {
    await this.LoginButton.click();
  }

  async clickToSelectProduct() {
    const productName = await this.product.first().innerText();
    await this.page.getByRole("link", { name: productName }).click();
    this.productName = productName;
  }

  async clickToShoppingCart() {
    await this.shoppingCartButton.click();
    const cartAndPurchase = new CartAndPurchase(this.page);
    await cartAndPurchase.checkProductInCart(this.productName);
  }

  async checkSuccessfullLogin() {
    await expect(this.PageTitle).toBeVisible();
  }

  async checkCategoriesAreVisible() {
    await expect(
      this.page.getByRole("link", { name: "CATEGORIES" })
    ).toBeVisible();

    const listOfCategories = await this.page
      .locator("a#itemc.list-group-item")
      .allInnerTexts();

    for (let category of listOfCategories) {
      await expect(
        this.page.getByRole("link", { name: category })
      ).toBeVisible();
      console.log("Category", category, "is visible");
    }
  }

  async checkProductsAreVisible() {
    const selector = "//div[contains(@class, 'card')]//div//h4";
    await this.page.waitForSelector(selector);
    const titlesOfItems = await this.page.locator(selector).allInnerTexts();
    console.log("Total products: ", titlesOfItems.length);
    for (let title of titlesOfItems) {
      await expect(
        this.page.getByRole("heading", { name: title })
      ).toBeVisible();
      console.log('product :', title, 'is visible')
    }
  }
}
