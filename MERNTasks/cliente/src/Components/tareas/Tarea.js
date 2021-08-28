import React, { useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

export default function Tarea({tarea}) {
    // Obtener las funciones del context
    const tareasContext = useContext(tareaContext);
    const { eliminarTarea, obtenerTareas  } = tareasContext;

    // Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    const [proyectoActual] = proyecto;

    // Funcion 
    const teareaEliminar = id => {
        // console.log("teareaEliminar");
        // console.log("ID a eliminar", id);
        eliminarTarea(id);
        // console.log("proyectoActual", proyectoActual.id);
        obtenerTareas(proyectoActual.id);
    }

    return (
        <li className="tarea sombra">{tarea.nombre}
        
            <div className="estado">
                {  tarea.estado
                
                ?   (
                    <button 
                    type="button"
                    className="completo"
                    >Completo</button>
                    ) 

                :  (
                    <button 
                    type="button"
                    className="incompleto"
                    >Incompleto</button>
                    ) 
                
                }
            </div>

            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={ () => teareaEliminar(tarea.id) }
                >
                    Elimiinar
                </button>
            </div>
        </li>
    )
}
