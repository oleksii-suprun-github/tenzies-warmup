describe('My First Test', () => {
    it('Visits the app and checks for a specific element', () => {
      cy.visit('http://localhost:5173/');
      
      cy.contains('h1', '🎲 Tenzies'); 
    });
  });