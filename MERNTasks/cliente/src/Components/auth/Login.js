import React, { useState, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';

export default function Login(props) {

    // Extraer los valores del context
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    const authContext = useContext(AuthContext);
    const { iniciarSesion, mensaje, autenticado } = authContext;

    // En caso de que el password no exista
    useEffect(() => {
        if(autenticado) {
            props.history.push('/proyectos')
        } 

        if(mensaje) {
            mostrarAlerta(mensaje.msg, 'alerta error'); 
        }
    }, [mensaje, autenticado, props.history ])

    // State para iniciar sesión
    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    })


    // extraer de usuario
    const { email, password} = usuario;




    const onChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    // Cuando inicias sesión

    const onSubmit = e => {
        e.preventDefault();

        if(email.trim() === '' || password.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta error');
            return;
        }

        iniciarSesion({
            email, password
        })
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sessión</h1>

                { alerta ? (<div className={`alerta padding-10 ${alerta.categoria}`}>
                {alerta.msg}
            </div>)   : null }

                <form
                
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu email"
                            onChange={onChange}
                            value={email}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu password"
                            onChange={onChange}
                            value={password}
                        />
                    </div>

                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar Sesión"
                        />
                    </div>

                </form>

                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Obtener Cuenta
                </Link>
            </div>
        </div>
    )
}
