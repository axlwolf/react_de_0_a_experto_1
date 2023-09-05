import { getImagen } from "../../src/base-pruebas/11-async-await";

/* eslint-disable no-undef */
describe("Pruebas del archivo 11-async-await", () => {
	test("getImagen debe de regresar una url de la imagen", async () => {
		const url = await getImagen();
		console.log(url);

		expect(typeof url).toBe("string");
	});
});
