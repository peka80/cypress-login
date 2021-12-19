class Header {
  get loginBtn() {
    return cy.get("a[href='/login']");
  };

  get registerBtn() {
    return cy.get("a[href='/register']");
  };

  get createBtn() {
    return cy.get("a[href='/create']");
  };

  get allGallBtn() {
    return cy.get(".ml-auto > :nth-child(0) > .nav-link");
  };

  get logoutBtn() {
    return cy.get("a[role='button ']");
  };

}

export const header = new Header();