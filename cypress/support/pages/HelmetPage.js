// noinspection SpellCheckingInspection

class HelmetPage {

    /**
     * Choose required product options.
     */
    selectOptions() {
        // Material
        cy.get('#pa_material-izgotovleniya').select(1);

        // Helmet cover
        cy.get(
            ':nth-child(8) > .thwepo-image-group-lable > .thwepo-img-wrap > .thwepo-image-box'
        ).click();

        // Balaclava
        let random = Math.floor(Math.random() * 5) + 1;
        cy.get(
            `.billing_2 > .value > :nth-child(${random}) > .thwepo-image-group-lable > .thwepo-img-wrap > .thwepo-image-box`
        ).click();

        // Goggles
        cy.get(
            '.billing_3 > .value > :nth-child(4) > .thwepo-image-group-lable > .thwepo-img-wrap > .thwepo-image-box'
        ).click();

        // Headphones and mounts
        cy.get(
            '.billing_5 > .value > :nth-child(4) > .thwepo-image-group-lable > .thwepo-img-wrap > .thwepo-image-box'
        ).click();

    }

    selectAmount(qty = 1) {
        cy.get('[id^="quantity_"]').clear().type(`${qty}`);
    }

    addToBasket({ qty } = {}) {
        cy.get('.single_add_to_cart_button').click();
    }

    clickCheckout(){
        cy.get('.widget .elementor-button--checkout').click()
    }
}

export default new HelmetPage();