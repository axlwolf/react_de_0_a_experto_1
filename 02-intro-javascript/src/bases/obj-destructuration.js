// Desestructuracion
const persona = {
	nombre: "Tony",
	edad: 10,
	clave: "Ironman",
	//rango: "Soldado",
};

// const { nombre, edad, clave } = persona;

// console.log(nombre, edad, clave);

const usarContexto = ({ nombre, clave, edad, rango = "Capitan" }) => {
	//console.log(usuarioActivo);
	// const { nombre, edad, clave } = persona;
	// console.log(nombre, edad, clave);
	// console.log(nombre, edad, rango);
	return {
		nombreClave: clave,
		anios: edad,
		latlng: {
			lat: 14.1231,
			lng: -12.3232,
		},
	};
};

// console.log(retornarPersona(persona));

const {
	nombreClave,
	anios,
	//latlng: { lat, lng },
	latlng,
} = usarContexto(persona);

const { lat, lng } = latlng;

// const { nombreClave, anios } = avenger;

console.log(nombreClave);
console.log(anios);
console.log(lat);
console.log(lng);
