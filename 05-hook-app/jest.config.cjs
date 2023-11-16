/* eslint-disable no-undef */
module.exports = {
	verbose: true,
	moduleDirectories: ["node_modules", "src"],
	testEnvironment: "jest-environment-jsdom",
	transformIgnorePatterns: ["node_modules/(?!variables/.*)"],
	transform: {
		"^.+\\.[t|j]sx?$": "babel-jest",
	},
	setupFiles: ["./jest.setup.js"],
};
