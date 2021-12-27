import { createGallery } from "../page_objects/createGal";
import { editGallery } from "../page_objects/editGallery";


describe('POM My Galleries page', () => {

  let galleryId = '';
  let authToken = window.localStorage.getItem('token');
  let title = 'Nova galerija 3';
  let titleEdit = 'Nova galerija EDIT';
  let descript = 'Novokreirana galerija.';
  let descriptEdit = 'Novokreirana galerija.EDIT';
  let imageUrl2 = 'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg';
  let imageUrl1 = 'https://cdn.pixabay.com/photo/2015/01/08/18/24/children-593313_960_720.jpg';

  beforeEach('login via backend', () => {
    cy.loginViaBackend();
  });

  it('Create new gallery', () => {
    cy.intercept({
      method: 'POST',
      url: 'https://gallery-api.vivifyideas.com/api/galleries'
    }).as('createGallery');

    cy.visit('/create');

    createGallery.oneImageGallery(title, descript, imageUrl2);

    cy.wait('@createGallery').then((interception) => {
      console.log(interception.response);
      expect(interception.response.statusCode).eq(201);
      galleryId = interception.response.body.id;
      console.log(galleryId);
    });

    cy.url().should('not.include', '/create');

  });

  xit('visit last created gallery', () => {
    cy.intercept({
      method: 'GET',
      url: `https://gallery-api.vivifyideas.com/api/galleries/${galleryId}`
    }).as('lastGallery');

    cy.visit(`/galleries/${galleryId}`);
    cy.url(`/galleries/${galleryId}`)

  });

  it('edit last created gallery', () => {
    cy.intercept({
      method: 'PUT',
      url: `https://gallery-api.vivifyideas.com/api/galleries/${galleryId}`
    }).as('editGallery');

    cy.visit(`/edit-gallery/${galleryId}`);
    cy.url(`/edit-gallery/${galleryId}`)

    editGallery.editGal(titleEdit, descriptEdit, imageUrl1);
    createGallery.submitBtn.click();

    // cy.wait('@editGallery').then((interception) => {
    //   expect(interception.response.statusCode).eq(200);
    // });

  });

})