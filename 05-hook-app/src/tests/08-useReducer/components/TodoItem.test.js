/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import TodoItem from "../../../08-useReducer/components/TodoItem";
import {
	act,
	fireEvent,
	render,
	renderHook,
	screen,
} from "@testing-library/react";

describe("Pruebas en <TodoItem />", () => {
	const todo = {
		id: 1,
		description: "Piedra del poder",
		done: false,
	};

	const onDeleteTodoMock = jest.fn();
	const onToggleTodoMock = jest.fn();

	beforeEach(() => jest.clearAllMocks());

	test("debe de mostrar el TODO pendiente de completar", () => {
		render(
			<TodoItem
				todo={todo}
				onDeleteTodo={onDeleteTodoMock}
				onToggleTodo={onToggleTodoMock}
			/>
		);

		const liElement = screen.getByRole("listitem");

		expect(liElement.className).toBe(
			"list-group-item d-flex justify-content-between"
		);

		const spanElement = screen.getByLabelText("span");
		expect(spanElement.className).toContain("align-self-center");
		expect(spanElement.className).not.toContain("text-decoration-line-through");

		//screen.debug();
	});

	test("debe de mostrar el TODO completado", () => {
		todo.done = true;

		render(
			<TodoItem
				todo={todo}
				onDeleteTodo={onDeleteTodoMock}
				onToggleTodo={onToggleTodoMock}
			/>
		);

		const spanElement = screen.getByLabelText("span");
		expect(spanElement.className).toContain("text-decoration-line-through");
	});

	test("span debe de llamar el ToggleTodo cuando se hace click", () => {
		render(
			<TodoItem
				todo={todo}
				onDeleteTodo={onDeleteTodoMock}
				onToggleTodo={onToggleTodoMock}
			/>
		);

		const spanElement = screen.getByLabelText("span");

		fireEvent.click(spanElement);

		expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
	});

	test("boton debe de llamar el DeleteTodo cuando se hace click", () => {
		render(
			<TodoItem
				todo={todo}
				onDeleteTodo={onDeleteTodoMock}
				onToggleTodo={onToggleTodoMock}
			/>
		);

		//const buttonElement = screen.getByLabelText("button");
		const buttonElement = screen.getByRole("button");

		fireEvent.click(buttonElement);

		expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
	});
});
