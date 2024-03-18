import {Routes, Route, Navigate} from "react-router-dom";
import Principal from "./components/principal";

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Principal/>}/>
        <Route path="*" element={<Navigate replace to="/"/>}/>
      </Routes>
    </>
  )
}

export default App
