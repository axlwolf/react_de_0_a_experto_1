/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import { GifItem } from "../../components/GifItem";

describe("Pruebas en <GifItem />", () => {
	const url = `https://media2.giphy.com/media/19JSJ5ucu91R5D7a3w/giphy.gif?cid=f1441f6f4s1k4db6p3d0oe0o5jks2ihdxv2gukm0hr3ma0j5&ep=v1_gifs_search&rid=giphy.gif&ct=g`;
	const title = "Dragon Ball Ultra Instinct GIF by Toei Animation";

	test("debe de hacer match con el snapshot", () => {
		const { container } = render(<GifItem title={title} url={url} />);

		expect(container).toMatchSnapshot();
	});
});
