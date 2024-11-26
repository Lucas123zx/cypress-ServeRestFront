import RegisterElements from '../components/registerElements';
import { Browser } from '../browser/Browser';
import { BaseSteps } from '../utils/BaseSteps';
import { base } from '@faker-js/faker';

class RegisterPage extends Browser {
 
  acessarSite() {
    return super.acessarUrl("cadastrarusuarios");
  }

  cadastraUsuarioAdm(name, email, password) {
    BaseSteps.set(RegisterElements.inputName, name);
    BaseSteps.set(RegisterElements.inputEmail, email);
    BaseSteps.set(RegisterElements.inputPassword, password);
    BaseSteps.click(RegisterElements.inputAdm);
    BaseSteps.click(RegisterElements.buttonRegister);
  }

  cadastrarUsuarioComun(name, email, password) {
    BaseSteps.set(RegisterElements.inputName, name);
    BaseSteps.set(RegisterElements.inputEmail, email);
    BaseSteps.set(RegisterElements.inputPassword, password);
    BaseSteps.click(RegisterElements.buttonRegister);
  }

  menssagemSucesso() {
    return cy.get(RegisterElements.msgSuccess).invoke('text');
  }

  menssagemErro(message) {
    BaseSteps.get_element_text(RegisterElements.msgFail(message));
  }
  
}

export default new RegisterPage();