/* eslint-disable react/no-unknown-property */
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const LoginPage = () => {
	const { user, setUser } = useContext(UserContext);

	return (
		<>
			<h1>LoginPage</h1>
			<hr />

			<pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>
			<button
				className="btn btn-primary"
				onClick={() =>
					setUser({
						id: 123456,
						name: "Axel",
						email: "axlwolf@gmail.com",
					})
				}
			>
				Setear usuario
			</button>
		</>
	);
};
