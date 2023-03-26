/// <reference types="cypress" />

describe('main flow', () => {
  beforeEach(() => {
    //o cypress descarta o localstorage depois de cada it, usando essa função que ta no commands.ts ele não faz isso.
    //assim ele nao descarta e eu posso separar meus testes de uma forma mais organizada
    //@ts-ignore
    cy.restoreLocalStorage()
    cy.visit("/")
  });

  afterEach(() => {
    //@ts-ignore
    cy.saveLocalStorage()
  });

  it('should click on more info and redirect for comic page and then', () => {
    cy.get("button").contains("More info").first().click()

    cy.url().should('include', '/37252')
  });

  it('should , add the item to shop-cart and come back to home', () => {
    cy.get("button").contains("Add to shop-cart").click()

    cy.url().should('not.include', '/37252')
  });

  it('should click on pagination component', () => {
    cy.get('.sc-jsMahE > :nth-child(2)').click()

    cy.get(':nth-child(10) > .content > .cdIGQV').should("be.visible")
  });

  it('should add one more element to shop-cart and redirect to buy page', () => {
    cy.get("button").contains("Add to shop-cart").last().click()

    cy.get("[data-cy='open-btn']").click()
    cy.get("button").contains("CheckOut").click()

    cy.url().should('include', '/buy')
  }); 

  it('should see the shop-list and close it', () => {
    cy.visit("/buy")

    cy.get("[data-cy='menu-list']").click()
    cy.get(':nth-child(1) > .sc-hLseeU').should("be.visible")
    cy.get("[data-cy='menu-list']").click()
  });

  it('should submit de form and recive an error', () => {
    cy.visit("/buy")
    
    cy.get("[data-cy='submit']").submit()
    
    cy.get('.notification > h1').should("be.visible")
  });
  
  it('should type the correct ticket', () => {
    cy.visit("/buy")
    
    cy.get('input').type('neoapp10')
    
    cy.get("[data-cy='submit']").submit()
    
    cy.get('.notification > h1').contains("ticket accept for all your comics!").should("be.visible")
    
    cy.get("[data-cy='finish-btn']").click()
    
    cy.get('.notification > h1').contains("You did it! The Avangers will remember that").should("be.visible")
  });
});