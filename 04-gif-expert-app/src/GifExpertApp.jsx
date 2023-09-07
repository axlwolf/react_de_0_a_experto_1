import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(["Dragon Ball"]);

	const handleAddCategory = (value) => {
		// setCategories(() => [...categories, "Dragon Slayer"]);
		// setCategories([...categories, "Dragon Slayer"]);
		if (categories.includes(value)) return;

		setCategories((cat) => [value, ...cat]);
	};

	console.log(categories);

	return (
		<>
			<h1>GifExpertApp</h1>
			<AddCategory //setCategories={setCategories}
				onNewCategory={(value) => handleAddCategory(value)}
			/>
			{categories.map((category) => (
				// <li key={category}>{category}</li>
				<GifGrid category={category} key={category}></GifGrid>
			))}
		</>
	);
};
