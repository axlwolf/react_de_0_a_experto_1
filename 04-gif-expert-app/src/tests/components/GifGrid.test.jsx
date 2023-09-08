/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";

import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe("pruebas en <GifGrid />", () => {
	const category = "One Puch";

	test("debe de mostrar el loading inicialmente", () => {
		useFetchGifs.mockReturnValue({
			gifs: [],
			isLoading: true,
		});

		render(<GifGrid category={category} key={category} />);

		// screen.debug();

		expect(screen.getByText("Loading..."));
		expect(screen.getByText(category));
	});

	test("debe de mostrar imagenes cuando se cargan con el custom hook useFetchGifs", () => {
		const gifs = [
			{
				id: "Abc",
				title: "Goku",
				url: "http://localhost/goku.jpg",
			},
			{
				id: "Abc123",
				title: "Saitama",
				url: "http://localhost/saitama.jpg",
			},
		];

		useFetchGifs.mockReturnValue({
			gifs: gifs,
			isLoading: false,
		});

		render(<GifGrid category={category} key={category} />);

		expect(screen.getAllByRole("img").length).toBe(2);
	});
});
