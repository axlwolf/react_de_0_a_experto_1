import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

/* eslint-disable no-undef */
describe("Pruebas en archivo 07-deses-arr", () => {
	test("retornaArreglo debe de regresar un string y un numero", () => {
		//const testArreglo = ["ABC", 123];

		const [letters, numbers] = retornaArreglo();

		expect(letters).toBe("ABC");
		expect(numbers).toBe(123);

		expect(typeof numbers).toBe("number");
		expect(typeof letters).toBe("string");

		expect(letters).toEqual(expect.any(String));
	});
});
