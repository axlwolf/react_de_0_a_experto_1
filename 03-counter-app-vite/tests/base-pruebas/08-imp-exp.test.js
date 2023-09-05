import {
	getHeroeById,
	getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

const HEROES = heroes;

/* eslint-disable no-undef */
describe("Pruebas del archivo 08-imp-exp", () => {
	test("getHeroeById debe de regresar un heroe por ID ", () => {
		const id = 1;
		const heroe = getHeroeById(id);
		console.log(heroe);

		expect(heroe).toEqual({ id: 1, name: "Batman", owner: "DC" });
	});

	test("getHeroeById debe de regresar undefined si no existe ", () => {
		const id = 100;
		const heroe = getHeroeById(id);
		console.log(heroe);

		expect(heroe).toBeFalsy();
	});

	/*
     Tarea
     1.
        * Debe de retornar un arreglo con los heroes de DC
        * length:2
        * ToEqual al arreglo filtrado
     2.
        * Debe de retornar un arreglo con los heroes de Marvel
        * length: 2
    */

	test("getHeroesByOwner debe de regresar un arreglo con los heroes de DC", () => {
		const owner = "DC";
		const heroes = getHeroesByOwner(owner);
		console.log(heroes);

		// expect(heroes).toEqual([
		// 	{
		// 		id: 1,
		// 		name: "Batman",
		// 		owner: "DC",
		// 	},
		// 	{
		// 		id: 3,
		// 		name: "Superman",
		// 		owner: "DC",
		// 	},
		// 	{
		// 		id: 4,
		// 		name: "Flash",
		// 		owner: "DC",
		// 	},
		// ]);

		expect(heroes).toEqual(HEROES.filter((heroe) => heroe.owner === owner));

		expect(heroes.length).toBe(3);
	});

	test("getHeroesByOwner debe de regresar un arreglo con los heroes de Marvel", () => {
		const owner = "Marvel";
		const heroes = getHeroesByOwner(owner);
		console.log(heroes);

		// expect(heroes).toEqual([
		// 	{
		// 		id: 2,
		// 		name: "Spiderman",
		// 		owner: "Marvel",
		// 	},
		// 	{
		// 		id: 5,
		// 		name: "Wolverine",
		// 		owner: "Marvel",
		// 	},
		// ]);

		expect(heroes).toEqual(HEROES.filter((heroe) => heroe.owner === owner));
		expect(heroes.length).toBe(2);
	});
});
