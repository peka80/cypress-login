class Header {
  get loginBtn() {
    return cy.get("a[href='/login']");
  };

  get registerBtn() {
    return cy.get("a[href='/register']");
  };

  get myGallBtn() {
    return cy.get("a[href='/my-galleries']");
  }

  get createBtn() {
    return cy.get("a[href='/create']");
  };

  get allGallBtn() {
    return cy.get(".nav-link").eq(0);
  };

  get logoutBtn() {
    return cy.get("a[role='button ']");
  };

}

export const header = new Header();
