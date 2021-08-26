import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';

export default function Formulario({setGasto, setCreargasto}) {
    const [nombre, setNombre] = useState("");
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    const addGasto = e => {
        e.preventDefault();

        // Validar
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === '' ) {
            setError(true);
            return
        }

        setError(false);

        // Construir el gastos
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        // console.log(gasto)


        // Pasar al principal
        setGasto(gasto)
        setCreargasto(true)

        // reset el formulario
        setNombre('');
        setCantidad(0);
    }

    return (
        <form
        
            onSubmit={addGasto}
        >
            <h2>Agrega tus gastos aqui</h2>
            
            { error ? <Error mensaje="Ambos campos son obligatorios"/> : null }

            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                        type="text"
                        className="u-full-width"
                        placeholder="Ej. Transporte"
                        value={nombre}
                        onChange={ e => setNombre(e.target.value)}
                />
            </div>


            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                        type="number"
                        className="u-full-width"
                        placeholder="Ej. 300"
                        value={cantidad}
                        onChange={ e => setCantidad( parseInt( e.target.value))}
                />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
    )
}
