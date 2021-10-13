/// <reference types="cypress" />

import HomePage from '../../pages/homePage';
import ResultsPage from '../../pages/resultsPage';
import SelectedOptionPage from '../../pages/selectedOptionPage'
import BookingPage from '../../pages/bookingPage';

const home = new HomePage();
const result = new ResultsPage();
const hotel = new SelectedOptionPage();
const booking = new BookingPage();

describe("TC-01: Lowest price reservation", () => {

    it("Should reserve the third hotel with the lower price", () => {
        
        result.getFilterPriceBtn().click();
        
        //expect loader should not exist in the dom
        result.getLoadingModal().should("not.exist")

        cy.wait(3000)
  
        const elements = []
        cy.get('div.bui-price-display__value > span.prco-valign-middle-helper').each($el => {
            //let prices = $el.map(ele => ele.text());
            elements.push(parseInt($el.text().replace('COP', '').replaceAll('.', '').trim()))
        })

        cy.wrap(elements).should("equal", elements.sort());
        console.log(elements)
        console.log(elements.sort())

        // Select third opcion
        result.getSelectionHotel(3).click()

        hotel.getReserveBtn().click()
        cy.wait(5000)
        hotel.getConfirmationBtn().click()
        booking.getFirstNameField().type("Ppepe")
        booking.getLastNameField().type('Perez')
        booking.getEmailField().type('pepeperez@gmail.com')
        booking.getEmailConfirmationField().type('pepeperez@gmail.com')
        cy.wait(5000)
        cy.get('[data-bui-ref="modal-close"]').first().click()
        //booking.getOptionGuest().check()
        //booking.getModal().click()

        booking.getFullNameField().type('Pepe Perez')
        booking.getNextBtn().click()
        booking.getPhoneField().type('3447890981')
        // cy.on('window:alert',(txt)=>{
        //     //Mocha assertions
        //     cy.log(txt)
        //  })
        booking.getReserveBtn().should('contain', 'Completa la reserva')
    })
})
