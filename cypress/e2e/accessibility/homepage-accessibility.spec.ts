import { LoginPage } from '../../../cypress/pages/LoginPage'

describe('Accessibility checks - SauceDemo', function () {
  const loginPage = new LoginPage()

  beforeEach(function () {
    loginPage.visit()
    cy.injectAxe()
  })

  it('Has no critical or serious accessibility violations on login page', function () {
    cy.checkA11y(null, {
      includedImpacts: ['critical', 'serious'],
    })
  })

  it('Login form is accessible', function () {
    cy.checkA11y('form')
  })

  it('Performs login and checks inventory page accessibility', function () {
    loginPage.login('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory.html')
    cy.checkA11y(null, {
      includedImpacts: ['critical', 'serious'],
    })
  })
})
