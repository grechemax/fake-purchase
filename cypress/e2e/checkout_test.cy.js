import CheckoutPage from '../support/pages/CheckoutPage';
import HomePage from "../support/pages/HomePage";
import HelmetPage from "../support/pages/HelmetPage";
import {generateRandomEmail, generateRandomName, generateRandomRussianPhone} from "../support/utils";


describe('Checkout', () => {
    before('open page', () => {
        cy.visit('/');
    })
    let phone = generateRandomRussianPhone()
    let name = generateRandomName()
    let email = generateRandomEmail(name)

    it('Adds recommended helmet to the basket and completes purchase', () => {
        HomePage.openHelmetPage();
        HelmetPage.selectOptions()
        HelmetPage.selectAmount()
        HelmetPage.addToBasket()
        HelmetPage.clickCheckout()
        cy.closePromoIfPresent(); // TODO timing is wrong - it appears in ~ 10s

        CheckoutPage.enterPersonalDetails(
            name,
            phone,
            email
        );
        CheckoutPage.acceptTermsAndConfirm()

        // Assert API call succeeded
        // cy.wait('@createOrder').its('response.statusCode').should('eq', 201);

        // Assert UI confirmation
        cy.contains('Ваш заказ принят').should('be.visible'); // TODO get rid of cyrillic
        // TODO console.log order details
    });

})