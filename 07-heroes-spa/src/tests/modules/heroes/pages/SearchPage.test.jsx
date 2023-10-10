/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../../modules/heroes/pages/SearchPage";
import { AuthContext } from "../../../../modules/auth";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useNavigate: () => mockedUseNavigate,
}));

describe("Pruebas en  <SearchPage />", () => {
	test("debe de mostrarse el componente con valores por defecto", () => {
		const { container } = render(
			<MemoryRouter>
				<SearchPage />
			</MemoryRouter>
		);
		// screen.debug();

		expect(container).toMatchSnapshot();
	});

	test("debe de mostrar a batman y el input con el queryString", () => {
		const { container } = render(
			<MemoryRouter initialEntries={["/search?q=batman"]}>
				<SearchPage />
			</MemoryRouter>
		);
		//screen.debug();
		const input = screen.getByRole("textbox");
		const img = screen.getByRole("img");
		const alert = screen.getByLabelText("searchHero");
		// console.log(alert.style.display);

		expect(input.value).toBe("batman");
		expect(img.src).toContain("/assets/heroes/dc-batman.jpg");
		expect(alert.style.display).toBe("none");
		//expect(container).toMatchSnapshot();
	});

	test("debe de mostrar un error si no se encuentra el heroe (spidey123)", () => {
		const inputValue = "superman";

		render(
			<MemoryRouter initialEntries={["/search"]}>
				<SearchPage />
			</MemoryRouter>
		);
		// screen.debug();

		const input = screen.getByRole("textbox");
		const form = screen.getByLabelText("searchForm");

		fireEvent.change(input, {
			target: { name: "searchText", value: inputValue },
		});
		fireEvent.submit(form);

		expect(input.value).toBe(inputValue);
		expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`);
	});

	test("debe de llamar el navigate a ala pantalla nueva", () => {});
});
