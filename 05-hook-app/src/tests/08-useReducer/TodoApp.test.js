/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { TodoApp } from "../../08-useReducer/TodoApp";
import {
	act,
	fireEvent,
	render,
	renderHook,
	screen,
} from "@testing-library/react";
import { useTodos } from "../../hooks/useTodos";
import { useForm } from "../../hooks/useForm";

jest.mock("../../hooks/useTodos");
//jest.mock("../../hooks/useForm");

describe("Pruebas en <TodoApp />", () => {
	useTodos.mockReturnValue({
		todos: [
			{
				id: 1,
				description: "Recolectar la piedra del alma",
				done: false,
			},
			{
				id: 2,
				description: "Recolectar la piedra del poder",
				done: true,
			},
		],
		handleNewTodo: jest.fn(),
		handleDeleteTodo: jest.fn(),
		handleToggleTodo: jest.fn(),
		todosCount: 2,
		pendingTodosCount: 1,
	});

	// useForm.mockReturnValue({
	// 	description: "",
	// 	onInputChange: jest.fn(),
	// 	onResetForm: jest.fn(),
	// });

	test("debe de mostrar el componente correctamente", () => {
		render(<TodoApp />);

		//screen.debug();

		expect(screen.getByText("Recolectar la piedra del alma")).toBeTruthy();
		expect(screen.getByText("Recolectar la piedra del poder")).toBeTruthy();
		expect(screen.getByRole("textbox")).toBeTruthy();
	});
});
