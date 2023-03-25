describe('Index page', () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173")
  });

  it('should click on more info and redirect for comic page', () => {
    cy.get("button").contains("More info").first().click()

    cy.url().should('include', '/37252?isRare=false')
  });
});