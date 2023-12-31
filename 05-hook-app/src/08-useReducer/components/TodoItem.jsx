/* eslint-disable react/prop-types */

const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
	return (
		<>
			<li
				key={todo.id}
				className="list-group-item d-flex justify-content-between"
			>
				<span
					aria-label="span"
					className={`align-self-center ${
						todo.done ? "text-decoration-line-through" : ""
					}`}
					onClick={() => onToggleTodo(todo.id)}
				>
					{todo.description}
				</span>
				<button
					aria-label="button"
					className="btn btn-danger"
					onClick={() => onDeleteTodo(todo.id)}
					data-id={todo.id}
				>
					Borrar
				</button>
			</li>
		</>
	);
};

export default TodoItem;
