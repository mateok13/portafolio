import style from "./Contacto.module.css";
import { Carta } from "../../assets/recursos";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Popup from "../popup";

function Contacto() {

  const [errores, setErrores] = useState({});
  const [enviarDatos, setEnviarDatos] = useState(false);

  const validarCampos = (form) => {
    let errores = {};
    let regexSoloTexto = /^[A-Za-záéíóúÁÉÍÓÚüÜñÑ\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexMensaje = /^.{1,255}$/;

    if (!form.nombre.trim()) {
      errores.nombre = 'El campo nombre no debe estar vacio, Ingresa tu nombre';
    } else if (!regexSoloTexto.test(form.nombre)) {
      errores.nombre = 'El nombre solo puede contener letras y espacios';
    }

    if (!form.correo.trim()) {
      errores.correo = 'El campo correo no debe estar vacio, Ingresa tu correo';
    } else if (!regexEmail.test(form.correo)) {
      errores.correo = 'El correo tiene un formato no valido';
    }

    if (!form.asunto.trim()) {
      errores.asunto = 'El campo asunto no debe estar vacio, Ingresa el asunto del correo';
    } else if (!regexSoloTexto.test(form.asunto)) {
      errores.asunto = 'El asunto solo puede contener letras y espacios';
    }

    if (!form.mensaje.trim()) {
      errores.mensaje = 'El campo mensaje no debe estar vacio, Ingresa el mensaje del correo';
    } else if (!regexMensaje.test(form.mensaje)) {
      errores.mensaje = 'El mensaje no puede contener mas de 255 caracteres';
    }

    return errores;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });


    const error = validarCampos(formDataObject);
    setErrores(error);

    if (Object.keys(error).length === 0) {
      setEnviarDatos(true);
      fetch("https://formsubmit.co/ajax/mateoroserok13@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formDataObject)
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          data.success === "true" && event.target.reset();
          setEnviarDatos(false)
          setSuccessMessage("Mensaje enviado con éxito");
          setShowPopup(true);
        })
        .catch(error => {
          console.log(error);
          setEnviarDatos(false);
        });
    }
  }

  const [showPopup, setShowPopup] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleClosePopup = () => {
    setShowPopup(false);
  };



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
              {errores.nombre && <div className="alert alert-danger" role="alert">{errores.nombre}</div>}
            </div>
            <div>
              <label htmlFor="correo">Correo</label>
              <input placeholder="Correo" type="text" id="correo" name="correo" />
              {errores.correo && <div className="alert alert-danger" role="alert">{errores.correo}</div>}
            </div>
            <div>
              <label htmlFor="asunto">Asunto</label>
              <input placeholder="Asunto" type="text" id="asunto" name="asunto" />
              {errores.asunto && <div className="alert alert-danger" role="alert">{errores.asunto}</div>}
            </div>
            <div>
              <label htmlFor="mensaje">Mensaje</label>
              <textarea placeholder="Mensaje" id="mensaje" name="mensaje"></textarea>
              {errores.mensaje && <div className="alert alert-danger" role="alert">{errores.mensaje}</div>}
            </div>
            <button type='submit' disabled={enviarDatos}>{enviarDatos ? "ENVIANDO MENSAJE" : "ENVIAR MENSAJE"}</button>
          </form>
        </div>
      </div>
      {showPopup && (<Popup message={successMessage} onClose={handleClosePopup}/>)}
    </div>
  )
}

export default Contacto;