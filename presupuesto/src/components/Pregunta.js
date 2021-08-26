import React, { useState } from 'react'
import Error from './Error';

export default function Pregunta({ setPresupuesto, setRestante, setMostrarPregunta }) {
  // Deinir state
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const definirPresupuesto = e => {
    setCantidad(parseInt(e.target.value,10))
  }
  
  const agregarPresupuesto = e => {
    e.preventDefault();

    // Validar
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }

    // Si se pasa la validacion
    setError(false);
    setPresupuesto(cantidad);
    setRestante(cantidad);
    setMostrarPregunta(false);
  }


return (
    <>
      <h2>Coloca tu presupuesto</h2>

      { error ? <Error mensaje="El presupuesto es incorrecto"/>  : null }

      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="coloca tu presupusto"
          onChange={definirPresupuesto}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </>
  )
}
