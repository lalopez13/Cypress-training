/// <reference types="cypress" />

import ResultsPage from '../../pages/resultsPage';
import SelectedOptionPage from '../../pages/selectedOptionPage'
import BookingPage from '../../pages/bookingPage';

const result = new ResultsPage();
const hotel = new SelectedOptionPage();
const booking = new BookingPage();

describe("TC-01: Lowest price reservation", () => {

    // let testData;

    // before(function () {
    //     cy.fixture('testdata').then(function (data) {
    //         testData = data
    //         return testData
    //     })
    // })

    it("Should reserve the third hotel with the lower price", () => {

        result.getFilterPriceBtn().click();

        //expect loader should not exist in the dom
        result.getLoadingModal().should("not.exist")

        cy.wait(5000)

        // Validate filter price
        cy.get("body").then($body => {
            if ($body.find("#hotellist_inner").length > 0) {
                cy.log('variant 1 price')
                cy.get('#hotellist_inner .prco-valign-middle-helper').first().invoke('text').then((text) =>{
                    cy.get('#hotellist_inner .prco-valign-middle-helper').last().invoke('text').then((text2) =>{
                        cy.log(text , text2)
                    expect(parseInt(text.replace('COP', " ").replaceAll('.', '').trim())).to.lessThan(parseInt(text2.replace('COP', " ").replaceAll('.', '').trim()))
                    }) 
                })
            } else if ($body.find("#search_results_table").length > 0) {
                if ($body.find(".sr_item").length > 0) {
                    cy.log('variant 2.1 price')
                  
                } else {
                    cy.log('variant 2.2 price')
                    //[data-testid="price-and-discounted-price"]
                    cy.get('[data-testid="price-and-discounted-price"]').first().invoke('text').then((text) =>{
                        cy.get('[data-testid="price-and-discounted-price"]').last().invoke('text').then((text2) =>{
                            expect(parseInt(text.replace('COP', " ").replaceAll('.', '').trim())).to.lessThan(parseInt(text2.replace('COP', " ").replaceAll('.', '').trim()))
                            cy.log(text , text2)
                        }) 
                    })
                }
            }
        });

        // Select third opcion
        cy.get("body").then($body => {
            if ($body.find("#hotellist_inner").length > 0) {
                cy.log('variant 1')
                result.getSelectionHotel(3).click()
            } else if ($body.find("#search_results_table").length > 0) {
                if ($body.find(".sr_item").length > 0) {
                    cy.log('variant 2.1')
                    result.getSelectionHotelSecondVar(3).click()
                } else {
                    cy.log('variant 2.2')
                    result.getSelectionHotelThirdVar(3).click()
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
