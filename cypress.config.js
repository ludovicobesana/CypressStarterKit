const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "tests/accessibility/**/*.spec.ts",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
