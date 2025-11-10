/// <reference types="cypress" />

describe('Bronetorg – Submit Tender Form (CF7, No ID)', () => {

    before('open page', () => {
        cy.visit('/');
    })

    it('fills and submits form reliably – works even if #wpcf7-f... changes', () => {

        // 2. Click "Предложить тендер" (your original XPath → converted to stable)
        cy.contains('button, a, span', 'Предложить тендер')
            .should('be.visible')
            .click();

        // 3. Wait for CF7 form (any wpcf7 container)
        cy.get('.wpcf7', { timeout: 15000 })
            .should('be.visible')
            .within(() => {
                // 4. Fill Name (by label text)
                cy.contains('.wpcf7-form-control-wrap', /Ваше имя/i)
                    .find('input[type="text"]')
                    .type('Hans Müller');

                // 5. Fill Phone (by label text)
                cy.contains('.wpcf7-form-control-wrap', /телефон/i)
                    .find('input[type="tel"], input[type="text"]')
                    .type('+49 176 12345678');

                // 6. Submit
                cy.get('.wpcf7-submit').click();
            });

        // 7. Success message
        cy.contains('Спасибо', { timeout: 15000 }).should('be.visible');
    });
});