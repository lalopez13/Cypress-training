class BookingPage {
    getFirstNameField() {
        return cy.get('#firstname');
    }
    getLastNameField() {
        return cy.get('#lastname');
    }
    getEmailField() {
        return cy.get('#email');
    }
    getEmailConfirmationField() {
        return cy.get('#email_confirm');
    }
    getOptionGuest() {
        return cy.get('#notstayer_false');
    }
    getFullNameField() {
        return cy.get('.guest-name-input');
    }
    getNextBtn() {
        return cy.get('button[name="book"]');
    }
    getModal() {
        return cy.get('#retain-leaving-users__modal');
    }
    getPhoneField() {
        return cy.get('#phone');
    }
    getReserveBtn() {
        return cy.get('.bui-group.bui-spacer--large > .bui-group > :nth-child(3) > .bui-button');
    }
}

export default BookingPage;
