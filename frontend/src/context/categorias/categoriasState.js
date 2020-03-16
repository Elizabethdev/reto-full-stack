import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';

import CategoriaContext from './categoriasContext';
import CategoriaReducer from './categoriasReducer';
import {
  OBTENER_CATEGORIAS, 
  ACTUAL_CATEGORIA,
} from '../../types';

const CategoriaState = props => {
  const categorias = [
    {id:'123', nombre: 'todos los libros'},
    {id:'12', nombre: 'poesia'}
  ];
  const initialState = {
    categorias : [],
    categoria: null
  }

  const [state, dispatch] = useReducer(CategoriaReducer, initialState)

  const getCategorias = async () => {
    try {
      const respuesta = await clienteAxios.get('/api/categorias')
      dispatch({
        type: OBTENER_CATEGORIAS,
        payload: respuesta.data.categorias
      })

    } catch (error) {
      console.log(error.response.data.msg);
    }
  }

  const nuevaCategoria = async categoria => {
    try {
      const respuesta = await clienteAxios.post('/api/categorias', categoria)
      getCategorias();

    } catch (error) {
      console.log(error.response.data.msg);
    }
  }

  const getCategoriaActual = () => {
    try {
      // const respuesta = await clienteAxios.get('/api/categorias')
      dispatch({
        type: ACTUAL_CATEGORIA,
      })

    } catch (error) {
      console.log(error);
    }
  }

  return(
    <CategoriaContext.Provider
      value={{
        categorias: state.categorias,
        categoria: state.categoria,
        getCategorias,
        nuevaCategoria
      }}>
      {props.children}
    </CategoriaContext.Provider>
  )
}

export default CategoriaState;