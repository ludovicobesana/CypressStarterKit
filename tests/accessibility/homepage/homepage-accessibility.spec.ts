describe('Accessibility checks - SauceDemo', function () {
  beforeEach(function () {
    cy.visit('https://www.saucedemo.com/')
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
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include', '/inventory.html')
    cy.checkA11y(null, {
      includedImpacts: ['critical', 'serious'],
    })
  })
})
