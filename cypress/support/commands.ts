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
      if (violations.length) {
        cy.task('log', `\n\u001b[31m==================== ACCESSIBILITY VIOLATIONS ====================\u001b[0m`)
        cy.task('log', `\u001b[33mTotal Violations: ${violations.length}\u001b[0m`)
        violations.forEach((v, idx) => {
          cy.task('log', `\n\u001b[31m--- Violation #${idx + 1} ---\u001b[0m`)
          cy.task('log', `\u001b[36mID: ${v.id}\u001b[0m`)
          cy.task('log', `\u001b[37mDescription: ${v.description}\u001b[0m`)
          cy.task('log', `\u001b[35mImpact: ${v.impact}\u001b[0m`)
          cy.task('log', `\u001b[32mHelp: ${v.help}\u001b[0m`)
          cy.task('log', `Help URL: ${v.helpUrl}`)
          v.nodes.forEach((node, nidx) => {
            cy.task('log', `    \u001b[33m• Node #${nidx + 1}: ${node.target}\u001b[0m`)
            if (node.failureSummary) {
              cy.task('log', `      \u001b[31m───────────── FAILURE SUMMARY ─────────────\u001b[0m`)
              node.failureSummary.split('\n').forEach(line => {
                cy.task('log', `      \u001b[31m${line.trim()}\u001b[0m`)
              })
              cy.task('log', `      \u001b[31m───────────────────────────────────────────\u001b[0m`)
            }
          })
        })
        cy.task('log', `\n\u001b[34m───────────────────── SUMMARY TABLE ─────────────────────\u001b[0m`)
        cy.task('table', violations.map(({ id, impact, description, nodes, helpUrl }) => ({ id, impact, description, nodes: nodes.length, helpUrl })))
        cy.task('log', `\u001b[31m========================================================\u001b[0m\n`)
      } else {
        cy.task('log', `\n\u001b[32mNo accessibility violations detected.\u001b[0m\n`)
      }
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
