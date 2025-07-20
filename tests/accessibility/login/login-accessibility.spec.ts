import { LoginPage } from '../../../cypress/pages/LoginPage'

describe('Accessibility checks - SauceDemo Login Page', function () {
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
})
