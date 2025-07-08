declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Comando custom di esempio.
       * @example cy.dataCy('greeting')
       */
      dataCy(value: string): Chainable<JQuery<HTMLElement>>
    }
  }
}
export {}