import React from 'react'
import Proyecto from './Proyecto'

export default function ListadoProyectos() {

    const proyectos = [
        {nombre: 'Tienda Virtual'},
        {nombre: 'Intranet'},
        {nombre: 'Diseño de sitio Web'}
    ]

    return (
        <ul className="listado-proyectos">
            {proyectos.map( proyecto => (
                <Proyecto proyecto={proyecto}/>
            ))}
        </ul>
    )
}
