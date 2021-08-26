import React, { useState } from 'react'

export default function Pregunta() {
  // Deinir state
  const [cantidad, setCantidad] = useState(0);

  const definirPresupuesto = e => {
    setCantidad(parseInt(e.target.value,10))
  }
  
  const agregarPresupuesto = e => {
    e.preventDefault();
  }


return (
    <>
      <h2>Coloca tu presupuesto</h2>
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
