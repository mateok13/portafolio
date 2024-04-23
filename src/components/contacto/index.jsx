import style from "./Contacto.module.css";
import { Carta } from "../../assets/recursos";

function Contacto() {

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const nombre = event.target.elements.nombre.value;
    const correo = event.target.elements.correo.value;
    const asunto = event.target.elements.asunto.value;
    const mensaje = event.target.elements.mensaje.value;

    console.log("Nombre:", nombre);
    console.log("Correo:", correo);
    console.log("Asunto:", asunto);
    console.log("Mensaje:", mensaje);    
  }

  return (
    <div className={style.fondo}>
      <div className={style.contenido}>
        <div className={style.imagen}>
          <img src={Carta} alt="Carta" />
        </div>
        <div className={style.formulario}>
          <h1>Contacto</h1>
          <p>¿Quieres contactarme?<br />Complete el siguiente formulario y me pondré en contacto
            contigo lo antes posible.</p>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nombre">Nombre</label>
              <input placeholder="Nombre" type="text" id="nombre" name="nombre" />
            </div>
            <div>
              <label htmlFor="correo">Correo</label>
              <input placeholder="Correo" type="email" id="correo" name="correo" />
            </div>
            <div>
              <label htmlFor="asunto">Asunto</label>
              <input placeholder="Asunto" type="text" id="asunto" name="asunto" />
            </div>
            <div>
              <label htmlFor="mensaje">Mensaje</label>
              <textarea placeholder="Mensaje" id="mensaje" name="mensaje"></textarea>
            </div>
            <button type='submit'>ENVIAR MENSAJE</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contacto;