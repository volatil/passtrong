import { useState } from "react";
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
	const [elvalue, setElvalue] = useState();

	const generarClaveIF = (parametro) => {
		setElvalue(parametro.target.value);
		const cantidad = String(elvalue).length;
		if ( elvalue ) {
			console.log(`SI existe -> ${cantidad}`);
		} else {
			console.log(`NO existe -> ${cantidad}`);
		}
	};

	const generarClave = () => {
		const api = "https://passwordinator.herokuapp.com/?num=true&char=true&caps=true&len=18";
		Promise.all([
			fetch( api ).then((value) => value.json())
		])
			.then((value) => {
				const clave = value[0].data;
				console.log( `Password => ${clave}` );
			});
	};

	const test = () => {
		// const pizza = document.querySelectorAll(".algo").value;
		const pizza = $(".algo").is(":checked");
		console.log(pizza);
	};

	return (
		<div className="App">
			<header className="App-header">
				<input type="text" onChange={generarClaveIF} placeholder="Aca aparecera la contraseña" />
				<h2>{elvalue}</h2>
				<label htmlFor="num">
					Numeros
					<input id="num" className="num" type="checkbox" />
				</label>
				<input className="char" type="checkbox" />
				<input className="caps" type="checkbox" />
				<Button texto="Generar" onClick={test} isotipo />
			</header>
		</div>
	);
}

export default App;
