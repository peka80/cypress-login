import { header } from "../page_objects/header";
import { authLogin } from "../page_objects/authLogin";
import { allGallery } from "../page_objects/allGallery";

describe('POM All Galleries', () => {

  let validEmail = 'petar.dragovic@gmail.com';
  let validPass = 'peksel2002';

  before('Visit app gallery', () => {
    cy.visit('/');
    cy.url().should('include', 'gallery-app');
  });

  it('All galleries - logged out user navigation header', () => {
    cy.url().should('contains', '/');

    header.loginBtn.should('exist');
    header.registerBtn.should('exist');
    header.allGallBtn.should('exist');
    header.createBtn.should('not.exist');
    header.myGallBtn.should('not.exist');
    cy.get('h1').should('have.text', 'All Galleries');
  });

  it('All galleries - logged in user navigation header', () => {
    header.loginBtn.click();
    cy.url().should('contains', '/login');

    authLogin.login(validEmail, validPass);
    cy.url().should('contains', '/');

    header.loginBtn.should('not.exist');
    header.registerBtn.should('not.exist');
    header.allGallBtn.should('exist');
    header.createBtn.should('exist');
    header.myGallBtn.should('exist');
    cy.get('h1').should('have.text', 'All Galleries');
  });

  it('Search field', () => {
    allGallery.searchField.should('exist');
    allGallery.searchField.invoke('attr', 'placeholder').should('contain', 'Search...');
  });

  it('Number of galleries has to be 10', () => {
    allGallery.galleryCard.should('have.length', 10);
  });

  it('Load more button', () => {
    allGallery.loadBtn.should('exist');
  });

  it.only('Load More button to load another 10 galleries', () => {
    allGallery.galleryCard.should('have.length', 10);
    allGallery.loadBtn.click();
    allGallery.galleryCard.should('have.length', 20);
    allGallery.loadBtn.click();
    allGallery.galleryCard.should('have.length', 30);
  });
});
