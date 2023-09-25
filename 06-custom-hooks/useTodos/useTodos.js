import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [
	// {
	// 	id: new Date().getTime(),
	// 	description: "Recolectar la piedra del alma",
	// 	done: false,
	// },
	// {
	// 	id: new Date().getTime() + 100,
	// 	description: "Recolectar la piedra del poder",
	// 	done: false,
	// },
];

const init = () => {
	return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
	const [todos, dispatch] = useReducer(todoReducer, initialState, init);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const handleNewTodo = (todo) => {
		const action = {
			type: "[TODO] add todo",
			payload: todo,
		};

		dispatch(action);
	};

	const handleDeleteTodo = (id) => {
		const action = {
			type: "[TODO] delete todo",
			payload: id,
		};

		dispatch(action);
	};

	const handleToggleTodo = (id) => {
		const action = {
			type: "[TODO] toggle todo",
			payload: id,
		};

		dispatch(action);
	};

	const todosCount = todos.length;
	const pendingTodosCount = todos.filter((todo) => !todo.done).length;

	return {
		todos,
		handleNewTodo,
		handleDeleteTodo,
		handleToggleTodo,
		todosCount,
		pendingTodosCount,
	};
};

//export default useTodos;
