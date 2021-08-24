import React, {useState} from "react";
import Formulario from "./components/Formulario";


function App() {
  const[citas, setCitas] = useState([]);

  // Funcion que tome las cita actuales y que agregue las nuevas
  const crearCita = cita => {
    setCitas([
      ...citas, 
      cita
    ])
  }
  
  return (
    <>
      <h1>Administrador de pacientes</h1>
      <div className="container">
          <div className="row">
              <div className="one-half column">
                <Formulario crearCita={crearCita}/>
              </div>
              <div className="one-half column">
                2
              </div> 

          </div>

      </div>
    </>
  );
}

export default App;
