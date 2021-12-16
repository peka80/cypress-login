/// <reference types="Cypress" />

import { authLogin } from '../page_objects/authLogin';
import { header } from '../page_objects/header';

const faker = require("faker");

describe('POM login', () => {

  let validEmail = "petar.dragovic@gmail.com";
  let validPass = "peksel2002";

  let userData = {
    randomEmail: faker.internet.email(),
    randomPassword: faker.internet.password()
  }

  before('visit app', () => {
    cy.visit('/')
    cy.url().should('contains', 'gallery-app')
  });

  it('login with invalid credentials', () => {
    header.loginBtn.click();
    authLogin.login(userData.randomEmail, userData.randomPassword)
    cy.url().should('contains', '/login');
  });

  it('login with valid credentials', () => {
    header.loginBtn.click();
    cy.url().should('contains', '/login');

    authLogin.login(validEmail, validPass);
    cy.url().should('not.contains', '/login');
  });

  it('logout', () => {
    header.logoutBtn.click();
  });

});

