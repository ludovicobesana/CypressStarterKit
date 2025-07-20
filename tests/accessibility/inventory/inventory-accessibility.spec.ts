import { InventoryPage } from '../../../cypress/pages/InventoryPage'

describe('Accessibility checks - SauceDemo Inventory Page', function () {
  const inventoryPage = new InventoryPage()

  beforeEach(function () {
    inventoryPage.visit()
    inventoryPage.login('standard_user', 'secret_sauce')
    cy.injectAxe()
  })

  it('Has no critical or serious accessibility violations on inventory page', function () {
    cy.checkA11yWithLog(null, {
      includedImpacts: ['critical', 'serious'],
    })
  })
})
