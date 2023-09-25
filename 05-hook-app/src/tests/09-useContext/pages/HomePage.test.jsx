/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { HomePage } from "../../../09-useContext/pages/HomePage";
import { UserContext } from "../../../09-useContext/context/UserContext";

describe("Pruebas en <Homepage/>", () => {
	const user = {
		id: 123456,
		name: "Axel",
		email: "axlwolf@gmail.com",
	};
	test("debe de mostrar el componente sin el usuario", () => {
		render(
			<UserContext.Provider value={{ user: null }}>
				<HomePage />
			</UserContext.Provider>
		);
		screen.debug();

		const preTag = screen.getByLabelText("pre");

		expect(preTag.innerHTML).toBe("null");
	});

	test("debe de mostrar el componente CON el usuario", () => {
		render(
			<UserContext.Provider value={{ user: user }}>
				<HomePage />
			</UserContext.Provider>
		);
		screen.debug();

		const preTag = screen.getByLabelText("pre");

		expect(preTag.innerHTML).toBe(JSON.stringify(user, null, 3));

		expect(preTag.innerHTML).toContain(user.name);
		expect(preTag.innerHTML).toContain(user.email.toString());
	});
});
