// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import '@testing-library/cypress/add-commands'
import 'cypress-xpath';

// Close promo popup if present
Cypress.Commands.add('closePromoIfPresent', () => {
    cy.get('body').then($body => {
        // jQuery search does NOT fail if nothing is found
        const $popup = $body.find('.wd-popup.wd-promo-popup');

        if ($popup.length) {
            cy.wrap($popup).find('button.mfp-close').click();
        }
    });
});

Cypress.Commands.add('logOrderNumber', (orderNumber) => {
    cy.log('Order number =====> ' + orderNumber);
    cy.task('log', '✓ Order number =====> ' + orderNumber);
});

