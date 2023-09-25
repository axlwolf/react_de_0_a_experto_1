import { useCounter } from "../../hooks/useCounter";
import { act, renderHook } from "@testing-library/react";

/* eslint-disable no-undef */
describe("Pruebas en el useCounter hook", () => {
	test("debe de regresar los valores por defecto", () => {
		const { result } = renderHook(() => useCounter());

		const { counter, decrement, increment, reset } = result.current;

		expect(counter).toBe(1);

		expect(increment).toEqual(expect.any(Function));
		expect(decrement).toEqual(expect.any(Function));
		expect(reset).toEqual(expect.any(Function));
	});

	test("debe de generar el counter con el valor de 100", () => {
		const { result } = renderHook(() => useCounter(100));
		const { counter } = result.current;

		expect(counter).toBe(100);
	});

	test("debe de incrementar el contador", () => {
		const { result } = renderHook(() => useCounter());

		const { increment } = result.current;

		act(() => increment());

		expect(result.current.counter).toBe(2);
	});

	test("debe de decrementar el contador", () => {
		const { result } = renderHook(() => useCounter());

		const { decrement } = result.current;

		act(() => decrement());

		expect(result.current.counter).toBe(0);
	});

	test("debe de resetear el contador", () => {
		const { result } = renderHook(() => useCounter());

		const { increment, reset } = result.current;

		act(() => {
			increment(10);
			increment(10);
			increment(10);
			increment(10);
			reset();
		});

		expect(result.current.counter).toBe(1);
	});
});
