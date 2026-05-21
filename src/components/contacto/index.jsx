import React, { useState } from "react";
import style from "./Contacto.module.css";
import { Mail, Phone } from '@mui/icons-material';
import Popup from "../popup";
import emailjs from '@emailjs/browser';

function Contacto() {
  const [errores, setErrores] = useState({});
  const [enviarDatos, setEnviarDatos] = useState(false);
  const [popupConfig, setPopupConfig] = useState({
    show: false,
    message: "",
    tipo: "exito"
  });
  const [successMessage, setSuccessMessage] = useState("");

  const validarCampos = (form) => {
    let errores = {};
    let regexSoloTexto = /^[A-Za-záéíóúÁÉÍÓÚüÜñÑ\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexMensaje = /^.{1,255}$/;

    if (!form.nombre.trim()) {
      errores.nombre = 'El campo nombre no debe estar vacío. Ingresa tu nombre';
    } else if (!regexSoloTexto.test(form.nombre)) {
      errores.nombre = 'El nombre solo puede contener letras y espacios';
    }

    if (!form.correo.trim()) {
      errores.correo = 'El campo correo no debe estar vacío. Ingresa tu correo';
    } else if (!regexEmail.test(form.correo)) {
      errores.correo = 'El correo tiene un formato no válido';
    }

    if (!form.asunto.trim()) {
      errores.asunto = 'El campo asunto no debe estar vacío. Ingresa el asunto del correo';
    } else if (!regexSoloTexto.test(form.asunto)) {
      errores.asunto = 'El asunto solo puede contener letras y espacios';
    }

    if (!form.mensaje.trim()) {
      errores.mensaje = 'El campo mensaje no debe estar vacío. Ingresa el mensaje del correo';
    } else if (!regexMensaje.test(form.mensaje)) {
      errores.mensaje = 'El mensaje no puede contener más de 255 caracteres';
    }

    return errores;
  };

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

      const SERVICE_ID = "service_arujg5n";
      const TEMPLATE_ID = "template_pixslya";
      const PUBLIC_KEY = "qZxOoIviIOpSEsLQy";

      emailjs.send(SERVICE_ID, TEMPLATE_ID, formDataObject, PUBLIC_KEY)
        .then((response) => {
          console.log('¡ÉXITO!', response.status, response.text);
          event.target.reset();
          setPopupConfig({
            show: true,
            message: "¡Tu mensaje ha sido enviado con éxito! Me pondré en contacto contigo lo antes posible.",
            tipo: "exito"
          });
          setEnviarDatos(false);
        })
        .catch((err) => {
          console.error('ERROR AL ENVIAR CON EMAILJS:', err);
          setEnviarDatos(false);
          setPopupConfig({
            show: true,
            message: "No se pudo enviar el mensaje por un problema técnico. Por favor, inténtalo de nuevo.",
            tipo: "error"
          });
        });
    }
  };

  const handleClosePopup = () => {
    setPopupConfig({ ...popupConfig, show: false });
  };

  return (
    <section id="contacto" className={style.fondo}>
      <div className={style.contenido}>

        <div className={style.infoCol}>
          <h2 className={style.title}>
            <span className={style.titleNumber}>05.</span> ¡Hablemos!
          </h2>
          <p className={style.descripcion}>
            ¿Tienes alguna propuesta, proyecto en mente o simplemente quieres saludar? Mi bandeja de entrada siempre está abierta y haré lo posible por responderte pronto.
          </p>
          <div className={style.datosContacto}>
            <p className={style.datoRow}>
              <Mail className={style.icon} /> mateoroserok13@gmail.com
            </p>
            <p className={style.datoRow}>
              <Phone className={style.icon} /> +57 322 5683977
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={style.formulario} noValidate>
          <div>
            <label htmlFor="nombre" className={style.label}>Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className={`${style.input} ${errores.nombre ? style.inputError : ""}`}
              placeholder="Tu nombre"
            />
            {errores.nombre && <span className={style.errorMessage}>{errores.nombre}</span>}
          </div>

          <div>
            <label htmlFor="correo" className={style.label}>Correo Electrónico</label>
            <input
              type="email"
              id="correo"
              name="correo"
              className={`${style.input} ${errores.correo ? style.inputError : ""}`}
              placeholder="tu@correo.com"
            />
            {errores.correo && <span className={style.errorMessage}>{errores.correo}</span>}
          </div>

          <div>
            <label htmlFor="asunto" className={style.label}>Asunto</label>
            <input
              type="text"
              id="asunto"
              name="asunto"
              className={`${style.input} ${errores.asunto ? style.inputError : ""}`}
              placeholder="Motivo del mensaje"
            />
            {errores.asunto && <span className={style.errorMessage}>{errores.asunto}</span>}
          </div>

          <div>
            <label htmlFor="mensaje" className={style.label}>Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              className={`${style.textarea} ${errores.mensaje ? style.inputError : ""}`}
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
            {errores.mensaje && <span className={style.errorMessage}>{errores.mensaje}</span>}
          </div>

          <button type="submit" className={style.button} disabled={enviarDatos}>
            {enviarDatos ? "ENVIANDO..." : "Enviar Mensaje"}
          </button>
        </form>

      </div>

      {popupConfig.show && (
        <Popup
          message={popupConfig.message}
          tipo={popupConfig.tipo}
          onClose={handleClosePopup}
        />
      )}
    </section>
  );
}

export default Contacto;