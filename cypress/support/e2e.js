// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Hide XHR and fetch entries from the Cypress Command Log.
beforeEach(() => {
  cy.intercept(
    {
      resourceType: /xhr|fetch/,
    },
    {
      log: false,
    }
  );
});

// Import commands.js using ES2015 syntax:
import './commands'

// Installation of Cypress-Xpath plugin to enable the use of XPath selectors in Cypress tests.
require('cypress-xpath');