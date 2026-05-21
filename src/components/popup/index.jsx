import style from "./Popup.module.css";

const Popup = ({ message, tipo = "exito", onClose }) => {
  const esExito = tipo === "exito";

  return (
    <div className={style.popupContainer}>
      <div className={`${style.popup} ${esExito ? style.bordeExito : style.bordeError}`}>
        <div className={`${style.iconCircle} ${esExito ? style.iconExito : style.iconError}`}>
          {esExito ? "✓" : "✕"}
        </div>

        <h2 className={style.popupTitle}>
          {esExito ? "¡Envío Exitoso!" : "Hubo un Error"}
        </h2>

        <p className={style.popupMessage}>{message}</p>

        <button className={style.closeButton} onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Popup;