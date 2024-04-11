import style from './Navbar.module.css';

function Navbar({ aboutRef, skillsRef, studiesRef, projectsRef, contactRef }) {
  
  const scrollToSection = (event, ref) => {
    event.preventDefault();
    if(ref && ref.current){
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={style.contenido}>
        <h2>Mateo Rosero<br /><span>Desarrollador Full-Stack</span></h2>
        <div>
          <a onClick={(event) => scrollToSection(event, aboutRef)} href='#'>Sobre mi</a>
          <a onClick={(event) => scrollToSection(event, skillsRef)} href='#'>Habilidades</a>
          <a onClick={(event) => scrollToSection(event, studiesRef)} href='#'>Formacion</a>
          <a onClick={(event) => scrollToSection(event, projectsRef)} href='#'>Proyectos</a>
          <a onClick={(event) => scrollToSection(event, contactRef)} href='#'>Contactame</a>
        </div>
    </div>
  )
}

export default Navbar;