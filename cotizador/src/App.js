import Header from "./components/Header";
import styled from "@emotion/styled";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";
import { useState } from 'react';
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`

function App() {
  const [resumen, setResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  const [cargando, setCargando] = useState(false);

  // extraer datos
  const { datos, cotizacion } = resumen;

  return (
    <Contenedor>
      <Header titulo="Cotizador de seguro"/>

      <ContenedorFormulario>
                  <Formulario
                  setResumen = {setResumen}
                  setCargando={setCargando}
                  />
                  { cargando ? <Spinner/> : null }
                  { !cargando ? <Resumen datos={datos}/> : null }
                  { !cargando ? <Resultado cotizacion={cotizacion}/> : null }
                  
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
