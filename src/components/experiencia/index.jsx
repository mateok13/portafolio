import style from './Experiencia.module.css';

function Experiencia() {
  return (
    <section id="experiencia" className={style.experienceSection}>
      <h2 className={style.title}>
        <span className={style.titleNumber}>01.</span> Experiencia Profesional
      </h2>
      
      <div className={style.timelineContainer}>
        
        <div className={style.timelineItem}>
          <div className={style.timelineDot}></div>
          <div className={style.infoBlock}>
            <span className={style.dateBadge}>Oct 2025 - Dic 2025</span>
            <h3 className={style.companyTitle}>División TIC - Universidad del Cauca</h3>
            <p className={style.roleTitle}>Monitor en el Área de Desarrollo y Pruebas</p>
          </div>
          <div className={style.cardBlock}>
            <div className={style.card}>
              <ul className={style.bulletList}>
                <li>Participé en el levantamiento y análisis de requerimientos de usuarios, definiendo Historias de Usuario para nuevos desarrollos y ajustes de sistemas.</li>
                <li>Contribuí a la gestión de la información mediante la documentación de código existente y la actualización de manuales técnicos o de usuario.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={style.timelineItem}>
          <div className={style.timelineDot}></div>
          <div className={style.infoBlock}>
            <span className={style.dateBadge}>Feb 2024 - Nov 2024</span>
            <h3 className={style.companyTitle}>Asociación Internacional de Voluntarios Profesionales</h3>
            <p className={style.roleTitle}>Desarrollador Back-End / Full Stack</p>
          </div>
          <div className={style.cardBlock}>
            <div className={style.card}>
              <ul className={style.bulletList}>
                <li>Establecí la arquitectura Back-End (Spring Boot), creando el proyecto desde cero e implementando la funcionalidad de Autenticación para la integración del equipo.</li>
                <li>Desarrollé funcionalidades CRUD para los módulos de Usuarios, Actividades y Subactividades.</li>
                <li>Colaboré en el Front-End (Angular) para dar funcionalidad a las vistas de Actividades y Subactividades, integrando los servicios REST.</li>
                <li>Participé en el análisis de requerimientos y el diseño del modelo de base de datos.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={style.timelineItem}>
          <div className={style.timelineDot}></div>
          <div className={style.infoBlock}>
            <span className={style.dateBadge}>Abr 2024 - Ago 2024</span>
            <h3 className={style.companyTitle}>Doctorado en Ciencias de la Computación - Universidad del Cauca</h3>
            <p className={style.roleTitle}>Monitor Administrativo</p>
          </div>
          <div className={style.cardBlock}>
            <div className={style.card}>
              <ul className={style.bulletList}>
                <li>Contribuí a la evolución y optimización del aplicativo web del Doctorado en Back-End con Spring Boot (refactorizando lógica existente y creando nuevos módulos) e implementando las interfaces de usuario (Front-End en Angular).</li>
                <li>Administré la página web del Doctorado, encargándome de la creación, actualización y mantenimiento del contenido digital.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experiencia;