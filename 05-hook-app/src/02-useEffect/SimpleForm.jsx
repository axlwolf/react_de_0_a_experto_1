import { useEffect } from "react";
import { useState } from "react";
import Message from "./Message";

const SimpleForm = () => {
	const [formState, setFormState] = useState({
		username: "axlwolf",
		email: "axlwolf@gmail.com",
	});

	const { username, email } = formState;

	const onInputChange = ({ target }) => {
		const { name, value } = target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	useEffect(() => {
		// console.log("Use Effect called");
	}, []);

	useEffect(() => {
		// console.log("formState changed");
	}, [formState]);

	useEffect(() => {
		// console.log("email changed");
	}, [email]);

	useEffect(() => {
		return () => {};
	}, []);

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
				placeholder="axlwolf@gmail.com"
				name="email"
				value={email}
				onChange={onInputChange}
			/>
			{username === "axlwolf" && <Message />}
		</>
	);
};

export default SimpleForm;
