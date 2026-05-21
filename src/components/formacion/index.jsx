import React from 'react';
import style from "./Formacion.module.css";
import { Alura, Unicauca } from '../../assets/recursos';

function Formacion() {
  return (
    <section id="formacion" className={style.fondo}>
      <div className={style.contenido}>
        
        <h2 className={style.title}>
          <span className={style.titleNumber}>03.</span> Formación Académica
        </h2>
        
        <ul className={style.listaFormacion}>
          
          <li className={style.tarjeta}>
            <div className={style.logoContainer}>
              <img src={Unicauca} alt="Universidad del Cauca" className={style.logo} />
            </div>
            <span className={style.carrera}>Ingeniería de Sistemas</span>
            <span className={style.institucion}>Universidad del Cauca</span>
            <span className={style.estado}>Graduado</span>
            <span className={style.periodo}>2026</span>
          </li>
          
          <li className={style.tarjeta}>
            <div className={style.logoContainer}>
              <img src={Alura} alt="Alura Latam" className={style.logo} />
            </div>
            <span className={style.carrera}>Programa Oracle Next Education F2 T6 Front-End</span>
            <span className={style.institucion}>Alura Latam</span>
            <span className={style.estado}>Completado</span>
            <span className={style.periodo}>2024</span>
          </li>
          
        </ul>
        
      </div>
    </section>
  );
}

export default Formacion;