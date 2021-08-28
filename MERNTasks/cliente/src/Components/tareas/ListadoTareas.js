import React, {useContext} from 'react'
import Tarea from './Tarea'
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group'; 

export default function ListadoTareas() {

    // Extraer Proyectos de State Inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminaProyecto } = proyectosContext;

    // Obtener las tareas
    const tareasContext = useContext(tareaContext);
    const { tareasproyecto  } = tareasContext;

    // Si no hay proyectos seleccionado
    if(!proyecto) return <h2>Selecciona un Proyecto</h2>

    // Array destructuring
    const [proyectoActual] = proyecto


    // const tareasProyecto = [];

    const onClickElimimar = () => {
        eliminaProyecto(proyectoActual.id)
    }

    return (
        <>
            <h2>Proyecto: { proyectoActual.nombre }  </h2>
            <ul className="listado-tareas">
                    {tareasproyecto.length === 0 
                        ? ( <li className="tareas"><p>No hay tareas</p></li> )

                        :   <TransitionGroup>
                                { tareasproyecto.map ( tarea => (
                                        <CSSTransition key={tarea.id}
                                        timeout={200}
                                        classNames="tarea"
                                        >
                                            <Tarea
                                                tarea={tarea}
                                            />
                                        </CSSTransition>
                                ))}
                            </TransitionGroup>
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
