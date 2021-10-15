/// <reference types="cypress" />

import ResultsPage from '../../pages/resultsPage';
import SelectedOptionPage from '../../pages/selectedOptionPage'
import BookingPage from '../../pages/bookingPage';

const result = new ResultsPage();
const hotel = new SelectedOptionPage();
const booking = new BookingPage();

describe("TC-02: Distance to the nearest beach reservation", () => {

    it("Should reserve the second hotel nearest to the beach", () => {

        result.getDropdownBtn().click();
        result.getDistanceToNearestBeach().click();
        // expect loader should not exist in the dom
        result.getLoadingModal().should("not.exist")
        cy.wait(3000)

        // Verify the first option contains Primera linea de playa
        // Select the second hotel   
        // result.getFirstHotelNearBeach().first().then((text) => {
        //     cy.wrap(text).should('contain', 'Primera línea de playa')
        // });
        cy.get("body").then($body => {
            if ($body.find("#hotellist_inner").length > 0) {
                cy.log('variant 1 beach')
                //result.getSelectionHotel(2).click()
            } else if ($body.find("#search_results_table").length > 0) {
                if ($body.find(".sr_item").length > 0) {
                    cy.log('variant 2.1 beach')
                      cy.get('.beach_team_pilot_distance').first().then((text) => {
            cy.wrap(text).should('contain', 'Primera línea de playa')
        });
                } else {
                    cy.log('variant 2.2 beach')
                    //result.getSelectionHotelThirdVar(2).click()
                }
            }
        });
    

        // Select the second hotel   
        cy.get("body").then($body => {
            if ($body.find("#hotellist_inner").length > 0) {
                cy.log('variant 1')
                result.getSelectionHotel(2).click()
            } else if ($body.find("#search_results_table").length > 0) {
                if ($body.find(".sr_item").length > 0) {
                    cy.log('variant 2.1')
                    result.getSelectionHotelSecondVar(2).click()
                } else {
                    cy.log('variant 2.2')
                    result.getSelectionHotelThirdVar(2).click()
                }
            }
        });


        // Reserve hotel

        hotel.getReserveBtn().click()
        cy.wait(5000)
        hotel.getConfirmationBtn().click()

        //Handle modal
        cy.wait(5000)
        cy.get('#rlu_persistent_dismissal').check({ force: true })
        cy.get('.bui-modal__close > svg').click()

        // Complete the reservation
        booking.getFirstNameField().type("Pepe")
        booking.getLastNameField().type('Perez')
        booking.getEmailField().type('pepeperez@gmail.com')
        booking.getEmailConfirmationField().type('pepeperez@gmail.com', { force: true })
        booking.getFullNameField().type('Pepe Perez')
        booking.getNextBtn().click()

        booking.getPhoneField().type('3784490981')
        // booking.getCardType()
        // booking.getCardNumberField(5422137045910386)
        // booking.getCVCCode(168)
        cy.get('.field_name_full_name > .book-form-field-value').invoke('text').then((text) => {
            //cy.wrap(text).should('contain.text', 'Pepe Perez')
            expect(text.replaceAll('\n', ' ')).to.contain(' Pepe Perez ')
        })

        booking.getReserveBtn().should('contain', 'Completa la reserva')

    })
})
