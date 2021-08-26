import Pregunta from "./components/Pregunta";
import { useState } from "react";
import Formulario from "./components/Formulario";


function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarPregunta, setMostrarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);

  const agregarNuevoGasto = gasto => {
    setGastos([
      ...gastos, 
      gasto
    ]);
    console.log(gastos)  
  }


  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarPregunta ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setMostrarPregunta={setMostrarPregunta}
            />

          ) : (

            <div className="row">
              <div className="one-half column" >
                <Formulario  agregarNuevoGasto={agregarNuevoGasto}/>
              </div>
              <div className="one-half column" >
                2
              </div>
            </div>)}
        </div>
      </header>
    </div>
  );
}

export default App;
