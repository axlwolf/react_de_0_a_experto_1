import { GifExpertApp } from "../GifExpertApp";
import { fireEvent, render, screen } from "@testing-library/react";

/* eslint-disable no-undef */

describe("Pruebas en GifExpertApp", () => {
	const inputValue = "Goku";

	test("debe de mostra el titulo de la app ", () => {
		render(<GifExpertApp />);
		//screen.debug();
		expect(screen.getByText("GifExpertApp"));
	});

	test("debe de cambiar el valor del input", () => {
		render(<GifExpertApp />);
		const input = screen.getByRole("textbox");
		console.log(input.value);

		fireEvent.input(input, { target: { value: inputValue } });

		console.log(input.value);

		expect(input.value).toBe(inputValue);
	});

	test("no debe hace la busqueda si el input esta vacio", () => {
		render(<GifExpertApp />);

		const form = screen.getByRole("form");
		//const input = screen.getByRole("textbox");

		fireEvent.submit(form);
		// TODO: Ver como serian estos expects
		//expect(onNewCategory).toHaveBeenCalledTimes(0);
		//expect(onNewCategory).not.toHaveBeenCalled();
	});
});
