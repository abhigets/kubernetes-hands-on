/// <reference types="Cypress" />

let searchTerm = Cypress.env('searchTerm');
let resultFileName = Cypress.env('resultsFilename');
let result = [];

context('Address Scraper', () => {
  beforeEach(() => {
    cy.visit('https://www.royalmail.com/find-a-postcode')
  })

  it('Should search address', () => {
    cy.get('#cp-search')
      .type(searchTerm,{ delay: 100 })

    cy.wait(2000);
    
    for (let i = 0 ; i<15 ; i++){
      checkIfElementExistAndPopulateResults(`#cp-search_results_item${i}`);
    }
    cy.writeFile(resultFileName, result);
  })
})

async function getText(locator) {
  await cy.get(locator).invoke('text').then((text) => {
    result.push(text);
  });
}

async function checkIfElementExistAndPopulateResults(locator) {
  await cy.get('body').then(($body) => {
    const objectExist = $body.find(locator).length;
    if (objectExist)
      getText(locator);
  });
}

