export class Browser {

  acessarUrl(path) {
    return cy.visit(`${Cypress.env('baseurl')}/${path}`)
  }

}