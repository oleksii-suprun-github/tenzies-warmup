describe(
  'Game Description Screen Interaction',
  {
    env: {
      skipRollDice: true,
    },
  },
  () => {
    beforeEach(() => {
      cy.setApplicationLanguage();
    });

    it('should display the game description initially', () => {
      cy.contains(
        'Roll until all dice are the same. Click each die to freeze it at its current value between rolls.',
      ).should('be.visible');
    });

    it('should start the game when the start button is clicked', () => {
      cy.get('[data-testid="roll-dice-button"]').contains('Start').click();
      cy.contains('Time').should('be.visible');
    });

    it('should allow setting the game difficulty', () => {
      cy.get('select').select('normal');
      cy.get('[data-testid="roll-dice-button"]').contains('Start').click();
      cy.get('[data-testid="die"]').should('have.length', 10);
    });
  },
);

describe(
  'Game Description Screen Interaction - German localization test',
  {
    env: {
      skipRollDice: true,
    },
  },
  () => {
    beforeEach(() => {
      cy.setApplicationLanguage('de-DE');
    });

    it('should display the game description initially', () => {
      cy.contains(
        'Würfle, bis alle Würfel gleich sind. Klicke auf jeden Würfel, um ihn während der Würfe auf seinem aktuellen Wert zu fixieren.',
      ).should('be.visible');
    });

    it('should start the game when the start button is clicked', () => {
      cy.get('[data-testid="roll-dice-button"]').contains('Spiel starten').click();
      cy.contains('Zeit').should('be.visible');
    });
  },
);
