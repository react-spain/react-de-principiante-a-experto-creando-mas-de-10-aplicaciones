import React, { useState } from 'react'

export default function Pregunta() {
  return (
    <>
      <h2>Coloca tu presupuesto</h2>
      <form>
        <input
          type="number"
          className="u-full-width"
          placeholder="coloca tu presupusto"
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
