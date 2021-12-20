class GalleryPage {
  get galleryCard() {
    return cy.get('.cell');
  }

  getGalleryHeading(index) {
    return this.galleryCard.eq(index).find('h2');
  }

  getGalleryAuthor(author) {
    return this.galleryCard.eq(index).find('h2');
  }
}

export const galleryPage = new GalleryPage();