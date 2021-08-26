import Pregunta from "./components/Pregunta";
import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarPregunta, setMostrarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState(null);
  const [creargasto, setCreargasto  ]= useState(false);

  useEffect(() => {
    if (creargasto) {
      // Agrega el nuevo presupuesto
      setGastos([
        ...gastos, 
        gasto
      ]);

      // resyta
      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);

      setCreargasto(false)

    }
  }, [gasto, gastos, creargasto, restante])


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
                <Formulario  
                    setGasto={setGasto}
                    setCreargasto={setCreargasto}
                    />
              </div>
              <div className="one-half column" >
                <Listado
                  gastos={gastos}
                />

                <ControlPresupuesto 
                    presupuesto = {presupuesto} 
                    restante={restante}/>
              </div>
            </div>)}
        </div>
      </header>
    </div>
  );
}

export default App;
