import { useEffect, useState } from "react";

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
	const [estado, setEstado] = useState("no se a generado");
	const [elvalue, setElvalue] = useState();

	const generarClaveIF = (parametro) => {
		setElvalue(parametro.target.value);
		const cantidad = elvalue.length;
		if ( elvalue ) {
			console.log(`SI existe -> ${cantidad}`);
		} else {
			console.log(`NO existe -> ${cantidad}`);
		}
		/*
		const api = "https://passwordinator.herokuapp.com/?num=true&char=true&caps=true&len=18";
		Promise.all([
			fetch( api ).then((value) => value.json())
		])
			.then((value) => {
				const clave = value[0].data;
				console.log( clave );
			});
		*/
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

	useEffect(() => {
		generarClave();
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<p>
					Edit
					<code>src/App.js</code>
					and save to reload.
				</p>

				<input type="text" onChange={generarClaveIF} placeholder="Aca aparecera la contraseña" />
				<h2>{elvalue}</h2>
				<Button texto="Generar" onClick={generarClave} isotipo />
			</header>
		</div>
	);
}

export default App;
