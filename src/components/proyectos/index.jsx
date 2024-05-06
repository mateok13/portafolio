import style from "./Projects.module.css";
import { GitHub } from '../../assets/recursos';

function Proyectos() {
  return (
    <div className={style.fondo}>
      <div className={style.contenido}>
        <h1 className={style.titulo + " " + style.tamTitulo}>Experiencia Laboral</h1>
        <ul className={style.contenidoProyectos}>
          <li className={style.contenidoLista}>
            <div className={style.contenidoTarjeta}>
              <h1 className={style.titulo + " " + style.tamSubTitulo}>Voluntariado Front-End</h1>
              <div className={style.realizadoCon}>
                <h1>Realizado con:</h1>
                <ul className={style.listaLenguajes}>
                  <li>Angular</li>
                </ul>
              </div>
              <p className={style.descripcion}>Descripcion: </p>
            </div>
            <a href="https://github.com/Young-Travelers/frontend.git" target="_blank"><img className={style.logoGit} src={GitHub}/></a>
          </li>
          <li className={style.contenidoLista}>
            <div className={style.contenidoTarjeta}>
              <h1 className={style.titulo + " " + style.tamSubTitulo}>Voluntariado Back-End</h1>
              <div className={style.realizadoCon}>
                <h1>Realizado con:</h1>
                <ul className={style.listaLenguajes}>
                  <li>Spring Boot</li>
                </ul>
              </div>
              <p className={style.descripcion}>Descripcion: </p>
            </div>
            <a href="https://github.com/Young-Travelers/backend.git" target="_blank"><img className={style.logoGit} src={GitHub}/></a>
          </li>
          <li className={style.contenidoLista}>
            <div className={style.contenidoTarjeta}>
              <h1 className={style.titulo + " " + style.tamSubTitulo}>Calculadora de edad</h1>
              <div className={style.realizadoCon}>
                <h1>Realizado con:</h1>
                <ul className={style.listaLenguajes}>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
              </div>
              <p className={style.descripcion}>Descripcion: Pagina web capaz de calcular la edad
                actual de una persona, esta tiene como entrada la fecha de nacimiento de la persona
                y como salida muestra la edad de la persona en años, meses y dias.</p>
            </div>
            <a href="https://github.com/mateok13/age-calculator-app.git" target="_blank"><img className={style.logoGit} src={GitHub}/></a>
          </li>
          <li className={style.contenidoLista}>
            <div className={style.contenidoTarjeta}>
              <h1 className={style.titulo + " " + style.tamSubTitulo}>TaskZen</h1>
              <div className={style.realizadoCon}>
                <h1>Realizado con:</h1>
                <ul className={style.listaLenguajes}>
                  <li>Kotlin</li>
                </ul>
              </div>
              <p className={style.descripcion}>Descripcion: TaskZen es una aplicación creada con
                el propósito de facilitar la gestión de tareas y momentos de descanso entre estas.
                Sus características clave abarcan la creación y organización de tareas, así como
                la creación de los tiempos de descanso entre ellas.</p>
            </div>
            <a href="https://github.com/mateok13/TaskZen.git" target="_blank"><img className={style.logoGit} src={GitHub}/></a>
          </li>
          <li className={style.contenidoLista}>
            <div className={style.contenidoTarjeta}>
              <h1 className={style.titulo + " " + style.tamSubTitulo}>GesRotes</h1>
              <div className={style.realizadoCon}>
                <h1>Realizado con:</h1>
                <ul className={style.listaLenguajes}>
                  <li>React JS</li>
                  <li>CSS</li>
                </ul>
              </div>
              <p className={style.descripcion}>Descripcion: Este programa permitirá a los estudiantes y
                a los supervisores médicos registrar y planificar las rotaciones, realizar un seguimiento
                de las horas trabajadas, y evaluar el rendimiento de los estudiantes. Con un programa de
                este tipo, se espera que los estudiantes puedan obtener una experiencia clínica más
                estructurada.</p>
            </div>
            <a href="https://github.com/mateok13/Front-GesRotes.git" target="_blank"><img className={style.logoGit} src={GitHub}/></a>
          </li>
          <li className={style.contenidoLista}>
            <div className={style.contenidoTarjeta}>
              <h1 className={style.titulo + " " + style.tamSubTitulo}>Valor Resistencia</h1>
              <div className={style.realizadoCon}>
                <h1>Realizado con:</h1>
                <ul className={style.listaLenguajes}>
                  <li>Java</li>
                </ul>
              </div>
              <p className={style.descripcion}>Descripcion: Este programa permite calcular el
                valor de una resistencia</p>
            </div>
            <a href="https://github.com/mateok13/valorResistencia.git" target="_blank"><img className={style.logoGit} src={GitHub}/></a>
          </li>
          <li className={style.contenidoLista}>
            <div className={style.contenidoTarjeta}>
              <h1 className={style.titulo + " " + style.tamSubTitulo}>Restaurantes Online</h1>
              <div className={style.realizadoCon}>
                <h1>Realizado con:</h1>
                <ul className={style.listaLenguajes}>
                  <li>Java</li>
                </ul>
              </div>
              <p className={style.descripcion}>Descripcion: Este proyecto desarrolla una aplicación que permite hacer
                pedidos a domicilo sobre restaurantes en Popayán.</p>
            </div>
            <a href="https://github.com/mateok13/Restaurant_HEX.git" target="_blank"><img className={style.logoGit} src={GitHub}/></a>
          </li>
          <li className={style.contenidoLista}>
            <div className={style.contenidoTarjeta}>
              <h1 className={style.titulo + " " + style.tamSubTitulo}>Alura Geek</h1>
              <div className={style.realizadoCon}>
                <h1>Realizado con:</h1>
                <ul className={style.listaLenguajes}>
                  <li>Json-Server</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
              </div>
              <p className={style.descripcion}>Descripcion: Plataforma que permite agregar, listar y eliminar items de una base de datos Json-Server.</p>
            </div>
            <a href="https://github.com/mateok13/AluraGeek.git" target="_blank"><img className={style.logoGit} src={GitHub}/></a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Proyectos;