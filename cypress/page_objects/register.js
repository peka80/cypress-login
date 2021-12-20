class UserRegistration {
  get firstNameInput() {
    return cy.get("#first-name");
  }

  get lastNameInput() {
    return cy.get("#last-name");
  }

  get emailInput() {
    return cy.get("#email");
  }

  get passwordInput() {
    return cy.get("#password");
  }

  get passwordConfInput() {
    return cy.get("#password-confirmation");
  }

  get termsCheck() {
    return cy.get("input[type='checkbox']");
  }

  get registerBtn() {
    return cy.get("button[type='submit']");
  }

  regUser(firstName, lastName, email, pass, passConfirm) {
    this.firstNameInput.clear().type(firstName);
    this.lastNameInput.clear().type(lastName);
    this.emailInput.clear().type(email);
    this.passwordInput.clear().type(pass);
    this.passwordConfInput.clear().type(passConfirm);
    this.termsCheck.click();
    this.registerBtn.click();
  }

}

export const register = new UserRegistration();
