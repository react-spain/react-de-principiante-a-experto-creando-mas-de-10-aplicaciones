import React from 'react'

export default function ControlPresupuesto({presupuesto, restante}) {
    return (
        <>
           <div className="alert alert-primary">
               Presupesto: $ {presupuesto}
            </div>
            
            <div className="alert">
                Restante: $ {restante}
            </div> 
        </>
    )
}
