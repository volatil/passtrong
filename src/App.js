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

	const eselrangoMaximo = () => {
		const elrango = $("#range").val();
		setRangoMaximo(elrango);
	};

	const verificarRestricciones = () => {
		const todo = [];
		let rango = "";
		$.each($(".restricciones > label"), function () {
			const losarray = {
				numeros: [
					1,
					2,
					3,
					4,
					5,
					6,
					7,
					8,
					9,
					0,
				],
				minusculas: [
					"a",
					"b",
					"c",
					"d",
					"e",
					"f",
					"g",
					"h",
					"i",
					"j",
					"k",
					"l",
					"m",
					"n",
					"ñ",
					"o",
					"p",
					"q",
					"r",
					"s",
					"t",
					"u",
					"v",
					"w",
					"x",
					"y",
					"z",
				],
				mayusculas: [
					"A",
					"B",
					"C",
					"D",
					"E",
					"F",
					"G",
					"H",
					"I",
					"J",
					"K",
					"L",
					"M",
					"N",
					"Ñ",
					"O",
					"P",
					"Q",
					"R",
					"S",
					"T",
					"U",
					"V",
					"W",
					"X",
					"Y",
					"Z",
				],
				simbolos: [
					"?",
					"¿",
					"!",
					"¡",
					"#",
					"$",
					"%",
					"&",
					"/",
					"(",
					")",
					"=",
					"-",
					"_",
				],
			};
			const elinput = {
				nombre: $(this).attr("for"),
				type: $(this).find("input").attr("type"),
				value: $(this).find("input").is(":checked"),
			};
			if ( elinput.type === "checkbox" ) {
				if ( elinput.value ) {
					todo.push(...losarray[elinput.nombre]);
				}
			} else {
				rango = $(this).find("input").val();
			}
		});
		// console.log(rango);
		console.log(todo);
	};

	useEffect(() => {
		eselrangoMaximo();
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<section>
					<input className="algo" type="text" placeholder="Password" />
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
							Minusculas
							<input id="minusculas" className="minusculas" type="checkbox" />
						</label>
						<label htmlFor="mayusculas">
							Mayusculas
							<input id="mayusculas" className="mayusculas" type="checkbox" />
						</label>
						<label htmlFor="simbolos">
							Simbolos
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
