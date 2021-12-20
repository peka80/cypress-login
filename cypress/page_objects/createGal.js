class CreateGallery {
  get titleInput() {
    return cy.get('#title');
  }

  get descriptInput() {
    return cy.get('#description');
  }

  get imgUrl() {
    return cy.get('input[type="url"]');
  }

  get addImgBtn() {
    return cy.get('button[button]').contains('Add image');
  }

  get submitBtn() {
    return cy.get('.btn').eq(0);
  }

  get submitBtn() {
    return cy.get('.btn').eq(1);
  }

  create(title, descritpion, addImg) {

  }

}

export const createGallery = new CreateGallery();