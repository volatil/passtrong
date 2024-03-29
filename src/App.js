import { useEffect, useState } from "react";

import {
	rango,
	verificarRestricciones,
	validandoloscheckbox,
	copiarPortapapeles,
	rangoUI,
	complejidad,
} from "./Helpers/Helpers";

import Alerta from "./Components/Alerta/Alerta";
import Button from "./Components/Button/Button";
import ErrorAlGenerar from "./Components/ErrorAlGenerar/ErrorAlGenerar";

import logo from "./assets/svg/logo.svg";
import copiar from "./assets/svg/copiar.svg";
import "./Main.css";

function App() {
	const [rangoMaximo, setRangoMaximo] = useState(16);
	const [clavegenerada, setclavegenerada] = useState();
	const [valido, setvalido] = useState();

	useEffect(() => {
		rangoUI();
	}, []);

	return (
		<section id="passtrong">
			<header>
				<img src={logo} alt="PASStrong" />
			</header>
			<aside>
				<div className="bloque passwordGenerada">
					<input className="password" type="text" placeholder="..." defaultValue={clavegenerada} disabled />
					<input className="eloculto" type="text" placeholder="..." defaultValue={clavegenerada} />
					<button type="button" onClick={copiarPortapapeles}>
						<Alerta clase="copiado" mensaje="Copiado !" />
						<img src={copiar} alt="copiar en el portapapeles" />
					</button>
				</div>
				<div className="bloque restricciones">
					<div className="rango">
						<p>
							<span>Longitud de Caracteres</span>
							{ rangoMaximo ? <span className="elrangito">{rangoMaximo}</span> : <span className="elrangito">0</span> }
						</p>
						<label htmlFor="range">
							<input id="range" className="range" type="range" max="20" defaultValue="16" onChange={() => { setRangoMaximo(rango); rangoUI(); }} />
						</label>
					</div>
					<div className="requisitos">
						<label htmlFor="numeros">
							<input id="numeros" className="numeros" type="checkbox" onChange={() => { complejidad(); }} />
							<span className="checkmark" />
							Numeros
						</label>
						<label htmlFor="minusculas">
							<input id="minusculas" className="minusculas" type="checkbox" onChange={() => { complejidad(); }} />
							<span className="checkmark" />
							Minusculas
						</label>
						<label htmlFor="mayusculas">
							<input id="mayusculas" className="mayusculas" type="checkbox" onChange={() => { complejidad(); }} />
							<span className="checkmark" />
							Mayusculas
						</label>
						<label htmlFor="simbolos">
							<input id="simbolos" className="simbolos" type="checkbox" onChange={() => { complejidad(); }} />
							<span className="checkmark" />
							Simbolos
						</label>
					</div>
				</div>
				<div className="bloque complejidad">
					<div>
						<p>complejidad</p>
					</div>
					<div data-complejidad="nivel0" className="simbologia">
						<span />
						<span />
						<span />
						<span />
					</div>
				</div>
				<div className="bloque generar">
					<Button texto="Generar Contraseña" onClick={() => { setclavegenerada(verificarRestricciones); setvalido(validandoloscheckbox); }} isotipo />
				</div>
				{ valido && <ErrorAlGenerar /> }
			</aside>
		</section>
	);
}

export default App;
