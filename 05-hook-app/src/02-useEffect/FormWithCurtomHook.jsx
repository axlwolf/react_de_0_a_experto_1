// import { useEffect, useState } from "react";
import useForm from "../hooks/useForm";

const FormWithCurtomHook = () => {
	const { onResetForm, onInputChange, username, email, password } = useForm({
		username: "",
		email: "",
		password: "",
	});

	// const { username, email, password } = formState;

	return (
		<>
			<h1>Simple Form</h1>
			<hr />
			<input
				type="text"
				className="form-control"
				placeholder="username"
				name="username"
				value={username}
				onChange={onInputChange}
			/>
			<input
				type="email"
				className="form-control mt-4"
				placeholder="email"
				name="email"
				value={email}
				onChange={onInputChange}
			/>
			<input
				type="password"
				className="form-control mt-4"
				placeholder="password"
				name="password"
				value={password}
				onChange={onInputChange}
			/>
			<button className="btn btn-primary mt-4" onClick={onResetForm}>
				Borrar
			</button>
		</>
	);
};

export default FormWithCurtomHook;
