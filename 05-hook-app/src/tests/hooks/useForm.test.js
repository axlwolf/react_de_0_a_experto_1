/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useForm } from "../../hooks";
import { act, renderHook } from "@testing-library/react";
describe("Pruebas en el useForm hook", () => {
	const initialForm = {
		name: "Axel",
		email: "axlwolf@gmail.com",
	};

	test("debe de regresar objeto por defecto", () => {
		const { result } = renderHook(() => useForm(initialForm));

		expect(result.current).toEqual({
			name: initialForm.name,
			email: initialForm.email,
			formState: initialForm,
			onInputChange: expect.any(Function),
			onResetForm: expect.any(Function),
		});
	});

	test("debe de cambiar el nombre del formulario ", () => {
		const { result } = renderHook(() => useForm(initialForm));

		const newName = "Francisco";

		const { onInputChange } = result.current;

		act(() => {
			onInputChange({
				target: {
					name: "name",
					value: newName,
				},
			});
		});

		expect(result.current.name).toBe(newName);
		expect(result.current.formState.name).toEqual(newName);
	});

	test("debe de resetear el formulario ", () => {
		const { result } = renderHook(() => useForm(initialForm));

		const newName = "Francisco";

		const { onInputChange, onResetForm } = result.current;

		act(() => {
			onInputChange({
				target: {
					name: "name",
					value: newName,
				},
			});
			onResetForm();
		});

		expect(result.current.name).toBe(initialForm.name);
		expect(result.current.formState.name).toEqual(initialForm.name);
	});
});
