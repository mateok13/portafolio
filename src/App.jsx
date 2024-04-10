import { useRef } from 'react';
import Navbar from "./components/navbar";
import Info from "./components/info";
import Habilidades from "./components/habilidades";
import Proyectos from "./components/proyectos";
import Contacto from "./components/contacto";
import "./App.css"

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Navbar aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef}/>
      <div ref={aboutRef}><Info/></div>
      <div ref={skillsRef}><Habilidades/></div>
      <div ref={projectsRef}><Proyectos/></div>
      <div ref={contactRef}><Contacto/></div>
      <footer>Desarrollado por Jhonny Mateo Rosero Cortes<br />2024</footer>
    </>
  )
}

export default App;