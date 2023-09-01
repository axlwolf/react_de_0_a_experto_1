import { getHeroById, getHeroesByOwner } from "./bases/imp-exp";

// const promesa = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log("2 segundos despues");

// 		const hero = getHeroById(2);
// 		console.log(hero);
// 		resolve(hero);
// 		//reject("The hero cannot be found");
// 	}, 2000);
// });

// promesa
// 	.then(({ name, id }) => {
// 		// console.log("then de la promesa");
// 		console.log("hero: " + name);
// 	})
// 	.catch((err) => console.log(err));

const getHeroByIdAsync = async (id) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			//console.log("2 segundos despues");

			const hero = getHeroById(id);

			if (hero) {
				resolve(hero);
			} else {
				reject("The hero cannot be found");
			}
		}, 2000);
	});
};

getHeroByIdAsync(1).then(console.log).catch(console.warn);
