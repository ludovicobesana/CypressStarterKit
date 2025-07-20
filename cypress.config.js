const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "tests/accessibility/**/*.spec.ts",
    supportFile: "cypress/support/e2e.js",
    env: {
      saucedemo: "https://www.saucedemo.com/",
    },
    setupNodeEvents(on, config) {
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
    },
  },
});
