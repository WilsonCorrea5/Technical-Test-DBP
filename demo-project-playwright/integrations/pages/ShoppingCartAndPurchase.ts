import { Locator, Page, expect } from "@playwright/test";
import { LOCATORS } from "../locators/ShoppingCartAndPurchaseLocators";

export class CartAndPurchase {
  private readonly placeOrderButton: Locator;
  private readonly nameTextBox: Locator;
  private readonly countryTextBox: Locator;
  private readonly cityTextBox: Locator;
  private readonly cardTextBox: Locator;
  private readonly monthTextBox: Locator;
  private readonly yearTextBox: Locator;
  private readonly purchaseButton: Locator;
  private readonly successfulPurchaseMsg: Locator;
  private readonly finishPurchaseButton: Locator;
  private ProductInCart: Locator;
  private readonly page: Page;
  // private productName: string;

  constructor(page: Page) {
    this.placeOrderButton = page.getByRole('button', {name: LOCATORS.PLACE_ORDER_BTN});
    this.nameTextBox = page.locator(LOCATORS.NAME_TXTBOX);
    this.countryTextBox = page.locator(LOCATORS.COUNTRY_TXTBOX);
    this.cityTextBox = page.locator(LOCATORS.CITY_TXTBOX);
    this.cardTextBox = page.locator(LOCATORS.CARD_TXTBOX);
    this.monthTextBox = page.locator(LOCATORS.MONTH_TXTBOX);
    this.yearTextBox = page.locator(LOCATORS.YEAR_TXTBOX);
    this.purchaseButton = page.getByRole('button', { name: LOCATORS.PURCHASE_BUTTON })
    this.successfulPurchaseMsg = page.getByRole('heading', {name: LOCATORS.SUCCESSFUL_PURCHASE_MSG})
    this.finishPurchaseButton = page.getByRole('button', { name: LOCATORS.FINISH_PURCHASE_BUTTON })
    this.page = page;
  }

  
  async clickPlaceOrderButton() {
    await this.placeOrderButton.click();
  }

  async fillPlaceOrder(){
    await this.nameTextBox.fill("wilson")
    await this.countryTextBox.fill("Colombia")
    await this.cityTextBox.fill("Cartagena")
    await this.cardTextBox.fill("1234567887654321")
    await this.monthTextBox.fill("01")
    await this.yearTextBox.fill("2020")
  }
  
  async clickPurchaseButton(){
    await this.purchaseButton.click()
  }

  async checkSuccessfullpurchase(){
    await expect(this.successfulPurchaseMsg).toBeVisible()
    await this.finishPurchaseButton.click()
  }

  async checkProductInCart(product){
    this.ProductInCart = this.page.getByRole('cell', { name: product })
    await expect(this.ProductInCart).toBeVisible();
  }

  async purchaseProduct(){
    await this.clickPlaceOrderButton()
    await this.fillPlaceOrder()
    await this.clickPurchaseButton()
    await this.checkSuccessfullpurchase()
  }
}

