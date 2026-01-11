class HomePage {

    openProductByName(productName) {
        cy.contains(productName).click();
        cy.url().should('include', 'product');
    }

}

export default new HomePage()