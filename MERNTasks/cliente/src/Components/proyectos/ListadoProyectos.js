import React, {useContext, useEffect} from 'react'
import Proyecto from './Proyecto'
import proyectoContext from '../../context/proyectos/proyectoContext';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default function ListadoProyectos() {

    // Extraer Proyectos de State Inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;

    useEffect(() => {
        obtenerProyectos();
        // eslint-disable-next-line
    }, [])

    // revisar si proyecto tiene contenido
    if(proyectos.length === 0) return <p>No hay proyectos</p>;

    

    return (
        <ul className="listado-proyectos">
            <TransitionGroup>
                {proyectos.map( proyecto => (
                    <CSSTransition 
                            timeout={200}
                            classNames="proyecto"
                            key={ proyecto.id }>
                        <Proyecto proyecto={proyecto}/>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    )
}
