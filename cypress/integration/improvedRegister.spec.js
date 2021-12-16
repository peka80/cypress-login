const Locators = require('../fixtures/Locators.json');
const faker = require("faker");

describe('registration test', () => {

  let userData = {
    firstName: faker.name.findName(),
    lastName: faker.name.lastName(),
    randomEmail: faker.internet.email(),
    randomPassword: faker.internet.password(8),
    randomNewPassword: faker.internet.password()
  }

  before('visit app page', () => {
    cy.visit("/");
    cy.url().should('contains', 'https://gallery-app');

  });

  it('register with all valid data', () => {
    cy.get(Locators.Header.RegisterButton).click();
    cy.url().should('contains', 'https://gallery-app.vivifyideas.com/register');

    cy.get(Locators.Registration.firstName).type(userData.firstName);
    cy.get(Locators.Registration.lastName).type(userData.lastName);
    cy.get(Locators.Registration.email).type('1' + userData.randomEmail);
    cy.get(Locators.Registration.passReg).type(userData.randomPassword);
    cy.get(Locators.Registration.passRegConfirm).type(userData.randomPassword);
    cy.get(Locators.Registration.terms).click();
    cy.get(Locators.Register.submit).click();

  });
});