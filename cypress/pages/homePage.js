class HomePage {
    getCurrencyBtn() {
        return cy.get('.bui-group > :nth-child(1) > .bui-button')
    }
    getCurrencyOptions() {
        return cy.get('.bui-inline-container__main')
    }
    getLanguageOption() {
        return cy.get('[data-modal-id="language-selection"]')
    }
    getSpanishLangOption() {
        return cy.get('[data-lang="es"]').first()
    }
    getDestinationField() {
        return cy.get('#ss');
    }
    getListOption() {
        return cy.get('li[role="option"]');
    }
    getCalendar() {
        return cy.get('.bui-calendar');
    }
    getCheckInDay(day) {
        return cy.get(`td[data-date=${day}]`)
    }
    getNextArrow() {
        return cy.get('.bui-calendar__control--next');
    }
    getGuestOption() {
        return cy.get('div.xp__guests');
    }
    getGuestContent() {
        return cy.get('#xp__guests__inputs-container');
    }
    getAddBtn() {
        return cy.get('.sb-group__field-adults  button.bui-stepper__add-button')
    }
    getSubmitBtn() {
        return cy.get('.sb-searchbox__button ');
    }
}

export default HomePage;