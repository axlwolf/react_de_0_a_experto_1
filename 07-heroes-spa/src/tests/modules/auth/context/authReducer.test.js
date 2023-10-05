import { authReducer, types } from "../../../../modules/auth/";

/* eslint-disable no-undef */
describe("Pruebas en authReducer", () => {
	test("debe de retornar el estado por defecto ", () => {
		const state = authReducer({ logged: false }, {});
		console.log(state);

		expect(state).toEqual({ logged: false });
	});

	test("debe de (login) llamar el login autenticar y establecer el user", () => {
		const action = {
			type: types.login,
			payload: {
				name: "Axel Lanuza",
				id: "123",
			},
		};

		const state = authReducer({ logged: false }, action);

		// console.log(action);
		// console.log(state);

		expect(state).toEqual({
			logged: true,
			user: action.payload,
		});
	});

	test("debe de (logout borrar el name del usuario y logged on false) ", () => {
		const state = { logged: true, user: { id: "123", name: "Axel Lanuza" } };
		const action = {
			type: types.logout,
		};

		const newState = authReducer(state, action);

		// console.log(newState);

		//TODO: checar porque no manda como valido
		expect(newState).toEqual({
			...state,
			logged: false,
		});
	});
});
