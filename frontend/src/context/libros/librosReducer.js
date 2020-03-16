import {LIBROS_CATEGORIA} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case LIBROS_CATEGORIA:
      return{
        ...state,
        libros: action.payload
      }    
    default:
      return state;
  }
}