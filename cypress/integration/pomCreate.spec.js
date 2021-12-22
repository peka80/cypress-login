/// <reference types="Cypress" />

import { authLogin } from '../page_objects/authLogin';
import { header } from '../page_objects/header';
import { createGal, createGallery } from '../page_objects/createGal';

const faker = require("faker");

describe('POM Create gallery', () => {

  let validEmail = 'petar.dragovic@gmail.com';
  let validPass = 'peksel2002';
  let title = 'Cypress POM Create New Gallery';
  let descript = 'Create new gallery with one picture.';
  let imageUrl1 = 'https://i.pinimg.com/originals/45/50/14/455014371ee786da05d84d64e17ef28c.jpg';
  let imageUrl2 = 'https://www.verstappenshop.com/include/thumb/thumb.php?src=/img/product/12_helm_2020__0010_levels_1_copy_1.jpg';
  let imageUrl3 = 'https://i.ytimg.com/vi/NHKpK9iRiPk/maxresdefault.jpg';

  let userData = {
    image: faker.image.city() + '.jpg',
    image2: faker.image.imageUrl() + '.jpg'
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

  xit('Create new gallery with one image', () => {
    createGallery.oneImageGallery(title, descript, imageUrl1);

    cy.url().should('contains', '/');
    cy.get('h1').should('have.text', 'All Galleries');
  });

  it.only('Create new gallery with 3 images', () => {
    createGallery.titleInput.type(title);
    createGallery.descriptInput.type(descript);
    createGallery.imgUrl.type(imageUrl1);
    createGallery.addImgBtn.eq(2).click();
    createGallery.imgUrl.eq(1).type(imageUrl2);
    createGallery.addImgBtn.eq(6).click();
    createGallery.imgUrl.eq(2).type(imageUrl3);

    createGallery.submitBtn.click();
    cy.url().should('contains', '/');
    cy.get('h1').should('have.text', 'All Galleries');
  });


});
