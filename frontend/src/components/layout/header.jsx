import React, {useContext} from 'react';
import AuthContext from '../../context/auth/authContext';

const HeaderImage = (props) => {

  const authContext = useContext(AuthContext)
  const {cerrarSession} = authContext;

  return(
    <div className="w-full bg-grey-200 bg-cover bg-center flex items-center shadow-lg relative" style={{backgroundImage: `url(${props.urlCover})`, height: '200px'}} >
      <div onClick={()=> cerrarSession()} className="absolute text-white bg-gray-100 pill rounded-full  py-2 px-4 text-red-400 text-sm lg:text-xs " style={{top:'15px', right:'15px'}}>
        Cerrar sesión
      </div>
      <h1 className="mx-auto text-white text-5xl">{props.title}</h1>
    </div>        
  );
}

HeaderImage.defaultProps = {
  title: 'Catálogo de libros',
  urlCover: './assets/img/headerimg.jpg',
};

export default HeaderImage;