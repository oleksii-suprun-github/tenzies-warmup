describe(
  'Game Results Screen Interaction',
  {
    env: {
      skipRollDice: true,
    },
  },
  () => {
    beforeEach(() => {
      cy.setApplicationLanguage();
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
      cy.contains('Top 5 results').should('be.visible');
      cy.get('[data-testid="records-list"]').should('be.visible');
    });
  },
);

describe(
  'Game Results Screen Interaction - German localization test',
  {
    env: {
      skipRollDice: true,
    },
  },
  () => {
    beforeEach(() => {
      cy.setApplicationLanguage('de-DE');
      cy.startGameAndWin('de-DE');
      cy.wait(1500);
    });

    it('should display the game results after winning', () => {
      cy.contains('Herzlichen Glückwunsch').should('be.visible');
      cy.contains('Gesamtzeit').should('be.visible');
      cy.contains('Gesamtklicks').should('be.visible');
    });

    it('should show the game statistics when restart button is clicked', () => {
      cy.get('[data-testid="roll-dice-button"]').contains('Noch einmal').click();
      cy.contains('Top 5 Ergebnisse').should('be.visible');
      cy.get('[data-testid="records-list"]').should('be.visible');
    });
  },
);
