/* eslint-disable no-undef */
import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Pruebas en 02-template-string", () => {
	test('getSaludo debe de regresar "Hola Axel Lanuza"', () => {
		const name = "Axel Lanuza";
		const message = getSaludo(name);

		expect(message).toBe(`Hola ${name}`);
	});
});
