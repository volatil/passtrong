import { useState } from "react";

import {
	rango,
	verificarRestricciones,
	copiarPortapapeles,
} from "./Helpers/Helpers";

import Button from "./Components/Button/Button";
import copiar from "./assets/svg/copiar.svg";
import "./Main.css";

function Tooltip({ clase, mensaje }) {
	return (
		<div className={`tooltip ${clase}`}>
			<span className="triangulo" />
			<span className="mensaje">{ mensaje }</span>
		</div>
	);
}

function App() {
	const [rangoMaximo, setRangoMaximo] = useState(16);
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
							<Tooltip clase="copiar" mensaje="Click para copiar" />
							<Tooltip clase="copiado" mensaje="Copiado !" />
						</button>
					</div>
					<div className="restricciones">
						<label htmlFor="range">
							Rango
							{ rangoMaximo ? <span>({rangoMaximo})</span> : <span>(0)</span> }
							<input id="range" className="range" type="range" max="20" defaultValue="16" onChange={() => { setRangoMaximo(rango); }} />
						</label>
						<div className="requisitos">
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
