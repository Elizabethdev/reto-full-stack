import React, {useContext, useEffect} from 'react';
import Header from '../layout/header';
import SideNav from '../layout/sideNavigation';
import AuthContext from '../../context/auth/authContext';

const Libros = () => {

  const authContext = useContext(AuthContext)
  const {usuarioAutenticado} = authContext;

  useEffect(() => {
    usuarioAutenticado();
  }, [])

  return(
    <React.Fragment>
      <Header/>
      <div className="h-screen bg-gray-200">
        <SideNav></SideNav>


      </div>
    </React.Fragment>
  );
}

export default Libros;