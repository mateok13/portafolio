import style from "./Projects.module.css";
import { Folder, GitHub } from '@mui/icons-material';

function Proyectos() {
  return (
    <section id="proyectos" className={style.fondo}>
      <div className={style.contenido}>

        <h2 className={style.title}>
          <span className={style.titleNumber}>04.</span> Proyectos Destacados
        </h2>

        <div className={style.gridContainer}>

          <div className={style.card}>
            <div className={style.cardTop}>
              <div className={style.cardHeader}>
                <Folder className={style.folderIcon} />
              </div>
              <h3 className={style.projectTitle}>MedLens</h3>
              <p className={style.descripcion}>
                Aplicación móvil inteligente que automatiza el control de medicamentos mediante la captura fotográfica de fórmulas médicas. Extrae la información con IA, genera alarmas de dosis automáticas y gestiona el inventario de medicamentos remanentes.
              </p>
            </div>
            <div className={style.techContainer}>
              <span className={style.techTag}>#Dart</span>
              <span className={style.techTag}>#Flutter</span>
              <span className={style.techTag}>#IA</span>
            </div>
          </div>

          <div className={style.card}>
            <div className={style.cardTop}>
              <div className={style.cardHeader}>
                <Folder className={style.folderIcon} />
              </div>
              <h3 className={style.projectTitle}>Sistema de Gestión Escolar</h3>
              <p className={style.descripcion}>
                Plataforma integral orientada a instituciones educativas de cualquier nivel. Diseñada desde el análisis riguroso de historias de usuario para centralizar el control administrativo, la asignación de matrículas y el seguimiento académico de estudiantes.
              </p>
            </div>
            <div className={style.techContainer}>
              <span className={style.techTag}>#Java</span>
              <span className={style.techTag}>#Spring Boot</span>
              <span className={style.techTag}>#React</span>
              <span className={style.techTag}>#Arquitectura</span>
            </div>
          </div>

          <div className={style.card}>
            <div className={style.cardTop}>
              <div className={style.cardHeader}>
                <Folder className={style.folderIcon} />
              </div>
              <h3 className={style.projectTitle}>Plataforma Web - Asociación Internacional de Voluntarios Profesionales</h3>
              <p className={style.descripcion}>
                Participación activa como Desarrollador Full-Stack en el voluntariado internacional. Responsable del diseño y despliegue de la arquitectura del servidor, la creación de módulos de seguridad y el acoplamiento de la interfaz gráfica modular para el consumo de servicios REST.
              </p>
            </div>
            <div className={style.techContainer}>
              <span className={style.techTag}>#Java</span>
              <span className={style.techTag}>#Spring Boot</span>
              <span className={style.techTag}>#Angular</span>
              <span className={style.techTag}>#REST-API</span>
            </div>
          </div>

          <div className={style.card}>
            <div className={style.cardTop}>
              <div className={style.cardHeader}>
                <Folder className={style.folderIcon} />
                <div className={style.linksContainer}>
                  <a href="https://github.com/mateok13/Front-GesRotes.git" target="_blank" rel="noreferrer" className={style.iconLink}>
                    <GitHub />
                  </a>
                </div>
              </div>
              <h3 className={style.projectTitle}>GesRotes</h3>
              <p className={style.descripcion}>
                Sistema web especializado que permite a estudiantes de medicina y supervisores planificar rotaciones clínicas, cronometrar horas de prácticas hospitalarias y registrar evaluaciones de rendimiento estructural.
              </p>
            </div>
            <div className={style.techContainer}>
              <span className={style.techTag}>#React JS</span>
              <span className={style.techTag}>#CSS Modules</span>
              <span className={style.techTag}>#GestiónClínica</span>
            </div>
          </div>

          <div className={style.card}>
            <div className={style.cardTop}>
              <div className={style.cardHeader}>
                <Folder className={style.folderIcon} />
                <div className={style.linksContainer}>
                  <a href="https://github.com/mateok13/TaskZen.git" target="_blank" rel="noreferrer" className={style.iconLink}>
                    <GitHub />
                  </a>
                </div>
              </div>
              <h3 className={style.projectTitle}>TaskZen</h3>
              <p className={style.descripcion}>
                Aplicación enfocada en la productividad personal. Permite organizar flujos de tareas diarias e intercalar automáticamente intervalos de descanso optimizados para prevenir el agotamiento mental.
              </p>
            </div>
            <div className={style.techContainer}>
              <span className={style.techTag}>#Kotlin</span>
              <span className={style.techTag}>#Android</span>
              <span className={style.techTag}>#Mobile</span>
            </div>
          </div>

          <div className={style.card}>
            <div className={style.cardTop}>
              <div className={style.cardHeader}>
                <Folder className={style.folderIcon} />
                <div className={style.linksContainer}>
                  <a href="https://github.com/mateok13/age-calculator-app.git" target="_blank" rel="noreferrer" className={style.iconLink}>
                    <GitHub />
                  </a>
                </div>
              </div>
              <h3 className={style.projectTitle}>Calculadora de edad</h3>
              <p className={style.descripcion}>
                Aplicación web interactiva que procesa fechas de nacimiento completas para calcular con precisión cronométrica la edad exacta del usuario desglosada en años, meses y días.
              </p>
            </div>
            <div className={style.techContainer}>
              <span className={style.techTag}>#JavaScript</span>
              <span className={style.techTag}>#HTML5</span>
              <span className={style.techTag}>#CSS3</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Proyectos;