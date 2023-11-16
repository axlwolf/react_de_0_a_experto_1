/* eslint-disable no-undef */
//wrequire("dotenv").config({ path: "./.env.test" });

module.exports = {
	verbose: true,
	moduleDirectories: ["node_modules", "src"],
	testEnvironment: "jest-environment-jsdom",
	//transformIgnorePatterns: ["node_modules/(?!variables/.*)"],
	transformIgnorePatterns: [],
	transform: {
		"^.+\\.jsx?$": "babel-jest",
	},
	setupFilesAfterEnv: ["<rootDir>/tests/envValues/envValues.js"],
};
