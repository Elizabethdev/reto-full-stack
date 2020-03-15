import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESSION
} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case REGISTRO_EXITOSO:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        autenticado: true, 
        mensaje: null 
      }
    case REGISTRO_ERROR:
      return {
        ...state,
        autenticado: null, 
        mensaje: action.payload 
      }
    case OBTENER_USUARIO:
      return{
        ...state,
        categorias: action.payload
      }
    case LOGIN_EXITOSO:
    return{
      ...state,
      categorias: action.payload
    }
    case LOGIN_ERROR:
      return{
        ...state,
        categorias: action.payload
      }  
    case CERRAR_SESSION:
      return{
        ...state,
        categorias: action.payload
      }       
    default:
      return state;
  }
}