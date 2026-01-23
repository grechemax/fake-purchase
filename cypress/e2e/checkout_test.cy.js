import CheckoutPage from '../support/pages/CheckoutPage';
import HomePage from "../support/pages/HomePage";
import HelmetPage from "../support/pages/HelmetPage";
import {generateRandomEmail, generateRandomName, generateRandomRussianPhone} from "../support/utils";

Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('scrollHeight')) {
    return false;
  }
  return true;
});

describe('e2e checkout tests', () => {
    before('open page', () => {
        cy.visit('/');
    })
    let phone = generateRandomRussianPhone()
    let name = generateRandomName()
    let email = generateRandomEmail(name)

    it('Buy a helmet from best selling proposal', () => {
        HomePage.openProductByName('Беркут');
        HelmetPage.selectOptions()
        HelmetPage.selectAmount()
        HelmetPage.addToBasket()
        HelmetPage.clickCheckout()
        CheckoutPage.clickCheckout()
        cy.closePromoIfPresent();

        CheckoutPage.enterPersonalDetails(name, phone, email);
        CheckoutPage.acceptTerms();
        CheckoutPage.placeOrder()

        CheckoutPage.verifyOrderSuccess();
        
        CheckoutPage.getOrderDetails().then((orderNumber) => {
            cy.logOrderNumber(orderNumber);
        });
    });

    // it('Buy a X from Y', () => {
    //     cy.scrollTo('top');
    //     HomePage.hoverOverCatalog();
    //     HomePage.clickOnSubcategory('Аптечки и подсумки ');
    // });
})