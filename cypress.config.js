const { defineConfig } = require("cypress");

module.exports = defineConfig({
 chromeWebSecurity: false,
    env: {
    vendorStagingUrl: 'https://builders-konnect-main.onrender.com/auth/login',

  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
