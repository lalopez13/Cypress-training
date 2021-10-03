class ResultsPage {
    getFilterPriceBtn() {
        return cy.get('[data-id="price"]').first();
    }
    getLoadingModal() {
        return cy.get('.sr-usp-overlay__container', { timeout: 60000 })
    }
    getPriceHotel() {
        return cy.get('.sr_item span.prco-valign-middle-helper');
    }
    getSelectionHotel(option) {
        return cy.get(`.sr_item:nth-child(${option}) .sr-hotel__title > a`).invoke('removeAttr', 'target')
    }
}

export default ResultsPage;