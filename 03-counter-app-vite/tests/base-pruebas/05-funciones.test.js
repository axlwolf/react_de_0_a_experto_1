/* eslint-disable no-undef */
import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas en archivo 05-funcines", () => {
	test("getUser debe de regresar un objeto", () => {
		const testUser = {
			uid: "ABC123",
			username: "El_Papi1502",
		};

		const user = getUser();
		console.log(user);

		expect(testUser).toEqual(user);
	});

	test("getUsuarioActivo debe de regresar un objeto", () => {
		const name = "Axel Lanuza";
		const activeUser = getUsuarioActivo(name);
		console.log(activeUser);

		expect(activeUser).toStrictEqual({
			uid: "ABC567",
			username: name,
		});
	});
});
