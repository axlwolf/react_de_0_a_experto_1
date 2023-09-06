/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import FirstApp from "../src/FirstApp";

describe("Pruebas en <FirstApp />", () => {
	const title = "Axel Lanuza";
	const subTitle = "Soy un subtitulo";

	test("debe de hacer match con el snapshot", () => {
		const { container } = render(<FirstApp title={title} />);

		expect(container).toMatchSnapshot();
	});

	test("debe de mostrar el mensaje 'Axel Lanuza'", () => {
		render(<FirstApp title={title} />);

		expect(screen.getByText(title)).toBeTruthy();
		//screen.debug();
	});

	test("debe de mostrar el titulo en un h1", () => {
		render(<FirstApp title={title} />);

		expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
			title
		);
	});

	test("debe de mostrar el subtitulo enviado por las props ", () => {
		render(<FirstApp title={title} subTitle={subTitle} />);

		expect(screen.getAllByText(subTitle).length).toBe(2);
	});
});
