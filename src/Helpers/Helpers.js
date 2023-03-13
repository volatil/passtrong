import $ from "jquery";

function numeroRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const data = {
	numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
	simbolos: ["!", "#", "$", "%", "&", "/", "(", ")", "=", "?", "¿", "¡", "*", "-", "_", ".", ",", ":", ";"],
	minusculas: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
	mayusculas: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
};

export function rango() {
	const elrango = $("#range").val();
	return Number(elrango);
}

export function verificarRestricciones() {
	const requisitos = [];
	$.each( $(".restricciones > div > label"), function () {
		const prop = $(this).find("input[type=checkbox]").attr("class");
		const isChecked = $(this).find("input[type=checkbox]").is(":checked");
		if ( isChecked ) {
			requisitos.push( prop );
		}
	});

	const seleccionadosPorElUsuario = requisitos;
	const cantidadCaracteres = rango();

	const unionSeleccionados = [];
	for ( let count = 0; count <= seleccionadosPorElUsuario.length - 1; count++ ) {
		unionSeleccionados.push( ...new Set( data[seleccionadosPorElUsuario[count]] ) );
	}

	const password = [];
	for ( let count = 0; count <= cantidadCaracteres - 1; count++ ) {
		const letra = unionSeleccionados[numeroRandom(1, unionSeleccionados.length - 1)];
		password.push( letra );
	}

	const clave = String(password.join()).replaceAll(",", "");
	return clave;
}

export function copiarPortapapeles() {
	const textoACopiar = $("section .passwordGenerada input.eloculto");
	textoACopiar.focus();
	textoACopiar.select();
	document.execCommand("copy");
	$(".tooltip.copiado").show();
	setTimeout(() => {
		$(".tooltip.copiado").fadeOut();
	}, 3000);
}

export function rangoUI() {
	const total = $("section#passtrong > aside .restricciones .rango > label input[type=range]").attr("max");
	const parte = $("section#passtrong > aside .restricciones .rango > label input[type=range]").val();

	const resul = (parte * 100) / total;
	const resul2 = parseInt( resul, 10);
	$("section#passtrong > aside .restricciones .rango > label input[type=range]").css("background-size", `${resul2}% 100%`);
}
