import checkcopiado from "../../assets/svg/checkcopiado.svg";
import "./Alerta.css";

function Alerta({ clase, mensaje }) {
	return (
		<div id="alerta" className={`${clase}`}>
			<img src={checkcopiado} alt="Copiado" />
			<span className="mensaje">{ mensaje }</span>
		</div>
	);
}
export default Alerta;
