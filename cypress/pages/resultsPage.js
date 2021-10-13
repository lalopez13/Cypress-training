class ResultsPage {
    getFilterPriceBtn() {
        return cy.get('[data-id="price"]').first();
    }
    getDropdownBtn(){
        return cy.get('li[data-id = "dropdown"]');
    }
    getDistanceToNearestBeach(){
        return cy.get('ul[role="menu"] > li[data-id="closest_beach_distance_v2"]');
    }
    getLoadingModal() {
        return cy.get('.sr-usp-overlay__container', { timeout: 60000 })
    }
    getPriceHotel() {
        //data-testid="price-and-discounted-price"
        return cy.get('.sr_item span.prco-valign-middle-helper');
    }
    getSelectionHotel(option) {
        return cy.get(`.sr_item:nth-child(${option}) .sr-hotel__title > a`).invoke('removeAttr', 'target')
    }
}

export default ResultsPage;


