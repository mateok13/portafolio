// eslint-disable-next-line no-unused-vars
import React from 'react';
import style from "./Contacto.module.css";
import { Carta } from "../../assets/recursos";

function Contacto() {

  const handleSubmit = () => {

  }

  return (
    <div className={style.fondo}>
      <div className={style.contenido}>
        <div className={style.imagen}>
          <img src={Carta} />
        </div>
        <div className={style.formulario}>
          <h1>Contacto</h1>
          <p>¿Quieres contactarme?<br />Complete el siguiente formulario y me pondre en contacto
            con usted lo antes posible.</p>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Nombre</label>
              <input placeholder="Nombre" type="text" />
            </div>
            <div>
              <label>Correo</label>
              <input placeholder="Correo" type="email" name="correo" id="correo" />
            </div>
            <div>
              <label>Asunto</label>
              <input placeholder="Asunto" type="text" name="asunto" id="asunto" />
            </div>
            <div>
              <label>Mensaje</label>
              <textarea placeholder="Mensaje" name="mensaje" id="mensaje"></textarea>
            </div>
            <button type='submit'>ENVIAR MENSAJE</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contacto;