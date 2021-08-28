import React, {useContext, useState, useEffect} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

export default function FormTarea() {

    // Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // Obtener las funciones del context
    const tareasContext = useContext(tareaContext);
    const { tareaseleccionada, 
        errortarea ,
        agregarTarea, 
        validarTarea, 
        obtenerTareas,
        actualzarTarea,
        limpiarTarea
    } = tareasContext;

    


    // State del formulario
    const [tarea, setTarea] = useState({
        nombre: ''
    })


    useEffect(() => {
        // console.log('useEffect');
        // console.log('tareaseleccionada:' , tareaseleccionada)
        if(tareaseleccionada !== null) {
            setTarea(tareaseleccionada)
        } else {
            setTarea({
                nombre: ''
            })
        }
    }, [tareaseleccionada])

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


        // Si es edicion o si es nueva tarea
        if(tareaseleccionada===null) {
            // tarea nueva
            tarea.proyectoId = proyectoActual.id;
            tarea.estado = false;
            // console.log("[3] tarea:", tarea);
            agregarTarea(tarea);
        } else {
            // actualizar tarea existente
            actualzarTarea(tarea);
            limpiarTarea();
        }


        // console.log("[2] proyectoActual:", proyectoActual.id);

        // Agregar tarea al state de tarea
       


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
