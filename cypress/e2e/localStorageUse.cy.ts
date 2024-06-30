describe(
  'Local Storage',
  {
    env: {
      skipRollDice: true,
    },
  },
  () => {
    const STORAGE_KEY = 'tenzies-wins-records';

    it('should store game records in local storage', () => {
      cy.visit(Cypress.env('DEV_URL'));
      cy.startGameAndWin();
      cy.wait(1500);
      cy.reload();
      cy.window().then((win) => {
        const item = win.localStorage.getItem(STORAGE_KEY);
        const records = item ? JSON.parse(item) : null;
        expect(records).to.have.length(1);
      });
    });

    it('should retrieve game records from local storage', () => {
      const dummyRecord = [
        {
          id: '322',
          date: '1719400474591',
          difficultyLabel: 'normal',
          gameTime: 30,
          gameClicks: 10,
        },
      ];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dummyRecord));
      cy.visit(Cypress.env('DEV_URL'));
      cy.get('[data-testid="records-list"]').should('have.length', 1);
    });
  },
);
