/// <reference types="Cypress" />

const Locators = require('../fixtures/Locators.json');
const faker = require("faker");

describe('login test', () => {

  let validEmail = "petar.dragovic@gmail.com";
  let validPass = "peksel2002";

  let userData = {
    randomName: faker.name.findName(),
    randomEmail: faker.internet.email(),
    randomPassword: faker.datatype.number()
  }

  before('visit app page', () => {
    cy.visit("/");
    cy.url().should('contains', 'https://gallery-app');
  });

  it('login with invalid credentials', () => {
    cy.get(Locators.Header.LoginButton).click();
    cy.url().should('contains', '/login');
    cy.get(Locators.LoginPage.EmailInput).clear().type(userData.randomEmail);
    cy.get(Locators.LoginPage.PasswordInput).clear().type(userData.randomPassword);
    cy.get(Locators.LoginPage.SubmitButton).click();
    cy.url().should('contains', '/login');
  })

  it('login with valid credentials', () => {
    cy.get(Locators.Header.LoginButton).click();
    cy.url().should('contains', '/login');
    cy.get(Locators.LoginPage.EmailInput).clear().type(validEmail);
    cy.get(Locators.LoginPage.PasswordInput).clear().type(validPass);
    cy.get(Locators.LoginPage.SubmitButton).click();
  });

  it('logout', () => {
    cy.wait(4000);
    cy.get(Locators.Logout.LogoutButton).click();
  });
});
