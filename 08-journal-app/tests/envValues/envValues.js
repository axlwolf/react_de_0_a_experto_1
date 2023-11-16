/* eslint-disable no-undef */
//import { getEnvironments } from "../../src/helpers";

require("dotenv").config({
	path: "./.env.test",
});

/* eslint-disable no-undef */

jest.mock("../../src/helpers/getEnvironments", () => ({
	getEnvironments: () => ({ ...process.env }),
}));
