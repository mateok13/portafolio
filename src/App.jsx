import {Routes, Route, Navigate} from "react-router-dom";
import Principal from "./components/principal";
import Info from "./components/info";
import Habilidades from "./components/habilidades";
import Proyectos from "./components/proyectos";
import Contacto from "./components/contacto";
import Navbar from "./components/navbar";


function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Principal/>}/>
        <Route path="/info" element={<Info/>}/>
        <Route path="/skills" element={<Habilidades/>}/>
        <Route path="/projects" element={<Proyectos/>}/>
        <Route path="/contact" element={<Contacto/>}/>
        <Route path="*" element={<Navigate replace to="/"/>}/>
      </Routes>
    </>
  )
}

export default App
