/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
	const inputValue = "Goku";
	test("debe de cambiar el valor del input", () => {
		render(<AddCategory onNewCategory={() => {}} />);
		const input = screen.getByRole("textbox");

		fireEvent.input(input, { target: { value: inputValue } });

		expect(input.value).toBe(inputValue);
	});

	test("debe de llamar onNewCategory si el input tiene un valor", () => {
		// TODO: Function mocks with jest to test onNewCategory
		const onNewCategory = jest.fn();

		render(<AddCategory onNewCategory={onNewCategory} />);

		const input = screen.getByRole("textbox");
		const form = screen.getByRole("form");

		fireEvent.input(input, { target: { value: inputValue } });
		fireEvent.submit(form);

		expect(input.value).toBe("");

		expect(onNewCategory).toHaveBeenCalled();
		expect(onNewCategory).toHaveBeenCalledTimes(1);
		expect(onNewCategory).toHaveBeenCalledWith(inputValue);
	});

	test("no debe de llamar el onNewCategory si el input esta vacio", () => {
		const onNewCategory = jest.fn();

		render(<AddCategory onNewCategory={onNewCategory} />);

		const form = screen.getByRole("form");

		fireEvent.submit(form);

		expect(onNewCategory).toHaveBeenCalledTimes(0);
		expect(onNewCategory).not.toHaveBeenCalled();
	});
});
