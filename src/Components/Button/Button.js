import "./Button.css";
import arrow from "./arrowright.svg";

function Button({ isotipo = false, texto = "Mensaje no seteado", onClick = false } = {}) {
	return (
		<button className="Buttonjs" type="button" onClick={onClick}>
			<p>{texto}</p>
			{ isotipo ? <img src={arrow} alt="generar" /> : null }
		</button>
	);
}
export default Button;
