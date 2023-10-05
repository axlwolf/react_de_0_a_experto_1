/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { types } from "../../../../modules/auth";

describe("Pruebas en 'tyoes.js'", () => {
	test("debe de regresar estos types", () => {
		// console.log(types);
		expect(types).toEqual({ login: "[AUTH] Login", logout: "[AUTH] Logout" });
	});
});
