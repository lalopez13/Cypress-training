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
        //return cy.get('#search_results_table div > div[data-testid="property-card"]:nth-child(9) h3 a').invoke('removeAttr', 'target')
        //cy.get(':nth-child(7) > ._5d6c618c8 > ._7192d3184 > :nth-child(1) > :nth-child(1) > ._294d40d74 > ._f57705597 > ._84f6fd780 > :nth-child(1) > ._12369ea61 > ._23bf57b84 > [data-testid=title-link] > [data-testid=title]').invoke('removeAttr', 'target')
        //return cy.get('#search_results_table > div:nth-child(1) > div > div > div > div._814193827 > div:nth-child(9) > div._5d6c618c8 > div._7192d3184 > div > div:nth-child(1) > div > div._29c344764._f57705597 > div > div:nth-child(1) > div > h3 a').invoke('removeAttr', 'target')
        return cy.get(`#search_results_table [data-testid="property-card"]:nth-child(${option + 4}):visible h3 a`).invoke('removeAttr', 'target')
    }
}

export default ResultsPage;


