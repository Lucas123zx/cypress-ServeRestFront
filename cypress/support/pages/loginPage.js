import LoginElements from "../components/loginElements";
import { Browser } from "../browser/Browser";

class LoginPage extends Browser {

  acessarSite() {
   return super.acessarUrl("login");
  }
  
  login() {
    cy.get(LoginElements.inputEmail).type("teste");
    cy.get(LoginElements.inputPassword).type("TEste");
    cy.get(LoginElements.buttorSingUp).click();
  }

}

export default new LoginPage();