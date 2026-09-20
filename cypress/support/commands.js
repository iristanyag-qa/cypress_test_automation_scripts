// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
//-- This login is for Processor Account --
Cypress.Commands.add('Login_Processor', () => {
const accounts = require('../fixtures/accounts.json');
const loginUrl = 'https://plukupgradeuatportal.simplecrmdev.com/login';
const { username, password } = accounts.find
((account) => account.role === 'Processor');

    cy.visit(loginUrl);

    cy.get('input[name="username"]')
      .should('be.visible')
      .type(username);

    cy.get('input[name="password"]')
      .should('be.visible')
      .type(password, { log: false });

    cy.get('button[type="submit"]')
      .should('be.visible')
      .click();

    cy.get('button[style="text-decoration: none;"]')
      .should('be.visible');

})

//-- This login is for Assessor Account --
Cypress.Commands.add('Login_Assessor', () => {
const accounts = require('../fixtures/accounts.json');
const loginUrl = 'https://plukupgradeuatportal.simplecrmdev.com/login';
const { username, password } = accounts.find
((account) => account.role === 'Assessor');

    cy.visit(loginUrl);

    cy.get('input[name="username"]')
      .should('be.visible')
      .type(username);

    cy.get('input[name="password"]')
      .should('be.visible')
      .type(password, { log: false });

    cy.get('button[type="submit"]')
      .should('be.visible')
      .click();

    cy.get('button[style="text-decoration: none;"]')
      .should('be.visible');

})

//-- This login is for Approver Account --
Cypress.Commands.add('Login_Approver', () => {
const accounts = require('../fixtures/accounts.json');
const loginUrl = 'https://plukupgradeuatportal.simplecrmdev.com/login';
const { username, password } = accounts.find
((account) => account.role === 'Approver');

    cy.visit(loginUrl);

    cy.get('input[name="username"]')
      .should('be.visible')
      .type(username);

    cy.get('input[name="password"]')
      .should('be.visible')
      .type(password, { log: false });

    cy.get('button[type="submit"]')
      .should('be.visible')
      .click();

    cy.get('button[style="text-decoration: none;"]')
      .should('be.visible');

})


