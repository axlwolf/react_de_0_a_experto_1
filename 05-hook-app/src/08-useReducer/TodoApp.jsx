/* eslint-disable no-unused-vars */
import TodoList from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";
import { useTodos } from "../hooks/";

export const TodoApp = () => {
	const {
		todos,
		todosCount,
		pendingTodosCount,
		handleDeleteTodo,
		handleNewTodo,
		handleToggleTodo,
	} = useTodos();

	return (
		<>
			<h1>
				Todo App: {todosCount}, <small>Pendientes: {pendingTodosCount}</small>
			</h1>
			<hr />
			<section className="row">
				<div className="col-7">
					<TodoList
						todos={todos}
						onDeleteTodo={handleDeleteTodo}
						onToggleTodo={handleToggleTodo}
					></TodoList>
				</div>
				<div className="col-5">
					<h4>Add todo</h4>
					<hr />
					<TodoAdd handleNewTodo={handleNewTodo}></TodoAdd>
				</div>
			</section>
		</>
	);
};
