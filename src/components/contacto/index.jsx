// eslint-disable-next-line no-unused-vars
import React from 'react';
import style from "./Contacto.module.css";

function Contacto() {

  const handleSubmit = () => {

  }

  return (
    <div className={style.contenido}>
      <h1>Contactame</h1>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input type="text" />

        <label>Correo</label>
        <input type="email" name="correo" id="correo" />

        <label>Mensaje</label>
        <input type="text" />

        <button type='submit'>ENVIAR</button>
      </form>
    </div>
  )
}

export default Contacto;