const credentials = require('../../cypress.env.json');
const loginUrl = 'https://plukupgradeuatportal.simplecrmdev.com/login';
const accounts = [1,2,3].map((accountNumber) => ({
  name: `Account ${accountNumber}`,
  username: credentials[`USER_${accountNumber}_USERNAME`],
  password: credentials[`USER_${accountNumber}_PASSWORD`],
}));

describe('Login_Validation', () => {
  accounts.forEach((account) => {
    it(`logs in using ${account.name}`, () => {
      
      cy.visit(loginUrl);
      
      //using attributes to locate the username and password input fields
      cy.get('input[name="username"]')
        .should('be.visible')
        .type(account.username);
      
      //using attributes to locate the password input field
      cy.get('input[name="password"]')
        .should('be.visible')
        .type(account.password, { log: false });
      
      //cy.get('button[type="submit"]')
      //.should('be.visible')
      //.click();

      // Using XPath to locate the submit button
      cy.xpath('//*[@type="submit"]')
      .should('be.visible')
      .click();
      
      cy.get('button[style="text-decoration: none;"]')
      .should('be.visible');
      
      cy.wait(5000);
    });
  });
});