import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';

import LibroContext from './librosContext';
import LibroReducer from './librosReducer';
import {
  LIBROS_CATEGORIA,
  LIBRO_ACTUAL
} from '../../types';

const LibroState = props => {
  
  const initialState = {
    libros : [],
    libroSelected: null
  }

  const [state, dispatch] = useReducer(LibroReducer, initialState)

  const getLibros = async (categoriaId) => {
    try {
      const respuesta = await clienteAxios.get('/api/libros/categoria/'+categoriaId);
      dispatch({
        type: LIBROS_CATEGORIA,
        payload: respuesta.data.libros
      })

    } catch (error) {
      console.log(error.response.data.msg);
    }
  }

  const nuevoLibro = async libro => {
    try {
      const respuesta = await clienteAxios.post('/api/libros', libro)
      getLibros(libro.categoria);

    } catch (error) {
      console.log(error.response.data.msg);
    }
  }

  const libroActual = (libro) => {
    dispatch({
      type: LIBRO_ACTUAL,
      payload: libro
    })
  }

  const editarLibro = async (libro, idLibro) => {
    try {
      const respuesta = await clienteAxios.put('/api/libros/'+idLibro, libro);
      getLibros(libro.categoria);

    } catch (error) {
      console.log(error.response.data.msg);
    }
  }

  const eliminarLibro = async (libro) => {
    try {
      const respuesta = await clienteAxios.delete('/api/libros/'+libro._id);
      getLibros(libro.categoria._id);

    } catch (error) {
      console.log(error.response.data.msg);
    }
  }

  const resetLibros = () => {
    dispatch({
      type: LIBROS_CATEGORIA,
      payload: []
    })
  }

  return(
    <LibroContext.Provider
      value={{
        libros: state.libros,
        libroSelected: state.libroSelected,
        getLibros,
        nuevoLibro,
        libroActual,
        editarLibro,
        eliminarLibro,
        resetLibros
      }}>
      {props.children}
    </LibroContext.Provider>
  )
}

export default LibroState;