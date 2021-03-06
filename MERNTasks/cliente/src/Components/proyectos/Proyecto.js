import React, { useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

export default function Proyecto({proyecto}) {

    const proyectosContext = useContext(proyectoContext)
    const { proyectoActual  } = proyectosContext;

    // Obtener las funciones del context
    const tareasContext = useContext(tareaContext);
    const { obtenerTareas  } = tareasContext;


    // Funcion para agregar el proyecto actual
    const seleccionarProyecto = id => {
        proyectoActual(id);  // Fijar un proyecto actual
        obtenerTareas(id);  // Filtrar las tareas cuando se de click
    }

    return (
        <li>
           <button
                type="button"
                className="btn btn-blank sombra padding-10"
                onClick={ () => seleccionarProyecto(proyecto.id)}
           >{proyecto.nombre}</button>
        </li>
    )
}
