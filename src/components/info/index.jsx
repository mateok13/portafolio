import style from './Info.module.css';
import { OpenInNew as OpenInNewIcon } from '@mui/icons-material';
import { Curriculum, Foto } from '../../assets/recursos';

function Info() {
  return (
    <div className={style.contenido}>
      <header className={style.presentacion}>
        <div className={style.presentacion_texto}>
          <p className={style.saludo}>¡Hola! Mi nombre es</p>
          <h1>Jhonny Mateo<br />Rosero Cortes</h1>
          <p className={style.subtitulo}>Ingeniero de Sistemas & Desarrollador Full Stack</p>
          <p>
            Experiencia en <span className={style.techHighlight}>Spring Boot</span>, 
            <span className={style.techHighlight}> ReactJS </span>
            y <span className={style.techHighlight}>AngularJS</span>.
            Enfocado en la entrega de software de alta calidad mediante
            metodologías ágiles <span className={style.techHighlight}>(SCRUM/Kanban)</span>. Profesional autónomo y organizado, con
            habilidades destacadas para el trabajo en equipo y la resolución proactiva de
            problemas técnicos.
          </p>
          <div className={style.links}>
            <a href="https://github.com/mateok13" target="_blank" rel="noreferrer" className={style.btn_primary}>
              GitHub <OpenInNewIcon fontSize="small" />
            </a>
            <a href="https://www.linkedin.com/in/mateok13/" target="_blank" rel="noreferrer" className={style.btn_secondary}>
              LinkedIn <OpenInNewIcon fontSize="small" />
            </a>
            <a href={Curriculum} target="_blank" rel="noreferrer" className={style.btn_secondary}>
              Descargar CV <OpenInNewIcon fontSize="small" />
            </a>
          </div>
        </div>
        <div className={style.avatar_container}>
          <div className={style.glow_effect}></div>
          <img
            src={Foto}
            alt="Jhonny Mateo Rosero Cortes"
            className={style.avatar_img}
          />
        </div>
      </header>
    </div>
  );
}

export default Info;