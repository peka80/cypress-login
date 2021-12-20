/// <reference types="Cypress" />

import { authLogin } from '../page_objects/authLogin';
import { header } from '../page_objects/header';

describe('POM Create gallery', () => {

  let validEmail = "petar.dragovic@gmail.com";
  let validPass = "peksel2002";

  before('visit app', () => {
    cy.visit('/')
    cy.url().should('contains', 'gallery-app')

    header.loginBtn.click();
    authLogin.login(validEmail, validPass);
    cy.url().should('not.contains', '/login');
  });

  it('Create gallery page', () => {
    header.createBtn.click();
    cy.url().should('contains', '/create');
  });

  it('All gallery page', () => {
    header.allGallBtn.click();
    cy.url().should('contains', '/');
  });
});
