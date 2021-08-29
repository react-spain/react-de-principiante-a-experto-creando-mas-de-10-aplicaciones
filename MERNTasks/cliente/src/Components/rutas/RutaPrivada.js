import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/autenticacion/authContext';

const RutaPrivada = ({ component: Component, ...props }) => {

    console.log("RutaPrivada")

    const authContext = useContext(AuthContext);
    const { autenticado, usuarioAutenticado, cargado } = authContext;

    useEffect(() => {
        usuarioAutenticado();
    }, [])

    return (
        <Route {...props} render={props => !autenticado  && !cargado ? (
            <Redirect to="/" />
        ) : (
            <Component {...props} />
        )} />
    );
}

export default RutaPrivada;
