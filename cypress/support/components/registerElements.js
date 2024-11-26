class RegisterElements {
  inputName = '#nome';
  inputEmail = '#email';
  inputPassword ='#password';
  inputAdm = '#administrador';
  buttonRegister = 'button[data-testid="cadastrar"]';
  msgSuccess = 'a[class="alert-link"]';
  msgFail = (message) => `//span[text()= "${message}"`;
}

export default new RegisterElements();