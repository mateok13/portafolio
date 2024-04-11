import style from "./Skills.module.css";
import iconos from "../../assets/iconos/iconos"

function Habilidades() {
  return (
    <div className={style.contenido}>
      <div className={style.skills}>
        <h1>Habilidades</h1>
        <ul>
          <li><img src={iconos.HTMLIcon} /><br />HTML 5</li>
          <li><img src={iconos.CSSIcon} /><br />CSS 3</li>
          <li><img src={iconos.JavaScriptIcon} height={50} width={50} /><br />Java Script</li>
          <li><img src={iconos.AngularIcon} /><br />Angular</li>
          <li><img src={iconos.ReactIcon} /><br />React Js</li>
        </ul>
      </div>
      <div className={style.hobbies}>
        <h1>Hobbies</h1>
        <ul>
          <li><img src={iconos.HTMLIcon} /><br />Jugar Futbol</li>
          <li><img src={iconos.CSSIcon} /><br />Ver anime y series</li>
          <li><img src={iconos.AngularIcon} /><br />Cocinar</li>
          <li><img src={iconos.ReactIcon} /><br />Escuchar musica</li>
        </ul>
      </div>
    </div>
  )
}

export default Habilidades;