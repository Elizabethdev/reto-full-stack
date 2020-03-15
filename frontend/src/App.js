import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Login from './components/auth/login';
import NuevaCuenta from "./components/auth/nuevaCuenta";
import './css/tailwind.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/crearcuenta" component={NuevaCuenta} />
          {/* <Route exact path="/books" component={Books} />  */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
