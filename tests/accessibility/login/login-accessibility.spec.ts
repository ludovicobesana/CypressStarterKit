describe('Accessibility checks - SauceDemo Login Page', function () {
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
})
