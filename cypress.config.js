const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 15000,
    watchForFileChanges: false,   // turn off auto-restart
    viewportWidth: 1920,
    viewportHeight: 1080,
    baseUrl: process.env.BASE_URL,
    blockHosts: ['*.yandex.ru', '*.google-analytics.com', '*.mc.yandex.ru', 'mc.yandex.ru'],
    env: {
      "expectedTitle": "Военное снаряжение"
    },
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message)
          return null
        }
      })
    },
  },
});
