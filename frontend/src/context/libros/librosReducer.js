import {LIBROS_CATEGORIA, LIBRO_ACTUAL} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case LIBROS_CATEGORIA:
      return{
        ...state,
        libros: action.payload
      }
    case LIBRO_ACTUAL: 
      return{
        ...state,
        libroSelected: action.payload 
      }   
    default:
      return state;
  }
}