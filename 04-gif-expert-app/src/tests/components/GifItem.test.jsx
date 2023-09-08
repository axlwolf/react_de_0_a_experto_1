/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { GifItem } from "../../components/GifItem";

describe("Pruebas en <GifItem />", () => {
	const url = `https://media2.giphy.com/media/19JSJ5ucu91R5D7a3w/giphy.gif?cid=f1441f6f4s1k4db6p3d0oe0o5jks2ihdxv2gukm0hr3ma0j5&ep=v1_gifs_search&rid=giphy.gif&ct=g`;
	const title = "Dragon Ball Ultra Instinct GIF by Toei Animation";

	test("debe de hacer match con el snapshot", () => {
		const { container } = render(<GifItem title={title} url={url} />);

		expect(container).toMatchSnapshot();
	});

	test("debe de mostrar la imagen con el URL y el ALT indicados", () => {
		render(<GifItem title={title} url={url} />);
		//screen.debug();

		const { src, alt } = screen.getByRole("img");

		// expect(screen.getByRole("img").src).toBe(url);
		expect(src).toBe(url);
		expect(alt).toBe(title);
	});

	test("debe de mostrar el titulo en el componente ", () => {
		render(<GifItem title={title} url={url} />);

		expect(screen.getByText(title)).toBeTruthy();
	});
});
