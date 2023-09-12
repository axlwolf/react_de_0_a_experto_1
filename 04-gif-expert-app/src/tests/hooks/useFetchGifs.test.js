import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook, waitFor } from "@testing-library/react";

/* eslint-disable no-undef */
describe("Pruebas en el hook useFetchGifs.js", () => {
	test("debe de regresar el estado inicial ", () => {
		const { result } = renderHook(() => useFetchGifs("One Punch"));

		const { gifs, isLoading } = result.current;

		expect(gifs.length).toBe(0);
		expect(isLoading).toBeTruthy();
	});

	test("debe de regresar un arreglo de imagenes y isLoading en false ", async () => {
		const { result } = renderHook(() => useFetchGifs("One Punch"));

		await waitFor(() => expect(result.current.gifs.length).toBeGreaterThan(0));

		const { gifs, isLoading } = result.current;

		expect(gifs.length).toBeGreaterThan(0);
		expect(isLoading).toBeFalsy();
	});
});
