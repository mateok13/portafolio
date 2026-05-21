import React from 'react';
import style from "./Footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.contenedorTexto}>
        <p className={style.texto}>
          Diseñado & Desarrollado por Jhonny Mateo Rosero Cortes © 2026
        </p>
        <p className={style.subtexto}>
          Construido con React JS & CSS Modules y Desplegado en GitHub Pages.
        </p>
      </div>
    </footer>
  );
}

export default Footer;