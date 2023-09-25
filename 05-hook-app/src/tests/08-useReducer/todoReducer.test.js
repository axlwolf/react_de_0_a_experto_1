/* eslint-disable no-unused-vars */
import { todoReducer } from "../../08-useReducer/todoReducer";
import { act, renderHook } from "@testing-library/react";
/* eslint-disable no-undef */
describe("Pruebas en el todoReducer", () => {
	const initialState = [
		{
			id: 1,
			description: "Demo todo",
			done: false,
		},
	];

	test("debe de regresar el estado inicial", () => {
		const newState = todoReducer(initialState, {});
		expect(newState).toBe(initialState);
	});

	test("debe de agregar un todo ", () => {
		const action = {
			type: "[TODO] add todo",
			payload: {
				id: 2,
				description: "Demo todo 2",
				done: false,
			},
		};

		const newState = todoReducer(initialState, action);
		//console.log(newState);
		expect(newState.length).toBe(2);
		expect(newState).toContain(action.payload);
	});

	test("debe de eliminar un TODO ", () => {
		const action = {
			type: "[TODO] delete todo",
			payload: 1,
		};
		const newState = todoReducer(initialState, action);
		//console.log(newState);
		expect(newState.length).toBe(0);
	});

	test("debe de hacer Toggle al todo ", () => {
		const action = {
			type: "[TODO] toggle todo",
			payload: 1,
		};
		const newState = todoReducer(initialState, action);
		//console.log(newState);
		expect(newState[0].done).toBe(true);

		// const newState2 = todoReducer(initialState, action);
		// console.log(newState2);
		// expect(newState2[0].done).toBe(false);
	});
});
