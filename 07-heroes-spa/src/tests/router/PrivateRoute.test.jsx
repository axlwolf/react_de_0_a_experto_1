/* eslint-disable no-unused-vars */
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../modules/auth";
import { PrivateRoute } from "../../router/PrivateRoute";
import { render, screen } from "@testing-library/react";

/* eslint-disable no-undef */
describe("Pruebas en <PrivateRoute/>", () => {
	test("debe de mostrar el children si esta autenticado ", () => {
		// User Storage en lugar de localStorage
		Storage.prototype.setItem = jest.fn();

		const contextValue = {
			logged: true,
			user: { name: "Axel Lanuza", id: "ABC123" },
		};

		render(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter initialEntries={["/marvel"]}>
					<PrivateRoute>
						<h1>Ruta Privada</h1>
					</PrivateRoute>
				</MemoryRouter>
			</AuthContext.Provider>
		);

		// screen.debug();
		expect(screen.getByText("Ruta Privada")).toBeTruthy();
		expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/marvel");
	});
});
