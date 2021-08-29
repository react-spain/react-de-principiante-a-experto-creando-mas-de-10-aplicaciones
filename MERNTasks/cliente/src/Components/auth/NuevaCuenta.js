import React, { useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';

export default function NuevaCuenta() {

    // Extraer los valores del context
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;
    

    // State para iniciar sesión
    const [usuario, setUsuario] = useState({
        nombre: '',
        confirmar: '',
        email: '',
        password: ''
    })


    // extraer de usuario
    const { nombre, email, password, confirmar} = usuario;




    const onChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    // Cuando inicias sesión

    const onSubmit = e => {
        e.preventDefault();

        // Validar que no tenga campos vacios
        if( nombre.trim()  === '' || 
            email.trim()  === '' || 
            password.trim()  === '' ||
            confirmar.trim()  === '') 
            {
            mostrarAlerta('Todos los campos son obligatorios', 'alerta error');
            return;
        }

        // Password minimo de 6 caracteres
        if(password.length < 6 ) {
            mostrarAlerta('La contraseña tiene que ser de al menos 6 caracteres', 'alerta error')
            return;
        }


        // los dos password son iguales
        if(password != confirmar) {
            mostrarAlerta('La contraseña no son iguales', 'alerta error')
            return
        }

        // Pasalo al action


    }

    return (
        <div className="form-usuario">
            

            <div className="contenedor-form sombra-dark">
                <h1>Obtener una Cuenta</h1>

                { alerta ? (<div className={`alerta padding-10 ${alerta.categoria}`}>
                {alerta.msg}
            </div>)   : null }

                <form
                
                    onSubmit={onSubmit}
                >

                <div className="campo-form">
                        <label htmlFor="email">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu nombre"
                            onChange={onChange}
                            value={nombre}
                        />
                    </div>


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
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite tu password"
                            onChange={onChange}
                            value={confirmar}
                        />
                    </div>

                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Registrar"
                        />
                    </div>

                </form>

                <Link to={'/'} className="enlace-cuenta">
                    Login
                </Link>
            </div>
        </div>
    )
}
