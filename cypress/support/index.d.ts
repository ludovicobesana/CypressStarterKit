declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * 
       * @example cy.dataCy('greeting')
       */
      dataCy(value: string): Chainable<JQuery<HTMLElement>>
    }
  }
}
export {}