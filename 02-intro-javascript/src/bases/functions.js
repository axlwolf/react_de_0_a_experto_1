console.log("Hola mundo");
/*
    Tarea
    1. Transformar a una function fat arrow
    2. Tiene que retornar un objeto implicito
    3. Pruebas

*/

function getActiveUser(name) {
	return {
		uid: "ABC123",
		username: name,
	};
}

const obtenerUsuarioActivo = (nombre) => ({
	uid: "ABC123",
	username: nombre,
});

const activeUser = getActiveUser("Axel");
console.log(activeUser);

const usuarioActivo = obtenerUsuarioActivo("Lanuza");

console.log(usuarioActivo);
