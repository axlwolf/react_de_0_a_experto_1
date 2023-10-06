/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Navbar } from "../../../../modules/ui";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../modules/auth";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useNavigate: () => mockedUseNavigate,
}));

describe("Pruebas en  <Navbar />", () => {
	const contextValue = {
		logged: true,
		user: { name: "John", id: "123ABC" },
		logout: jest.fn(),
	};

	beforeEach(() => jest.clearAllMocks());

	test("debe de mostrar el nombre del usuario loggeado ", () => {
		render(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter initialEntries={["/login"]}>
					<Navbar />
				</MemoryRouter>
			</AuthContext.Provider>
		);

		//screen.debug();
		//console.log(screen.getByText("John"));
		expect(screen.getByText("John")).toBeTruthy();
	});

	test("debe de llamar el logout y navigate cuando se hace click en el boton", () => {
		render(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter initialEntries={["/login"]}>
					<Navbar />
				</MemoryRouter>
			</AuthContext.Provider>
		);

		const logoutBtn = screen.getByRole("button");
		//console.log(logoutBtn);

		fireEvent.click(logoutBtn);

		expect(contextValue.logout).toHaveBeenCalled();
		expect(mockedUseNavigate).toHaveBeenCalledWith("/login", { replace: true });
	});
});
