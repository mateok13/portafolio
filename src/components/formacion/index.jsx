import style from "./Formacion.module.css";
import { Alura,Unicauca } from '../../assets/recursos';

function Formacion() {
  return (
    <div className={style.contenido}>
      <h1>Formacion Academica</h1>
        <ul>
          <li><img src={Unicauca} /><br />Ingenieria de sistemas<br /><p>En curso</p></li>
          <li><img src={Alura} /><br />Desarrollador Frontend<br /><p>En curso</p></li>
        </ul>
    </div>
  )
}

export default Formacion;