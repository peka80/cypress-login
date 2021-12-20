/// <reference types="Cypress" />

import { header } from '../page_objects/header';
import { register } from '../page_objects/register';

const faker = require("faker");

describe('POM register', () => {

  let userData = {
    randomName: faker.name.findName(),
    randomLastName: faker.name.lastName(),
    randomEmail: faker.internet.email(),
    randomPassword: faker.internet.password(8)
  }

  beforeEach('visit app', () => {
    cy.visit('/')
    header.registerBtn.click();
    cy.url().should('contains', '/register');
  });

  it('register with invalid email', () => {
    register.regUser(userData.randomName, userData.randomLastName, 'email.com', userData.randomPassword, userData.randomPassword)
    cy.wait(2000)
  });

  it('register with invalid password - all letters', () => {
    register.regUser(userData.randomName, userData.randomLastName, userData.randomEmail, 'testtest', 'testtest')
    cy.wait(2000)
  });

  it('register with invalid password - less then 8 charachters', () => {
    register.regUser(userData.randomName, userData.randomLastName, userData.randomEmail, 'test12', 'test12')
    cy.wait(2000);
  });

  it('register with all-space first and last name', () => {
    register.regUser('   ', '   ', userData.randomEmail, userData.randomLastName, userData.randomLastName)
    cy.wait(2000);
  });

  it('register with valid credentials', () => {
    register.regUser(userData.randomName, userData.randomLastName, userData.randomEmail, userData.randomPassword, userData.randomPassword)
  });

});

