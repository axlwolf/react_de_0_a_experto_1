import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

/* eslint-disable no-undef */
describe("Pruebas del archivo 09-promesas", () => {
	test("getHeroeByIdAsync debe de regresar un heroe", (done) => {
		const id = 1;

		//const heroe = getHeroeByIdAsync(id);
		getHeroeByIdAsync(id).then((hero) => {
			// expect(true).toBe(false);

			console.log(hero);
			expect(hero).toEqual({
				id: 1,
				name: "Batman",
				owner: "DC",
			});
			done();
		});
	});

	test("getHeroeByIdAsync debe de regresar un error si el heroe no existe", (done) => {
		const id = 100;

		//const heroe = getHeroeByIdAsync(id);
		getHeroeByIdAsync(id)
			.then((hero) => {
				expect(hero).toBeFalsy();
				done();
			})
			.catch((error) => {
				console.log(error);
				expect(error).toBe("No se pudo encontrar el héroe con el id: " + id);
				done();
			});
	});
});
