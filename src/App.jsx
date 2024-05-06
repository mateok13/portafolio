import { useRef, useState, useEffect } from 'react';
import Navbar from "./components/navbar";
import Info from "./components/info";
import Habilidades from "./components/habilidades y hobbies";
import Studies from "./components/formacion";
import Proyectos from "./components/proyectos";
import Contacto from "./components/contacto";
import Footer from "./components/footer";
import iconos from "./assets/iconos/iconos";
import "./App.css"

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const studiesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const skillsOffset = skillsRef.current.offsetTop;
      if (scrollPosition > skillsOffset) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Navbar aboutRef={aboutRef} skillsRef={skillsRef} studiesRef={studiesRef} projectsRef={projectsRef} contactRef={contactRef} />
      <div ref={aboutRef}><Info /></div>
      <div ref={skillsRef}><Habilidades /></div>
      <div ref={studiesRef}><Studies /></div>
      <div ref={projectsRef}><Proyectos /></div>
      <div ref={contactRef}><Contacto /></div>
      <Footer />
      {showButton && <a className='botonSubir' onClick={scrollToTop} href="#"><img className='flechaSubir' src={iconos.FlechaSubir}/></a>}
    </>
  );
}

export default App;