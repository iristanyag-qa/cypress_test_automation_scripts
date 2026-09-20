const { defineConfig } = require("cypress");
const environment = require("./cypress.env.json");

module.exports = defineConfig({
  env: environment,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
