import styled from "@emotion/styled";


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
  const consultarAPI = () => {
    console.log("Consultando")
  }

  return (
    <Contenedor>
      <Boton
        onClick={ consultarAPI }
      >
        Obtener Frase
      </Boton>
    </Contenedor>
  );
}

export default App;
