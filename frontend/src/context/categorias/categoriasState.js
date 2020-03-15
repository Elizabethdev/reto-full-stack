import React, { useReducer } from 'react';

import categoriaContext from './categoriasContext';
import categoriaReducer from './categoriasReducer';
import {OBTENER_CATEGORIAS} from '../../types';

const CategoriaState = props => {
  const categorias = [
    {id:'123', nombre: 'todos los libros'},
    {id:'12', nombre: 'poesia'}
  ];
  const initialState = {
    categorias : []
  }

  const [state, dispatch] = useReducer(categoriaReducer, initialState)

  const getCategorias = () => {
    dispatch({
      type: OBTENER_CATEGORIAS,
      payload: categorias
    })
  }
  return(
    <categoriaContext.Provider
      value={{
        categorias: state.categorias,
        getCategorias
      }}>
      {props.children}
    </categoriaContext.Provider>
  )
}

export default CategoriaState;