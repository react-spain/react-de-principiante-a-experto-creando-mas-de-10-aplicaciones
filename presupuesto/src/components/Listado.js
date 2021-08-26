import React from 'react'
import Gasto from './Gasto';

export default function Listado({gastos}) {
    return (
        <div className="gastos-realizados">
            <h2>Listados</h2>
            {gastos.map(gasto => (
                <Gasto 
                key={gasto.id}
                gasto={gasto}/>
            ))}
        </div>
    )
}
