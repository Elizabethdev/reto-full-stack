import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';

import AuthContext from './authContext';
import AuthReducer from './authReducer';
import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESSION
} from '../../types';

const AuthState = props => {
  
  const initialState = {
    token : localStorage.getItem('token'),
    autenticado: null,
    usuario: null,
    mensaje: null
  }

  const [state, dispatch] = useReducer(AuthReducer, initialState)

  const registrarUsuario = async datos => {
    try {
      const respuesta = await clienteAxios.post('/api/usuarios', datos)
      console.log(respuesta);
      dispatch({
        type: REGISTRO_EXITOSO,
        payload: respuesta.data
      })

      usuarioAutenticado();

    } catch (error) {
      console.log(error.data);
      const alerta = {
        msg: error.response.data.msg,
        categoria: 'alerta-error'
      }
      dispatch({
        type: REGISTRO_ERROR,
        payload: alerta
      })
    }
  }

  const usuarioAutenticado = async () => {
    const token = localStorage.getItem('token');
    if(token) {
      tokenAuth(token);
    }
    //aqui se puede obtener datos del usuario
  }

  const iniciarSesion = async datos => {
    try {
      const respuesta = await clienteAxios.post('/api/auth', datos)
      console.log(respuesta);
      dispatch({
        type: LOGIN_EXITOSO,
        payload: respuesta.data
      })

      usuarioAutenticado();
      
    } catch (error) {
      console.log(error.response.data.msg);
      const alerta = {
        msg: error.response.data.msg,
        categoria: 'alerta-error'
      }
      dispatch({
        type: LOGIN_ERROR,
        payload: alerta
      })
    }
  }

  return(
    <AuthContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
        registrarUsuario,
        iniciarSesion
      }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState;