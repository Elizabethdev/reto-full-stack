import React, { useReducer } from 'react';

import CategoriaContext from './categoriasContext';
import CategoriaReducer from './categoriasReducer';
import {OBTENER_CATEGORIAS} from '../../types';

const CategoriaState = props => {
  const categorias = [
    {id:'123', nombre: 'todos los libros'},
    {id:'12', nombre: 'poesia'}
  ];
  const initialState = {
    categorias : []
  }

  const [state, dispatch] = useReducer(CategoriaReducer, initialState)

  const getCategorias = () => {
    dispatch({
      type: OBTENER_CATEGORIAS,
      payload: categorias
    })
  }
  return(
    <CategoriaContext.Provider
      value={{
        categorias: state.categorias,
        getCategorias
      }}>
      {props.children}
    </CategoriaContext.Provider>
  )
}

export default CategoriaState;