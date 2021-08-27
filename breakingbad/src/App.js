import styled from "@emotion/styled";
import React, {useState} from "react";
import Frase from "./Components/Frase";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background-color: green;
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;

  &:hover {
    cursor: pointer;
    background-color: #0F3315;
  }
`;


function App() {
  const [frase, setfrase] = useState("")
 

  const consultarAPI = async () => {
    try {
        const pos = Math.floor(Math.random(15) * 10) +1 ;
        const url = `https://jsonplaceholder.typicode.com/todos/${pos}`;
        const response = await fetch(url);
        if (response.status > 200) {
          setfrase(`La posicion ${pos}: `+ response.status);
        } else {
          const result = await response.json();
          setfrase(result.title);
        }
        
    } catch (error) {
        return null;
    }
  }

  return (
    <Contenedor>

    <Frase frase={frase}/>
      
      <Boton
        onClick={ consultarAPI }
      >
        Obtener Frase
      </Boton>
    </Contenedor>
  );
}

export default App;
