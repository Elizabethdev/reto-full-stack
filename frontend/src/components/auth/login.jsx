import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/auth/authContext';

import Alert from '../ui/alert';

const Login = (props) => {
  const alertaContext = useContext(AlertaContext)
  const {mostrarAlerta, alerta} = alertaContext;

  const authContext = useContext(AuthContext)
  const {iniciarSesion, autenticado, mensaje} = authContext;

  useEffect(() => {
    if(autenticado) {
      props.history.push('/books');
    }

    if(mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
  }, [mensaje, autenticado, props.history])

  const [usuario, guardarUsuario] = useState({
    email: '',
    password: ''
  });

  const {email, password} = usuario;

  const onChange = e => {
    guardarUsuario({
      ...usuario,
      [e.target.name] : e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault();
    if(email.trim() === '' || password.trim() === '') {
      mostrarAlerta('Todos los campos son obligatorios', 'alert-error');
      return;
    }
    iniciarSesion({
      email, 
      password
    });
  }

  return(
    <div className="flex flex-row h-screen">
      { alerta ? (<Alert alert={alerta}></Alert>) : null}
      <div className="w-full flex items-center bg-teal-400  bg-cover bg-center" style={{backgroundImage: `url("./assets/img/libros.jpg")`}} >
        <form onSubmit={onSubmit} className="w-2/3 bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 mx-auto max-w-lg">
          <div className="my-4">
            <h1 className="text-center text-teal-400 px-4 font-bold text-xl">Iniciar sesión</h1>
            <p className="text-center text-gray-600 mb-6 px-4 text-sm">Cree una <Link to={'/newuser'} className="text-blue-700 hover:text-teal-400 underline hover:no-underline">nueva cuenta</Link> o inicie sesión con su correo y contraseña</p>
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Correo electrónico
            </label>
            <input 
              className="appearance-none bg-transparent  w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:border-teal-300 border-b" 
              type="text"
              id="email" 
              name="email"
              value={email}
              placeholder="correo electrónico"
              onChange={onChange} >
            </input>
          </div> 
          <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Contraseña
          </label>
          <input  
            className="appearance-none bg-transparent  w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:border-teal-300 border-b" 
            type="password" 
            id="password" 
            name="password"
            value={password}
            placeholder="******************" 
            onChange={onChange} />
          {/* <p className="text-red-500 text-xs italic">Por favor ingrese una contraseña.</p> */}
          </div>
          
          <div className="flex items-center justify-between">
            <button type="submit" className="w-full bg-teal-400 hover:bg-teal-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Acceder
            </button>
          </div>    
        </form>
      </div>
		</div>
  );
}

export default Login;