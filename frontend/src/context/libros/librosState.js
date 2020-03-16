import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';

import LibroContext from './librosContext';
import LibroReducer from './librosReducer';
import {
  OBTENER_CATEGORIAS, 
} from '../../types';

const LibroState = props => {
  const categoria = {
    "categoria": "5e6ab8b4cdf0a612bcd3fb15"
  };
  const initialState = {
    libros : []
  }

  const [state, dispatch] = useReducer(LibroReducer, initialState)

  const getLibros = async () => {
    try {
      const respuesta = await clienteAxios.get('/api/libros/categoria')
      dispatch({
        type: OBTENER_CATEGORIAS,
        payload: respuesta.data.libros
      })

    } catch (error) {
      console.log(error.response.data.msg);
    }
  }

  const nuevoLibro = async categoria => {
    try {
      const respuesta = await clienteAxios.post('/api/categorias', categoria)
      getLibros();

    } catch (error) {
      console.log(error.response.data.msg);
    }
  }

  return(
    <LibroContext.Provider
      value={{
        categorias: state.categorias,
        getLibros,
        nuevaLibro
      }}>
      {props.children}
    </LibroContext.Provider>
  )
}

export default CategoriaState;