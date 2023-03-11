import $ from "jquery";

export function numeroRandom(min, max) {
	// console.debug( `-> ${Math.floor(Math.random() * (max - min + 1) + min)}` );
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export const data = {
	numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
	simbolos: ["!", "#", "$", "%", "&", "/", "(", ")", "=", "?", "¿", "¡", "*", "-", "_", ".", ",", ":", ";"],
	minusculas: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
	mayusculas: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
};

export function rango() {
	const elrango = $("#range").val();
	// console.debug( elrango );
	return Number(elrango);
}
