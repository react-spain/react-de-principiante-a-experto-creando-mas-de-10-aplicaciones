import React, {useContext} from 'react'
import Tarea from './Tarea'
import proyectoContext from '../../context/proyectos/proyectoContext';

export default function ListadoTareas() {

    // Extraer Proyectos de State Inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminaProyecto } = proyectosContext;

    // Si no hay proyectos seleccionado
    if(!proyecto) return <h2>Selecciona un Proyecto</h2>

    // Array destructuring
    const [proyectoActual] = proyecto


    const tareasProyecto = [];

    const onClickElimimar = () => {
        eliminaProyecto(proyectoActual.id)
    }

    return (
        <>
            <h2>Proyecto: { proyectoActual.nombre }  </h2>
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

            <button
                type="button"
                className="btn btn-eliminar"
                onClick={ onClickElimimar }
            >Eliminar Proyecto &times;

            </button>

            
        </>
    )
}
