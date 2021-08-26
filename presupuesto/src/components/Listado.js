import React from 'react'
import Gasto from './Gasto';
import PropTypes from 'prop-types';

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
    
    );

    Listado.proTypes = {
        gastos: PropTypes.array.isRequired,
    }
    
}
