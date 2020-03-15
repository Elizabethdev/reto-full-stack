import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Login from './components/auth/login';
import CreateUser from "./components/auth/nuevaCuenta";
import Books from "./components/libros/books";
import './css/tailwind.css';

import CategoriaState from './context/categorias/categoriasState';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/auth/authState';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)
 console.log(process.env.REACT_APP_BACKEND_URL)
function App() {
  return (
    <div className="App">
      <div className="flex ">
        <div className="w-full">
          <div className="bg-gray-200">
            <CategoriaState>
              <AlertaState>
                <AuthState>
                    <Router>
                      <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/newuser" component={CreateUser} />
                        <Route exact path="/Books" component={Books} />
                      </Switch>
                    </Router>
                </AuthState>
              </AlertaState>
            </CategoriaState>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
