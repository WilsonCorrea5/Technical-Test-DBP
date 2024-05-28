import { test, expect } from "@playwright/test";
import { HomePage } from "../integrations/pages/homePage";
import { Login } from "../integrations/pages/LoginPage";
import { ProductDetail } from "../integrations/pages/ProductDetailPage";
import { CartAndPurchase } from "../integrations/pages/ShoppingCartAndPurchase";
import { Register } from "../integrations/pages/RegisterPage";
import { generateUser, randomValue } from "../integrations/helpers/dataRandom";

let homepage: HomePage;

test.beforeEach(async ({ page }) => {
  homepage = new HomePage(page);
  await homepage.goToUrl();
});

test.describe("Demoblaze.com test @full", () => {
  const names = ["admin", "Wilson5", "ana"];

  // VERIFICAR CATEGORIAS EXISTEN
  test("T-001 - should display category title and categories @verifyCategories", async ({page}) => {
    await homepage.checkCategoriesAreVisible();
  });

  // VERIFICAR PRODUCTOS EXISTEN
  test("T-002 - should display products @verifyProducts", async ({page}) => {
    await homepage.checkProductsAreVisible;
  });

  //CREACION DE UN USUARIO
  test("T-003 - should register a new user @verifySignup", async ({ page }) => {
    const signupSection = new Register(page);
    await homepage.clickToSignupLink();
    const value = generateUser();
    await signupSection.registerNewUser(value, value);
  });
  
  //CASO DE PRUEBA NEGATIVO
  test("T-004 - should not allow logging in with incorrect credentials @verifyLoginWrong", async ({
    page,
  }) => {
    const loginSection = new Login(page);
    await homepage.clickToLoginLink();
    await loginSection.LoginWithUsernameAndPassword("DBP", "incorrectPassword");
    await loginSection.checkWrongLogin();
  });

  // VERIFICAR LOGIN
  test("T-005 - should allow logging in with correct credentials @verifyLogin", async ({ page }) => {
    let user = randomValue(names);
    const loginSection = new Login(page);
    await homepage.clickToLoginLink();
    await loginSection.LoginWithUsernameAndPassword(user, user);
    await loginSection.checkSuccessfullLogin();
  });

  // REALIZAR COMPRA Y VALIDAR MENSAJE DE COMPRA
  test("T-006 - should add item to cart, place an order and complete the purchase @purchaseProduct", async ({
    page,
  }) => {
    const productDetail = new ProductDetail(page);
    await homepage.clickToSelectProduct();
    await productDetail.AddProductToCart();
    await homepage.clickToShoppingCart();
    const cartAndPurchase = new CartAndPurchase(page);
    await cartAndPurchase.purchaseProduct();
  });
});
