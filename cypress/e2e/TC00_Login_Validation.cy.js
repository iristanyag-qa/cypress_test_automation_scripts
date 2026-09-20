const accounts = require('../fixtures/accounts.json');
const loginUrl = 'https://plukupgradeuatportal.simplecrmdev.com/login';


describe('Login_Validation_1', () => {

  accounts.forEach((account) => {
    it(`logs in using ${account.role}`, () => {

    cy.visit(loginUrl)

    cy.get('input[name="username"]')
    .should('be.visible')
    .type(account.username);
      
    cy.get('input[name="password"]')
    .should('be.visible')
    .type(account.password,{ log: false });
      
    //cy.get('button[type="submit"]')
    //.should('be.visible')
    //.click();

    cy.xpath('//*[@type="submit"]')
    .should('be.visible')
    .click();
      
    cy.get('button[style="text-decoration: none;"]')
    .should('be.visible');
      
    cy.wait(5000);
    });
  });
});
