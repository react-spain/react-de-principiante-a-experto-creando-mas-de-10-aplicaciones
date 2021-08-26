import React from 'react';
import { revisarPresupuesto } from '../helpers';

export default function ControlPresupuesto({presupuesto, restante}) {
    return (
        <>
           <div className="alert alert-primary">
               Presupesto: $ {presupuesto}
            </div>
            
            <div className={revisarPresupuesto(presupuesto,restante)}>
                Restante: $ {restante}
            </div> 
        </>
    )
}
