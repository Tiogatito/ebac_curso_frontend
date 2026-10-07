const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://ebac-agenda-contatos-tan.vercel.app',
    supportFile: false,
    specPattern: 'cypress/e2e/**/*.cy.js',
    testIsolation: true,
  },
  viewportWidth: 1280,
  viewportHeight: 900,
  defaultCommandTimeout: 10000,
  requestTimeout: 15000,
  responseTimeout: 30000,
  video: false,
});
