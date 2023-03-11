function numeroRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
const data = {
	numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
	simbolos: ["!", "#", "$", "%", "&", "/", "(", ")", "=", "?", "¿", "¡", "*", "-", "_", ".", ",", ":", ";"],
	minusculas: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
	mayusculas: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
};

/* OPCIONES USUARIO */
const seleccionadosPorElUsuario = ["numeros", "minusculas", "mayusculas", "simbolos"];
const cantidadCaracteres = 12;
/* /OPCIONES USUARIO */

/* fusiona requisitos */
const unionSeleccionados = [];
for ( let count = 0; count <= seleccionadosPorElUsuario.length - 1; count++ ) {
	unionSeleccionados.push( ...new Set( data[seleccionadosPorElUsuario[count]] ) );
}
// unionSeleccionados;
/* /fusiona requisitos */

/* crear la constraseña */
const password = [];
for ( let count = 0; count <= cantidadCaracteres - 1; count++ ) {
	const letra = unionSeleccionados[numeroRandom(1, unionSeleccionados.length - 1)];
	password.push( letra );
}
/* /crear la constraseña */

console.debug( `CONTRASEÑA: ${String(password.join()).replaceAll(",", "")}` );
