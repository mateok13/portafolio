import style from './Navbar.module.css';

function Navbar({ aboutRef, experienceRef, skillsRef, studiesRef, projectsRef, contactRef }) {
  
  const scrollToSection = (event, ref) => {
    event.preventDefault();
    if(ref && ref.current){
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={style.contenido}>
        <h2>JHONNY ROSERO<br /><span>INGENIERO DE SISTEMAS</span></h2>
        <div>
          <a onClick={(event) => scrollToSection(event, aboutRef)} href='#'>SOBRE MÍ</a>
          <a onClick={(event) => scrollToSection(event, experienceRef)} href='#'>EXPERIENCIA</a>
          <a onClick={(event) => scrollToSection(event, skillsRef)} href='#'>HABILIDADES</a>
          <a onClick={(event) => scrollToSection(event, studiesRef)} href='#'>FORMACIÓN</a>
          <a onClick={(event) => scrollToSection(event, projectsRef)} href='#'>PROYECTOS</a>
          <a onClick={(event) => scrollToSection(event, contactRef)} href='#'>CONTACTAME</a>
        </div>
    </nav>
  )
}

export default Navbar;