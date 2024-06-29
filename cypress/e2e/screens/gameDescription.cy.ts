describe('Game Description Screen Interaction', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('DEV_URL'));
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
});
