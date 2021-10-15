class ResultsPage {
    getFilterPriceBtn() {
        return cy.get('[data-id="price"]').first();
    }
    getDropdownBtn() {
        return cy.get('li[data-id = "dropdown"]');
    }
    getDistanceToNearestBeach() {
        return cy.get('ul[role="menu"] > li[data-id="closest_beach_distance_v2"]');
    }
    getLoadingModal() {
        //data-testid="property-card
        return cy.get('.sr-usp-overlay__container', { timeout: 60000 })
    }

    getFirstHotelNearBeach() {
        return cy.xpath('//span[contains(text(),"playa")')
    }
    getSelectionHotel(option) {
        return cy.get(`#hotellist_inner .sr_item:nth-child(${option}) h3 a`).invoke('removeAttr', 'target')//.click()
    }
    getSelectionHotelSecondVar(option){
        return cy.get(`#search_results_table .sr_item:nth-child(${option}) h3 a`).invoke('removeAttr', 'target')//.click()
    }
    getSelectionHotelThirdVar(option){
        return cy.get(`#search_results_table [data-testid="property-card"]:nth-child(${option + 2}) h3 a`).invoke('removeAttr', 'target')
    }
}

export default ResultsPage;


