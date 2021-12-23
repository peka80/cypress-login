class AllGallery {
  get searchField() {
    return cy.get('.form-control');
  }

  get loadBtn() {
    return cy.get('.btn').eq(1);
  }

  get galleryCard() {
    return cy.get('.cell');
  }

  get headingAll() {
    return cy.get('h1');
  }

}

export const allGallery = new AllGallery();
