const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  projectId: process.env.CYPRESS_PROJECT_ID,
  e2e: {
    specPattern: "tests/accessibility/**/*.spec.ts",
    supportFile: "cypress/support/e2e.js",
    env: {
      saucedemo: "https://www.saucedemo.com/",
    },
    setupNodeEvents(on, config) {
      config.env.CYPRESS_RECORD_KEY = process.env.CYPRESS_RECORD_KEY;
      on('task', {
        log(message) {
          console.log(message)
          return null
        },
        table(data) {
          console.table(data)
          return null
        }
      })
      
      return config;
    },
  },
});
