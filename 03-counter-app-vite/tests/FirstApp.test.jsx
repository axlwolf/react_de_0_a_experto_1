/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import FirstApp from "../src/FirstApp";

describe("Pruebas en <FirstApp />", () => {
	// test("debe de hacer match con el snapshot ", () => {
	// 	const title = "Axel Lanuza";
	// 	const { container } = render(<FirstApp title={title} />);

	// 	expect(container).toMatchSnapshot();
	// });

	test("debe de mostrar el titulo en un h1", () => {
		const title = "Axel Lanuza";
		const { container, getByText, getByTestId } = render(
			<FirstApp title={title} />
		);

		expect(getByText(title)).toBeTruthy();
		// expect(getByText("")).toBeTruthy();

		// const h1 = container.querySelector("h1");
		//console.log(h1.innerHTML);

		// expect(h1.innerHTML).toBe(title);
		// expect(h1.innerHTML).toContain(title);

		expect(getByTestId("test-title")).toBeTruthy();
		// expect(getByTestId("test-title").innerHTML).toBe(title);
		expect(getByTestId("test-title").innerHTML).toContain(title);
	});

	test("debe de mostrar el suntitulo enviado por props", () => {
		const title = "Axel Lanuza";
		const subTitle = "Soy un subtitulo";
		const { getAllByText } = render(
			<FirstApp title={title} subTitle={subTitle} />
		);

		// expect(getByText(subTitle)).toBeTruthy();
		expect(getAllByText(subTitle).length).toBe(2);
	});
});
