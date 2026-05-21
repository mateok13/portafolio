import style from "./Skills.module.css";
import { Storage as StorageIcon } from '@mui/icons-material';
import { Code as CodeIcon } from '@mui/icons-material';
import { Checklist as ChecklistIcon } from '@mui/icons-material';
import { Grade as GradeIcon } from '@mui/icons-material';

function Habilidades() {
  return (
    <section id="habilidades" className={style.fondo}>
      <div className={style.contenido}>
        
        <h2 className={style.title}>
          <span className={style.titleNumber}>02.</span> Tecnologías & Habilidades
        </h2>
        
        <div className={style.gridContainer}>
          
          <div className={style.card}>
            <div className={style.cardHeader}>
              <StorageIcon className={style.iconHeader} />
              <h3>Back-End</h3>
            </div>
            <div className={style.badgeContainer}>
              <span className={style.techBadge}>Java</span>
              <span className={style.techBadge}>Spring Boot</span>
              <span className={style.techBadge}>APIs RESTful</span>
            </div>
          </div>

          <div className={style.card}>
            <div className={style.cardHeader}>
              <CodeIcon className={style.iconHeader} />
              <h3>Front-End</h3>
            </div>
            <div className={style.badgeContainer}>
              <span className={style.techBadge}>React JS</span>
              <span className={style.techBadge}>Angular</span>
              <span className={style.techBadge}>JavaScript</span>
              <span className={style.techBadge}>HTML5 / CSS3</span>
            </div>
          </div>

          <div className={style.card}>
            <div className={style.cardHeader}>
              <ChecklistIcon className={style.iconHeader} />
              <h3>Metodologías</h3>
            </div>
            <div className={style.badgeContainer}>
              <span className={style.techBadge}>SCRUM / Kanban</span>
              <span className={style.techBadge}>Git & GitHub</span>
              <span className={style.techBadge}>Historias de Usuario</span>
            </div>
          </div>

          <div className={style.card}>
            <div className={style.cardHeader}>
              <GradeIcon className={style.iconHeader} />
              <h3>Intereses</h3>
            </div>
            <div className={style.badgeContainer}>
              <span className={style.techBadge}>Jugar Fútbol</span>
              <span className={style.techBadge}>Anime & Series</span>
              <span className={style.techBadge}>Cocinar</span>
              <span className={style.techBadge}>Música</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Habilidades;