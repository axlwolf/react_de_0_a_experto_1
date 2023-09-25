/* eslint-disable react/prop-types */
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ handleNewTodo }) => {
	const { description, onInputChange, onResetForm } = useForm({
		description: "",
	});

	const onSubmittedTodo = (e) => {
		e.preventDefault();
		if (description.length <= 1) return;
		const newTodo = {
			id: new Date().getTime(),
			description,
			done: false,
		};
		handleNewTodo(newTodo);
		onResetForm();
	};

	return (
		<>
			<form onSubmit={onSubmittedTodo}>
				<input
					className="form-control"
					type="text"
					name="description"
					placeholder="Que hay que hacer?"
					onChange={onInputChange}
					value={description}
				/>

				<button type="submit" className="btn btn-outline-primary mt-2">
					Add
				</button>
			</form>
		</>
	);
};

//export default TodoAdd;
