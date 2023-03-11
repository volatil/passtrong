import { useEffect, useState } from "react";
import $ from "jquery";

import numeroRandom from "./Helpers/Helpers";

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

	useEffect(() => {
		numeroRandom(1, 23);
	});

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
							{/* <input id="range" className="range" type="range" max="20" onChange={eselrangoMaximo} /> */}
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
					{/* <Button texto="Generar" onClick={verificarRestricciones} isotipo /> */}
				</section>
			</header>
		</div>
	);
}

export default App;
