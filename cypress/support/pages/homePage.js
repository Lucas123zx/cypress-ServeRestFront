import HomeElements from "../components/homeElements";
import { BaseSteps } from "../utils/BaseSteps";

class HomePage {
  
  getTextTitle() {
    return BaseSteps.getText(HomeElements.title);
  }

  getTextSubTitle() {
    return BaseSteps.getText(HomeElements.paragraph);
  }

  validytyHomeADM(textExpect) {
    cy.get(HomeElements.title).contains('Bem Vindo').should('be.visible');

    this.getTextTitle().should('eq', textExpect);

    cy.get(HomeElements.rows).children().then((el) => {
      for(let index = 1; el.length > index; index++) {
        expect(el[index].innerText).not.be.empty;
        expect(el[index]).to.be.visible; 
      };
    });

    cy.get(HomeElements.ulHome).children().each((el) => {
      cy.wrap(el).should('be.visible');
      cy.wrap(el).invoke('html').should('include', 'type="button"');
      cy.wrap(el).invoke('html').should('not.be.empty');
    });

    BaseSteps.validityUrl(`${Cypress.env('baseurl')}/admin/home`);
  }

  validyHomeUserComun() {
    cy.get(HomeElements.title).contains('Serverest Store').should('be.visible');
  }



}

export default new HomePage();