// cypress/support/index.d.ts
declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to start a game and win automatically.
     */
    startGameAndWin(language?: string): Chainable<Element>;
    setApplicationLanguage(language?: string): Chainable<Element>;
  }
}
