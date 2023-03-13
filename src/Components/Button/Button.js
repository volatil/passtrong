import "./Button.css";
import arrow from "../../assets/svg/arrowright.svg";

function Button({ isotipo = false, texto = "Mensaje no seteado", onClick } = {}) {
	return (
		<button className="Buttonjs" type="button" onClick={onClick}>
			<p>{texto}</p>
			{ isotipo ? <img src={arrow} alt="generar" /> : null }
		</button>
	);
}
export default Button;
