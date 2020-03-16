import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';

import LibroContext from './librosContext';
import LibroReducer from './librosReducer';
import {
  OBTENER_CATEGORIAS,
  LIBROS_CATEGORIA 
} from '../../types';

const LibroState = props => {
  

  const initialState = {
    libros : []
  }

  const [state, dispatch] = useReducer(LibroReducer, initialState)

  const getLibros = async (categoriaId) => {
    try {
      
      const respuesta = await clienteAxios.get('/api/libros/categoria/'+categoriaId+'');
      dispatch({
        type: OBTENER_CATEGORIAS,
        payload: respuesta.data.libros
      })

    } catch (error) {
      console.log(error.response.data.msg);
    }
  }

  const nuevoLibro = async libro => {
    try {
      const respuesta = await clienteAxios.post('/api/libros', libro)
      getLibros();

    } catch (error) {
      console.log(error.response.data.msg);
    }
  }

  return(
    <LibroContext.Provider
      value={{
        libros: state.libros,
        getLibros,
        nuevoLibro
      }}>
      {props.children}
    </LibroContext.Provider>
  )
}

export default LibroState;