import React from 'react'
import styled from "@emotion/styled";

const ContenedorHEader = styled.header`
    background-color: #26c6da;
    padding: 10px;
    font-weight: bold;
    color: #fff;
`;

const TextoHeader = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`;


export default function Header({titulo}) {
    return (
        <ContenedorHEader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHEader>
    )
}
