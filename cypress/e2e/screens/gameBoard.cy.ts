describe(
  'Game Board Interaction',
  {
    env: {
      skipRollDice: true,
    },
  },
  () => {
    beforeEach(() => {
      cy.setApplicationLanguage();
      cy.wait(500);
      cy.get('select').select('hard');
      cy.get('[data-testid="roll-dice-button"]').contains('Start the game').click();
    });

    it('should roll the dice when roll button is clicked', () => {
      cy.get('[data-testid="roll-dice-button"]').contains('Roll').click();
      cy.get('[data-testid="die"]').each(($el) => {
        cy.wrap($el)
          .should('have.attr', 'aria-label')
          .and('match', /Die with \d+ pip\(s\)/);
      });
      cy.get('[data-testid="die"]').should('have.length', 15);
    });

    it('should hold a die when clicked', () => {
      cy.get('[data-testid="die"]').first().click();
      cy.get('[data-testid="die"]').first().should('have.class', 'bg-main-die-active');
    });

    it(
      'should disable a roll button & show a tooltip when all odd dice are hold',
      {
        env: {
          skipRollDice: false,
        },
      },
      () => {
        cy.get('[data-testid="die"]').each(($die) => {
          cy.wait(300);
          cy.wrap($die).click();
        });

        cy.get('[data-testid="roll-dice-button"]').should('be.disabled');
        cy.get('[data-testid="roll-dice-button"]').should('have.class', 'tooltip-open');
      },
    );

    it('should win the game when all dice are held', () => {
      cy.get('[data-testid="die"]').each(($die) => {
        cy.wait(300);
        cy.wrap($die).click();
      });
      cy.contains('Congratulations').should('be.visible');
    });
  },
);

describe(
  'Game Board Interaction - German localization test',
  {
    env: {
      skipRollDice: true,
    },
  },
  () => {
    beforeEach(() => {
      cy.setApplicationLanguage('de-DE');
      cy.get('select').select('easy');
      cy.get('[data-testid="roll-dice-button"]').contains('Spiel starten').click();
    });

    it('should roll the dice when roll button is clicked', () => {
      cy.get('[data-testid="roll-dice-button"]').contains('Würfeln').click();
      cy.get('[data-testid="die"]').should('have.length', 5);
      cy.get('[data-testid="die"]').each(($el) => {
        cy.wrap($el)
          .should('have.attr', 'aria-label')
          .and('match', /Würfelseite mit \d+ Punkt\(en\)/);
      });
    });

    it('should win the game when all dice are held', () => {
      cy.get('[data-testid="die"]').each(($die) => {
        cy.wait(300);
        cy.wrap($die).click();
      });
      cy.contains('Herzlichen Glückwunsch').should('be.visible');
    });
  },
);
