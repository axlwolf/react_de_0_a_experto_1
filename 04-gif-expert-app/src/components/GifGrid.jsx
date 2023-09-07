/* eslint-disable react/prop-types */
import { GifItem } from "./GifItem";

import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
	const { gifs, isLoading } = useFetchGifs(category);

	return (
		<>
			<h3>{category}</h3>
			{isLoading && <h2>Loading...</h2>}
			<div className="card-grid">
				{gifs?.map((image) => (
					// <li key={id}>
					// 	{/* <img src={gif.url} alt={gif.title} /> */}
					// 	{title}
					// </li>
					<GifItem key={image.id} {...image} />
				))}
			</div>
		</>
	);
};
