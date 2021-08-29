import React, {useEffect, useContext} from 'react'
import AuthContext from '../../context/autenticacion/authContext';

export default function Barra() {

    // extraer la info de autenticacion
    const authContext = useContext(AuthContext);
    const { usuario, usuarioAutenticado, cerrarSesion } = authContext;

    useEffect(() => {
        usuarioAutenticado();
    }, [])




    return (
        <header className="app-header">
            { usuario ? <p className="nombre-usuario">Hola <span>{ usuario.nombre }</span> </p> : null }
            <nav className="nav-principal">
               <button 
                        className="btn btn-blank cerrar-sesion white"
                        onClick={() => cerrarSesion()}
               >
                   Cerrar Sesión
               </button>
            </nav>

        </header>
    )
}
