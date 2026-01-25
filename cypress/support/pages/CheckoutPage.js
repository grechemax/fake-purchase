import BasePage from './BasePage';

class CheckoutPage extends BasePage {

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

    acceptTerms() {
        cy.get('.woocommerce-billing-fields__field-wrapper input[type="checkbox"]').first().check();
        cy.get('.woocommerce-billing-fields__field-wrapper input[type="checkbox"]').eq(1).check();
    }

    getOrderDetails() {
    const details = {};
    return cy.get('.woocommerce-order-overview__order > strong').invoke('text').then(text => {
        details.orderNumber = text;
    }).get('.woocommerce-customer-details--email').invoke('text').then(text => {
        details.customerEmail = text;
    }).get('td.woocommerce-table__product-name').invoke('text').then(text => {
        details.productName = text.trim();
        return details;
    });
}

    verifyOrderSuccess() {
        cy.contains('Ваш заказ принят').should('be.visible');
        cy.get('.woocommerce-order-overview__order').should('be.visible');
        cy.get('.woocommerce-order-overview__date').should('be.visible');
        cy.get('.woocommerce-order-overview__total').should('be.visible');
    }
}

export default new CheckoutPage();