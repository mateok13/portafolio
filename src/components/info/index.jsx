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
        <p>Soy un desarrollador con experiencia en Front-End, donde he trabajado con tecnologías como 
        HTML, CSS, JavaScript, Angular y ReactJS. Aunque no me considero un experto, tengo la capacidad 
        de crear interfaces de usuario que son tanto atractivas como funcionales.</p>
        <p>Mi experiencia en Backend con Spring Boot, aunque no tan extensa como en Front-End, complementa 
        mi habilidad para entender y participar en todas las fases del desarrollo de software.</p>
        <p>Poseo conocimientos prácticos en el uso de Git, lo que me permite manejar el código fuente y 
        colaborar eficientemente en proyectos, realizando tareas como subir cambios a repositorios, 
        navegar entre ramas y efectuar fusiones de código.</p>        
      </div>      
    </div>
  )
}

export default Info;

