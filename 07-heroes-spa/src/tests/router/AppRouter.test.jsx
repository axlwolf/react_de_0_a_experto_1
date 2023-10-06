/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { AppRouter } from "../../router/AppRouter";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "../../modules/auth";

{
	/* <AppRouter></AppRouter> */
}
describe("Pruebas en  <AppRouter />", () => {
	test("debe de mostrar el login si no esta autenticado", () => {
		const contextValue = {
			logger: false,
		};
		render(
			<MemoryRouter initialEntries={["/marvel"]}>
				<AuthContext.Provider value={contextValue}>
					<AppRouter />
				</AuthContext.Provider>
			</MemoryRouter>
		);

		screen.debug();

		//expect(screen.getAllByText("Login")).toBeTruthy();
		expect(screen.getAllByText("Login").length).toBe(2);
	});

	test("debe de mostrar el componente de marvel si esta autenticado", () => {
		const contextValue = {
			logged: true,
			user: { name: "John", id: "123ABC" },
		};

		render(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter initialEntries={["/login"]}>
					<AppRouter />
				</MemoryRouter>
			</AuthContext.Provider>
		);

		// screen.debug();

		expect(screen.getByText("Marvel Page")).toBeTruthy();
		expect(screen.getAllByText("Marvel").length).toBe(1);
		expect(screen.getAllByText("Marvel").length).toBeGreaterThanOrEqual(1);
	});
});
