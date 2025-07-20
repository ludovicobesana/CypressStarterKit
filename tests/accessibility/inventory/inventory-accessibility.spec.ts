import { InventoryPage } from '../../../cypress/pages/InventoryPage'

describe('Accessibility checks - SauceDemo Inventory Page', function () {
  const inventoryPage = new InventoryPage()

  beforeEach(function () {
    inventoryPage.visit()
    inventoryPage.login('standard_user', 'secret_sauce')
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
