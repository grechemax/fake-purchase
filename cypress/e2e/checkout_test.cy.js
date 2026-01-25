import CheckoutPage from '../support/pages/CheckoutPage';
import FirstAidKitPage from "../support/pages/FirstAidKitPage";
import HomePage from "../support/pages/HomePage";
import HelmetPage from "../support/pages/HelmetPage";
import {generateRandomEmail, generateRandomName, generateRandomPhone} from "../support/utils";

Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('scrollHeight')) {
    return false;
  }
  return true;
});

describe('e2e checkout tests', () => {
    let phone;
    let name;
    let email;
  
  
  // let helmets;
    // let selectedHelmet;

    // before('open page and load fixtures', () => {
    //     cy.visit('/');
    //     cy.fixture('helmets').then((data) => {
    //         helmets = data;

    //         selectedHelmet = helmets[Math.floor(Math.random() * helmets.length)];
    //         cy.log(`Selected helmet: ${selectedHelmet.name}`);
    //     });
    // })
    
    beforeEach('generate user data', () => {
      phone = generateRandomPhone()
      name = generateRandomName()
      email = generateRandomEmail(name)
    });

    it('Buy a helmet from best selling proposal', () => {
        cy.visit('/');
        HomePage.openProductByName('Беркут');
        HelmetPage.selectOptions()
        HelmetPage.selectAmount()
        HelmetPage.addToBasket()
        HelmetPage.clickCheckout()

        CheckoutPage.placeOrder()
        CheckoutPage.enterPersonalDetails(name, phone, email);
        CheckoutPage.acceptTerms();
        CheckoutPage.clickConfirmOrder();
        CheckoutPage.verifyOrderSuccess();
        
        CheckoutPage.getOrderDetails().then((details) => {
            cy.logOrderDetails(details);
        });
    });

    it('Buy a first Aid kit', () => {
        cy.visit('/product-category/katalog/aptechki');
        FirstAidKitPage.openProductByName('Мох');
        FirstAidKitPage.addToBasket();
        FirstAidKitPage.clickCheckout();
        
        CheckoutPage.placeOrder()
        CheckoutPage.enterPersonalDetails(name, phone, email);
        CheckoutPage.acceptTerms();
        CheckoutPage.clickConfirmOrder();
        CheckoutPage.verifyOrderSuccess();
        
        CheckoutPage.getOrderDetails().then((details) => {
            cy.logOrderDetails(details);
        });
    });
})