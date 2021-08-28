import React, {useContext, useState} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

export default function FormTarea() {

    // Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // Obtener las funciones del context
    const tareasContext = useContext(tareaContext);
    const { errortarea ,agregarTarea, validarTarea, obtenerTareas  } = tareasContext;


    // State del formulario
    const [tarea, setTarea] = useState({
        nombre: ''
    })

    const { nombre } = tarea;

    // Si no hay proyectos seleccionado
    if(!proyecto) return null

    // Array destructuring
    const [proyectoActual] = proyecto;

    // leer los valores
    const handleChange = e => {
        setTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }


    const onSubmit = e => {
        // console.log("[1]:","onSubmit")
        
        e.preventDefault();

        // Validar
        if(nombre.trim() === '') {
            validarTarea();
            return;
        }

        // console.log("[2] proyectoActual:", proyectoActual.id);

        // Agregar tarea al state de tarea
        tarea.proyectoId = proyectoActual.id;
        tarea.estado = false;

        // console.log("[3] tarea:", tarea);
        agregarTarea(tarea);


        // Ontener las tareas
        obtenerTareas(proyectoActual.id);

        // reiniciar el form
        setTarea({
            nombre: ''
        })

        // console.log("[10]:","setTarea")
    }

    return (
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea ..."
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit bnt-block"
                        value="Agregar Tarea"
                    />
                </div>


            </form>

            {errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null}
        </div>
    )
}
