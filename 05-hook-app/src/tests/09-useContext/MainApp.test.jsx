/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
//import { UserContext } from "../../../09-useContext/context/UserContext";
import MainApp from "../../09-useContext/MainApp";
import { MemoryRouter } from "react-router-dom";
describe("Pruebas en <MainApp />", () => {
	test("debe de mostrar el HomePage", () => {
		render(
			<MemoryRouter>
				<MainApp />
			</MemoryRouter>
		);

		screen.debug();
		expect(screen.getByText("HomePage")).toBeTruthy();
	});

	test("debe de mostrar el LoginPage", () => {
		render(
			<MemoryRouter initialEntries={["/login"]}>
				<MainApp />
			</MemoryRouter>
		);

		screen.debug();
		expect(screen.getByText("LoginPage")).toBeTruthy();
	});

	test("debe de mostrar el AboutPage", () => {
		render(
			<MemoryRouter initialEntries={["/about"]}>
				<MainApp />
			</MemoryRouter>
		);

		screen.debug();
		expect(screen.getByText("AboutPage")).toBeTruthy();
	});
});
