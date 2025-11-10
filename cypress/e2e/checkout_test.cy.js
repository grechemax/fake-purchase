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
        cy.closePromoIfPresent();

        CheckoutPage.enterPersonalDetails(name, phone, email);
        CheckoutPage.acceptTermsAndConfirm()

        cy.contains('Ваш заказ принят').should('be.visible');
        cy.xpath('//*[contains(@class, "woocommerce-order-overview__order")]').should('be.visible');
        cy.xpath('//*[contains(@class, "woocommerce-order-overview__date")]').should('be.visible');
        cy.xpath('//*[contains(@class, "woocommerce-order-overview__total")]').should('be.visible');
        // TODO log order details for headless mode
    });

})