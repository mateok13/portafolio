import style from './Navbar.module.css';

function Navbar({ homeRef, aboutRef, skillsRef, projectsRef, contactRef }) {
  // Función para manejar el desplazamiento
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
        <a onClick={(event) => scrollToSection(event, homeRef)} href='#'>Home</a>
          <a onClick={(event) => scrollToSection(event, aboutRef)} href='#'>About me</a>
          <a onClick={(event) => scrollToSection(event, skillsRef)} href='#'>Skills</a>
          <a onClick={(event) => scrollToSection(event, projectsRef)} href='#'>Projects</a>
          <a onClick={(event) => scrollToSection(event, contactRef)} href='#'>Contact me</a>
        </div>
    </div>
  )
}

export default Navbar;