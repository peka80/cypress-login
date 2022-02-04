
import { header } from '../page_objects/header';
import { register } from '../page_objects/register';
import { validationMsg } from '../fixtures/validationMsg.json';

const faker = require("faker");

describe('POM register', () => {

  let userData = {
    randomName: faker.name.findName(),
    randomLastName: faker.name.lastName(),
    randomEmail: faker.internet.email(),
    randomPassword: faker.internet.password(8),
    randomPasswordConfirm: faker.internet.password(8)
  }

  beforeEach('visit app', () => {
    cy.visit('/')
    header.registerBtn.click();
    cy.url().should('contains', '/register');
  });

  it('register with invalid email', () => {
    register.regUser(userData.randomName, userData.randomLastName, 'email.com', userData.randomPassword, userData.randomPassword)

    register.registerBtn.should('exist');
    cy.wait(2000)
  });

  it('register with already used email', () => {
    register.regUser(userData.randomName, userData.randomLastName, 'petar.dragovic@gmail.com', userData.randomPassword, userData.randomPassword)

    register.registerBtn.should('exist');
    register.errMsg.should('be.visible');
    register.errMsg.should('have.text', validationMsg.emailTaken);
    register.errMsg.should('have.css', 'background-color', 'rgb(248, 215, 218)');
    register.regTitle.should('be.visible');
  });

  it('register with invalid password - all letters', () => {
    register.regUser(userData.randomName, userData.randomLastName, userData.randomEmail, 'testtest', 'testtest');

    register.registerBtn.should('exist');
    register.errMsg.should('be.visible');
    register.errMsg.should('have.text', validationMsg.passFormat);
    register.errMsg.should('have.css', 'background-color', 'rgb(248, 215, 218)');
    register.regTitle.should('be.visible');
  });

  it('register with password - less then 8 charachters', () => {
    register.regUser(userData.randomName, userData.randomLastName, userData.randomEmail, 'test12', 'test12');

    register.registerBtn.should('exist');
    register.errMsg.should('be.visible');
    register.errMsg.should('have.text', validationMsg.pass8Char);
    register.errMsg.should('have.css', 'background-color', 'rgb(248, 215, 218)');
    register.regTitle.should('be.visible');
  });

  it('register with invalid confirm password - not matching', () => {
    register.regUser(userData.randomName, userData.randomLastName, userData.randomEmail, userData.randomPassword, userData.randomPasswordConfirm);

    register.registerBtn.should('exist');
    register.errMsg.should('be.visible');
    register.errMsg.should('have.text', validationMsg.confMissmatch);
    register.errMsg.should('have.css', 'background-color', 'rgb(248, 215, 218)');
    register.regTitle.should('be.visible');
  });

  it.only('register with all-space first and last name', () => {
    register.regUser('   ', '   ', userData.randomEmail, 'testtest12', 'testtest12')

    register.registerBtn.should('exist');
    register.errMsg.should('have.length', 2);
    register.errMsg.should('be.visible');
    register.errMsg.should('have.css', 'background-color', 'rgb(248, 215, 218)');
    register.regTitle.should('be.visible');
  });

  it('register with valid credentials', () => {
    register.regUser(userData.randomName, userData.randomLastName, userData.randomEmail, userData.randomPassword, userData.randomPassword)
  });

});
