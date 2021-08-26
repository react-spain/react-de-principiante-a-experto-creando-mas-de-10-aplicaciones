import React from 'react';
import styled from '@emotion/styled';
import { primeraMayuscula } from '../helpers';

export default function Resumen({ datos }) {

    const ContenedorResumen = styled.div`
        padding: 1rem;
        text-align: center;
        background-color: #00838F;
        margin-top: 1rem;
        color: white;
    `;

    const { marca, year, plan } = datos;

    if (marca === '' || year === '' || plan === '') return null;

    return (

        <ContenedorResumen>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: {primeraMayuscula(marca)}</li>
                <li>Año: {year}</li>
                <li>Plan: {primeraMayuscula(plan)}</li>
            </ul>
        </ContenedorResumen>
    )
}
