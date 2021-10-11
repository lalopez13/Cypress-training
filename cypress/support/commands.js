import HomePage from '../pages/homePage';
import futureDate from '../utils/randomDate';

Cypress.Commands.add("selectDate", function (checkIn, checkOut) {
    // Creating Object for HomePage
    const home = new HomePage();

    home.getCalendar().should('be.visible');
    // two clicks 
    home.getNextArrow().click();
    home.getNextArrow().click();

    home.getCheckInDay(futureDate(checkIn)).click();

    cy.wait(3000)

    home.getNextArrow().click();
    home.getCheckInDay(futureDate(checkOut)).click();

})

Cypress.Commands.add("configLangAndCurrency", function () {
    // Creating Object for HomePage
    const home = new HomePage();

    home.getCurrencyBtn().click();
    home.getCurrencyOptions().contains('COP').click();
    home.getLanguageOption().click();
    home.getSpanishLangOption().click();
    
})