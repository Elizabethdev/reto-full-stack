import {OBTENER_CATEGORIAS, ACTUAL_CATEGORIA} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case OBTENER_CATEGORIAS:
      return{
        ...state,
        categorias: action.payload
      } 
    case ACTUAL_CATEGORIA:
      return{
        ...state,
        categoria: state.categorias.filter(categoria => categoria._id === action.payload ) 
      }   
    default:
      return state;
  }
}