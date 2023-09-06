/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { render, screen, fireEvent } from "@testing-library/react";
import CounterApp from "../src/CounterApp";

/*
Task:
    * Test 1: debe de hacer match con el snapshot
    * Test 2: debe de mostrar el valor inicial de 100 <CounterApp value={100}/>
*/
describe("Pruebas en <CounterApp />", () => {
	const value = 0;
	test("debe de hacer match con el snapshot", () => {
		const { container } = render(<CounterApp value={value} />);

		expect(container).toMatchSnapshot();
	});
	test("debe de mostrar el valor inicial de 100 <CounterApp value={100}/>", () => {
		render(<CounterApp value={100} />);

		expect(screen.getByText(100)).toBeTruthy();
		expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
			"100"
		);
		// expect(typeof screen.getByRole("heading", { level: 2 }).innerHTML).toBe(
		// 	"string"
		// );
	});

	test("debe de incrementar con el boton +1", () => {
		render(<CounterApp value={value} />);
		fireEvent.click(screen.getByText("+1"));
		screen.debug();

		expect(screen.getByText("1")).toBeTruthy();
	});

	test("debe de decrementar con el boton -1", () => {
		render(<CounterApp value={value} />);
		fireEvent.click(screen.getByText("-1"));
		screen.debug();

		expect(screen.getByText("0")).toBeTruthy();
	});

	test("debe de funcionar el boton de reset", () => {
		render(<CounterApp value={10} />);
		fireEvent.click(screen.getByText("+1"));
		fireEvent.click(screen.getByText("+1"));
		fireEvent.click(screen.getByText("+1"));

		fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
		// fireEvent.click(screen.getByText("Reset"));
		// screen.debug();

		expect(screen.getByText(10)).toBeTruthy();
	});
});
