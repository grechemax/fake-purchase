class BasePage {
     openProductByName(productName) {
        cy.contains(productName).click();
        cy.url().should('include', 'product');
    }

     placeOrder(){
        cy.get('.checkout-button').click()
    }

    addToBasket({ qty } = {}) {
        cy.get('.single_add_to_cart_button').click();
    }

    clickCheckout(){
        cy.get('.btn-cart').click();
    }

     clickConfirmOrder() {
        cy.get('#order_review button[type=submit]').click()
    }
}

export default BasePage;