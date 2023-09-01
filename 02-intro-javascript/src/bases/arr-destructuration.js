const personajes = ["Goku", "Vegeta", "Trunks"];

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

const [, , p3] = personajes;

console.log(p3);

const returnaArreglo = () => {
	return ["ABC", 123];
};

const [letras, numeros] = returnaArreglo();

console.log(letras);
console.log(numeros);

const usarEstado = (valor) => {
	return [
		valor,
		() => {
			console.log("Hola mundo!");
		},
	];
};

const arr = usarEstado("Goku");

arr[1]();
//console.log(arr);

/*
    Tarea:
    1. El primer valor del arr se llamara nombre
    2. El segundo sera setNombre
*/
const usarState = (valor) => {
	return [
		valor,
		() => {
			console.log("Hola mundo!");
		},
	];
};

const [nombre, setNombre] = usarState("Goku");

console.log(nombre);
setNombre();
