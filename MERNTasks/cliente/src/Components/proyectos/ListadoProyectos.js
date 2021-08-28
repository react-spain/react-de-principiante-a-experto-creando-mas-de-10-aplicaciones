import React, {useContext, useEffect} from 'react'
import Proyecto from './Proyecto'
import proyectoContext from '../../context/proyectos/proyectoContext';

export default function ListadoProyectos() {

    // Extraer Proyectos de State Inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;

    useEffect(() => {
        obtenerProyectos();
    }, [])

    // revisar si proyecto tiene contenido
    if(proyectos.length === 0) return <p>No hay proyectos</p>;

    

    return (
        <ul className="listado-proyectos">
            {proyectos.map( proyecto => (
                <Proyecto 
                key={ proyecto.id }
                proyecto={proyecto}/>
            ))}
        </ul>
    )
}
