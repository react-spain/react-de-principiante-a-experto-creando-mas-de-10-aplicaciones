import styled from '@emotion/styled'
import React from 'react'
import {  TransitionGroup, CSSTransition } from 'react-transition-group';

export default function Resultado({cotizacion}) {

    const Mensaje = styled.p`
        background-color: rgb(127, 224, 237);
        margin-top: 2rem;
        padding: 1rem;
        text-align: center;
    `;

    const ResultadoCotizacion = styled.div`
        background-color: rgb(127, 224, 237);
        text-align: center;
        padding: .5rem;
        border: 1px solid #26c6da;
        margin-top: 1rem;
        position: relative;
    `;

    const TextoCotizacion = styled.p`
        color: #00838F;
        padding: 1rem;
        text-transform: uppercase;
        font-weight: bold;
        margin: 0;
    `;
    
    return ( (cotizacion === 0) ? <Mensaje>Elige Marca, año y tipo de seguro</Mensaje> 
    :   (
        <ResultadoCotizacion>
           <TransitionGroup
                component="p"
                className="resultado"
           >
               <CSSTransition
                    classNames="resultado"
                    key={cotizacion}
                    timeout={{ enter: 500, exit: 500 }}
               >
                    <TextoCotizacion>Resultado: $ {cotizacion}</TextoCotizacion>
               </CSSTransition>
           </TransitionGroup>
        </ResultadoCotizacion>
        )
        )
}
