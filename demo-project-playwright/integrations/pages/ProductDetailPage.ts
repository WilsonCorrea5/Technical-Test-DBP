import { Locator, Page, expect } from "@playwright/test";
import { LOCATORS } from "../locators/ProductDetailLocators";

export class ProductDetail {
  private readonly addToCartButton: Locator;
  private readonly page: Page;


  constructor(page: Page) {
    this.addToCartButton = page.getByRole("link", { name: LOCATORS.ADD_TO_CART_BUTTON });
    this.page = page;
  }

  async AddProductToCart() {
    await this.addToCartButton.click();
    const alertMsg = await this.page.waitForEvent("dialog");
    expect(alertMsg.message()).toContain("Product added");
    alertMsg.accept();
  }
  
}
