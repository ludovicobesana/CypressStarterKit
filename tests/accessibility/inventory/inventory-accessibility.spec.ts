describe('Accessibility checks - SauceDemo Inventory Page', function () {
  beforeEach(function () {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include', '/inventory.html')
    cy.injectAxe()
  })

  it('Has no critical or serious accessibility violations on inventory page', function () {
    cy.checkA11y(null, {
      includedImpacts: ['critical', 'serious'],
    }, (violations) => {
      cy.logA11yViolations(violations)
      expect(violations, 'No accessibility violations').to.have.length(0)
    })
  })
})
