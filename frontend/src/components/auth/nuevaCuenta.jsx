import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/auth/authContext';

const NuevaCuenta = (props) => {
 //// alertcontext aqui va
  const alertaContext = useContext(AlertaContext)
  const {mostrarAlerta} = alertaContext;

  const authContext = useContext(AuthContext)
  const {registrarUsuario, autenticado, mensaje} = authContext;

  useEffect(() => {
    if(autenticado) {
      props.history.push('/books');
    }

    if(mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
  }, [mensaje, autenticado, props.history])

  const [usuario, guardarUsuario] = useState({
    nombre: '',
    email: '',
    password: ''
  });
    
  const {nombre, email, password} = usuario;

  const onChange = e => {
    guardarUsuario({
      ...usuario,
      [e.target.name] : e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault();
    console.log('submit form');
    // validaciones

    registrarUsuario({
      nombre,
      email, 
      password
    });
  }

  return(
    <div className="flex flex-row h-screen">
      <div className="w-full flex items-center bg-teal-400  bg-cover bg-center" style={{backgroundImage: `url("./assets/img/libros.jpg")`}} >
        <form onSubmit={onSubmit} className="w-2/3 bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 mx-auto max-w-lg">
          <div className="my-4">
            <h1 className="text-center text-teal-400 px-4 font-bold text-xl">Bienvenido</h1>
            <p className="text-xs text-gray-600">
              Crea una nueva cuenta muy fácil y comienza a inspirarte para encontrar tu siguiente libro favorito, o si ya tienes una cuenta <Link to={'/'} className="text-teal-400 underline">inicia sesión</Link>
            </p>
          </div>
          
          <div className="mb-6">
            <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">
              Nombre
            </label>
            <input 
              className="appearance-none bg-transparent  w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:border-teal-300 border-b" 
              type="text" 
              id="nombre" 
              name="nombre"
              value={nombre}
              onChange={onChange}
              placeholder="Nombre"/>
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
              onChange={onChange}
              placeholder="correo electrónico"/>
          </div> 
          <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input 
            className="appearance-none bg-transparent  w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:border-teal-300 border-b"
            type="password"
            id="password" 
            name="password"
            value={password}
            onChange={onChange}
            placeholder="******************" />
          {/* <p className="text-red-500 text-xs italic">Por favor ingrese una contraseña.</p> */}
          </div>
          <div className="flex items-center justify-between">
          <button className="w-full bg-teal-400 hover:bg-teal-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
            type="submit">
            Crear cuenta
          </button>
          </div>    
        </form>
      </div>
    </div>
  );
}

export default NuevaCuenta;