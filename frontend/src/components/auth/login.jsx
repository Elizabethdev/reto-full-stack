import React from 'react';

const Login = () => {
  return(
    <div className="flex flex-row h-screen">
      <div className="w-full flex items-center bg-teal-400  bg-cover bg-center" style={{backgroundImage: `url("./assets/img/books.jpg")`}} >
        <form className="w-2/3 bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 mx-auto max-w-lg">
          <div className="my-4">
            <h1 className="text-center text-teal-400 px-4 font-bold text-xl">Bienvenido</h1>
            <p className="text-center text-gray-600 mb-6 px-4 text-sm">Cree una <a className="text-blue-700 hover:text-teal-400 underline hover:no-underline">nueva cuenta</a> o inicie sesión con su correo y contraseña</p>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Correo electrónico
            </label>
            <input className="appearance-none bg-transparent  w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:border-teal-300 border-b" type="text" placeholder="correo electrónico"></input>
          </div> 
          <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input className="appearance-none bg-transparent  w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:border-teal-300 border-b" type="password" placeholder="******************" />
          {/* <p className="text-red-500 text-xs italic">Por favor ingrese una contraseña.</p> */}
          </div>
          <div className="flex items-center justify-between">
          <button className="w-full bg-teal-400 hover:bg-teal-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Acceder
          </button>
          </div>    
        </form>
      </div>
		</div>
  );
}

export default Login;