import { LoginPage } from '../../../cypress/pages/LoginPage'

describe('Accessibility checks - SauceDemo', function () {
  const loginPage = new LoginPage()

  beforeEach(function () {
    loginPage.visit()
    cy.injectAxe()
  })

  it('Performs login and checks inventory page accessibility', function () {
    loginPage.login('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory.html')
    cy.checkA11yWithLog(null, {
      includedImpacts: ['critical', 'serious'],
    })
  })
})
