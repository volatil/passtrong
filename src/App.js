import { useState } from "react";

import {
	rango,
	verificarRestricciones,
	copiarPortapapeles,
} from "./Helpers/Helpers";

import Button from "./Components/Button/Button";
import copiar from "./assets/svg/copiar.svg";
import "./Main.css";

function App() {
	const [rangoMinimo, setRangoMinimo] = useState(0);
	const [rangoMaximo, setRangoMaximo] = useState(20);
	const [clavegenerada, setclavegenerada] = useState();

	return (
		<div className="App">
			<header className="App-header">
				<section>
					<div className="passwordGenerada">
						<input className="password" type="text" placeholder="Password" defaultValue={clavegenerada} disabled />
						<input className="eloculto" type="text" placeholder="Password" defaultValue={clavegenerada} />
						<button type="button" onClick={copiarPortapapeles}>
							<img src={copiar} alt="copiar en el portapapeles" />
						</button>
					</div>
					<div className="restricciones">
						<label htmlFor="range">
							Rango
							{ rangoMaximo ? <span>({rangoMaximo})</span> : <span>({rangoMinimo})</span> }
							<input id="range" className="range" type="range" max="20" onChange={() => { setRangoMaximo(rango); }} />
						</label>
						<div>
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
					</div>
					<Button texto="Generar" onClick={() => { setclavegenerada(verificarRestricciones); }} isotipo />
				</section>
			</header>
		</div>
	);
}

export default App;
