/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../../09-useContext/context/UserContext";
import { LoginPage } from "../../../09-useContext/pages/LoginPage";

describe("Pruebas en <LoginPage/>", () => {
	const user = {
		id: 123456,
		name: "Axel",
		email: "axlwolf@gmail.com",
	};

	const setUserMock = jest.fn();

	beforeEach(() => jest.clearAllMocks());

	test("debe de mostrar el componente sin el usuario rendereado", () => {
		render(
			<UserContext.Provider value={{ user: null }}>
				<LoginPage />
			</UserContext.Provider>
		);

		const preTag = screen.getByLabelText("pre");

		expect(preTag.innerHTML).toBe("null");
	});

	test("debe de setear el user cuando se hace click en el boton", () => {
		render(
			<UserContext.Provider value={{ user: user, setUser: setUserMock }}>
				<LoginPage />
			</UserContext.Provider>
		);

		//screen.debug();

		const btnSetUser = screen.getByRole("button");
		const preTag = screen.getByLabelText("pre");

		//console.log(btnSetUser);

		fireEvent.click(btnSetUser);

		expect(setUserMock).toHaveBeenCalledWith(user);
		//console.log(preTag.innerHTML);
		expect(preTag.innerHTML).toContain(user.email.toString());
	});
});
