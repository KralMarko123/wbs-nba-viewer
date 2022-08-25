const { defineConfig } = require("cypress");

module.exports = defineConfig({
	defaultCommandTimeout: 25000,
	pageLoadTimeout: 25000,
	env: {
		baseURL: "https://kralmarko123.github.io/wbs-nba-viewer/",
		devURL: "http://localhost:3000/wbs-nba-viewer",
	},
	retries: {
		runMode: 1,
		openMode: 1,
	},
	e2e: {
		// We've imported your old cypress plugins here.
		// You may want to clean this up later by importing these.
		setupNodeEvents(on, config) {
			return require("./cypress/plugins/index.js")(on, config);
		},
		specPattern: "cypress/e2e/**/*.js",
	},
});
