class HomePage {

    waitForPageLoad() {
        // Wait for Elementor to finish rendering
        cy.get('[class*="elementor-element-"]', { timeout: 10000 }).should('be.visible');
        cy.document().its('readyState').should('eq', 'complete');
    }

    openProductByName(productName) {
        cy.contains(productName).click();
        cy.url().should('include', 'product');
    }

    hoverOverCatalog() {
    cy.get('#menu-menyu-1 > .menu-item-169 > .woodmart-nav-link')
        .should('be.visible')
        .realHover({ pointerType: 'mouse' });   // ← most important line

    // Give menu some time (Woodmart often has 100–300ms delay + animation)
    cy.wait(600);

    cy.get('.wd-dropdown-menu, .woodmart-navigation, [class*="elementor-element-"]', { timeout: 10000 })
      .should('be.visible')
     .and('have.length.greaterThan', 0);
    }

    clickOnSubcategory(subcategoryName) {
        // cy.get('elementor-widget-wrap elementor-element-populated').should('be.visible');
        cy.get('.wd-dropdown-menu').contains(subcategoryName)
            .should('be.visible')
            .and('not.be.disabled')
            .click({ scrollBehavior: 'center' });
    }

}

export default new HomePage()