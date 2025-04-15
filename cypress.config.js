require('dotenv').config();
const fetch = require('node-fetch');

const { parseSitemap } = require('./cypress/support/getRoutesFromSitemap');

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    SITE_URL: process.env.SITE_URL,
    SITEMAP_URL: process.env.SITEMAP_URL,
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
    baseUrl: process.env.SITE_URL || 'http://localhost:3000',
  },
});
