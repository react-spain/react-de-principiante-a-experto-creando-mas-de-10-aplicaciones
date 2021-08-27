import React from 'react'
import Tarea from './Tarea'

export default function ListadoTareas() {
    const tareasProyecto = [
        { nombre: 'Elegir Plataforma', estado: true},
        { nombre: 'Elegir Colores', estado: true},
        { nombre: 'Elegir Plataforma de Pago', estado: true},
        { nombre: 'Elegir Hosting', estado: false},
        { nombre: 'Elegir Modulo', estado: false}
    ]

    return (
        <>
            <h2>Proyecto: Tienda Virtual</h2>
            <ul className="listado-tareas">
                    {tareasProyecto.length === 0 
                        ? ( <li className="tareas"><p>No hay tareas</p></li> )

                        :  tareasProyecto.map ( tarea => (
                            <Tarea
                                tarea={tarea}
                            />
                        ))
                    }
            </ul>
        </>
    )
}
