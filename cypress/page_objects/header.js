class Header {
  get loginBtn() {
    return cy.get("a[href='/login']");
  };

  get registerBtn() {
    return cy.get("a[href='/register']");
  };

  get logoutBtn() {
    return cy.get("a[role='button ']");
  };

}

export const header = new Header();