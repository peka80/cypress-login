/// <reference types="Cypress" />

import { authLogin } from '../page_objects/authLogin';
import { header } from '../page_objects/header';
import { createGallery } from '../page_objects/createGal';
import { allGallery } from '../page_objects/allGallery';
import { validationMsg } from '../fixtures/validationMsg.json'

const faker = require("faker");

describe('POM Create gallery', () => {

  let validEmail = 'petar.dragovic@gmail.com';
  let validPass = 'peksel2002';
  let title = 'Technologies';
  let descript = 'Create new gallery with one picture.';
  let imageUrl1 = 'https://cdn.pixabay.com/photo/2015/01/08/18/24/children-593313_960_720.jpg';
  let imageUrl2 = 'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg';
  let imageUrl3 = 'https://cdn.pixabay.com/photo/2016/11/29/11/39/computer-1869236_960_720.jpg';

  let userData = {
    image: faker.image.city() + '.jpeg',
    image2: faker.image.imageUrl() + '.gif'
  }


  before('visit app', () => {
    cy.visit('/')
    cy.url().should('contains', 'gallery-app')

    header.loginBtn.click();
    authLogin.login(validEmail, validPass);
    cy.url().should('not.contains', '/login');

    header.createBtn.click();
    cy.url().should('contains', '/create');
  });

  it('Create new gallery with .gif image format', () => {
    createGallery.oneImageGallery(title, descript, userData.image2);


    cy.url().should('include', '/create');
    createGallery.errorMsg.should('have.text', validationMsg.wrongImgFormat);
    createGallery.errorMsg.should('have.css', 'background-color', 'rgb(248, 215, 218)')
    allGallery.headingAll.should('not.have.text', 'All Galleries');
  });

  it('Create new gallery without title (all-space)', () => {
    createGallery.oneImageGallery(' ', descript, imageUrl1);


    cy.url().should('include', '/create');
    createGallery.errorMsg.should('have.text', validationMsg.titleField);
    createGallery.errorMsg.should('have.css', 'background-color', 'rgb(248, 215, 218)')
    allGallery.headingAll.should('not.have.text', 'All Galleries');
  });

  it('Create new gallery with one image', () => {
    createGallery.oneImageGallery(title, descript, imageUrl1);

    cy.url().should('not.include', '/create');
    allGallery.headingAll.should('have.text', 'All Galleries');
  });

  it('Create new gallery with 3 images', () => {
    createGallery.titleInput.type(title);
    createGallery.descriptInput.type(descript);
    createGallery.imgUrl.type(imageUrl1);
    createGallery.addImgBtn.eq(2).click();
    createGallery.imgUrl.eq(1).type(imageUrl2);
    createGallery.addImgBtn.eq(6).click();
    createGallery.imgUrl.eq(2).type(imageUrl3);

    createGallery.submitBtn.click();

    cy.url().should('not.include', '/create');
    allGallery.headingAll.should('have.text', 'All Galleries');
  });

});
