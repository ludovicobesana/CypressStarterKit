export class LoginPage {
  visit() {
    cy.visit(Cypress.env('saucedemo'))
  }

  getUsernameInput() {
    return cy.get('[data-test="username"]')
  }

  getPasswordInput() {
    return cy.get('[data-test="password"]')
  }

  getLoginButton() {
    return cy.get('[data-test="login-button"]')
  }

  login(username: string, password: string) {
    this.getUsernameInput().type(username)
    this.getPasswordInput().type(password)
    this.getLoginButton().click()
  }
}
