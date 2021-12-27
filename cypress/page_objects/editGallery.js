class EditGallery {
  get editTitle() {
    return cy.get('#title');
  }

  get editDescription() {
    return cy.get('#description')
  }

  get editImgUrl() {
    return cy.get('input[type="url"]');
  }

  editGal(title, descript, imgUrl) {
    this.editTitle.clear().type(title);
    this.editDescription.clear().type(descript);
    this.editImgUrl.clear().type(imgUrl);
  }



}

export const editGallery = new EditGallery();