import 'cypress-axe'
import type { ContextObject } from 'axe-core'

// Extend Cypress' Chainable interface to include the custom command
declare global {
  namespace Cypress {
    interface Chainable {
      checkA11yWithLog(
        context?: string | Node | ContextObject | null,
        options?: Record<string, any>
      ): Chainable<void>
      logA11yViolations(violations: any[]): Chainable<void>
    }
  }
}

Cypress.Commands.add(
  'checkA11yWithLog',
  (
    context: string | Node | ContextObject | null = null,
    options: Record<string, any> = {}
  ) => {
    cy.checkA11y(context, options, (violations) => {
      cy.task('log', `${violations.length} accessibility violations found`)
      violations.forEach((v) => {
        cy.task('log', `${v.id} - ${v.help}`)
      })
    })
  }
)

Cypress.Commands.add('logA11yViolations', (violations: any[]) => {
  cy.task(
    'log',
    `${violations.length} accessibility violation${violations.length === 1 ? '' : 's'} detected`
  )
  const violationData = violations.map(({ id, impact, description, nodes, helpUrl }) => ({
    id,
    impact,
    description,
    nodes: nodes.length,
    helpUrl,
  }))
  cy.task('table', violationData)
})
