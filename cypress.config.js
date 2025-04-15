require('dotenv').config();

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    ROUTES: process.env.ROUTES
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    baseUrl: 'http://localhost:3000',
  },
});
