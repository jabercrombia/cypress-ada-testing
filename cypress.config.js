require('dotenv').config();
const fetch = require('node-fetch');

const { parseSitemap } = require('./cypress/support/getRoutesFromSitemap');

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    ROUTES: process.env.ROUTES,
    SITE_URL: process.env.CYPRESS_SITE_URL,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        getRoutesFromSitemap: async (url) => {
          return await parseSitemap(url);
        }
      });
    },
    baseUrl: process.env.CYPRESS_SITE_URL || 'http://localhost:3000',
  },
});
