/* eslint-disable no-unused-vars */
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "../../modules/auth";
import { PublicRoute } from "../../router/PublicRoute";
import { render, screen } from "@testing-library/react";

/* eslint-disable no-undef */
describe("Pruebas en <PublicRoute/>", () => {
	test("debe de mostrar el children si no esta autenticado ", () => {
		const contextValue = { logged: false };
		render(
			<AuthContext.Provider value={contextValue}>
				<PublicRoute>
					<h1>Ruta Publica</h1>
				</PublicRoute>
			</AuthContext.Provider>
		);

		// screen.debug();
		expect(screen.getByText("Ruta Publica")).toBeTruthy();
	});

	test("debe de navegar si esta autenticado", () => {
		const contextValue = {
			logged: true,
			user: { name: "Axel Lanuza", id: "12345" },
		};

		render(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter initialEntries={["/login"]}>
					<Routes>
						<Route
							path="login"
							element={
								<PublicRoute>
									<h1>Ruta Publica</h1>
								</PublicRoute>
							}
						></Route>
						<Route path="marvel" element={<h1>Pagina Marvel</h1>}></Route>
					</Routes>
				</MemoryRouter>
			</AuthContext.Provider>
		);

		// screen.debug();

		expect(screen.getByText("Pagina Marvel")).toBeTruthy();
	});
});
