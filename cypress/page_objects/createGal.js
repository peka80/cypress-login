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

  get inputBtn() {
    return cy.get('.input-buttons').eq(0);
  }

  get addImgBtn() {
    return cy.get('button[type="button"]');
  }

  get submitBtn() {
    return cy.get('.btn').eq(0);
  }

  get cancelBtn() {
    return cy.get('.btn').eq(1);
  }

  get errorMsg() {
    return cy.get('.alert');
  }

  oneImageGallery(title, descript, imgUrl) {
    this.titleInput.clear().type(title);
    this.descriptInput.clear().type(descript);
    this.imgUrl.clear().type(imgUrl);
    this.submitBtn.click();
  }

}

export const createGallery = new CreateGallery();
