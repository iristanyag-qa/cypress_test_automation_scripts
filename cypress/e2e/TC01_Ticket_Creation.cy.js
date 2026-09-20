const accounts = require('../fixtures/accounts.json');

const loginUrl = 'https://plukupgradeuatportal.simplecrmdev.com/login';

const { username, password } = accounts.find
((account) => account.role === 'Processor');

function getCurrentDateTime() {
  const now = new Date();

  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const year = now.getFullYear();

  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');

  const period = hours >= 12 ? 'pm' : 'am';

  hours = hours % 12 || 12;
  hours = String(hours).padStart(2, '0');

  return `${month}-${day}-${year} ${hours}:${minutes}${period}`;
}

describe('Ticket Creation', () => {
  it('Ticket Creation (Processor)', () => {
    cy.Login_Processor().wait(5000);
    cy.get('#root svg.fa-book').click({ force: true });
    cy.wait(4000);
    
    cy.get('#root div[role="toolbar"] > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > button > span:nth-child(1)')
    .should('be.visible');
    
    cy.get('#root div[role="toolbar"] > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > button > span:nth-child(1)')
    .click();
    
    cy.get('#root header.mui-fixed > div:nth-child(1) > button:nth-child(2)')
    .should('be.visible');
    
    cy.get('#root header.mui-fixed > div:nth-child(1) > button:nth-child(2)')
    .should('have.text', 'Tickets');
    
    //enter ticket subject
    cy.get('[name="name"]').click();
    cy.get('[name="name"]').type('Living Benefit - CCB Claim - (73476149)');
    
    //enter ticket nature
    cy.get('#nature_c').click();
    cy.get('#nature_c-option-1').click();
    cy.get('#panel-0-bh-content [name="nature_c"] button[aria-label="Clear"] span:nth-child(1) svg').click();
    cy.get('#nature_c').click();
    cy.get('#nature_c-option-1').click();
    //enter ticket sub-type
    cy.get('#sub_type_c').click();
    cy.get('#sub_type_c-option-3').click();
    //enter date of receipt
    cy.get('input[aria-describedby="date_of_receipt_c-helper-text"]').click().type(getCurrentDateTime());
    //enter policy number
    cy.get('#search-btn-scrm_policies_cases_1_name path').should('be.visible');
    cy.get('#search-btn-scrm_policies_cases_1_name path').click({ force: true });
    cy.get('input[name="name"][value=""]').click({ force: true }).type('73476149');
    cy.get('button[form="relate-search-form"] > span:nth-child(1)').click();
    cy.get('[data-testid="MuiDataTableBodyCell-0-0"] a').click();
    cy.wait(4000);
    //click save
    cy.get('#root div:nth-child(3) > div:nth-child(2) > button[type="submit"] > span:nth-child(1)').click();
    //verify Ticket Name if Correct
    cy.get('#root div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span').should('have.text', 'Living Benefit - CCB Claim - (73476149)');
    cy.get('#root div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span').should('be.visible');
  })
})

