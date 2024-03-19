// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';

function Navbar() {
  return (
    <div className={style.contenido}>
        <h2>Mateo Rosero<br /><span>Desarrollador Full-Stack</span></h2>
        <div>
          <a ><Link to="/">Home</Link></a>
          <a ><Link to="/info">About me</Link></a>
          <a ><Link to="/skills">Skills</Link></a>
          <a ><Link to="/projects">Projects</Link></a>
          <a ><Link to="/contact">Contact me</Link></a>
        </div>
    </div>
  )
}

export default Navbar