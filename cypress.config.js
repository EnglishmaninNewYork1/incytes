const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "chromeWebSecurity": false,
  projectId: "h7dbto",

  env: {
    CYPRESS_RECORD_KEY: "7bb5cd43-7ae4-4c31-bdb2-91b0da5c2b9c",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
