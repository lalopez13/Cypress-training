// ***********************************************************
import './commands';
import HomePage from '../pages/homePage';
// Alternatively you can use CommonJS syntax:
// require('./commands')
beforeEach(() => {

    cy.visit("/");
    // New instance of home 
    const home = new HomePage();
    // Configure to get the correct currency and language
    cy.configLangAndCurrency();

    // Select destination city
    home.getDestinationField().type('Cartagena')
    // wait until the options load
    cy.wait(5000);
    home.getListOption().should('have.length', 5).each(($el, index, $list) => {
        // condition matching check
        if ($el.text().includes("Cartagena de IndiasBol")) {
            // click() on that option for selection
            $el.click();
        }
    })

    // assertion to check if correct option is selected
    home.getDestinationField().should("have.value", "Cartagena de Indias, Bolívar, Colombia");

    // Select check- in and checkout date
    cy.selectDate(90, 110)

    // Select guest option
    home.getGuestOption().click();
    home.getGuestContent().should('be.visible');
    home.getAddBtn().click();
    cy.wait(3000);
    cy.get('.xp__guests__count > span:nth-child(1)').should("have.text", '3 adultos');
    home.getSubmitBtn().click();

})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})