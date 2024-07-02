Cypress.Commands.add('startGameAndWin', (language = 'en-GB') => {
  cy.get('[data-testid="roll-dice-button"]')
    .contains(language === 'en-GB' ? 'Start' : 'Spiel starten')
    .click();

  cy.get('[data-testid="die"]').then(($dice) => {
    const allDiceButLast = $dice.slice(0, $dice.length - 1);

    // Iterate over each element except the last
    cy.wrap(allDiceButLast)
      .each(($die) => {
        cy.wrap($die).click();
      })
      .then(() => {
        cy.wait(300).then(() => {
          // Invoke dice roll
          cy.get('[data-testid="roll-dice-button"]')
            .contains(language === 'en-GB' ? 'Roll' : 'Würfeln')
            .click();
          cy.wait(1500);
          // Click the last non-selected element
          cy.wrap($dice.last()).click();
        });
      });
  });
});

Cypress.Commands.add('setApplicationLanguage', (language = 'en-GB') => {
  cy.visit(Cypress.env('DEV_URL'), {
    onBeforeLoad(win) {
      Object.defineProperty(win.navigator, 'language', {
        value: language,
      });
    },
  });
});
