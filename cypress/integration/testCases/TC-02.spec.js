/// <reference types="cypress" />

import ResultsPage from '../../pages/resultsPage';
import SelectedOptionPage from '../../pages/selectedOptionPage'
import BookingPage from '../../pages/bookingPage';

const result = new ResultsPage();
const hotel = new SelectedOptionPage();
const booking = new BookingPage();

describe("TC-02: Distance to the nearest beach reservation", () => {

    it("Should reserve the third hotel nearest to the beach", () => {

        result.getDropdownBtn().click();
        result.getDistanceToNearestBeach().click();
        // expect loader should not exist in the dom
        result.getLoadingModal().should("not.exist")
        cy.wait(3000)

        cy.get('div.beach_team_pilot_distance').first().invoke('text').then((text) => {
            cy.wrap(text).should('contain', 'Primera línea de playa')
        });

        cy.get('div.sr_item').should('be.visible')
        // // // //.should('have.length',25)
        result.getSelectionHotel(1).click()
        // // // cy.log(cy.window())

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
        booking.getReserveBtn().should('contain', 'Completa la reserva')
    })
})
