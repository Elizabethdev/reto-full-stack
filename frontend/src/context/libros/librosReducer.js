import {OBTENER_CATEGORIAS} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case OBTENER_CATEGORIAS:
      return{
        ...state,
        libros: action.payload
      }    
    default:
      return state;
  }
}