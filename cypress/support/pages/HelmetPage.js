import BasePage from './BasePage';

class HelmetPage extends BasePage {

    /**
     * Choose required product options.
     */
    selectOptions() {
        // Material (2 options available)
        let random = Math.floor(Math.random() * 2) + 1;
        cy.get('#material-izgotovleniya').select(1);

        // // Helmet cover (8 options available)
        // cy.get(
        //     ':nth-child(8) > .thwepo-image-group-lable > .thwepo-img-wrap > .thwepo-image-box'
        // ).click();

        // // Balaclava (5 options available)
        // // let random = Math.floor(Math.random() * 5) + 1;
        // cy.get(
        //     `.billing_2 > .value > :nth-child(${random}) > .thwepo-image-group-lable > .thwepo-img-wrap > .thwepo-image-box`
        // ).click();

        // // Goggles (4 options available)
        // cy.get(
        //     '.billing_3 > .value > :nth-child(4) > .thwepo-image-group-lable > .thwepo-img-wrap > .thwepo-image-box'
        // ).click();

        // // Headphones and mounts (2 options available)
        // cy.get(
        //     '.billing_4 > .value > :nth-child(1) > .thwepo-image-group-lable > .thwepo-img-wrap > .thwepo-image-box'
        // ).click();

    }

    selectAmount(qty = 1) {
        cy.get('[id^="quantity_"]').clear().type(`${qty}`);
    }
}

export default new HelmetPage();