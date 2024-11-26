
export class BaseSteps {

  static waitElement(el) {
    try {
      cy.log('Aguardando o elemento ' + el + 'está visível')
      cy.get(el, { timeout: 10000 })
      cy.log('Encontrou o elemento ' + el)
    } catch (error) {
      cy.log('Exceção capturada: ' + error.message);
    }
  };

  static waitElement_index(el, index) {
    try {
      cy.log('Aguardando o elemento ' + el + 'o Index ' + index + 'está visível')
      cy.get(el).eq(index, { timeout: 10000 })
      cy.log('Encontrou o elemento ' + el)
    } catch (error) {
      cy.log('Exceção capturada: ' + error.message);
    }
  };

  static set(el, text) {
    this.waitElement(el)
    try {
      cy.get(el).type(text)
      cy.log('Setou as informações no ' + el)
    } catch (error) {
      cy.log('Exceção capturada: ' + error.message);
    }
  };

  static click(el) {
    this.waitElement(el)
    try {
      cy.get(el).click();
      cy.log('Clicou no Elemento ' + el)
    } catch (error) {
      cy.log('Exceção capturada: ' + error.message);
    }
  };

  static click_index(el, index) {
    this.waitElement_index(el, index)
    try {
      cy.get(el).eq(index).click();
      cy.log('Clicou no Elemento ' + el + ' no Index' + index)
    } catch (error) {
      cy.log('Exceção capturada: ' + error.message);
    }
  };

  static clear(el) {
    this.waitElement(el)
    try {
      cy.get(el).clear();
      cy.log('Limpou no Elemento ' + el)
    } catch (error) {
      cy.log('Exceção capturada: ' + error.message);
    }
  };

  static get_element_text(el, text) {
    this.waitElement(el)
    try {
      cy.get(el).contains(text);
      cy.log('Encontrou o ' + el + ' com o texto ' + text)
    } catch (error) {
      cy.log('Exceção capturada: ' + error.message);
    }
  };

  static validityUrl(url) {
    try {
      cy.url().should('eql', url)
    } catch (error) {
      cy.log('Deu pau' + error.message);
    }
  };

  static getText(el) {
    try {
      this.waitElement(el);
      let text = cy.get(el).invoke('text');
      return text;
    } catch (error) {
      cy.log('Deu pau' + error.message);
    }
  }
}