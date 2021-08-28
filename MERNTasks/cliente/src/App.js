import { BrowserRouter as Router, Switch, Route }  from 'react-router-dom';
import Login from './Components/auth/Login';
import NuevaCuenta from './Components/auth/NuevaCuenta';
import Proyectos from './Components/proyectos/Proyectos';

import ProyectoState from './context/proyectos/proyectoState';
import TareaState from './context/tareas/tereaState';

function App() {
  return (
    <ProyectoState>
      <TareaState>
      <Router>
          <Switch>
              <Route exact path="/" component={Login}/>
              <Route exact path="/nueva-cuenta" component={NuevaCuenta}/>
              <Route exact path="/proyectos" component={Proyectos}/>
          </Switch>
      </Router>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
