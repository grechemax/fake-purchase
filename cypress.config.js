const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000, // 10 seconds
    watchForFileChanges: false,   // ⬅️ turn off auto-restart
    viewportWidth: 1920,
    viewportHeight: 1080,
    baseUrl: 'https://bronetorg.ru',
    env: {
      "expectedTitle": "Военное снаряжение"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
