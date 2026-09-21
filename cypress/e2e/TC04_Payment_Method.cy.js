const accounts = require('../fixtures/accounts.json');
const loginUrl = 'https://plukupgradeuatportal.simplecrmdev.com/login';
const { username, password } = accounts.find
((account) => account.role === 'Processor');

describe('Ticket Creation', () => {
  it('Ticket Creation (Approver)', () => {
    //calls custom command to login as Approver
    cy.Login_Approver();
  });
})
