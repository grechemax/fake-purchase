class HomePage {

    openHelmetPage() {
        cy.contains('Беркут').click();
        cy.url().should('include', 'product');
    }

}

export default new HomePage()