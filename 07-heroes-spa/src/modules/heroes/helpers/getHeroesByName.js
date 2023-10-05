import { heroes } from "../data/heroes";

// eslint-disable-next-line no-unused-vars
export const getHeroesByName = (name = "") => {
	name = name.toLocaleLowerCase().trim();

	if (name.length === 0) return [];

	return heroes.filter((hero) =>
		hero.superhero.toLocaleLowerCase().includes(name)
	);
};
