import { header } from "../page_objects/header";
import { authLogin } from "../page_objects/authLogin";
import { allGallery } from "../page_objects/allGallery";

describe('POM All Galleries', () => {

  before('login via backend', () => {
    cy.loginViaBackend();
  });

  it('assert login', () => {
    cy.visit('/');
    header.loginBtn.should('not.exist');
  });

  xit('All galleries - logged out user navigation header', () => {
    cy.url().should('contains', '/');

    header.loginBtn.should('exist');
    header.registerBtn.should('exist');
    header.allGallBtn.should('exist');
    header.createBtn.should('not.exist');
    header.myGallBtn.should('not.exist');
    allGallery.headingAll.should('have.text', 'All Galleries');
  });

  xit('All galleries - logged in user navigation header', () => {
    header.loginBtn.click();
    cy.url().should('contains', '/login');

    authLogin.login(validEmail, validPass);
    cy.url().should('not.include', '/login');

    header.loginBtn.should('not.exist');
    header.registerBtn.should('not.exist');
    header.allGallBtn.should('exist');
    header.createBtn.should('exist');
    header.myGallBtn.should('exist');
    allGallery.headingAll.should('have.text', 'All Galleries');
  });

  xit('Search field', () => {
    allGallery.searchField.should('exist');
    allGallery.searchField.invoke('attr', 'placeholder').should('contain', 'Search...');
  });

  xit('Number of galleries has to be 10', () => {
    allGallery.galleryCard.should('have.length', 10);
  });

  xit('Load More button to load another 10 galleries', () => {
    allGallery.loadBtn.should('exist');

    allGallery.galleryCard.should('have.length', 10);
    allGallery.loadBtn.click();
    allGallery.galleryCard.should('have.length', 20);
    allGallery.loadBtn.click();
    allGallery.galleryCard.should('have.length', 30);
  });
});
