/// <reference types="Cypress" />

describe('login test', () => {

  xit('login without email address', () => {
    cy.visit('/');
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');

    cy.get('.nav-link').eq(1).click();
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/login');
    cy.get("#password").type("peksel2002");
    cy.get('button[type="submit"]').click();
  });

  xit('login without password', () => {
    cy.visit('/');
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');

    cy.get('.nav-link').eq(1).click();
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/login');
    cy.get('#email').type('petar.dragovic@gmail.com');
    cy.get('button[type="submit"]').click();
  });

  it.only('login with invalid email', () => {
    cy.visit('/');
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');

    cy.get('.nav-link').eq(1).click();
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/login');
    cy.get('#email').type('petar.dragovi@gmail');
    cy.get("#password").type("peksel2002");
    cy.get('button[type="submit"]').click();
  });

  xit('login with all-space password', () => {
    cy.visit('/');
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');

    cy.get('.nav-link').eq(1).click();
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/login');
    cy.get('#email').type('petar.dragovic@gmail.com');
    cy.get("#password").type("         ");
    cy.get('button[type="submit"]').click();
  });

  xit('login with wrong password', () => {
    cy.visit('/');
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');

    cy.get('.nav-link').eq(1).click();
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/login');
    cy.get('#email').type('petar.dragovic@gmail.com');
    cy.get("#password").type("12134");
    cy.get('button[type="submit"]').click();
  });

  xit('login with unregisered email', () => {
    cy.visit('/');
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');

    cy.get('.nav-link').eq(1).click();
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/login');
    cy.get('#email').type('petar.ragovic@gmail.com');
    cy.get("#password").type("peksel2002");
    cy.get('button[type="submit"]').click();
  });

  xit('login with space in email address', () => {
    cy.visit('/');
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');

    cy.get('.nav-link').eq(1).click();
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/login');
    cy.get('#email').type('petar.ragovic@gmail.com ');
    cy.get("#password").type("peksel2002");
    cy.get('button[type="submit"]').click();
  });

  xit('login with empty fields', () => {
    cy.visit('/');
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');

    cy.get('.nav-link').eq(1).click();
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/login');
    cy.get('button[type="submit"]').click();
  });


  xit('login with valid credentials', () => {
    cy.visit('/');
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');

    cy.get('.nav-link').eq(1).click();
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/login');
    cy.get('#email').type('petar.dragovic@gmail.com');
    cy.get('#password').type('peksel2002');
    cy.get('button[type="submit"]').click();
  });
  // it('logout', () => {
  //   // cy.wait(4000);
  //   // cy.get('.nav-link').eq(3).click();
  //   cy.get('[role="button "]').click();
  // });
});
