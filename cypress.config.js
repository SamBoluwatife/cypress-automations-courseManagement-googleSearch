const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  projectId: 'e1mfcn',
  reporter: 'mochawesome',
  retries: {
    runMode: 2,
    openMode: 1,
  },
  env: {
    testUrl: 'https://www.instagram.com',
  },
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 50000,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
