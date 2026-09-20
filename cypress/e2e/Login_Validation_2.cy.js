const accounts = require('../fixtures/accounts.json');
const loginUrl = 'https://plukupgradeuatportal.simplecrmdev.com/login';

describe('Login Validation', () => {
  accounts.forEach((account, index) => {
    it(`logs in using account ${index + 1} (${account.role})`, () => {
      cy.visit(loginUrl);

      cy.get('input[name="username"]')
        .should('be.visible')
        .type(account.username);

      cy.get('input[name="password"]')
        .should('be.visible')
        .type(account.password, { log: false });

      cy.get('button[type="submit"]')
        .should('be.visible')
        .click();

      cy.get('button[style="text-decoration: none;"]')
        .should('be.visible');
    });
  });
});
