// import { heroes } from "./data/heroes";
// import { heroes } from "./data/heroes";

import heroes, { owners } from "../data/heroes";

// console.log(heroes);

const getHeroById = (id) => {
	return heroes.find((hero) => hero.id === id);
};

// console.log(getHeroById(2));

const getHeroesByOwner = (owner) => {
	return heroes.filter((hero) => hero.owner === owner);
};

// console.log(getHeroesByOwner("Marvel"));

// console.log(owners);

export { getHeroById, getHeroesByOwner };
