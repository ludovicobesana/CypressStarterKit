export class InventoryPage {
  visit() {
    cy.visit(Cypress.env('saucedemo'))
  }

  login(username: string, password: string) {
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include', '/inventory.html')
  }

  getInventoryContainer() {
    return cy.get('.inventory_container')
  }
}
