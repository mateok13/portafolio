// eslint-disable-next-line no-unused-vars
import React from 'react';
import style from './Info.module.css';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Curriculum,Foto } from '../../assets/recursos';

function Info() {
  return (
    <div className={style.contenido}>
      <div className={style.presentacion}>
        <div className={style.presentacion_texto}>
          <h1>Hola, mi nombre es Jhonny Mateo Rosero Cortes y soy Desarrollador Full Stack</h1>
          <p>Soy estudiante de ingenieria de sistemas en la Universidad del Cauca en Popayan Cauca, Colombia 
            y actualmente soy voluntario en la empresa <a href="https://youngtravelers.co/" target="_blank">Young Travelers</a>
            , ademas estoy participando del proyecto Oracle ONE en Alura Latam</p>
          <div className={style.links}>
            <a href="https://github.com/mateok13" target="_blank" >GitHub<OpenInNewIcon/></a>
            <a href="https://www.linkedin.com/in/mateok13/" target="_blank">LinkedIn<OpenInNewIcon/></a>
            <a href={Curriculum} target="_blank">Curriculum<OpenInNewIcon/></a>
          </div>
        </div>
        <div className={style.presentacion_imagen}>
          <img src={Foto}/>
        </div>
      </div>
      <div className={style.sobreMi}>
        <h1>Sobre mi</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, iure magnam porro at perferendis doloremque ipsam architecto minus saepe dolor fuga itaque, tempora autem eum. Excepturi vero sunt dolorem aperiam!
        </p>
      </div>      
    </div>
  )
}

export default Info;

