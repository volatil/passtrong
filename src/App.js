import { useEffect, useState } from "react";
import $ from "jquery";

import Button from "./Components/Button/Button";
import "./Main.css";

// NUMEROS
// https://makemeapassword.ligos.net/api/v1/pin/json?c=10&l=6
// NUMEROS Y LETRAS
// https://makemeapassword.ligos.net/api/v1/alphanumeric/json?c=10&l=12
// "num" = numeros
// "char" = caracteres
// "caps" = mayusculas
// https://passwordinator.herokuapp.com/?num=true&char=true&caps=true&len=18

function App() {
	const [rangoMaximo, setRangoMaximo] = useState();

	const generarClave = ( restriccion ) => {
		const num = "&num=true";
		const char = "&char=true";
		const caps = "&caps=true";
		const api = `https://passwordinator.herokuapp.com/${num}${char}${caps}&len=18`;
		Promise.all([
			fetch( api ).then((value) => value.json())
		])
			.then((value) => {
				const clave = value[0].data;
				console.log( `Password => ${clave}` );
			});
	};

	const verificarRestricciones = () => {
		const rango = $(".range").val();
		const numeros = function () {
			const elnummeros = $("label[for=numeros] input").is(":checked");
			return elnummeros;
		};
		const mayusculas = function () {
			const elmayusculas = $("label[for=mayusculas] input").is(":checked");
			return elmayusculas;
		};
		const minusculas = function () {
			const elminusculas = $("label[for=minusculas] input").is(":checked");
			return elminusculas;
		};
		const simbolos = function () {
			const elsimbolos = $("label[for=simbolos] input").is(":checked");
			return elsimbolos;
		};
		const arrayMayusculas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
		const arrayMinusculas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
		const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
		const arraySimbolos = ["?", "¿", "!", "¡", "#", "$", "%", "&", "/", "(", ")", "=", "-", "_"];

		if ( ( numeros() && minusculas() === true ) ) {
			console.log("SI SON TRUUU!");
			const mix = [...arrayNumeros, ...arrayMinusculas];
			console.log(mix);
		} else {
			console.log("NO SON TRUUU!");
		}
		// const mix = [...arrayMayusculas, ...arrayMinusculas, ...arrayNumeros, ...arraySimbolos];

		// const url = `https://passwordinator.herokuapp.com/?num=${num()}&char=${char()}&caps=${caps()}&len=${rango}`;
		// console.log( `URL -> ${url}` );
	};

	const eselrangoMaximo = () => {
		const elrango = $("#range").val();
		setRangoMaximo(elrango);
	};

	useEffect(() => {
		eselrangoMaximo();
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<section>
					<input className="algo" type="text" placeholder="Aca aparecera la contraseña" />
					<div className="restricciones">
						<label htmlFor="range">
							Rango (
							<span>{rangoMaximo}</span>
							)
							<input id="range" className="range" type="range" max="20" onChange={eselrangoMaximo} />
						</label>
						<label htmlFor="numeros">
							Numeros
							<input id="numeros" className="numeros" type="checkbox" />
						</label>
						<label htmlFor="minusculas">
							minusculas
							<input id="minusculas" className="minusculas" type="checkbox" />
						</label>
						<label htmlFor="mayusculas">
							mayusculas
							<input id="mayusculas" className="mayusculas" type="checkbox" />
						</label>
						<label htmlFor="simbolos">
							simbolos
							<input id="simbolos" className="simbolos" type="checkbox" />
						</label>
					</div>
					<Button texto="Generar" onClick={verificarRestricciones} isotipo />
				</section>
			</header>
		</div>
	);
}

export default App;
