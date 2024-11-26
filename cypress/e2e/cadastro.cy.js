import LoginPage from '../support/pages/loginPage';
import RegisterPage from '../support/pages/registerPage';
import HomePage from '../support/pages/homePage';
import User from '../support/utils/user';
import { BaseSteps } from '../support/utils/BaseSteps'; 

describe('Login', () => {

  let user;

  beforeEach("acessar site e gerar massa de dados de usuario", () => {
    RegisterPage.acessarSite();
    BaseSteps.validityUrl(`${Cypress.env('baseurl')}/cadastrarusuarios`);
    user = User.createRandomUser();
  });

  it('Cadastro usuário adm com sucesso ', () => {
    RegisterPage.cadastraUsuarioAdm(user.name, user.email, user.password)
    HomePage.validytyHomeADM('Bem Vindo  ' + user.name);
  });

  it.only('Cadastro usuário comun com sucesso ', () => {
    RegisterPage.cadastrarUsuarioComun(user.name, user.email, user.password);
    RegisterPage.menssagemSucesso().should('be.visible');
    cy.screenshot();
  });

  it('Cadastro usuário sem informar campo nome', () => {
    LoginPage.clicarCadastro();
    RegisterPage.escreverEmail(user.email);
    RegisterPage.escreverPassword(user.password);
    RegisterPage.clicarCadastrar();
    RegisterPage.menssagemErro('Nome é obrigatório').should('be.visible');
    cy.screenshot();
  });

  it('Cadastro usuário sem informar campo email', () => {
    LoginPage.clicarCadastro();
    RegisterPage.escreverNome(user.name);
    RegisterPage.escreverPassword(user.password);
    RegisterPage.clicarCadastrar();
    RegisterPage.menssagemErro('Email é obrigatório').should('be.visible');
    cy.screenshot();
  });

  it('Cadastro usuário sem informar campo email', () => {
    LoginPage.clicarCadastro();
    RegisterPage.escreverEmail(user.email);
    RegisterPage.escreverNome(user.name);
    RegisterPage.clicarCadastrar();
    RegisterPage.menssagemErro('Password é obrigatório').should('be.visible');
    cy.screenshot();
  });

  it('Cadastro usuário informando email já existente', () => {
    user.email = 'teste1@gmail.com' 

    LoginPage.clicarCadastro();
    RegisterPage.escreverEmail(user.email);
    RegisterPage.escreverNome(user.name);
    RegisterPage.escreverPassword(user.password);
    RegisterPage.clicarCadastrar();
    RegisterPage.menssagemErro('Este email já está sendo usado').should('be.visible');
    cy.screenshot();
  });
  
  it('Cadastro usuário sem informar campos', () => {
    LoginPage.clicarCadastro();
    RegisterPage.clicarCadastrar();
    RegisterPage.menssagemErro('Nome é obrigatório').should('be.visible');
    RegisterPage.menssagemErro('Email é obrigatório').should('be.visible');
    RegisterPage.menssagemErro('Password é obrigatório').should('be.visible');
    cy.screenshot();
  });

})