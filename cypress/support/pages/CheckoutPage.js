class CheckoutPage {

    clickCheckout(){
        cy.get('.checkout-button').click()
    }

    fillName(name) {
        cy.get('#billing_first_name').type(name);
    }

    fillPhone(phone) {
        cy.get('#billing_phone').type(phone);
    }

    fillEmail(email) {
        cy.get('#billing_email').type(email);
    }

    enterPersonalDetails(name, phone, email) {
        this.fillName(name)
        this.fillPhone(phone);
        this.fillEmail(email);
    }

    acceptTermsAndConfirm() {
        cy.get('.woocommerce-billing-fields__field-wrapper input[type="checkbox"]').first().check();
        cy.get('.woocommerce-billing-fields__field-wrapper input[type="checkbox"]').eq(1).check();
        cy.get('#order_review button[type=submit]').click()
    }

    getOrderDetails() {
        return cy.get('.woocommerce-order-overview__order > strong').invoke('text');
    }
}

export default new CheckoutPage();