/// <reference types="Cypress" />

import { authLogin } from '../page_objects/authLogin';
import { header } from '../page_objects/header';
import { galleryPage } from '../page_objects/galleryPage';

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
    cy.url().should('include', 'gallery-app')
  });

  it.only('login with invalid credentials', () => {
    header.loginBtn.click();
    cy.contains('Please login');

    authLogin.login(userData.randomEmail, userData.randomPassword);

    authLogin.errMsg.should('be.visible');
    authLogin.errMsg.should('have.text', 'Bad Credentials');
    authLogin.errMsg.should('have.css', 'background-color', 'rgb(248, 215, 218)');
    header.loginBtn.should('exist');
    cy.url().should('contains', '/login');
  });

  it('login with valid credentials', () => {
    cy.intercept({
      method: 'POST',
      url: 'https://gallery-api.vivifyideas.com/api/auth/login',
    }).as('login');

    header.loginBtn.click();
    cy.url().should('contains', '/login');

    authLogin.login(validEmail, validPass);

    cy.wait('@login').then((interception) => {
      expect(interception.response.statusCode).eq(200);
    });
    header.loginBtn.should('not.exist');
    cy.url().should('not.contains', '/login');
  });

  it('logout', () => {
    header.logoutBtn.click();
  });

});
