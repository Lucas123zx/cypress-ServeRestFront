const { defineConfig } = require("cypress");
require('dotenv').config();

const setupNodeEvents = async (on, config) => {
  require('cypress-mochawesome-reporter/plugin')(on);

  config.env.baseurl = process.env.BASE_URL;

  return config;
};

module.exports = defineConfig({
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    chromeWebSecurity: true,
    setupNodeEvents,
    viewportWidth: 1920,
    viewportHeight: 1080,
    experimentalInteractiveRunEvents: true, 
    screenshotsFolder: "cypress/screenshots",
    supportFile:"cypress/support/plugins/e2e.js"
  },
});



 