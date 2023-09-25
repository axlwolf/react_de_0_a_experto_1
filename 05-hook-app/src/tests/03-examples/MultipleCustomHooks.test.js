/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import MultipleCustomHooks from "../../03-examples/MultipleCustomHooks";
import { fireEvent, render, screen } from "@testing-library/react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

jest.mock("../../hooks/useFetch");
jest.mock("../../hooks/useCounter");

describe("Pruebas en <MultipleCustomHooks />", () => {
	const mockIncrement = jest.fn();

	useCounter.mockReturnValue({
		counter: 1,
		increment: mockIncrement,
	});

	beforeEach(() => {
		jest.clearAllMocks();
	});

	test("debe de mostrar el componente por defecto", () => {
		useFetch.mockReturnValue({ data: null, isLoading: true, hasError: null });
		render(<MultipleCustomHooks />);
		screen.debug();

		expect(screen.getByText("Loading..."));
		expect(screen.getByText("Breaking Bad Quotes"));

		const nextButton = screen.getByRole("button", { name: "Next quote" });

		expect(nextButton.disabled).toBeTruthy();
	});

	test("debe de mostrar un quote", () => {
		useFetch.mockReturnValue({
			data: {
				sentence: "Debe de mostrar un quote",
				character: {
					name: "Jon Snow",
					slug: "jon",
				},
			},
			isLoading: false,
			hasError: null,
		});

		render(<MultipleCustomHooks />);
		//screen.debug();

		expect(screen.getByText("Jon Snow")).toBeTruthy();
		const nextButton = screen.getByRole("button", { name: "Next quote" });

		expect(nextButton.disabled).toBeFalsy();
	});

	test("debe de llamar la funcion incrementar ", () => {
		useFetch.mockReturnValue({
			data: {
				sentence: "Debe de mostrar un quote",
				character: {
					name: "Jon Snow",
					slug: "jon",
				},
			},
			isLoading: false,
			hasError: null,
		});

		render(<MultipleCustomHooks />);

		const nextButton = screen.getByRole("button", {
			name: "Next quote",
		});

		fireEvent.click(nextButton);

		expect(mockIncrement).toHaveBeenCalled();
	});
});
