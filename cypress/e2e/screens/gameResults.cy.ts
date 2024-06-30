describe(
  'Game Results Screen Interaction',
  {
    env: {
      skipRollDice: true,
    },
  },
  () => {
    beforeEach(() => {
      cy.visit(Cypress.env('DEV_URL'));
      cy.startGameAndWin();
      cy.wait(1500);
    });

    it('should display the game results after winning', () => {
      cy.contains('Congratulations').should('be.visible');
      cy.contains('Total Time').should('be.visible');
      cy.contains('Total Clicks').should('be.visible');
    });

    it('should show the game statistics when restart button is clicked', () => {
      cy.get('[data-testid="roll-dice-button"]').contains('Start again').click();
      cy.contains('🎲 Tenzies').should('be.visible');
      cy.contains('Top 5 results:').should('be.visible');
      cy.get('[data-testid="records-list"]').should('be.visible');
    });
  },
);
