class SelectedOptionPage {
  
    getReserveBtn() {
        return cy.get('.txp-group-cta').first();
    }
  
    getConfirmationBtn() {
        return cy.get('.txp-bui-main-pp');
    }
}

export default SelectedOptionPage;